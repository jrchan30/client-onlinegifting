import { formatPrice } from '~/plugins/customUtil'
export const state = () => ({
  transactions: {},
  transaction: {},
})

export const getters = {
  TRANSACTIONS(state) {
    return state.transactions
  },
  TRANSACTION(state) {
    return state.transaction
  },
}

export const mutations = {
  SET_TRANSACTIONS(state, payload) {
    payload.data.forEach((x) => {
      x.total_price = formatPrice(x.total_price)
    })
    state.transactions = payload
  },
  SET_TRANSACTION(state, payload) {
    payload.data.total_price = formatPrice(payload.data.total_price)
    payload.data.delivery_fee = formatPrice(payload.data.delivery_fee)
    state.transaction = payload.data
  },
}

export const actions = {
  async GET_TRANSACTIONS({ commit }, page = 1) {
    const data = await this.$axios.$get(`transactions?page=${page}`)
    commit('SET_TRANSACTIONS', data)
  },
  async GET_TRANSACTION({ commit }, id) {
    const data = await this.$axios.$get(`transactions/${id}`)
    commit('SET_TRANSACTION', data)
  },
}
