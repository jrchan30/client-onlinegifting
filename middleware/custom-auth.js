// export default async function ({ app, redirect }) {
//   // the following look directly for the cookie created by nuxtjs/auth
//   // instead of using $auth.loggedIn
// //   const user = await app.$cookies.get('auth._token.laravelSanctum')
// //   if (!user) {
// //     // redirect to homepage
// //     redirect('/register')
// //   }

// }

// export default function ({ app, redirect }) {
//   app.router.beforeResolve((to, from, next) => {
//     if (app.store.getters.isAuthenticated) {
//       next('/products')
//     } else {
//       next('/')
//     }
//   })
// }

export default function ({ store, redirect }) {
  if (!store.getters.isAuthenticated) {
    return redirect('/login')
  }
}
