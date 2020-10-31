<template>
  <ItemsPage :items="BUNDLES.data" />
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
      return this.BUNDLES.data.filter((i) => i.stock > 0)
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
