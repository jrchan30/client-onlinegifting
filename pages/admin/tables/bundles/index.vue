<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header border-0">
          <h3 class="mb-0">Bundles table</h3>
        </div>
        <div
          class="table-responsive"
          data-toggle="list"
          data-list-values='["id", "name", "price", "stock", "weight"]'
        >
          <table class="table align-items-center table-flush">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="id">Id</th>
                <th scope="col" class="sort" data-sort="name">Bundle Name</th>
                <th scope="col" class="sort" data-sort="price">Price</th>
                <th scope="col" class="sort" data-sort="status">
                  Status (Stock)
                </th>
                <th scope="col">Image</th>
                <th scope="col" class="sort" data-sort="rating">Rating</th>
                <th scope="col" class="sort" data-sort="likes">Likes</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="list">
              <tr v-for="bundle in BUNDLES.data" :key="bundle.id">
                <td class="id">{{ bundle.id }}</td>
                <th class="name">
                  <span class="text-capitalize">{{ bundle.name }}</span>
                </th>
                <td class="price">{{ bundle.price }} (IDR)</td>
                <td>
                  <span class="badge badge-dot mr-4">
                    <template v-if="bundle.stock > 0">
                      <i class="bg-success"></i>
                      <span class="status">Available ({{ bundle.stock }})</span>
                    </template>
                    <template v-else-if="bundle.stock == 0">
                      <i class="bg-gray"></i>
                      <span class="status text-gray">Out of Stock</span>
                    </template>
                    <template v-else>
                      <i class="bg-red"></i>
                      <span class="status text-danger">Deleted</span>
                    </template>
                  </span>
                </td>
                <td>
                  <img
                    alt="Image placeholder"
                    class="item-image"
                    :src="bundle.main_image"
                    width="80px"
                    @click="expandImage(`${bundle.main_image}`)"
                  />
                </td>
                <td class="rating">
                  <span v-if="bundle.avg_rating == null">Not rated</span
                  >{{ bundle.avg_rating }}
                </td>
                <td class="likes">
                  {{ bundle.likes_count }}
                </td>
                <td class="text-right">
                  <div class="dropdown">
                    <a
                      class="btn btn-sm btn-icon-only text-light"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                    >
                      <button class="dropdown-item" @click="toggleEdit(bundle)">
                        Edit
                      </button>
                      <button class="dropdown-item" @click="hideBundle">
                        Hide
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer py-4">
          <nav aria-label="...">
            <ul class="pagination justify-content-end mb-0">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  <i class="fas fa-angle-left"></i>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#"
                  >2 <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <i class="fas fa-angle-right"></i>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div id="edit" class="card">
        <div class="card-header border-0">
          <template v-if="isEdit">
            <h3 class="mb-0 text-capitalize">
              Edit bundle ({{ currentbundleName }})
              <button
                class="btn p-0 float-right fas fa-times"
                @click="closeForm"
              ></button>
            </h3>
            <div class="card-body">
              <div class="row">
                <!--Main Fields Loop -->
                <div
                  v-for="(field, index) in fields"
                  :key="index"
                  :class="field.class"
                >
                  <div class="form-group">
                    <div class="input-group input-group-merge">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i :class="field.icon"></i
                        ></span>
                      </div>
                      <input
                        v-model="field.value"
                        class="form-control"
                        :placeholder="field.placeholder"
                        type="text"
                      />
                      <template v-if="field.appendable">
                        <div class="input-group-append">
                          <span class="input-group-text"
                            ><small class="font-weight-bold">{{
                              field.appendable_value
                            }}</small></span
                          >
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
                <!--End Main Fields Loop -->
                <button
                  type="button"
                  class="btn btn-info btn-lg btn-block"
                  @click="submitEdit"
                >
                  Edit
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <div>
              <small class="mb-0 text-gray">
                This is the edit bundle section, please select which bundle to
                edit from the dropdown on each bundle's record
              </small>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
  async fetch() {
    await this.GET_BUNDLES()
  },
  data() {
    return {
      isEdit: false,
      currentBundleName: '',
      fields: {
        bundle_name: {
          class: 'col-md-6',
          placeholder: 'Bundle name',
          icon: 'fas fa-signature',
          appendable: false,
          value: '',
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      BUNDLES: 'bundles/BUNDLES',
    }),
  },
  methods: {
    ...mapActions({
      GET_BUNDLES: 'bundles/GET_BUNDLES',
    }),
    expandImage(url) {
      this.$swal({
        showCloseButton: true,
        imageUrl: url,
        width: 1000,
        showConfirmButton: false,
        imageWidth: '100%',
        imageAlt: 'Image Not Available',
      })
    },
    toggleEdit(bundle) {
      this.isEdit = true
      this.fields.bundle_name.value = bundle.name
      this.currentbundleName = bundle.name
      document.getElementById('edit').scrollIntoView()
    },
    closeForm() {
      this.isEdit = false
      Object.assign(this.$data, this.$options.data())
    },
    hideBundle() {
      this.$swal({
        title: 'Are you sure?',
        text: 'Bundle will be hidden from customers',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, hide it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal('Hid!', 'Bundle is hidden.', 'success')
        }
      })
    },
    submitEdit() {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      this.closeForm()
      console.log('submit edit button clicked')
    },
  },
}
</script>

<style scoped>
.item-image {
  border-radius: 10px;
  /* max-width: 100%; */
  cursor: pointer;
}

.item-image-bottom {
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.4s;
}

.item-image-bottom:hover {
  transform: scale(1.1);
}
</style>
