<template>
  <!-- <div v-if="PRODUCT.data"> -->
  <ItemPage :item="PRODUCT"></ItemPage>
  <!-- </div> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
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
    activeImage(index) {
      this.currentImage.index = index
    },
    expandImage(url) {
      this.$swal({
        showCloseButton: true,
        imageUrl: url,
        width: 1000,
        showConfirmButton: false,
        imageWidth: '100%',
        imageAlt: 'Custom image',
      })
    },
  },
}
</script>

<style scoped></style>
