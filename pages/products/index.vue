<template>
  <div>
    <div class="container">
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
        <CardMain
          :items="PRODUCTS.data"
          :item-type="'products'"
          :store-state="'products'"
        />
      </div>
      <div class="d-flex justify-content-center pt-4">
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
    // products() {
    //   if (this.PRODUCTS.data) {
    //     return this.PRODUCTS.data.filter((i) => i.stock > 0)
    //   }
    //   return []
    // },
  },
  methods: {
    ...mapActions({
      GET_PRODUCTS: 'products/GET_PRODUCTS',
    }),
    like(id) {
      console.log(id + ' liked')
    },
    goTo(id) {
      this.$router.push(`/products/${id}`)
    },
  },
}
</script>

<style></style>
