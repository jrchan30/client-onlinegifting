<template>
  <div v-if="LOWPRICE" class="row">
    <div
      v-for="product in products"
      :key="product.id"
      class="col-6 col-md-2 px-1"
    >
      <CardItem
        class="item"
        :route="`/products/${product.id}`"
        :image="product.images[0].url"
        :stock="product.stock"
      >
        <template v-slot:caption></template>
        <template v-slot:title>
          {{ product.name }}
        </template>
        <template v-slot:price>Rp.{{ product.price }}</template>
      </CardItem>
    </div>
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

    products() {
      return this.LOWPRICE.filter((i) => i.stock > 0)
    },
  },
  methods: {
    ...mapActions({
      GET_LOWPRICE: 'products/GET_LOWPRICE',
    }),
  },
}
</script>

<style scoped>
.item {
  transition: 0.3s ease;
}

.item:hover {
  opacity: 0.3;
}
</style>
