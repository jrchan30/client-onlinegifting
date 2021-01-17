<template>
  <div>
    <div class="container">
      <div data-aos="fade" data-aos-duration="2000">
        <h4
          class="font-weight-bold custom-color"
          data-aos="fade"
          data-aos-duration="1000"
        >
          Bundles
        </h4>
        <p class="custom-color">
          Here is a list of all our bundles, we will continue to improve and add
          more in the near future
        </p>
        <vs-alert v-model="initialAlert" closable>
          <template #title> Filtering </template>
          You can further filter bundles by clicking the button on the right or
          <u class="cursor" @click="activeFilter = !activeFilter">here</u>
        </vs-alert>
      </div>
      <div class="d-flex justify-content-between mt-4">
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
            :items="BUNDLES.data"
            :item-type="'bundles'"
            :store-state="'bundles'"
          />
        </div>
        <div v-if="BUNDLES.meta" class="d-flex justify-content-center py-4">
          <vs-pagination
            v-model="page"
            :disabled="loading"
            :length="BUNDLES.meta.last_page"
          />
        </div>
      </div>
    </div>
    <div class="position-sticky" style="z-index: 100">
      <vs-sidebar
        v-model="active"
        color="#336699"
        right
        :open.sync="activeFilter"
      >
        <div class="filter-padding"></div>
        <div class="px-2">
          <h5 class="mb-4">Filter by</h5>
          <div>
            <label for="category">Price range</label>
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
          <!-- <client-only> -->
          <div v-if="CATEGORIES" class="mt-4">
            <label for="category">Categories</label>
            <treeselect
              id="category"
              v-model="categories"
              :multiple="true"
              :options="CATEGORIES"
              placeholder="Select categories..."
              value-consists-of="LEAF_PRIORITY"
              :normalizer="normalizer"
            />
          </div>
          <!-- </client-only> -->
        </div>

        <div class="mt-4 ml-auto pr-3">
          <vs-button
            block
            color="#336699"
            @click="updateQueryStringParameter('categories', filter.categories)"
            >Apply Categories</vs-button
          >
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
      this.categories = this.$route.query.categories.split(',')
    }

    if (this.$route.query.max) {
      this.filter.max = this.$route.query.max
      this.filter.min = this.$route.query.min
      this.tempMin = this.$route.query.min
    }
    await this.SET_FILTER(this.filter)
    await this.GET_BUNDLES()
  },
  data() {
    return {
      active: 'home',
      initialAlert: true,
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
      tempMin: 0,
    }
  },

  // async asyncData({ store }) {
  //   await store.dispatch('categories/GET_CATEGORIES')
  // },
  async mounted() {
    await this.GET_CATEGORIES()
  },

  computed: {
    ...mapGetters({
      BUNDLES: 'bundles/BUNDLES',
      CATEGORIES: 'categories/CATEGORIES',
    }),
  },

  watch: {
    '$route.query': '$fetch',
    async page(val) {
      this.loading = true
      try {
        await this.$store.dispatch('bundles/GET_BUNDLES', val)
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
      GET_BUNDLES: 'bundles/GET_BUNDLES',
      GET_CATEGORIES: 'categories/GET_CATEGORIES',
    }),
    ...mapMutations({
      SET_FILTER: 'bundles/SET_FILTER',
    }),

    updateQueryStringParameter(key, value) {
      const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
      let uri = this.$route.fullPath
      const separator = uri.includes('?') ? '&' : '?'
      if (uri.match(re)) {
        uri = uri.replace(re, '$1' + key + '=' + value + '$2')
      } else {
        uri = uri + separator + key + '=' + value
      }

      if (key === 'max') {
        if (uri.includes('min')) {
          uri = uri.replace(`&min=${this.tempMin}`, '&min=' + this.filter.min)
        } else {
          uri = uri + '&min=' + this.filter.min
        }
      }

      this.$router.push(uri)
    },

    normalizer(node) {
      if (node.children == null || node.children === 'null') {
        delete node.children
      }
    },
    async filterPrice() {
      await this.updateQueryStringParameter('max', this.filter.max)
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
