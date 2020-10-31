<template>
  <div class="container">
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-6 col-md-2">
        <CardItem
          class="item"
          :route="`/products/${item.id}`"
          :image="item.images[0].url"
          :stock="item.stock"
        >
          <template v-slot:caption></template>
          <template v-slot:title>
            {{ item.name }}
          </template>
          <template v-slot:price>Rp.{{ item.price }}</template>
        </CardItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    items: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style></style>
