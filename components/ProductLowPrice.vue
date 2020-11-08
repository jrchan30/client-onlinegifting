<template>
  <div class="py-2">
    <section class="row section-border bg-white shadow py-2 pb-2">
      <div
        v-for="product in LOWPRICE"
        :key="product.id"
        class="col-4 col-md-2 px-md-2 pb-2 pt-4"
      >
        <nuxt-link :to="`/products/${product.id}`" class="text-dark">
          <div v-if="product.images.length > 0" class="card h-md-100">
            <div class="card-hover">
              <img
                class="card-img-top"
                loading="lazy"
                :src="product.images[0].url"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title text-truncate">
                  {{ product.name }}
                </h5>
                <p class="card-text font-weight-bold">Rp.{{ product.price }}</p>
                <p class="card-text mb-0">Stock: {{ product.stock }}</p>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped bg-info"
                    role="progressbar"
                    :style="{ width: product.stock + '%' }"
                    :aria-valuenow="product.stock"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async fetch() {
    await this.GET_LOWPRICE()
  },
  data() {
    return {
      activeItem: null,
    }
  },
  computed: {
    ...mapGetters({
      LOWPRICE: 'products/LOWPRICE',
    }),
  },
  methods: {
    ...mapActions({
      GET_LOWPRICE: 'products/GET_LOWPRICE',
    }),
  },
}
</script>

<style scoped>
.section-border {
  border-radius: 20px;
  border: 2px;
}

.card-hover {
  transition: 0.5s ease;
}

.card-hover:hover {
  opacity: 0.3;
}

.card-title {
  font-size: 12px;
}

.card-text {
  font-size: 10px;
}

.progress {
  height: 5px;
}
</style>
