export const state = () => ({
  categories: [],
})

export const getters = {
  CATEGORIES(state) {
    return state.categories.data
  },
  SUB_CATEGORIES(state) {
    const subCategories = []
    const categories = state.categories.data
    categories.map((x) => {
      x.subCategory.map((y) => subCategories.push(y))
    })

    return subCategories
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
