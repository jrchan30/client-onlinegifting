<template>
  <CardMain>
    <template v-slot:title>
      <h4 class="font-weight-bold custom-color">Our Latest Products Added</h4>
      <p class="custom-color">
        This is our latest products, click on product's card to see more details
        about the product
      </p>
    </template>
    <template v-slot:body>
      <vs-card-group>
        <vs-card
          v-for="product in LATEST"
          :key="product.id"
          class="px-1"
          @click="handleClick"
        >
          <template #title>
            <h3 class="text-primary text-capitalize">{{ product.name }}</h3>
          </template>
          <template #img>
            <img :src="product.images[0].url" alt="" />
          </template>
          <template #text>
            <span>{{ product.price }} IDR</span>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx bx-heart"></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class="bx bx-chat"></i>
              <span class="span"> 54 </span>
            </vs-button>
          </template>
        </vs-card>
      </vs-card-group>
    </template>
  </CardMain>
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
    handleClick() {
      console.log('clicked')
    },
  },
}
</script>

<style></style>
