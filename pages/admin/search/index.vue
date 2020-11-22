<template>
  <div>
    <div v-if="SEARCH_RESULTS" class="card">
      <div class="card-body">
        {{ SEARCH_RESULTS }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'SearchIndex',
  layout: 'admin',
  computed: {
    ...mapGetters({
      SEARCH_RESULTS: 'search/SEARCH_RESULTS',
    }),
  },
  async mounted() {
    await this.SET_SEARCH_QUERY(this.$route.query.q)
    await this.GET_SEARCH_RESULTS()
  },
  methods: {
    ...mapMutations({
      SET_SEARCH_QUERY: 'search/SET_SEARCH_QUERY',
    }),
    ...mapActions({
      GET_SEARCH_RESULTS: 'search/GET_SEARCH_RESULTS',
    }),
  },
}
</script>

<style></style>
