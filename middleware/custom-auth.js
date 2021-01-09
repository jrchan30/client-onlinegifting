export default function ({ app, redirect }) {
  // the following look directly for the cookie created by nuxtjs/auth
  // instead of using $auth.loggedIn
  const user = app.$cookies.get('auth._token.laravelSanctum')
  console.log(user)
  if (!user) {
    // redirect to homepage
    redirect('/login')
  }
}
