<template>
  <CardSkeleton>
    <template v-slot:title>
      <h4 class="font-weight-bold custom-color">Our Latest Products Added</h4>
      <p class="custom-color">
        This is our latest products, click on product's card to see more details
        about the product
      </p>
    </template>
    <template v-slot:body>
      <vs-card-group>
        <vs-card v-for="product in LATEST" :key="product.id" class="px-1">
          <template #title>
            <h3 class="text-primary text-capitalize">{{ product.name }}</h3>
          </template>
          <template #img>
            <img :src="product.main_image" class="img-ratio" alt="" />
          </template>
          <template #text>
            <span>{{ product.price }} IDR</span>
          </template>
          <template #interactions>
            <vs-button danger icon :disabled="$auth.user == null">
              <i class="bx bx-heart"></i>
            </vs-button>
            <vs-button shadow icon :disabled="$auth.user == null">
              <i class="fas fa-cart-plus text-primary"></i>
            </vs-button>
          </template>
        </vs-card>
      </vs-card-group>
    </template>
  </CardSkeleton>
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

<style></style>
