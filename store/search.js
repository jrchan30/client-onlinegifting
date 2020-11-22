export const state = () => ({
  results: {},
  searchQuery: '',
})

export const getters = {
  SEARCH_RESULTS(state) {
    return state.results
  },
}

export const mutations = {
  SET_RESULTS(state, payload) {
    state.results = payload
  },
  SET_SEARCH_QUERY(state, payload) {
    state.searchQuery = payload
  },
}

export const actions = {
  async GET_SEARCH_RESULTS({ state, commit }) {
    const form = {
      search: state.searchQuery,
    }
    const res = await this.$axios.$post('/admin-search', form)
    commit('SET_RESULTS', res)
  },
}
