<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between">
        <vs-button-group>
          <vs-button
            relief
            colour="#336699"
            @click="
              ;(page = 1), updateQueryStringParameter('orderBy', 'created_at')
            "
          >
            <i class="bx bx-calendar mr-1"></i>Most Recent
          </vs-button>
          <vs-button
            relief
            danger
            to="/products?orderBy=likes_count"
            @click="
              ;(page = 1), updateQueryStringParameter('orderBy', 'likes_count')
            "
          >
            <i class="bx bx-heart mr-1"></i> Most Likes
          </vs-button>
          <vs-button
            relief
            warn
            @click="
              ;(page = 1), updateQueryStringParameter('orderBy', 'avg_rating')
            "
          >
            <i class="bx bx-star mr-1"></i> Top Rated
          </vs-button>
        </vs-button-group>
        <div>
          <vs-button
            aria-label="toggle filter dropdown"
            flat
            icon
            @click="activeFilter = !activeFilter"
          >
            <i class="bx bx-filter"></i>
          </vs-button>
        </div>
      </div>
      <div v-if="$fetchState.pending" class="row pt-5">
        <div
          v-for="index in 12"
          :key="index"
          class="col-6 col-sm-4 col-lg-3 pb-4"
        >
          <content-placeholders :rounded="true">
            <content-placeholders-img />
            <content-placeholders-heading />
          </content-placeholders>
        </div>
      </div>
      <div v-else class="pt-5">
        <div data-aos="fade" data-aos-duration="1000">
          <CardMain
            :items="PRODUCTS.data"
            :item-type="'products'"
            :store-state="'products'"
          />
        </div>
        <div v-if="PRODUCTS.meta" class="d-flex justify-content-center pt-4">
          <vs-pagination
            v-model="page"
            :disabled="loading"
            :length="PRODUCTS.meta.last_page"
          />
        </div>
      </div>
    </div>
    <div class="position-sticky" style="z-index: 100">
      <vs-sidebar
        v-model="active"
        color="#336699"
        right
        square
        :open.sync="activeFilter"
      >
        <div class="filter-padding"></div>
        <div class="px-2">
          <h5 class="mb-4">Filter by</h5>
          <div>
            <label for="category">Price range (IDR)</label>
            <div class="row">
              <vs-input
                v-model="filter.min"
                :oninput="
                  (filter.min =
                    !!filter.min && Math.abs(filter.min) > 0
                      ? Math.abs(filter.min)
                      : 0)
                "
                class="mt-4 pl-3 pr-1 col"
                type="number"
                label="Min"
              />
              <vs-input
                v-model="filter.max"
                class="mt-4 pl-1 pr-3 col"
                :oninput="
                  (filter.max =
                    !!filter.max && Math.abs(filter.max) > 0
                      ? Math.abs(filter.max)
                      : 0)
                "
                type="number"
                label="Max"
              />
            </div>
            <div class="mt-4 ml-auto pr-3 pb-4 border-bottom">
              <vs-button block color="#336699" @click="filterPrice()"
                >Apply Price</vs-button
              >
            </div>
          </div>
          <div class="mt-4">
            <label for="category">Categories</label>
            <client-only>
              <treeselect
                id="category"
                v-model="categories"
                :multiple="true"
                :options="CATEGORIES"
                placeholder="Select categories..."
                value-consists-of="LEAF_PRIORITY"
                :normalizer="normalizer"
              />
            </client-only>
          </div>
          <div class="mt-4 ml-auto pr-3">
            <vs-button
              block
              color="#336699"
              @click="
                updateQueryStringParameter('categories', filter.categories)
              "
              >Apply Categories</vs-button
            >
          </div>
        </div>
      </vs-sidebar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  async fetch() {
    if (this.$route.query.orderBy) {
      this.filter.orderBy = this.$route.query.orderBy
    }
    if (this.$route.query.categories) {
      this.filter.categories = this.$route.query.categories
      // this.categories = new Array(this.$route.query.categories)
    }
    await this.SET_FILTER(this.filter)
    await this.GET_PRODUCTS()
  },
  async asyncData({ store }) {
    await store.dispatch('categories/GET_CATEGORIES')
  },

  data() {
    return {
      active: 'home',
      activeFilter: false,
      page: 1,
      loading: false,
      filter: {
        search: '',
        orderBy: 'created_at',
        orderDir: 'desc',
        categories: '',
        min: 0,
        max: 10000000,
      },
      categories: [],
    }
  },

  computed: {
    ...mapGetters({
      PRODUCTS: 'products/PRODUCTS',
      CATEGORIES: 'categories/CATEGORIES',
    }),
  },

  watch: {
    '$route.query': '$fetch',
    async page(val) {
      this.loading = true
      try {
        await this.$store.dispatch('products/GET_PRODUCTS', val)
      } catch (e) {
        alert(e)
      } finally {
        this.loading = false
      }
    },
    categories() {
      this.filter.categories = this.categories.toString()
    },
  },

  methods: {
    ...mapActions({
      GET_PRODUCTS: 'products/GET_PRODUCTS',
      GET_CATEGORIES: 'categories/GET_CATEGORIES',
    }),
    ...mapMutations({
      SET_FILTER: 'products/SET_FILTER',
    }),
    pushRouter(by, query) {
      let url = ''
      if (this.$route.fullPath.includes('?')) {
        if (this.$route.fullPath.includes(`${by}`)) {
          // url = this.$route.query.by
          // url = this.$route.fullPath + by + '=' + query
          url = this.$router.replace({
            name: this.$route.path,
            query: { ...this.$route.query, by: query },
          })
        } else {
          url = this.$route.fullPath + '&' + by + '=' + query
        }
      } else {
        url = this.$route.path + '?' + by + query
      }
      this.$router.push(url)
    },
    updateQueryStringParameter(key, value) {
      const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
      let uri = this.$route.fullPath
      const separator = uri.includes('?') ? '&' : '?'
      if (uri.match(re)) {
        uri = uri.replace(re, '$1' + key + '=' + value + '$2')
      } else {
        uri = uri + separator + key + '=' + value
      }

      this.$router.push(uri)
    },
    normalizer(node) {
      if (node.children == null || node.children === 'null') {
        delete node.children
      }
    },
    applyFilter() {
      console.log(this.$route.path)
      // this.$router.push('&test=0')
    },
    async filterPrice() {
      await this.updateQueryStringParameter('max', this.max)
      // await this.updateQueryStringParameter()
    },
  },
}
</script>

<style>
.filter-padding {
  min-height: 90px;
}
</style>
