/* eslint-disable no-undef */
const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(
  'formQueue',
  {
    maxRetentionTime: 1 * 60,
  }
)

workbox.routing.registerRoute(
  /https:\/\/api\.onlinegifting\.shop\/api/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
)
