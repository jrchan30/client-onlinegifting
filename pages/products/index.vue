<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between">
        <vs-button-group>
          <vs-button relief colour="#336699" to="/products?orderBy=created_at">
            <i class="bx bx-calendar mr-1"></i>Most Recent
          </vs-button>
          <vs-button relief danger to="/products?orderBy=likes_count">
            <i class="bx bx-heart mr-1"></i> Most Likes
          </vs-button>
          <vs-button relief warn>
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
        <div class="d-flex justify-content-center pt-4">
          <!-- <Pagination :action="'products'" /> -->
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
        :open.sync="activeFilter"
      >
        <template #logo>
          <div class="pt-5"></div>
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class="bx bx-home"></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon>
            <i class="bx bx-grid-alt"></i>
          </template>
          Market Overview
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  async fetch() {
    this.filter.orderBy = this.$route.query.orderBy
    this.SET_FILTER(this.filter)
    await this.GET_PRODUCTS()
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
    }
  },

  computed: {
    ...mapGetters({
      PRODUCTS: 'products/PRODUCTS',
    }),
  },
  watch: {
    '$route.query': '$fetch',
    async page(val) {
      this.loading = true
      try {
        await this.$store.dispatch('products/GET_PRODUCTS', val)
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
  methods: {
    ...mapActions({
      GET_PRODUCTS: 'products/GET_PRODUCTS',
    }),
    ...mapMutations({
      SET_FILTER: 'products/SET_FILTER',
    }),
  },
}
</script>

<style></style>
