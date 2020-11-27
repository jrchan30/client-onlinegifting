<template>
  <div class="pt-5">
    <h4 class="font-weight-bold custom-color">
      On-budget Products <i class="far fa-smile-wink"></i>
    </h4>
    <p class="custom-color">
      Here is a list of products to accomodate anyones budget and needs
    </p>
    <CardMain :items="LOWPRICE" :item-type="'products'" />
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
  },
  methods: {
    ...mapActions({
      GET_LOWPRICE: 'products/GET_LOWPRICE',
    }),
  },
}
</script>
