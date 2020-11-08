export const state = () => ({
  // isLoggedIn: false,
})

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}

export const mutations = {
  // SET_AUTH(state, payload) {
  //   state.isLoggedIn = payload
  // },
}

export const actions = {
  // async nuxtServerInit({ commit }, { req }) {
  //   let auth = false
  //   if (req.headers.cookie) {
  //     // cookie found
  //     try {
  //       // check data user login with cookie
  //       await this.$axios.$get('/user')
  //       // server return the data is cookie valid loggedIn is true
  //       auth = true // set the data auth
  //     } catch (err) {
  //       // No valid cookie found
  //       auth = false
  //     }
  //   }
  //   commit('SET_AUTH', auth) // set state auth
  // },
}
