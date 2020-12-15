// import { BackgroundSyncPlugin } from 'workbox-background-sync'
// import { registerRoute } from 'workbox-routing'
// import { NetworkOnly } from 'workbox-strategies'

const bgSyncPlugin = new BackgroundSyncPlugin('formQueue', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
})

registerRoute(
  /https:\/\/onlinegifting\.shop\/api/,
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
)
