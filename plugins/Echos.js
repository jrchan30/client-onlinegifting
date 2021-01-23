import Pusher from 'pusher-js'
import Echo from 'laravel-echo'

// window.Vue = Vue
window.Pusher = Pusher

  export default function (context) {
  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.WEBSOCKET_KEY,
    cluster: 'eu',
    wsHost: 'localhost',
    forceTLS: false,
    wsHost: 'localhost',
    wsPort: process.env.WEBSOCKET_PORT,
    // encrypted: true,
  })
  console.log(window.Echo)
}