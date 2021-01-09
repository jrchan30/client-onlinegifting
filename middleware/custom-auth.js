export default function ({ app, redirect }) {
  console.log(app.$auth.loggedIn)
  if (!app.$auth.loggedIn) {
    return redirect('/login')
  }
}
