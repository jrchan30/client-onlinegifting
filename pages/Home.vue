<template>
  <div>
    <HomeSlider />
    <div class="container">
      <LatestProducts />
      <ProductLowPrice />
    </div>
  </div>
</template>

<script>
import LatestProducts from '@/components/LatestProduct'
import HomeSlider from '@/components/HomeSlider'
import ProductLowPrice from '@/components/ProductLowPrice'
export default {
  layout: 'default',
  components: {
    LatestProducts,
    HomeSlider,
    ProductLowPrice,
  },
}
</script>

<style scoped>
.carousel-inner {
  box-shadow: none;
}
</style>
