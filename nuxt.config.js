require('dotenv').config()
export default {
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
    title: 'Online Gifting' || '',
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
      { rel: 'icon', type: 'image/x-icon', href: '/icon-og.png' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
      // },
      {
        as: 'style',
        rel: 'stylesheet preload prefetch',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css',
        integrity: 'sha256-imWjOiEEAcjWdL1+inhBu1dWYFyXuiO9vpJVEQd3y/c=',
        crossorigin: 'anonymous',
        defer: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css',
        integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous',
        defer: true,
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        integrity:
          'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
        crossorigin: 'anonymous',
        body: true,
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery.scrollbar/0.2.11/jquery.scrollbar.min.js',
        integrity:
          'sha512-5AcaBUUUU/lxSEeEcruOIghqABnXF8TWqdIDXBZ2SNEtrTGvD408W/ShtKZf0JNjQUfOiRBJP+yHk6Ab2eFw3Q==',
        crossorigin: 'anonymous',
        body: true,
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/jquery-scroll-lock@3.1.3/jquery-scrollLock.min.js',
        integrity: 'sha256-OGBqkSG4kYQ0UbrT7juDZpE/VqIjMPuu6CVKQ1KaTEA=',
        crossorigin: 'anonymous',
        body: true,
      },
      {
        src: '/assets/vendor/js-cookie/js.cookie.js',
        body: true,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/vue-carousel-3d.js', mode: 'client' },
    '~plugins/vform',
    { src: '~/plugins/vue-skeleton.js', mode: 'client' },
    // { src: '~plugins/vue-chartjs.js', mode: 'client' },
    { src: '~plugins/vue-select.js', mode: 'client' },
    // { src: '~plugins/vue-multiselect.js', mode: 'client' },
    { src: '~plugins/vue-treeselect.js', mode: 'client' },
    { src: '~plugins/vue-picture-input.js', mode: 'client' },
    { src: '~plugins/tiptap.js', mode: 'client' },
    { src: '~plugins/vuesax.js' },
    { src: '@/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/axios'},
    // { src: '@/plugins/echo.js', mode: 'client'}
    // { src: '@/plugins/Echos.js', mode: 'client'}
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
    '@aceforth/nuxt-optimized-images',
    // 'pusher-js',
    // [
    //   '@nuxtjs/laravel-echo',
    //   {
    //     broadcaster: 'pusher',
    //     key: process.env.WEBSOCKET_KEY,
    //     cluster: process.env.WEBSOCKET_CLUSTER,
    //     encrypted: false,
    //     wsHost: 'localhost',
    //     wsPort: 6001,
    //     forceTLS: false,
    //     disableStats: true,
    //     authEndpoint: process.env.SANCTUM_URL + '/api/broadcasting/auth'
    //   }
    // ],
  ],

  echo: {
    // authModule: true,
    connectOnLogin: true,
    disconnectOnLogout: true
  },
  
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.npmorg/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    'vue-sweetalert2/nuxt',
    'cookie-universal-nuxt',
    'vue-swatches/nuxt',
    '@nuxtjs/pwa',
    // '@nuxt/image',
  //   ['@nuxtjs/laravel-echo', {
  //     broadcaster: 'pusher',
  //     // authModule: true,
  //     // connectOnLogin: true,
  //     cluster: 'eu',
  //     key: process.env.WEBSOCKET_KEY,
  //     wsHost: 'localhost',
  //     forceTLS: true,
  //     wsPort: process.env.WEBSOCKET_PORT,
  //     wssPort: process.env.WEBSOCKET_PORT,
  //     authEndpoint: 'http://localhost:8000/broadcasting/auth',
  //   }
  // ],
  ],
  axios: {
    credentials: true,
    baseURL: `${process.env.SANCTUM_URL}/api/`,
    https: process.env.HTTPS_BOOL,
    proxy: false,
  },

  auth: {
    redirect: {
      home: '/',
      login: '/login',
      logout: '/login',
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.SANCTUM_URL,
        user: {
          property: 'data',
        },
        endpoints: {
          logout: { url: '/logout', method: 'post' },
        },
        token: {
          maxAge: 60*60*24*365
        },
        watchLoggedIn: true,
        autoLogout: false,
      },
    },
  },

  icon: {
    source: './static/icon-og.png',
  },
  pwa: {
      icon: {
        source: './static/icon-og.png',
      },
      meta: {
        theme_color: '#336699',
      },
      manifest: {
        name: 'Online Gifting',
        short_name: 'OG',
        description: 'Choose your gifts, we handle the rest',
        author: 'Jonathan Russell Chan',
        start_url: '/',
      },
      workbox: {
        importScripts: [
          './push-sw.js'
        ],
      }
    // workbox: {
    //   cachingExtensions: '@/plugins/workbox-sync.js',
    //   enabled: true, // should be off actually per workbox docs due to complications when used in prod
    // },
  },
  // image: {
  //   providers: {
  //     cloudinary: {
  //       baseURL: 'https://online-gifting.s3.ap-southeast-1.amazonaws.com/'
  //     }
  //   }
  // },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // extend(config, ctx) {
    //   config.resolve.symlinks = false
    // },
  },

  serverMiddleware: ['~/serverMiddleware/selectiveSSR.js'],

  loading: {
    color: '#336699',
  },
}
