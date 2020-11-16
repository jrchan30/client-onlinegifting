<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header border-0">
          <h3 class="mb-0">Products table</h3>
        </div>
        <!-- Tabs -->
        <div class="nav-wrapper px-2 ml-3">
          <ul
            id="tabs-icons-text"
            class="nav nav-pills flex-column flex-md-row"
            role="tablist"
          >
            <li class="nav-item">
              <a
                id="tabs-icons-text-1-tab"
                class="nav-link mb-sm-3 mb-md-0 active"
                data-toggle="tab"
                href="#tabs-icons-text-1"
                role="tab"
                aria-controls="tabs-icons-text-1"
                aria-selected="true"
                @click="GET_PRODUCTS"
                ><i class="fas fa-boxes mr-2"></i>Products</a
              >
            </li>
            <li class="nav-item">
              <a
                id="tabs-icons-text-2-tab"
                class="nav-link mb-sm-3 mb-md-0"
                data-toggle="tab"
                href="#tabs-icons-text-2"
                role="tab"
                aria-controls="tabs-icons-text-2"
                aria-selected="false"
                @click="GET_HIDDEN"
                ><i class="fas fa-trash-alt mr-2"></i>Hidden Products</a
              >
            </li>
          </ul>
        </div>
        <!-- End Tabs -->

        <div
          class="table-responsive"
          data-toggle="list"
          data-list-values='["id", "name", "price", "stock", "weight"]'
        >
          <table class="table align-items-center table-flush">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="id">Id</th>
                <th scope="col" class="sort" data-sort="name">Product Name</th>
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
              <tr v-for="product in PRODUCTS.data" :key="product.id">
                <td class="id">{{ product.id }}</td>
                <th class="name">
                  <span class="text-capitalize">{{ product.name }}</span>
                </th>
                <td class="price">{{ product.price }} (IDR)</td>
                <td>
                  <span class="badge badge-dot mr-4">
                    <template v-if="product.stock > 0 && !product.deleted_at">
                      <i class="bg-success"></i>
                      <span class="status"
                        >Available ({{ product.stock }})</span
                      >
                    </template>
                    <template v-else-if="product.stock == 0">
                      <i class="bg-gray"></i>
                      <span class="status text-gray">Out of Stock</span>
                    </template>
                    <template v-else>
                      <i class="bg-red"></i>
                      <span class="status text-danger"
                        >Deleted ({{ product.stock }})</span
                      >
                    </template>
                  </span>
                </td>
                <td>
                  <img
                    alt="Image placeholder"
                    class="item-image"
                    :src="product.main_image"
                    width="80px"
                    @click="expandImage(`${product.main_image}`)"
                  />
                </td>
                <td class="rating">
                  <span v-if="product.avg_rating == null">Not rated</span
                  >{{ product.avg_rating }}
                </td>
                <td class="likes">
                  {{ product.likes_count }}
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
                      <button
                        class="dropdown-item"
                        @click="toggleEdit(product)"
                      >
                        Edit
                      </button>
                      <button class="dropdown-item" @click="hideProduct">
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
              Edit Product ({{ currentProductName }})
              <button
                class="btn p-0 float-right fas fa-times"
                @click="closeForm"
              ></button>
            </h3>
            <form @submit.prevent="submitEdit" @keyup.enter.prevent>
              <div class="card-body">
                <div class="row">
                  <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="col-3"
                  >
                    <picture-input
                      ref="pictureInput"
                      width="130"
                      height="130"
                      size="10"
                      margin="16"
                      button-class="btn btn-sm"
                      radius="5"
                      :removable="true"
                      :prefill="image.url"
                      :custom-strings="{
                        upload: '<h1>Bummer!</h1>',
                        drag: 'Drag an image',
                      }"
                      @change="onChange(index, image.id)"
                      @remove="onRemove(index, image.id)"
                    >
                    </picture-input>
                  </div>
                  <div class="col-3 text-center">
                    <button
                      type="button"
                      class="btn my-auto bg-transparent"
                      @click="addImage"
                    >
                      <i class="far fa-plus-square fa-4x"></i>
                    </button>
                  </div>
                </div>

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
                  <div class="col-md-12 mb-4">
                    <v-select
                      v-model="categories"
                      multiple
                      label="name"
                      required
                      :reduce="(name) => name.id"
                      :options="CATEGORIES"
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-info btn-lg btn-block"
                    @click="submitEdit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </template>
          <template v-else>
            <div>
              <small class="mb-0 text-gray">
                This is the edit product section, please select which product to
                edit from the dropdown on each product's record
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
  data() {
    return {
      isEdit: false,
      currentProductName: '',
      product_form_id: '',
      fields: {
        name: {
          class: 'col-md-6',
          placeholder: 'Product name',
          icon: 'fas fa-signature',
          appendable: false,
          value: '',
        },
        price: {
          placeholder: 'Price',
          class: 'col-md-6',
          icon: 'fas fa-credit-card',
          appendable: true,
          appendable_value: 'IDR',
          value: 0,
        },
        weight: {
          class: 'col-md-6',
          placeholder: 'Weight',
          icon: 'fas fa-weight-hanging',
          appendable: true,
          appendable_value: 'gr',
          value: 100,
        },
        stock: {
          class: 'col-md-6',
          placeholder: 'Stock',
          icon: 'fas fa-cubes',
          appendable: false,
          value: 0,
        },
        description: {
          class: 'col-md-12',
          placeholder: 'Description',
          icon: 'fas fa-align-left',
          appendable: false,
          value: '',
        },
      },
      categories: [],
      images: [],
      new_images: {},
      delete_image: [],
    }
  },
  computed: {
    ...mapGetters({
      PRODUCTS: 'products/PRODUCTS',
      CATEGORIES: 'categories/CATEGORIES',
    }),
  },
  async mounted() {
    await this.GET_PRODUCTS()
    await this.GET_CATEGORIES()
  },
  methods: {
    ...mapActions({
      GET_PRODUCTS: 'products/GET_PRODUCTS',
      GET_CATEGORIES: 'categories/GET_CATEGORIES',
      GET_HIDDEN: 'products/GET_HIDDEN',
    }),
    onChange(idx, deleteId) {
      const file = this.$refs.pictureInput[idx].file
      if (file) {
        this.new_images[idx] = file

        const checkRemove = this.delete_image.includes(deleteId)
        if (!checkRemove && deleteId) {
          this.delete_image.push(deleteId)
        }
      } else {
        //
      }
    },
    onRemove(idx, deleteId) {
      const newImagesKey = Object.keys(this.new_images)
      const checkRemove = newImagesKey.indexOf(`${idx}`)
      if (checkRemove > -1) {
        delete this.new_images[idx]
      } else {
        const checkRemove = this.delete_image.includes(deleteId)

        if (!checkRemove && deleteId) {
          this.delete_image.push(deleteId)
        }
      }
    },
    addImage() {
      this.images.push({
        id: null,
        path: '',
        url: '',
      })
    },
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
    toggleEdit(product) {
      this.closeForm()
      const productCopy = JSON.parse(JSON.stringify(product))
      this.isEdit = true
      this.product_form_id = productCopy.id
      this.fields.name.value = productCopy.name
      this.fields.price.value = productCopy.price
      this.fields.weight.value = productCopy.weight
      this.fields.stock.value = productCopy.stock
      this.fields.description.value = productCopy.description
      this.images = productCopy.images
      productCopy.categories.map((x) => this.categories.push(x.id))
      this.currentProductName = productCopy.name
      document.getElementById('edit').scrollIntoView()
    },
    closeForm() {
      this.isEdit = false
      Object.assign(this.$data, this.$options.data())
    },
    hideProduct() {
      this.$swal({
        title: 'Are you sure?',
        text: 'Product will be hidden from customers',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, hide it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal('Hid!', 'Product is now hidden.', 'success')
        }
      })
    },
    submitEdit() {
      this.$swal({
        title: 'Are you sure?',
        text: 'Please recheck before saving',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const form = {
            name: this.fields.name.value,
            description: this.fields.description.value,
            price: this.fields.price.value,
            stock: this.fields.stock.value,
            weight: this.fields.weight.value,
          }
          const formData = new FormData()
          for (const x in form) {
            formData.append(x, form[x])
          }

          for (const y in this.categories) {
            formData.append('categories[]', this.categories[y])
          }

          if (Object.keys(this.new_images).length > 0) {
            for (const a in this.new_images) {
              formData.append('new_images[]', this.new_images[a])
            }
          }
          if (this.delete_image.length > 0) {
            for (const b in this.delete_image) {
              formData.append('delete_image[]', this.delete_image[b])
            }
          }

          formData.append('_method', 'patch')
          try {
            await this.$axios.$post(
              `/products/${this.product_form_id}`,
              formData
            )
            this.$swal('Saved!', 'Product has been edited.', 'success')
            this.closeForm()
          } catch (e) {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          }
        }
      })
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
