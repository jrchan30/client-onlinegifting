export const state = () => ({
  users: {},
  admins: {},
  cart: {},
  likedProducts: {},
  likedBundles: {},
  filter: {
    search: '',
    orderBy: 'created_at',
    orderDir: 'desc',
  },
})

export const getters = {
  ADMINS(state) {
    return state.admins
  },
  USERS(state) {
    return state.users
  },
  LIKED_PRODUCTS(state) {
    return state.likedProducts
  },
  LIKED_BUNDLES(state) {
    return state.likedBundles
  },
  CART(state) {
    return state.cart
  },
}

export const mutations = {
  SET_ADMINS(state, payload) {
    state.admins = payload
  },
  SET_USERS(state, payload) {
    state.users = payload
  },
  SET_FILTER(state, payload) {
    state.filter.search = payload.search
    state.filter.orderBy = payload.orderBy
    state.filter.orderDir = payload.orderDir
  },
  SET_LIKED_PRODUCTS(state, payload) {
    state.likedProducts = payload.liked_products
  },
  SET_LIKED_BUNDLES(state, payload) {
    state.likedBundles = payload.liked_bundles
  },
  SET_CART(state, payload) {
    state.cart = payload.cart
  },
}

export const actions = {
  async GET_ADMINS({ state, commit }, page = 1) {
    const filter = state.filter
    const data = await this.$axios.$get(
      `admins?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`
    )
    commit('SET_ADMINS', data)
  },
  async GET_USERS({ state, commit }, page = 1) {
    const filter = state.filter
    const data = await this.$axios.$get(
      `users?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`
    )
    commit('SET_USERS', data)
  },
  async GET_LIKED_ITEMS({ commit }) {
    const data = await this.$axios.$get('likes')
    commit('SET_LIKED_PRODUCTS', data)
    commit('SET_LIKED_BUNDLES', data)
  },
  async GET_CART({ commit }) {
    const data = await this.$axios.$get('carts')
    commit('SET_CART', data)
  },
}
