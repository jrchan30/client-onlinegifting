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
          <div class="container" data-aos="fade" data-aos-duration="1500">
            <div class="bg-white rounded p-3">
              <h4 class="font-weight-bold custom-color">
                Your Cart <i class="fas fa-boxes"></i>
              </h4>
              <p class="custom-color d-flex">
                This is your list of cart items, you can add boxes and bundles
                to your cart
              </p>
              <vs-alert shadow class="mb-4">
                Select box/bundles using the checkboxes to delete from cart or
                proceed to payment
              </vs-alert>
              <client-only>
                <vs-table
                  v-model="selected"
                  data-aos="fade"
                  data-aos-duration="1000"
                >
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
                    </vs-tr>
                  </template>
                </vs-table>
              </client-only>
              <div class="d-flex justify-content-between">
                <vs-button
                  v-if="selected.length > 0"
                  data-aos="fade"
                  gradient
                  danger
                  width="6000"
                  class="my-4 px-2"
                >
                  <i class="bx bxs-trash mr-2"></i> Remove
                </vs-button>

                <vs-button
                  v-if="selected.length > 0"
                  data-aos="fade"
                  gradient
                  color="#336699"
                  class="my-4"
                  @click="checkoutPrompt"
                >
                  <i class="far fa-credit-card mr-2"></i> Proceed to Checkout
                </vs-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <vs-dialog v-model="activePrompt" overflow-hidden blur prevent-close>
          <template #header>
            <h4 class="not-margin">Checkout Details</h4>
          </template>

          <div class="container">
            <div class="row pb-5">
              <strong class="text-center col-12">User Details</strong>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 pb-2">
                <vs-input
                  v-model="address"
                  color="#336699"
                  type="text"
                  label="Your Address"
                  placeholder="Jl. Raya Kb. Jeruk No.27, RT.2/RW.9"
                  class="pb-3"
                  required
                >
                  <template #icon>
                    <i class="bx bxs-edit-location"></i>
                  </template>
                </vs-input>
              </div>
              <div class="col-12 col-md-6 pb-2">
                <vs-input
                  v-model="phoneNum"
                  type="tel"
                  label="Your Phone Number"
                  placeholder="081514329539"
                  required
                >
                  <template #icon> <i class="bx bx-phone"></i> </template>
                </vs-input>
              </div>
            </div>

            <div class="border-bottom pb-2 mb-4">
              <vs-checkbox v-model="isUpdate"
                >Update profile details</vs-checkbox
              >
            </div>

            <div class="row pb-5">
              <strong class="text-center col-12">Shipping Details</strong>
            </div>

            <div class="row">
              <div v-if="PROVINCES" class="col-12 col-md-6 pb-4">
                <vs-select
                  v-model="receiver.province"
                  filter
                  placeholder="Province"
                  label="Receiver Province"
                >
                  <vs-option
                    v-for="(province, index) in PROVINCES"
                    :key="index"
                    :value="`${province.province}|${province.province_id}`"
                    :label="province.province"
                    >{{ province.province }}</vs-option
                  >
                </vs-select>
              </div>
              <div v-if="CITIES" class="col-12 col-md-6 pb-4">
                <vs-select
                  v-model="receiver.city"
                  :disabled="receiver.province === ''"
                  placeholder="City"
                  label="Receiver City | Postal Code"
                >
                  <template v-for="city in CITIES(receiver.province)">
                    <vs-option
                      :key="`${city.city_id}-${city.province_id}`"
                      :value="`${city.city_name}|${city.city_id}|${city.province_id}|${city.type}|${city.postal_code}`"
                      :label="`${city.city_name} | ${city.postal_code}`"
                      >{{ city.city_name }} | {{ city.postal_code }}</vs-option
                    >
                  </template>
                </vs-select>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12 col-md-6 pb-4">
                <vs-input
                  v-model="receiver.phoneNum"
                  type="tel"
                  label="Receiver Phone Number"
                  placeholder="081514329539"
                  required
                >
                  <template #icon> <i class="bx bx-phone"></i> </template>
                </vs-input>
              </div>
              <div class="col-12 col-md-6 pb-4">
                <vs-input
                  v-model="receiver.address"
                  color="#336699"
                  type="text"
                  label="Receiver Full Address"
                  placeholder="Jl. Raya Kb. Jeruk No.27, RT.2/RW.9"
                  class="pb-3"
                  required
                >
                  <template #icon>
                    <i class="bx bxs-edit-location"></i>
                  </template>
                </vs-input>
              </div>
              <div v-if="COURIERS" class="col-12 col-md-6 pb-4">
                <vs-select
                  v-model="receiver.courier"
                  filter
                  :disabled="receiver.city === ''"
                  placeholder="OGC"
                  label="Courier (Need to choose city first)"
                >
                  <vs-option
                    v-for="(c, index) in COURIERS"
                    :key="index"
                    :value="`${c.code}`"
                    :label="c.code"
                    >{{ c.code }}</vs-option
                  >
                </vs-select>
              </div>
              <div
                v-if="receiver.courier == 'OGC'"
                class="col-12 col-md-6 pb-4"
              >
                <vs-input
                  v-model="receiver.arrivalDate"
                  type="date"
                  label="Arrival Date"
                />
              </div>
              <template
                v-if="receiver.courier != 'OGC' && receiver.courier != ''"
              >
                <div class="col-12 col-md-6 pb-4">
                  <vs-select
                    v-model="receiver.service"
                    filter
                    placeholder="Choose Service"
                    label="Service"
                  >
                    <vs-option
                      v-for="(c, index) in COURIERS"
                      :key="index"
                      :value="`${c.code}`"
                      :label="c.code"
                      >{{ c.code }}</vs-option
                    >
                  </vs-select>
                </div>
              </template>
            </div>
          </div>

          <template #footer>
            <div class="container" @click="midtransSnap">
              <vs-button block> Proceed to payment </vs-button>
            </div>
          </template>
        </vs-dialog>
      </div>
    </div>
    <div v-else>
      <div
        class="container bg-white rounded"
        data-aos="fade"
        data-aos-duration="1000"
      >
        <div class="row py-3">
          <div class="col-12">
            <h4 class="font-weight-bold custom-color">
              Fetching neccessary data
            </h4>
            <p class="custom-color d-flex">
              Please wait for a bit, might take a while due to our limited
              resources :(
            </p>
            <content-placeholders :rounded="true">
              <content-placeholders-heading class="py-1" />
              <content-placeholders-text class="py-1" />
            </content-placeholders>
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
    await this.GET_PROVINCES()
    await this.GET_CITIES()
  },
  data() {
    return {
      cartBoxBundle: {},
      allCheck: false,
      selected: [],
      loading: false,
      courier: {},
      activePrompt: false,
      address: '',
      phoneNum: '',
      isUpdate: false,
      totalWeight: null,
      receiver: {
        phoneNum: '',
        address: '',
        province: '',
        city: '',
        courier: '',
        service: '',
        arrivalDate: null,
      },
    }
  },

  computed: {
    ...mapGetters({
      CART: 'users/CART',
      PROVINCES: 'shipping/PROVINCES',
      CITIES: 'shipping/CITIES',
      COURIERS: 'shipping/COURIERS',
      SERVICES_COSTS: 'shipping/SERVICES_COSTS',
    }),
    mergedCart() {
      const arrBoxes = this.CART.data[0].boxes
      const arrBundles = this.CART.data[0].bundles
      Array.prototype.push.apply(arrBoxes, arrBundles)
      return arrBoxes
    },
  },
  watch: {
    'receiver.province'() {
      this.receiver.city = ''
      this.receiver.courier = ''
    },
    'receiver.city'() {
      this.receiver.courier = ''
    },
    async 'receiver.courier'(val) {
      this.receiver.service = ''
      if (val !== 'OGC' && val !== '' && this.receiver.city !== '') {
        console.log('masuk')
        const arrCity = this.receiver.city.split('|')
        const cityId = arrCity[1]
        const details = {
          destination: cityId,
          weight: this.totalWeight,
          courier: this.receiver.courier,
        }
        console.log('weight: ' + this.totalWeight)
        console.log('courier: ' + this.receiver.courier)
        console.log('cityId: ' + cityId)
        console.log(details)
        await this.GET_SERVICES_COSTS(details)
      }
    },
  },

  created() {
    this.getNextWeek()
  },

  methods: {
    ...mapActions({
      GET_CART: 'users/GET_CART',
      GET_PROVINCES: 'shipping/GET_PROVINCES',
      GET_CITIES: 'shipping/GET_CITIES',
      GET_SERVICES_COSTS: 'shipping/GET_SERVICES_COSTS',
    }),
    clear() {
      Object.assign(this.$data, this.$options.data())
    },
    getNextWeek() {
      const future = new Date() // get today date
      future.setDate(future.getDate() + 7) // add 7 days
      const finalDate =
        future.getFullYear() +
        '-' +
        (future.getMonth() + 1 < 10 ? '0' : '') +
        (future.getMonth() + 1) +
        '-' +
        future.getDate()
      this.receiver.arrivalDate = finalDate
    },
    checkoutPrompt() {
      this.address = this.$auth.user.detail.address
      this.phoneNum = this.$auth.user.detail.phone_num
      this.totalWeight = this.selected.reduce((sum, x) => sum + x.weight, 0)
      this.activePrompt = !this.activePrompt
    },
    midtransSnap() {
      const arrBundles = []
      const arrBoxes = []
      this.selected.map((x) => {
        if (x.type.includes('bundle')) {
          arrBundles.push(x.id)
        } else {
          arrBoxes.push(x.id)
        }
      })
      const form = {
        arrBundles,
        arrBoxes,
      }
      try {
        this.$axios.$post('/checkout', form).then((response) => {
          window.snap.pay(response)
        })
      } catch (e) {}
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

.vs-select-content {
  max-width: 100%;
}
</style>
