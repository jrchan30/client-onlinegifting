<template>
  <div>
    <Navbar />
    <div class="bg-light">
      <Nuxt />
    </div>
    <FooterLgRg />
  </div>
</template>

<script>
import Navbar from '@/layouts/partials/main/Navbar'
import FooterLgRg from '@/layouts/partials/loginRegister/FooterLgRg'

export default {
  components: {
    Navbar,
    FooterLgRg,
  },
}
</script>

<style>
* {
  outline: none;
}
</style>
