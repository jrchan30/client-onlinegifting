import { formatPrice } from '@/plugins/customUtil'

export const state = () => ({
  bundles: {},
  bundle: {},
  filter: {
    search: '',
    orderBy: 'created_at',
    orderDir: 'desc',
    categories: '',
    min: 0,
    max: 10000000,
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
      // x.main_image = x.detail.image.url
    })
    state.bundles = payload
    // state.bundles = payload.data
  },
  SET_BUNDLE(state, payload) {
    console.log(payload)
    state.bundle = {
      data: {
        id: payload.data.id,
        type: payload.data.type,
        price: formatPrice(payload.data.price),
        weight: payload.data.weight,
        // user: payload.data.user,
        description: payload.data.description,
        name: payload.data.name,
        images: [payload.data.detail.image],
        detail: payload.data.detail,
        reviews: payload.data.reviews,
        discussions: payload.data.discussions,
        likes_count: payload.data.likes_count,
        avg_rating: payload.data.avg_rating,
        products: payload.data.products
      },
    }
  },
  SET_FILTER(state, payload) {
    state.filter.search = payload.search
    state.filter.orderBy = payload.orderBy
    state.filter.orderDir = payload.orderDir
    state.filter.categories = payload.categories
    state.filter.min = payload.min
    state.filter.max = payload.max
  },
  SET_LIKE(state, payload) {
    state.bundles.data[payload.index].isLiked = !state.bundles.data[
      payload.index
    ].isLiked
    if (state.bundles.data[payload.index].isLiked) {
      state.bundles.data[payload.index].likes_count++
    } else {
      state.bundles.data[payload.index].likes_count--
    }
  },
  ADD_DISCUSSION(state, payload) {
    state.bundle.data.discussions.unshift(payload)
  },
  ADD_REPLY(state, payload) {
    state.bundle.data.discussions[payload.discussionIdx].replies.unshift(
      payload.response
    )
  },
}

export const actions = {
  async GET_BUNDLES({ state, commit }, page = 1) {
    const filter = state.filter
    const data = await this.$axios.$get(
      `bundles?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}&min=${filter.min}&max=${filter.max}&categories=${filter.categories}`
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
