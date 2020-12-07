<template>
  <div class="home-margin">
    <HomeSlider />
    <div class="container">
      <LatestProductTest2 />
      <ProductLowPriceTest2 />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  methods: {
    goToAdmin() {
      this.$router.push({
        path: '/admin/AdminHome',
      })
    },
  },
}
</script>

<style scoped>
.carousel-inner {
  box-shadow: none;
}

.home-margin {
  margin-top: -3.5rem;
}
</style>
