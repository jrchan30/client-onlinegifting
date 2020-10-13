<template>
  <div>
    <Navbar />
    <div class="bg-light">
      <nuxt />
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
body {
  font-family: 'Raleway', sans-serif;
}
</style>
