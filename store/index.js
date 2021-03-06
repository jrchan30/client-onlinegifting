export const state = () => ({
  isLoggedIn: false,
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
  SET_AUTH(state, payload) {
    state.isLoggedIn = payload.auth ?? false
    state.auth.user = payload.user ?? null
  },
  CHANGE_PROFILE_PICTURE(state, payload){
    state.auth.user.profile_pic = payload.data.profile_pic
    state.auth.user.detail.image.path = payload.data.detail.image.path
    state.auth.user.detail.image.url = payload.data.detail.image.url
  }
}

export const actions = {
  // async nuxtServerInit({ commit }, { app, req, $axios, redirect }) {
  //   let auth = false
  //   let user = null
  //   const cookie = app.$cookies.get('auth._token.laravelSanctum')
  //   // // console.log(req.session)
  //   // if (req.headers.cookie) {
  //   //   // console.log(req.headers.cookie)
  //   //   // cookie found
  //   //   try {
  //   //     // check data user login with cookie
  //   //     const res = this.$axios.$get('/user')
  //   //     user = res.data
  //   //     // user = res.user.data
  //   //     console.log('berhasil get')
  //   //     // server return the data is cookie valid loggedIn is true
  //   //     auth = true // set the data auth
  //   //   } catch (err) {
  //   //     console.log('tidak berhasil')
  //   //     // No valid cookie found
  //   //     auth = false
  //   //     user = null
  //   //   }
  //   // }
  //   if (cookie) {
  //     try {
  //       const res = await $axios.$get('/user')
  //       user = res.data
  //       // user = res.user.data
  //       console.log('berhasil get')
  //       // server return the data is cookie valid loggedIn is true
  //       auth = true // set the data auth
  //     } catch (err) {
  //       // console.log('tidak berhasil')
  //       // No valid cookie found
  //       auth = false
  //       user = null
  //     }
  //   }
  //   commit('SET_AUTH', { auth, user }) // set state auth
  // },

  nuxtServerInit({ commit }, { req, res }) {
    // console.log(req.headers.cookie)
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
}
