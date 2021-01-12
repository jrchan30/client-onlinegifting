<template>
  <ItemPage :item="BUNDLE" :loading="loading"></ItemPage>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  async fetch({ store, params }) {
    try {
      this.loading = true
      await store.dispatch('bundles/GET_BUNDLE', params.id)
    } finally {
      this.loading = false
    }
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapGetters({
      BUNDLE: 'bundles/BUNDLE',
    }),
  },
  methods: {
    ...mapActions({
      GET_BUNDLE: 'bundles/GET_BUNDLE',
    }),
  },
}
</script>

<style scoped></style>
