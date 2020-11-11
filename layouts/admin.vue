<template>
  <div>
    <!-- Sidenav -->
    <AdminSideNav />
    <!-- Main content -->
    <div id="panel" class="main-content">
      <!-- Topnav -->
      <AdminTopNav />

      <!-- <template v-if="$route.path === '/admin'"> -->
      <AdminHeader />
      <!-- </template> -->
      <!-- Page content -->
      <div class="container-fluid mt--6">
        <Nuxt />
        <AdminFooter />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/assets/img/brand/favicon.png',
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
        {
          src: '/assets/vendor/jquery/dist/jquery.min.js',
          body: true,
        },

        {
          src: '/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
          body: true,
        },
        {
          src: '/assets/vendor/js-cookie/js.cookie.js',
          body: true,
        },

        {
          src: '/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js',
          body: true,
        },
        {
          src:
            '/assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js',
          body: true,
        },

        // Forms

        // Argon Js
        {
          src: '/assets/js/argon.min.js',
          body: true,
        },
        // {
        //   src: '/assets/js/demo.min.js',
        //   body: true,
        // },
      ],
    }
  },
}
</script>

<style></style>
