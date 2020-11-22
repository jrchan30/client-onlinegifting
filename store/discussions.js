import { formatType } from '@/plugins/customUtil'

export const state = () => ({
  discussions: {},
})

export const getters = {
  DISCUSSIONS(state) {
    return state.discussions
  },
}

export const mutations = {
  SET_DISCUSSIONS(state, payload) {
    payload.data.forEach((x) => {
      x.type = formatType(x.type)
    })
    state.discussions = payload.data
  },
}

export const actions = {
  async GET_DISCUSSIONS({ commit }, page = 1) {
    const data = await this.$axios.$get(`discussions?page=${page}`)
    commit('SET_DISCUSSIONS', data)
  },
}
