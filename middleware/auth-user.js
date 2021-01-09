// // export default async function ({ app, redirect }) {
// //   // the following look directly for the cookie created by nuxtjs/auth
// //   // instead of using $auth.loggedIn
// //   const user = await app.$cookies.get('auth._token.laravelSanctum')
// //   console.log(user)
// //   if (user === false) {
// //     redirect('/login')
// //   }
// // }

// import axios from '@nuxtjs/axios'

// export default async function ({ app, store, redirect, context }) {
//   let auth = false
//   let user = null
//   const cookie = app.$cookies.get('auth._token.laravelSanctum')

//   if (cookie) {
//     // console.log(req.headers.cookie)
//     // cookie found
//     console.log(axios)
//     try {
//       // check data user login with cookie
//       const res = await axios.get('/user')
//       user = res.data
//       // user = res.user.data
//       // console.log(user)
//       console.log('berhasil get')
//       // server return the data is cookie valid loggedIn is true
//       auth = true // set the data auth
//     } catch (err) {
//       console.log('tidak berhasil')
//       // No valid cookie found
//       auth = false
//       user = null
//       redirect('/login')
//     }
//   }
//   console.log(auth)
//   console.log(user)
//   redirect('/products')
//   // store.commit('SET_AUTH', { auth, user }) // set state auth
// }
