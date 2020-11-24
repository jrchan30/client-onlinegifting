<template>
  <div class="container">
    <div v-if="PRODUCTS">
      <!-- <ItemsPage
        :items="PRODUCTS.data"
        :is-fetching="$fetchState.pending"
        :type="'products'"
      /> -->
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
      <div class="pt-5">
        <div class="row">
          <div
            v-for="product in PRODUCTS.data"
            :key="product.id"
            class="col-sm-3 col-md-4 col-lg-3 pb-4"
          >
            <!-- <nuxt-link :to="`/products/${product.id}`"> -->
            <vs-card @click="goTo()">
              <template #title>
                <h3>{{ product.name }}</h3>
              </template>
              <template #img>
                <img :src="product.images[0].url" alt="" />
              </template>
              <template #text>
                <p>{{ product.price }} IDR</p>
              </template>
              <template #interactions>
                <vs-button
                  danger
                  icon
                  :disabled="$auth.user == null"
                  @click="like(product.id)"
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
    await this.GET_PRODUCTS()
  },
  computed: {
    ...mapGetters({
      PRODUCTS: 'products/PRODUCTS',
    }),
    products() {
      if (this.PRODUCTS.data) {
        return this.PRODUCTS.data.filter((i) => i.stock > 0)
      }
      return []
    },
  },
  methods: {
    ...mapActions({
      GET_PRODUCTS: 'products/GET_PRODUCTS',
    }),
  },
}
</script>

<style></style>
