<template>
  <div class="pt-5">
    <h4 class="font-weight-bold custom-color">Budget Products</h4>
    <p class="custom-color">
      Here is a list of "SAVE FOR WALLET" products to accomodate anyones budget
      and needs
    </p>
    <div class="row">
      <div
        v-for="product in LOWPRICE"
        :key="product.id"
        class="col-sm-3 col-md-4 col-lg-3 pb-4"
      >
        <!-- <nuxt-link :to="`/products/${product.id}`"> -->
        <vs-card @click="goTo()">
          <template #title>
            <h3>{{ product.name }}</h3>
          </template>
          <template #img>
            <img :src="product.images[0].url" class="img-ratio" alt="" />
          </template>
          <template #text>
            <p>{{ product.price }} IDR</p>
          </template>
          <template #interactions>
            <vs-button
              danger
              icon
              :disabled="$auth.user == null"
              @click="like(product.id)"
            >
              <i class="bx bx-heart"></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class="bx bx-chat"></i>
              <span class="span"> 54 </span>
            </vs-button>
          </template>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  async fetch() {
    await this.GET_LOWPRICE()
  },
  data() {
    return {
      activeItem: null,
      active: 'guide',
      activeSidebar: false,
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
    like() {
      console.log('like button pressed')
    },
    goTo() {
      console.log('card pressed')
    },
  },
}
</script>
