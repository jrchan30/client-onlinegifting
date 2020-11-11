<template>
  <div>
    <LoginRegisterHeader />
    <Nuxt />
    <LoginRegisterFooter :class="classFooter" />
  </div>
</template>

<script>
export default {
  computed: {
    classFooter() {
      if (this.$route.path === '/login') {
        return 'footer-lg'
      } else if (this.$route.path === '/register') {
        return 'footer-rg'
      }
      return ''
    },
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/style/bootstrap.min.css',
        },
      ],
      script: [
        {
          src: '/js/navbar.js',
          body: true,
        },
        {
          src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          integrity:
            'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
          crossorigin: 'anonymous',
          body: true,
        },
        {
          src:
            'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
          integrity:
            'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN',
          crossorigin: 'anonymous',
          body: true,
        },
        {
          src:
            'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
          integrity:
            'sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV',
          crossorigin: 'anonymous',
          body: true,
        },
      ],
    }
  },
}
</script>

<style>
body,
html {
  height: 100%;
}

.footer-lg {
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media screen and (max-height: 633px) {
  .footer-lg {
    position: relative;
  }
}

.footer-rg {
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media screen and (max-height: 925px) {
  .footer-rg {
    position: relative;
  }
}
</style>
