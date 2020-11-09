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
          src: '@/assets/style/bootstrap.min.css',
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
