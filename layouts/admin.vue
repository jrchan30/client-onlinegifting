<template>
  <div>
    <!-- <client-only placeholder="loading..."> -->
    <AdminSideNav />
    <div id="panel" class="main-content">
      <AdminTopNav />
      <AdminHeader />
      <div class="container-fluid mt--6">
        <Nuxt class="minheight-admin" />
        <AdminFooter />
      </div>
    </div>
    <!-- </client-only> -->
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return { isJQueryLoaded: false }
  },
  head() {
    return {
      title: 'Online Gifting Admin',
      meta: [
        {
          title: 'testing',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/icon-og.png',
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700',
        },
        {
          rel: 'stylesheet',
          href: '/assets/vendor/nucleo/css/nucleo.css',
        },
        {
          rel: 'stylesheet',
          href: '/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/assets/css/argon.min.css',
        },
      ],
      script: [
        // {
        //   src:
        //     'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        //   integrity:
        //     'sha512-bnIvzh6FU75ZKxp0GXLH9bewza/OIw6dLVh9ICg0gogclmYGguQJWl8U30WpbsGTqbIiAwxTsbe76DErLq5EDQ==',
        //   crossorigin: 'anonymous',
        //   body: true,
        // },
        // {
        //   src: '/assets/vendor/js-cookie/js.cookie.js',
        //   body: true,
        // },

        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js',
          integrity:
            'sha512-TqmAh0/sSbwSuVBODEagAoiUIeGRo8u95a41zykGfq5iPkO9oie8IKCgx7yAr1bfiBjZeuapjLgMdp9UMpCVYQ==',
          crossorigin: 'anonymous',
          body: true,
        },
        // Argon Js
        {
          src: '/assets/js/argon.js',
          body: true,
        },
      ],
    }
  },
}
</script>

<style>
.minheight-admin {
  min-height: calc(100vh - 15rem);
}
</style>
