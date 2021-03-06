import Echo from 'laravel-echo'
// import Echo from ''
import { parse as parseCookie } from 'cookie'

export default function (context) {
    window.Pusher = require('pusher-js');
    const test = context.$cookies.getAll()
    const cookies = parseCookie(context.$cookies.getAll().toString())
    // console.log(cookies)
    // console.log(test['XSRF-TOKEN'])
    window.echo = new Echo({
        namespace: 'App.Events',
        broadcaster: 'pusher',
        key: process.env.WEBSOCKET_KEY,
        cluster: 'eu',
        // authEndpoint: 'http://localhost:8000/api/broadcasting/auth',
        forceTLS: false, //tadi false
        logToConsole: true,
        // encrypted: false, //tadi false
        // wsHost: window.location.hostname,
        wsHost: 'localhost',
        wsPort: process.env.WEBSOCKET_PORT,
        wssPort: process.env.WEBSOCKET_PORT,
        disableStats: true,
        enabledTransports: ['ws', 'wss'],
        authorizer: (channel, options) => {
            return {
                authorize: (socketId, callback) => {
                    context.$axios.$post('/broadcasting/auth', {
                        socket_id: socketId,
                        channel_name: channel.name
                    },
                    )
                    .then(response => {
                        callback(false, response);
                    })
                    .catch(error => {
                        callback(true, error);
                    });
                }
            };
        },
    });
}