<template>
  <div v-if="LATEST" class="py-2">
    <section class="row section-border shadow pb-2 mx-0">
      <h1
        class="col-10 py-3 m-auto text-center text-uppercase font-weight-bold border-bottom"
      >
        Our Top 5 Latest Products
      </h1>
      <div class="col-12 col-md-8">
        <client-only>
          <carousel-3d
            :clickable="false"
            :controls-visible="true"
            :controls-prev-html="'&laquo;'"
            :controls-next-html="'&raquo;'"
            :controls-width="60"
            :controls-height="50"
            :display="3"
            :space="150"
            :perspective="0"
            :border="0"
            @before-slide-change="changeDescription"
          >
            <slide v-for="(product, i) in LATEST" :key="product.id" :index="i">
              <div v-if="product.images.length > 0">
                <img
                  loading="lazy"
                  class="main-slider-border"
                  :src="product.images[0].url"
                  alt="Image Unavailable"
                />
              </div>
            </slide>
          </carousel-3d>
        </client-only>
      </div>
      <div class="col-12 col-md-4 align-self-center">
        <p class="text-primary">{{ current.name }}</p>
        <p class="">{{ current.description }}</p>
        <p class="card-text">Rp. {{ current.price }}</p>
        <nuxt-link :to="`/products/${current.id}`"
          ><button class="btn-primary">View</button></nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async fetch() {
    try {
      await this.GET_LATEST()
    } catch (e) {
      console.log(e)
    }
    this.current = this.LATEST[0]
  },
  data() {
    return {
      current: {},
    }
  },
  computed: {
    ...mapGetters({
      LATEST: 'products/LATEST',
    }),
  },
  methods: {
    ...mapActions({
      GET_LATEST: 'products/GET_LATEST',
    }),
    changeDescription(index) {
      this.current = this.LATEST[index]
    },
  },
}
</script>

<style scoped>
.main-slider-border {
  border-radius: 50px;
  border: none;
}

.section-border {
  border-radius: 20px;
  border: 2px;
}

h1 {
  font-size: 20px;
}
</style>
