<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between">
        <vs-button-group>
          <vs-button
            relief
            colour="#336699"
            to="/bundles?orderBy=created_at"
            @click="page = 1"
          >
            <i class="bx bx-calendar mr-1"></i>Most Recent
          </vs-button>
          <vs-button
            relief
            danger
            to="/bundles?orderBy=likes_count"
            @click="page = 1"
          >
            <i class="bx bx-heart mr-1"></i> Most Likes
          </vs-button>
          <vs-button
            relief
            warn
            to="/bundles?orderBy=avg_rating"
            @click="page = 1"
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
        <div v-if="BUNDLES.meta" class="d-flex justify-content-center pt-4">
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
            <div class="row pb-4 border-bottom">
              <vs-input
                v-model="min"
                :oninput="
                  (min = !!min && Math.abs(min) > 0 ? Math.abs(min) : 0)
                "
                class="mt-4 pl-3 pr-1 col"
                type="number"
                label="Min"
              />
              <vs-input
                v-model="max"
                class="mt-4 pl-1 pr-3 col"
                :oninput="
                  (max = !!max && Math.abs(max) > 0 ? Math.abs(max) : 0)
                "
                type="number"
                label="Max"
              />
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
        </div>

        <div class="mt-4 ml-auto pr-3">
          <vs-button block color="#336699">Apply Filters</vs-button>
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
    await this.SET_FILTER(this.filter)
    await this.GET_BUNDLES()
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
      },

      min: 0,
      max: 0,
      categories: [],
    }
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
  },

  methods: {
    ...mapActions({
      GET_BUNDLES: 'bundles/GET_BUNDLES',
      GET_CATEGORIES: 'categories/GET_CATEGORIES',
    }),
    ...mapMutations({
      SET_FILTER: 'bundles/SET_FILTER',
    }),
    // goTo(id) {
    //   this.$router.push(`/bundles/${id}`)
    // },
    normalizer(node) {
      if (node.children == null || node.children === 'null') {
        delete node.children
      }
    },
  },
}
</script>

<style></style>
