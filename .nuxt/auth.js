import authMiddleware from '~auth/core/middleware'
import Middleware from './middleware'
import Auth from '~auth/core/auth'
import ExpiredAuthSessionError from '~auth/inc/expired-auth-session-error'

// Active schemes
import scheme_2df8eb24 from '~auth/schemes/cookie'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/login","home":"/","callback":"/login"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"defaultStrategy":"laravelSanctum"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // laravelSanctum
  $auth.registerStrategy('laravelSanctum', new scheme_2df8eb24($auth, {"url":"http://api.onlinegifting.shop","user":{"property":"data"},"endpoints":{"csrf":{"withCredentials":true,"headers":{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json","Accept":"application/json"},"url":"http://api.onlinegifting.shop/sanctum/csrf-cookie"},"login":{"withCredentials":true,"headers":{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json","Accept":"application/json"},"url":"http://api.onlinegifting.shop/login"},"logout":{"withCredentials":true,"headers":{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json","Accept":"application/json"},"url":"http://api.onlinegifting.shop/logout","method":"post"},"user":{"withCredentials":true,"headers":{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json","Accept":"application/json"},"url":"http://api.onlinegifting.shop/api/user"}},"name":"laravelSanctum","cookie":{"name":"XSRF-TOKEN"}}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
