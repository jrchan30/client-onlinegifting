<template>
  <div>
    {{ BUNDLE }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  async fetch({ store, params }) {
    await store.dispatch('bundles/GET_BUNDLE', params.id)
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

<style></style>
