import { parse as parseCookie } from 'cookie'

/**
 * This middleware is needed when running with SSR
 * it checks if the token in cookie is set and injects it into the nuxtjs/auth module
 * otherwise it will redirect to login
 * @param context
 */
export default async function (context) {
  if (process.server && context.req.headers.cookie != null) {
    try {
      const cookies = parseCookie(context.req.headers.cookie)
      const token = cookies['auth._token.laravelSanctum'] || ''
      // console.log('headers.cookie token', token)
      // console.log('debugAuthMiddleware $auth 1', context.$auth.$state)
      if (!token || token.includes('false')) {
        // sometimes it stores 'Bearer false' when it unsets
        return
      }

      const xsrf = cookies['XSRF-TOKEN'] || false
      if (!xsrf) {
        return
      }
      // console.log('xsrf', xsrf)
      await context.$auth.strategy.token.set('XSRF-TOKEN', xsrf)
      await context.$auth.setUser(context.$auth.user)
      context.$auth.$state.loggedIn = true
    } catch (e) {
      console.error('debugAuthMiddleware', e)
    }
    // console.log('debugAuthMiddleware $auth 2', context.$auth.$state);
  }
}
