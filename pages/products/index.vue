<template>
  <ItemsPage :items="products" />
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
      return this.PRODUCTS.data.filter((i) => i.stock > 0)
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
