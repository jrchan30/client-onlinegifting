<template>
  <div>
    <div v-if="PRODUCTS">
      <ItemsPage
        :items="PRODUCTS.data"
        :is-fetching="$fetchState.pending"
        :type="'products'"
      />
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
