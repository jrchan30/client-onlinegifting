export const state = () => ({
  products: {},
  latest: {},
  lowPrice: {},
  product: {},
})

export const getters = {
  PRODUCTS(state) {
    return state.products
  },
  PRODUCT(state) {
    return state.product
  },
  LATEST(state) {
    return state.latest.data
  },
  LOWPRICE(state) {
    return state.lowPrice.data
  },
}

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_PRODUCT(state, payload) {
    state.product = payload
  },
  SET_LATEST(state, payload) {
    state.latest = payload
  },
  SET_LOWPRICE(state, payload) {
    state.lowPrice = payload
  },
}

export const actions = {
  async GET_PRODUCTS({ commit }, page = 1) {
    const data = await this.$axios.$get(`products?page=${page}`)
    commit('SET_PRODUCTS', data)
  },
  async GET_PRODUCT({ commit }, id) {
    const data = await this.$axios.$get(`products/${id}`)
    commit('SET_PRODUCT', data)
  },
  async GET_LATEST({ commit }) {
    const data = await this.$axios.$get('latest-products')
    commit('SET_LATEST', data)
  },
  async GET_LOWPRICE({ commit }) {
    const data = await this.$axios.$get('low-price')
    commit('SET_LOWPRICE', data)
  },
}
