<template>
  <div>
    <div v-if="isFetching || !items" class="container">
      <div class="row mt-5">
        <div v-for="index in 12" :key="index" class="col-6 col-md-3 py-4">
          <content-placeholders :rounded="true">
            <content-placeholders-img />
            <content-placeholders-heading />
          </content-placeholders>
        </div>
      </div>
    </div>
    <div v-else class="container">
      <div class="row mt-5">
        <div v-for="item in items" :key="item.id" class="col-6 col-md-3">
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
      default: true,
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
