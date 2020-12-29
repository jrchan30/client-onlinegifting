// export default async function ({ app, redirect }) {
//   // the following look directly for the cookie created by nuxtjs/auth
//   // instead of using $auth.loggedIn
//   const user = await app.$cookies.get('auth._token.laravelSanctum')
//   console.log(user)
//   if (user === false) {
//     redirect('/login')
//   }
// }

export default async function ({ app, store, redirect }) {
  let auth = false
  let user = null
  const cookie = app.$cookies.get('auth._token.laravelSanctum')

  if (cookie) {
    // console.log(req.headers.cookie)
    // cookie found
    try {
      // check data user login with cookie
      const res = await this.$axios.$get('/user')
      user = res.data
      // user = res.user.data
      console.log('berhasil get')
      // server return the data is cookie valid loggedIn is true
      auth = true // set the data auth
    } catch (err) {
      console.log('tidak berhasil')
      // No valid cookie found
      auth = false
      user = null
      redirect('/login')
    }
  }
  store.commit('set', { auth, user }) // set state auth
}
