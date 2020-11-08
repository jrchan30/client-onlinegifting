<template>
  <div v-if="BUNDLES">
    <ItemsPage
      :items="bundles"
      :is-fetching="$fetchState.pending"
      :type="'bundles'"
    />
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

    bundles() {
      if (this.BUNDLES.data) {
        return this.BUNDLES.data.filter((bundle) => {
          const bundleProducts = bundle.products.filter(
            (product) => product.stock > 0
          )
          return bundleProducts
        })
      }
      return []
    },
  },
  methods: {
    ...mapActions({
      GET_BUNDLES: 'bundles/GET_BUNDLES',
    }),
  },
}
</script>

<style></style>
