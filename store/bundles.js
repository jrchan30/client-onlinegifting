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
      // state.bundles = {
      //     data: {
      //       'id' : payload.data.id,
      //       'user': payload.data.user,
      //       'name': payload.data.name,
      //       'description': "",
      //       'price': 0,
      //       'stock': 0,
      //       'images': [],
      //       //   'images': payload.data.details.images,
      //       'categories': [],
      //       //   'categories': payload.details.categories,
      //       'reviews': payload.data.reviews,
      //       'discussions': payload.data.discussions,
      //       'likes_count': payload.data.likes_count,
      //     }
      // }
      state.bundles = payload
    },
    SET_BUNDLE(state, payload) {
        state.bundle = {
            data: {
            'id' : payload.data.id,
            'user': payload.data.user,
            'name': payload.data.name,
            'description': "",
            'price': 0,
            'stock': 0,
            'images': [],
            //   'images': payload.data.details.images,
            'categories': [],
            //   'categories': payload.details.categories,
            'reviews': payload.data.reviews,
            'discussions': payload.data.discussions,
            'likes_count': payload.data.likes_count,
            }
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
  