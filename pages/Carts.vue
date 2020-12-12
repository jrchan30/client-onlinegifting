<template>
  <div>
    <div v-if="!$fetchState.pending">
      <div
        class="bg-container bg-none bg-md-block"
        :class="{
          'bg-cart-empty':
            CART.data[0].boxes.length < 1 && CART.data[0].bundles.length < 1,
        }"
      >
        <div
          v-if="
            CART.data[0].boxes.length < 1 && CART.data[0].bundles.length < 1
          "
        >
          <div class="row">
            <div
              class="mt-md-5 col-7 offset-1 col-md-6 col-lg-5 col-xl-4 offset-md-1 offset-lg-2 offset-xl-3"
            >
              <vs-alert
                color="rgba(51, 102, 153, 0.2)"
                class="px-0 px-xl-4"
                shadow
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <template #title> Empty Cart </template>
                <p class="d-none d-md-block">
                  You have an empty cart, you can add your
                  <b to="/boxes">custom boxes</b> or
                  <b to="/bundles">premade bundles</b> to your cart.
                </p>
                <p>Let's get started by clicking one of the button below</p>
                <div class="d-flex">
                  <vs-button warn gradient to="/boxes">
                    Custom Boxes
                  </vs-button>
                  <vs-button danger gradient to="/bundles">
                    Premade Bundles
                  </vs-button>
                </div>
              </vs-alert>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="container">
            <div class="bg-white rounded p-3">
              <h4 class="font-weight-bold custom-color">
                Your Cart <i class="fas fa-boxes"></i>
              </h4>
              <p class="custom-color d-flex">
                This is your list of cart items, you can add boxes and bundles
                to your cart
              </p>
              <client-only>
                <vs-table v-model="selected">
                  <template #thead>
                    <vs-tr>
                      <vs-th>
                        <vs-checkbox
                          v-model="allCheck"
                          :indeterminate="selected.length == mergedCart.length"
                          @change="
                            selected = $vs.checkAll(selected, mergedCart)
                          "
                        />
                      </vs-th>
                      <vs-th> ID/Type </vs-th>
                      <vs-th> Name </vs-th>
                      <vs-th> Weight (gr) </vs-th>
                      <vs-th> Price (IDR) </vs-th>
                      <vs-th> Remove </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      v-for="(tr, i) in mergedCart"
                      :key="i"
                      :data="tr"
                      :is-selected="!!selected.includes(tr)"
                    >
                      <vs-td checkbox>
                        <vs-checkbox v-model="selected" :val="tr" />
                      </vs-td>
                      <vs-td>
                        {{ tr.id }}
                        <span
                          class="badge badge-pill"
                          :class="{
                            'badge-primary': tr.type == 'box',
                            'badge-warning': tr.type == 'bundle',
                          }"
                          >{{ tr.type }}</span
                        >
                      </vs-td>
                      <vs-td>
                        {{ tr.name }}
                      </vs-td>
                      <vs-td>
                        {{ tr.type }}
                      </vs-td>
                      <vs-td>
                        {{ tr.price }}
                      </vs-td>
                      <vs-td>
                        <vs-button
                          danger
                          gradient
                          :disabled="loading"
                          @click="remove(tr.id, tr.type)"
                        >
                          Remove
                        </vs-button>
                      </vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
              </client-only>
            </div>
            <!-- <span class="data">
              <pre>
  {{ selected.length > 0 ? selected : 'Select an item in the table' }}
        </pre
              >
            </span> -->
            <button class="btn btn-primary" @click="midtransSnap">Pay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'default',
  middleware: 'auth',
  async fetch() {
    await this.GET_CART()
  },
  data() {
    return {
      cartBoxBundle: {},
      allCheck: false,
      selected: [],
      loading: false,
      courier: {},
    }
  },
  computed: {
    ...mapGetters({
      CART: 'users/CART',
    }),
    mergedCart() {
      const arrBoxes = this.CART.data[0].boxes
      const arrBundles = this.CART.data[0].bundles
      Array.prototype.push.apply(arrBoxes, arrBundles)
      return arrBoxes
    },
  },
  methods: {
    ...mapActions({
      GET_CART: 'users/GET_CART',
    }),
    midtransSnap() {
      this.$axios.$post('/checkout').then((response) => {
        window.snap.pay(response)
      })
    },
  },
  head() {
    return {
      script: [
        {
          type: 'text/javascript',
          src: 'https://app.sandbox.midtrans.com/snap/snap.js',
          'data-client-key': process.env.MIDTRANS_CLIENT_KEY || null,
        },
      ],
    }
  },
}
</script>

<style scoped>
.bg-cart-empty {
  background-image: url('/image/empty_cart.svg');
}

.bg-container {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100vw;
  min-height: calc(100vh - 15rem);
}
</style>
