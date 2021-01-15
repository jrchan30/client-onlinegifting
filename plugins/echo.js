import Echo from 'laravel-echo'

export default function () {
    window.Pusher = require('pusher-js');

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: process.env.WEBSOCKET_KEY,
        cluster: 'mt1',

        forceTLS: false,
        encrypted: false,
        wsHost: window.location.hostname,
        wsPort: process.env.WEBSOCKET_PORT,
        wssPort: process.env.WEBSOCKET_PORT,
        disableStats: true,
        enabledTransports: ['ws', 'wss']
    });
}