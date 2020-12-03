<template>
  <div v-if="items" class="container bg-white rounded p-3">
    <h4 class="font-weight-bold custom-color">Liked Products</h4>
    <p class="custom-color">
      This is our latest products, click on product's card to see more details
      about the product
    </p>
    <vs-table v-if="items">
      <template #header>
        <vs-input
          v-model="search"
          border
          color="#336699"
          placeholder="Search"
        />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th sort @click="items = $vs.sortData($event, items, 'name')">
            Name
          </vs-th>
          <vs-th sort @click="items = $vs.sortData($event, items, 'price')">
            Price (IDR)
          </vs-th>
          <vs-th sort @click="items = $vs.sortData($event, items, 'stock')">
            Stock
          </vs-th>
          <vs-th sort @click="items = $vs.sortData($event, items, 'weight')">
            Weight
          </vs-th>
        </vs-tr>
      </template>

      <template #tbody>
        <vs-tr
          v-for="(tr, i) in $vs.getPage(
            $vs.getSearch(items, search),
            page,
            max
          )"
          :key="i"
        >
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td> {{ tr.price }} </vs-td>
          <vs-td>
            {{ tr.stock }}
          </vs-td>
          <vs-td>
            {{ tr.weight }}
          </vs-td>

          <template #expand>
            <div class="float-left">
              <div class="d-flex">
                <vs-avatar class="mb-auto" cursor>
                  <img
                    :src="tr.images[0].url"
                    alt=""
                    class="img-ratio"
                    @click="expandImage(tr.images[0].url)"
                  />
                </vs-avatar>
                <span class="ml-2 my-auto">
                  {{ tr.name }}
                </span>
              </div>
            </div>
            <div class="float-right">
              <div class="d-flex">
                <vs-button flat icon @click="goTo(tr.id)">
                  See Details
                </vs-button>
                <vs-button border danger @click="unlike(tr.id)">
                  Unlike
                </vs-button>
              </div>
            </div>
          </template>
        </vs-tr>
      </template>
    </vs-table>
    <!-- <div>{{ items }}</div> -->
  </div>
</template>

<script>
export default {
  layout: 'default',
  middleware: 'auth-user',
  // asyncData({ store }) {
  //   const items = store.loggedInUser
  //   return items
  // },
  // async fetch() {
  //   await this.$auth.fetchUser()
  // },
  data() {
    return {
      edit: null,
      search: '',
      allCheck: false,
      page: 1,
      max: 100,
      isLoading: false,
      items: this.$auth.user.liked_products,
    }
  },
  methods: {
    expandImage(url) {
      this.$swal({
        showCloseButton: true,
        imageUrl: url,
        // width: 100%,
        showConfirmButton: false,
        imageWidth: '100%',
        imageAlt: 'Image Not Available',
      })
    },
    goTo(id) {
      this.$router.push(`/products/${id}`)
    },
    unlike(id) {
      this.isLoading = true
      try {
        console.log('test')
        this.$axios.$delete(`/likes/${id}`)
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<style scoped>
.img-ratio {
  cursor: pointer;
  object-fit: cover;
  height: 50px;
  width: 50px;
}
</style>
