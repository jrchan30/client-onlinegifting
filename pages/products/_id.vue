<template>
  <div v-if="PRODUCT.data">
    {{ PRODUCT.data.name }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductDetail',
  async fetch({ store, params }) {
    await store.dispatch('products/GET_PRODUCT', params.id)
  },
  computed: {
    ...mapGetters({
      PRODUCT: 'products/PRODUCT',
    }),
  },
  methods: {
    ...mapActions({
      GET_PRODUCT: 'products/GET_PRODUCT',
    }),
  },
}
</script>

<style></style>
