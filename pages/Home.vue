<template>
  <div>
    <HomeSlider />
    <div class="container">
      <LatestProducts />
      <!-- <ProductLowPrice /> -->
      <ProductLowPriceTest />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style scoped>
.carousel-inner {
  box-shadow: none;
}
</style>
