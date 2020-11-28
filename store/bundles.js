import { formatPrice } from '@/plugins/customUtil'

export const state = () => ({
  bundles: {},
  bundle: {},
  filter: {
    search: '',
    orderBy: 'created_at',
    orderDir: 'desc',
  },
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
  SET_FILTER(state, payload) {
    state.filter.search = payload.search
    state.filter.orderBy = payload.orderBy
    state.filter.orderDir = payload.orderDir
  },
  SET_LIKE(state, payload) {
    state.bundles.data[payload.index].isLiked = !state.bundles.data[
      payload.index
    ].isLiked
  },
}

export const actions = {
  async GET_BUNDLES({ state, commit }, page = 1) {
    const filter = state.filter
    const data = await this.$axios.$get(
      `bundles?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`
    )
    commit('SET_BUNDLES', data)
  },
  async GET_HIDDEN_BUNDLES({ state, commit }, page = 1) {
    const filter = state.filter
    const data = await this.$axios.$get(
      `trashed-bundles?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`
    )
    commit('SET_BUNDLES', data)
  },
  async GET_BUNDLE({ commit }, id) {
    const data = await this.$axios.$get(`bundles/${id}`)
    commit('SET_BUNDLE', data)
  },
}
