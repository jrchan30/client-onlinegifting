import { formatPrice } from '@/plugins/customUtil'

export const state = () => ({
  bundles: {},
  bundle: {},
})

export const getters = {
  BUNDLES(state) {
    return state.bundles
  },
  BUNDLE(state) {
    return state.bundle
  },
}

export const mutations = {
  SET_BUNDLES(state, payload) {
    payload.data.forEach((x) => {
      x.price = formatPrice(x.price)
      x.main_image = x.detail.image.url
    })
    state.bundles = payload
    // state.bundles = payload.data
  },
  SET_BUNDLE(state, payload) {
    state.bundle = {
      data: {
        id: payload.data.id,
        user: payload.data.user,
        name: payload.data.name,
        description: '',
        price: formatPrice(payload.data.price),
        stock: 0,
        images: [payload.data.detail.image],
        categories: [],
        reviews: payload.data.reviews,
        discussions: payload.data.discussions,
        likes_count: payload.data.likes_count,
      },
    }
  },
}

export const actions = {
  async GET_BUNDLES({ commit }, page = 1) {
    const data = await this.$axios.$get(`bundles?page=${page}`)
    commit('SET_BUNDLES', data)
  },
  async GET_BUNDLE({ commit }, id) {
    const data = await this.$axios.$get(`bundles/${id}`)
    commit('SET_BUNDLE', data)
  },
}
