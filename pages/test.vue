<template>
  <div class="row mt-3">
    <div
      v-for="product in LOWPRICE"
      :key="product.id"
      class="col-sm-3 col-md-4 col-lg-3 pb-4"
    >
      <vs-card>
        <template #title>
          <h3>{{ product.name }}</h3>
        </template>
        <template #img>
          <img :src="product.images[0].url" alt="" />
        </template>
        <template #text>
          <p>blablabla</p>
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
  },
}
</script>
