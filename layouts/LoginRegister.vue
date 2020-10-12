<template>
  <div>
    <HeaderLgRg />
    <Nuxt />
    <FooterLgRg :class="classFooter" />
  </div>
</template>

<script>
import HeaderLgRg from '@/layouts/partials/loginRegister/HeaderLgRg'
import FooterLgRg from '@/layouts/partials/loginRegister/FooterLgRg'

export default {
  components: {
    HeaderLgRg,
    FooterLgRg,
  },
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
}
</script>

<style>
.footer-lg {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}

@media screen and (max-height: 630px) {
  .footer-lg {
    position: relative;
  }
}

.footer-rg {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}

@media screen and (max-height: 730px) {
  .footer-rg {
    position: relative;
  }
}

.font-color-custom {
  color: #336699;
}

.text-custom {
  font-size: 10px;
}
</style>
