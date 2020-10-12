require('dotenv').config()
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css',
        integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous',
        defer: true,
      },
      {
        rel: 'stylesheet',
        href: '/css/bootstrap.min.css',
        defer: true,
      },
      {
        rel: 'stylesheet',
        href: '/css/now-ui-kit.css?v=1.3.0',
        defer: true,
      },
      // {
      //   rel: 'stylesheet',
      //   href: '/demo/demo.css',
      // },
    ],
    script: [
      {
        src: '/js/core/jquery.min.js',
        type: 'text/javascript',
        body: true,
      },
      {
        src: '/js/core/popper.min.js',
        type: 'text/javascript',
        body: true,
      },
      {
        src: '/js/core/bootstrap.min.js',
        type: 'text/javascript',
        body: true,
      },
      {
        src: '/js/plugins/bootstrap-switch.js',
        type: 'text/javascript',
        body: true,
      },
      {
        src: '/js/plugins/nouislider.min.js',
        type: 'text/javascript',
        body: true,
      },
      {
        src: '/js/plugins/bootstrap-datepicker.js',
        type: 'text/javascript',
        body: true,
      },
      {
        src: '/js/now-ui-kit.js?v=1.3.0',
        type: 'text/javascript',
        body: true,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/vue-carousel-3d.js', mode: 'client' },
    '~plugins/vform',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
  ],
  axios: {
    credentials: true,
    baseURL: `${process.env.SANCTUM_URL}/api/`,
    https: process.env.HTTPS_BOOL,
    proxy: false,
  },
  auth: {
    redirect: {
      home: false,
      login: '/login',
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.SANCTUM_URL,
        endpoints: {
          logout: { url: '/logout', method: 'post' },
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
