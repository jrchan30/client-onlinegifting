export const state = () => ({
  categories: {},
})

export const getters = {
  CATEGORIES(state) {
    return state.categories.data
  },
}

export const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
}

export const actions = {
  async GET_CATEGORIES({ commit }) {
    const data = await this.$axios.$get('categories')
    commit('SET_CATEGORIES', data)
  },
}
