export const state = () => ({
  messages: {},
})

export const getters = {
  MESSAGES(state) {
    return state.messages
  },
}

export const mutations = {
  SET_MESSAGES(state, payload) {
    state.messages = payload.data
  },
  ADD_MESSAGE(state,payload){
    state.messages.push(payload.data)
  }
}

export const actions = {
  async GET_MESSAGES({ commit }) {
    const data = await this.$axios.$get(`messages`)
    commit('SET_MESSAGES', data)
  },
}