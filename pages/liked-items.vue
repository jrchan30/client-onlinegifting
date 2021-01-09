<template>
  <div class="minheight">
    <div v-if="$auth.user">
      <div
        class="container bg-white rounded p-3"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h4 class="font-weight-bold custom-color">Liked Products</h4>
        <p class="custom-color">
          This is your latest liked products, click on each record to see more
          details about the product
        </p>
        <div data-aos="fade" data-aos-duration="1500">
          <vs-table v-if="Object.keys(likedItemsData).length > 0">
            <template #header>
              <vs-input
                v-model="search_product"
                aria-placeholder="search liked items"
                aria-label="searchbar liked items"
                border
                color="#336699"
                placeholder="Search"
              />
            </template>
            <template #thead>
              <vs-tr>
                <vs-th
                  sort
                  @click="
                    likedItemsData.liked_products = $vs.sortData(
                      $event,
                      likedItemsData.liked_products,
                      'name'
                    )
                  "
                >
                  Name
                </vs-th>
                <vs-th
                  sort
                  @click="
                    likedItemsData.liked_products = $vs.sortData(
                      $event,
                      likedItemsData.liked_products,
                      'price'
                    )
                  "
                >
                  Price (IDR)
                </vs-th>
                <vs-th
                  sort
                  @click="
                    likedItemsData.liked_products = $vs.sortData(
                      $event,
                      likedItemsData.liked_products,
                      'stock'
                    )
                  "
                >
                  Stock
                </vs-th>
                <vs-th
                  sort
                  @click="
                    likedItemsData.liked_products = $vs.sortData(
                      $event,
                      likedItemsData.liked_products,
                      'weight'
                    )
                  "
                >
                  Weight (gr)
                </vs-th>
              </vs-tr>
            </template>

            <template #tbody>
              <vs-tr
                v-for="(tr, i) in $vs.getPage(
                  $vs.getSearch(likedItemsData.liked_products, search_product),
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
                      <vs-button flat icon @click="goTo(tr.id, 'product')">
                        See Details
                      </vs-button>
                      <vs-button
                        border
                        danger
                        @click="unlike(tr.id, 'product')"
                      >
                        Unlike
                      </vs-button>
                    </div>
                  </div>
                </template>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </div>

      <div
        class="container bg-white rounded p-3 mt-5"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <h4 class="font-weight-bold custom-color">Liked Bundles</h4>
        <p class="custom-color">
          This is your latest bundles, click on bundle's record to see more
          details about the bundles
        </p>
        <div data-aos="fade" data-aos-duration="1500">
          <vs-table v-if="Object.keys(likedItemsData).length > 0">
            <template #header>
              <vs-input
                v-model="search_bundle"
                aria-placeholder="search liked items"
                aria-label="searchbar liked items"
                border
                color="#336699"
                placeholder="Search"
              />
            </template>
            <template #thead>
              <vs-tr>
                <vs-th
                  sort
                  @click="
                    likedItemsData.liked_bundles = $vs.sortData(
                      $event,
                      likedItemsData.liked_bundles,
                      'name'
                    )
                  "
                >
                  Name
                </vs-th>
                <vs-th
                  sort
                  @click="
                    likedItemsData.liked_bundles = $vs.sortData(
                      $event,
                      likedItemsData.liked_bundles,
                      'price'
                    )
                  "
                >
                  Price (IDR)
                </vs-th>
              </vs-tr>
            </template>

            <template #tbody>
              <vs-tr
                v-for="(tr, i) in $vs.getPage(
                  $vs.getSearch(likedItemsData.liked_bundles, search_bundle),
                  page,
                  max
                )"
                :key="i"
              >
                <vs-td>
                  {{ tr.name }}
                </vs-td>
                <vs-td> {{ tr.price }} </vs-td>

                <template #expand>
                  <div class="float-left">
                    <div class="d-flex">
                      <vs-avatar class="mb-auto" cursor>
                        <img
                          :src="tr.main_image"
                          alt=""
                          class="img-ratio"
                          @click="expandImage(tr.main_image)"
                        />
                      </vs-avatar>
                      <span class="ml-2 my-auto">
                        {{ tr.name }}
                      </span>
                    </div>
                  </div>
                  <div class="float-right">
                    <div class="d-flex">
                      <vs-button
                        aria-label="see details"
                        flat
                        icon
                        @click="goTo(tr.id, 'bundle')"
                      >
                        See Details
                      </vs-button>
                      <vs-button
                        aria-label="unlike"
                        border
                        danger
                        @click="unlike(tr.id, 'bundle')"
                      >
                        Unlike
                      </vs-button>
                    </div>
                  </div>
                </template>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'default',
  // middleware: 'auth',
  middleware: ['auth-ssr', 'auth'],
  data() {
    return {
      edit: null,
      search_product: '',
      search_bundle: '',
      allCheck: false,
      page: 1,
      max: 100,
      isLoading: false,
      likedItemsData: {},
      auth: this.$auth.isAuthenticated,
      // items: this.$auth.user.liked_products,
    }
  },
  mounted() {
    return this.getData()
  },
  computed: {
    ...mapGetters({
      // LIKED_PRODUCTS: 'users/LIKED_PRODUCTS',
      // LIKED_BUNDLES: 'users/LIKED_BUNDLES',
      LIKED_ITEMS: 'users/LIKED_ITEMS',
    }),
    // likedItemsComputed() {
    //   this.likedItemsData = JSON.parse(JSON.stringify(this.LIKED_ITEMS))
    //   return this.likedItemsData
    // },
    likedBundlesComputed() {
      return JSON.parse(JSON.stringify(this.LIKED_ITEMS.liked_bundles))
    },
  },
  watch: {
    isLoggedIn() {
      this.$fetch()
    },
  },
  methods: {
    ...mapActions({
      GET_LIKED_ITEMS: 'users/GET_LIKED_ITEMS',
    }),
    // expandShow(id) {
    //   // this.likedItemsComputed().includes(id)
    //   if (this.likedItemsComputed.liked_products.find((x) => x.id === id)) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
    async getData() {
      await this.GET_LIKED_ITEMS()
      this.likedItemsData = JSON.parse(JSON.stringify(this.LIKED_ITEMS))
    },
    expandImage(url) {
      this.$swal({
        showCloseButton: true,
        imageUrl: url,
        showConfirmButton: false,
        imageWidth: '100%',
        imageAlt: 'Image Not Available',
      })
    },
    goTo(id, type) {
      if (type === 'product') {
        this.$router.push(`/products/${id}`)
      } else {
        this.$router.push(`/bundles/${id}`)
      }
    },
    async unlike(id, type) {
      this.isLoading = true
      try {
        const likeForm = {
          type,
          id,
        }
        await this.$axios.$post('/likes', likeForm)
        // this.GET_LIKED_ITEMS()
        this.$fetch()
        // this.likedItemsData = JSON.parse(JSON.stringify(this.LIKED_ITEMS))
      } catch (e) {
        alert(e)
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
