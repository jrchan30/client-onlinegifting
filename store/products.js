import { formatPrice } from '@/plugins/customUtil'

export const state = () => ({
  products: {},
  latest: {},
  lowPrice: {},
  product: {},
  allProducts: {},
  filter: {
    search: '',
    orderBy: 'created_at',
    orderDir: 'desc',
  },
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
  ALL_PRODUCTS(state) {
    return state.allProducts
  },
}

export const mutations = {
  SET_PRODUCTS(state, payload) {
    payload.data.forEach((x) => {
      x.price = formatPrice(x.price)
      x.main_image = x.images[0].url
    })
    state.products = payload
  },
  SET_PRODUCT(state, payload) {
    payload.data.price = formatPrice(payload.data.price)
    state.product = payload
  },
  SET_LATEST(state, payload) {
    payload.data.forEach((x) => {
      x.price = formatPrice(x.price)
    })
    state.latest = payload
  },
  SET_LOWPRICE(state, payload) {
    payload.data.forEach((x) => {
      x.price = formatPrice(x.price)
    })
    state.lowPrice = payload
  },
  SET_FILTER(state, payload) {
    state.filter.search = payload.search
    state.filter.orderBy = payload.orderBy
    state.filter.orderDir = payload.orderDir
  },
  SET_ALL_PRODUCTS(state, payload) {
    state.allProducts = payload
  },
}

export const actions = {
  async GET_PRODUCTS({ state, commit }, page = 1) {
    const filter = state.filter
    const data = await this.$axios.$get(
      `products?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`
    )
    commit('SET_PRODUCTS', data)
  },
  async GET_HIDDEN_PRODUCTS({ state, commit }, page = 1) {
    const filter = state.filter
    const data = await this.$axios.$get(
      `trashed-products?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`
    )
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
  async GET_ALL_PRODUCTS({ commit }) {
    const data = await this.$axios.$get('all-products')
    commit('SET_ALL_PRODUCTS', data)
  },
}
