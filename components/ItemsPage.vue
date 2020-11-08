<template>
  <div>
    <div v-if="isFetching">
      <Spinner />
    </div>
    <div v-if="items" class="container">
      <div class="row">
        <div v-for="item in items" :key="item.id" class="col-6 col-md-2">
          <CardItem
            class="item"
            :route="`/${type}/${item.id}`"
            :image="item.main_image"
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
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    isFetching: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
