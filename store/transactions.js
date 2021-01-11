import { formatPrice } from '~/plugins/customUtil'
export const state = () => ({
  transactions: {},
  transaction: {},
  filter: {
    search: '',
    orderBy: 'created_at',
    orderDir: 'desc',
  },
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
  SET_FILTER(state, payload) {
    state.filter.search = payload.search
    state.filter.orderBy = payload.orderBy
    state.filter.orderDir = payload.orderDir
  },
  SET_IS_ARRIVED_TRANSACTIONS(state, payload) {
    state.transactions.data[payload.idx].is_arrived = payload.isArrived
  },
  SET_IS_ARRIVED_TRANSACTION(state, payload) {
    state.transaction.is_arrived = payload
  },
  SET_REVIEW(state, payload) {
    if (payload.type === 'product') {
      console.log('parent: ' + payload.idxParent)
      console.log('idxProdcut: ' + payload.idxProduct)
      console.log('res: ' + payload.res)
      state.transaction.paid_boxes[payload.idxParent].paid_products[
        payload.idxProduct
      ].review[0] = payload.res
    } else {
      state.transaction.paid_bundles[payload.idxParent].review[0] = payload.res
    }
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
