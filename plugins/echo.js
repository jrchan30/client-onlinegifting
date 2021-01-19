import Echo from 'laravel-echo'
// import Echo from ''
import { parse as parseCookie } from 'cookie'

export default function (context) {
    window.Pusher = require('pusher-js');
    const test = context.$cookies.getAll()
    const cookies = parseCookie(context.$cookies.getAll().toString())
    // console.log(cookies)
    // console.log(test['XSRF-TOKEN'])
    window.Echo = new Echo({
        namespace: 'App.Events',
        broadcaster: 'pusher',
        key: process.env.WEBSOCKET_KEY,
        // cluster: 'mt1',
        // authEndpoint: 'http://localhost:8000/api/broadcasting/auth',
        forceTLS: false, //tadi false
        logToConsole: true,
        // encrypted: false, //tadi false
        // wsHost: window.location.hostname,
        wsHost: '127.0.0.1',
        wsPort: process.env.WEBSOCKET_PORT,
        // wssPort: process.env.WEBSOCKET_PORT,
        disableStats: true,
        enabledTransports: ['ws', 'wss'],
        // headers: {
        //     'X-CSRF-TOKEN':  test['XSRF-TOKEN']
        // },
        authorizer: (channel, options) => {
            return {
                authorize: (socketId, callback) => {
                    context.$axios.$post('/broadcasting/auth', {
                        socket_id: socketId,
                        channel_name: channel.name
                    },
                    // {
                    //     Authorization: test['XSRF-TOKEN '], withCredentials: true
                    // }
                    )
                    .then(response => {
                        callback(false, response.data);
                    })
                    .catch(error => {
                        callback(true, error);
                    });
                }
            };
        },
    });
}