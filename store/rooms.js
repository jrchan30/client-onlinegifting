export const state = () => ({
    rooms: {},
    room: {}
  })
  
  export const getters = {
    ROOMS(state) {
      return state.rooms
    },
    ROOM(state) {
        return state.room
    },
  }
  
  export const mutations = {
    SET_ROOMS(state, payload) {
      state.rooms = payload.data
    },
    SET_ROOM(state,payload){
        state.room = payload
    },
    ADD_MESSAGE(state,payload){
      state.room.data.messages.push(payload.data)
    }
  }
  
  export const actions = {
    async GET_ROOMS({ commit }) {
      const data = await this.$axios.$get(`/rooms`)
      commit('SET_ROOMS', data)
    },
    async GET_ROOM({commit}, id){
        const data = await this.$axios.$get(`/rooms/${id}`)
        commit('SET_ROOM', data)
    },
  }