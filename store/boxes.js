import { formatPrice } from '@/plugins/customUtil'

export const state = () => ({
  boxes: {},
  box: {},
})

export const getters = {
  BOXES(state) {
    return state.boxes
  },
  BOX(state) {
    return state.box
  },
}

export const mutations = {
  SET_BOXES(state, payload) {
    // payload.data.forEach((x) => {
    //   x.price = formatPrice(x.price)
    //   x.main_image = x.detail.image.url
    // })
    state.boxes = payload
  },
  SET_BOX(state, payload) {
    state.box = {
      data: {
        id: payload.data.id,
        user: payload.data.user,
        name: payload.data.name,
        price: formatPrice(payload.data.price),
        likes_count: payload.data.likes_count,
      },
    }
  },
  //   SET_FILTER(state, payload) {
  //     state.filter.search = payload.search
  //     state.filter.orderBy = payload.orderBy
  //     state.filter.orderDir = payload.orderDir
  //   },
}

export const actions = {
  async GET_BOXES({ commit }) {
    const data = await this.$axios.$get('boxes')
    commit('SET_BOXES', data)
  },
  async GET_BOX({ commit }, id) {
    const data = await this.$axios.$get(`boxes/${id}`)
    commit('SET_BOX', data)
  },
}
