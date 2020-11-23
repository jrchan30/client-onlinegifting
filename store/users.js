export const state = () => ({
  users: {},
  admins: {},
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
}
