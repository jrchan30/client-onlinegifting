export default async function ({ app, redirect }) {
  await app.$auth.loggedIn
  if (app.$auth.loggedIn) {
    return redirect('/')
  }
}
