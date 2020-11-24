<template>
  <div>
    <HomeSlider />
    <div class="container">
      <!-- <button @click="goToAdmin">click to get to admin home</button> -->
      <!-- <LatestProducts /> -->
      <LatestProductTest2 />
      <!-- <ProductLowPrice /> -->
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
</style>
