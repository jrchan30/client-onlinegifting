<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide container bg-dark"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner h-100">
      <div
        v-for="(product, index) in LATEST"
        :key="product.id"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <div class="row">
          <img
            v-if="product.images.length > 0"
            class="d-block col-6 h-100"
            :src="product.images[0].url"
            alt="image unavailable"
          />
          <h2 class="col-6 text-white">{{ product.name }}</h2>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      LATEST: 'products/LATEST',
    }),
    bindActive(index) {
      if (index === 0) {
        return 'active'
      } else {
        return ''
      }
    },
  },
  async mounted() {
    await this.GET_LATEST()
    this.current = this.LATEST[0]
  },
  methods: {
    ...mapActions({
      GET_LATEST: 'products/GET_LATEST',
    }),
  },
}
</script>

<style scoped>
.container {
  width: 20%;
  height: 200px;
}
</style>
