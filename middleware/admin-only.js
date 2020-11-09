export default function ({ app, redirect }) {
  if (app.$auth.user.type !== 'admin') {
    return redirect('/')
  }
}
