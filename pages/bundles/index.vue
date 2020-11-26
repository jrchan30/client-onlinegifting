<template>
  <div>
    <!-- <ItemsPage
      :items="BUNDLES.data"
      :is-fetching="$fetchState.pending"
      :type="'bundles'"
    /> -->
    <div class="container">
      <ul class="nav nav-pills pt-5">
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
        <div class="row">
          <div
            v-for="bundle in BUNDLES.data"
            :key="bundle.id"
            class="col-6 col-sm-4 col-lg-3 pb-4"
          >
            <!-- <nuxt-link :to="`/products/${product.id}`"> -->
            <vs-card>
              <template #title>
                <h3 @click="goTo(bundle.id)">{{ bundle.name }}</h3>
              </template>
              <template #img>
                <img
                  :src="bundle.main_image"
                  alt=""
                  class="img-ratio"
                  @click="goTo(bundle.id)"
                />
              </template>
              <template #text>
                <p @click="goTo(bundle.id)">{{ bundle.price }} IDR</p>
              </template>
              <template #interactions>
                <vs-button
                  danger
                  icon
                  :disabled="$auth.user == null"
                  @click="like(bundle.id)"
                >
                  <i class="bx bx-heart"></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class="bx bx-chat"></i>
                  <span class="span"> 54 </span>
                </vs-button>
              </template>
            </vs-card>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <Pagination :action="'products'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async fetch() {
    await this.GET_BUNDLES()
  },
  computed: {
    ...mapGetters({
      BUNDLES: 'bundles/BUNDLES',
    }),

    // bundles() {
    //   if (this.BUNDLES.data) {
    //     return this.BUNDLES.data.filter((bundle) => {
    //       const bundleProducts = bundle.products.filter(
    //         (product) => product.stock > 0
    //       )
    //       return bundleProducts
    //     })
    //   }
    //   return []
    // },
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
