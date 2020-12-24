<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Most Recent</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Most Likes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Top Rated</a>
          </li>
        </ul>
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
        <div class="d-flex justify-content-center pt-4">
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
import { mapActions, mapGetters } from 'vuex'

export default {
  async fetch() {
    await this.GET_BUNDLES()
  },
  data() {
    return {
      active: 'home',
      activeFilter: false,
      page: 1,
      loading: false,
    }
  },
  watch: {
    async page(val) {
      this.loading = true
      try {
        await this.$store.dispatch('bundles/GET_BUNDLES', val)
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
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
    goTo(id) {
      this.$router.push(`/bundles/${id}`)
    },
  },
}
</script>

<style></style>
