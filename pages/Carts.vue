<template>
  <div>
    <div v-if="!initialLoading">
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
                        {{ tr.weight }}
                      </vs-td>
                      <vs-td>
                        {{ tr.price }}
                      </vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
              </client-only>
              <div v-if="selected.length > 0 && !weightExceeds">
                <vs-alert color="danger">
                  <template #title> Weight Exceeds Limit </template>
                  Selected items must not exceeds 30.000 gr, trucking delivery
                  service is currently not supported
                </vs-alert>
              </div>
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
                  v-if="selected.length > 0 && weightExceeds"
                  data-aos="fade"
                  gradient
                  color="#336699"
                  class="my-4"
                  :disabled="!weightExceeds"
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
                  v-model="tempAddress"
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
                  <template v-if="!validUserAddress" #message-danger>
                    Required (Between 10-60 letters)
                  </template>
                </vs-input>
              </div>
              <div class="col-12 col-md-6 pb-2">
                <vs-input
                  v-model="tempPhoneNum"
                  color="#336699"
                  type="tel"
                  label="Your Phone Number"
                  placeholder="xxxxxxxxxx"
                  required
                >
                  <template #icon> <i class="bx bx-phone"></i> </template>
                  <template v-if="!validUserPhone" #message-danger>
                    Required (Indonesia Format)
                  </template>
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
                  color="#336699"
                  filter
                  placeholder="Province"
                  label="Receiver Province"
                >
                  <template v-if="receiver.province === ''" #message-danger>
                    Required
                  </template>
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
                  color="#336699"
                  :disabled="receiver.province === ''"
                  placeholder="City"
                  label="Receiver City | Postal Code"
                >
                  <template v-if="!validCity.valid" #message-danger>
                    {{ validCity.message }}
                  </template>
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
            <div class="row mt-4 pb-3 border-bottom">
              <div class="col-12 col-md-6 pb-4">
                <vs-input
                  v-model="receiver.tempPhoneNum"
                  color="#336699"
                  type="tel"
                  label="Receiver Phone Number"
                  placeholder="081514329539"
                  required
                >
                  <template v-if="!validReceiverPhone" #message-danger>
                    Required (Indonesia Format)
                  </template>
                  <template #icon> <i class="bx bx-phone"></i> </template>
                </vs-input>
              </div>
              <div class="col-12 col-md-6 pb-4">
                <vs-input
                  v-model="receiver.tempAddress"
                  color="#336699"
                  type="text"
                  label="Receiver Full Address"
                  placeholder="Jl. Raya Kb. Jeruk No.27"
                  class="pb-3"
                  required
                >
                  <template v-if="!validReceiverAddress" #message-danger>
                    Required (Between 10-60 letters)
                  </template>
                  <template #icon>
                    <i class="bx bxs-edit-location"></i>
                  </template>
                </vs-input>
              </div>
              <div v-if="COURIERS" class="col-12 col-md-6 pb-4">
                <vs-select
                  v-model="receiver.courier"
                  color="#336699"
                  filter
                  :disabled="receiver.city === ''"
                  placeholder="OGC"
                  label="Courier"
                >
                  <template v-if="!validCourier.valid" #message-danger>
                    {{ validCourier.message }}
                  </template>
                  <vs-option
                    v-for="(c, index) in COURIERS"
                    :key="index"
                    :value="`${c.code}`"
                    :label="c.code"
                    :disabled="loading"
                    :loading="loading"
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
                  color="#336699"
                  type="date"
                  label="Arrival Date"
                >
                  <template v-if="!validDate" #message-danger>
                    Minimum of 7 days from now
                  </template>
                </vs-input>
              </div>
              <template
                v-if="
                  receiver.courier != 'OGC' &&
                  receiver.courier != '' &&
                  SERVICES_COSTS
                "
              >
                <div class="col-12 col-md-6 pb-4">
                  <vs-select
                    v-model="receiver.service"
                    placeholder="Choose Service"
                    label="Service"
                    :disabled="loading"
                    :loading="loading"
                  >
                    <template v-if="receiver.service == ''" #message-danger>
                      Required
                    </template>
                    <vs-option
                      v-for="(service, index) in SERVICES_COSTS"
                      :key="index"
                      :value="`${service.service}`"
                      :label="service.service"
                      >{{ service.service }}</vs-option
                    >
                  </vs-select>
                </div>
              </template>
              <template v-if="receiver.service">
                <div class="col-12" data-aos="fade" data-aos-duration="1200">
                  <h5>Shipping Details Summary</h5>
                  <small>
                    <dl class="row">
                      <dt class="col-3">Courier:</dt>
                      <dd class="col-9">
                        {{ receiver.courier.toUpperCase() }}
                      </dd>

                      <dt class="col-3">Service:</dt>
                      <dd class="col-9">
                        {{ serviceDetails[0].description }} ({{
                          serviceDetails[0].service
                        }})
                      </dd>

                      <dt class="col-3">Price:</dt>
                      <dd class="col-9">
                        {{ serviceDetails[0].cost[0].value }} (IDR)
                      </dd>

                      <dt class="col-3">ETD:</dt>
                      <dd class="col-9">
                        {{ serviceDetails[0].cost[0].etd }} Days
                      </dd>
                    </dl>
                  </small>
                </div>
              </template>
              <template v-if="receiver.courier === 'OGC'">
                <div class="col-12" data-aos="fade" data-aos-duration="1200">
                  <h5>Shipping Details Summary</h5>
                  <small>
                    <dl class="row">
                      <dt class="col-3">Courier:</dt>
                      <dd class="col-9">
                        {{ receiver.courier.toUpperCase() }}
                      </dd>

                      <dt class="col-3">Service:</dt>
                      <dd class="col-9">AOT (Arrival On Time)</dd>

                      <dt class="col-3">Price:</dt>
                      <dd class="col-9">
                        <strong>Free (OG Courier)</strong>
                      </dd>

                      <dt class="col-3">Arrival Date:</dt>
                      <dd class="col-9">
                        {{ receiver.arrivalDate }}
                      </dd>
                    </dl>
                  </small>
                </div>
              </template>
            </div>
            <div class="row pt-3">
              <strong class="text-center col-12 mb-3">Item(s) Details</strong>
              <div class="col-12">
                <vs-card-group class="border-bottom pb-4">
                  <vs-card
                    v-for="item in selected"
                    :key="item.id"
                    class="cursor-change"
                  >
                    <template #title>
                      <h3 class="cursor-change d-flex">
                        {{ item.name }}
                        <span
                          class="badge badge-pill cursor-change"
                          :class="{
                            'badge-primary': item.type == 'box',
                            'badge-warning': item.type == 'bundle',
                          }"
                          >{{ item.type }}</span
                        >
                      </h3>
                    </template>
                    <template #img>
                      <img
                        v-if="item.type === 'bundle'"
                        class="cursor-change"
                        :src="item.detail.image.url"
                        alt="item image"
                      />
                      <img
                        v-else
                        class="cursor-change"
                        src="/image/custom_box.svg"
                        alt="item image"
                      />
                    </template>
                    <template #text>
                      <div class="cursor-change justify-content-between d-flex">
                        <div>{{ item.price }} (IDR)</div>
                        <div>{{ item.weight }} (gr)</div>
                      </div>
                      <!-- <p class="cursor-change"></p> -->
                    </template>
                  </vs-card>
                </vs-card-group>
              </div>
            </div>
            <div
              v-if="receiver.service || receiver.courier == 'OGC'"
              class="row pt-3"
            >
              <strong class="text-center col-12 mb-3"
                >Final Pricing Details</strong
              >
              <small class="font-weight-bold offset-1 offset-md-3 mb-2"
                >Item(s) + Packaging Price</small
              >
              <small class="col-12">
                <dl v-for="item in selected" :key="item.id" class="row">
                  <dt
                    class="offset-1 col-5 offset-md-4 col-md-4 font-weight-light border-bottom text-truncate"
                  >
                    {{ item.name }}
                  </dt>
                  <dd class="col-6 col-md-3">
                    {{ item.price }} <b>+ 10.000</b>
                  </dd>
                </dl>
              </small>
              <small class="font-weight-bold offset-1 offset-md-3 mb-2"
                >Shipping Price</small
              >
              <small class="col-12">
                <dl class="row">
                  <dt
                    class="offset-1 col-5 offset-md-4 col-md-4 font-weight-light border-bottom text-truncate"
                  >
                    {{ receiver.courier }}
                  </dt>
                  <dd v-if="receiver.courier !== 'OGC'" class="col-6 col-md-3">
                    {{ serviceDetails[0].cost[0].value }}
                  </dd>
                  <dd v-else>Free (OGC)</dd>
                </dl>
              </small>
              <small class="col-12">
                <dl class="row">
                  <dt class="pl-0 offset-1 col-5 offset-md-3 col-md-5">
                    Total
                  </dt>
                  <dd class="col-6 col-md-3 font-weight-bold">
                    {{ totalPrice }}
                  </dd>
                </dl>
              </small>
            </div>
          </div>

          <template #footer>
            <div class="container" @click="payment">
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
              Fetching Necessary Data <i class="fas fa-boxes"></i>
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
import { debounce } from '@/plugins/customUtil'

export default {
  layout: 'default',
  middleware: 'auth',
  data() {
    return {
      cartBoxBundle: {},
      allCheck: false,
      selected: [],
      initialLoading: true,
      loading: false,
      courier: {},
      activePrompt: false,
      address: '',
      tempAddress: '',
      phoneNum: '',
      tempPhoneNum: '',
      isUpdate: false,
      totalWeight: null,
      receiver: {
        phoneNum: '',
        tempPhoneNum: '',
        address: '',
        tempAddress: '',
        province: '',
        city: '',
        courier: '',
        service: '',
        arrivalDate: null,
        minDate: null,
      },
      shippingPrice: 0,
    }
  },

  async created() {
    try {
      this.initialLoading = true
      await this.GET_CART()
      await this.GET_PROVINCES()
      await this.GET_CITIES()
      await this.GET_USER_DETAILS()
      this.getNextWeek()
    } catch (e) {
      console.log(e)
    } finally {
      this.initialLoading = false
    }
  },

  beforeDestroy() {
    this.clear()
  },

  computed: {
    ...mapGetters({
      CART: 'users/CART',
      PROVINCES: 'shipping/PROVINCES',
      CITIES: 'shipping/CITIES',
      COURIERS: 'shipping/COURIERS',
      SERVICES_COSTS: 'shipping/SERVICES_COSTS',
      USER_DETAILS: 'users/USER_DETAILS',
    }),
    mergedCart() {
      const arrBoxes = this.CART.data[0].boxes
      const arrBundles = this.CART.data[0].bundles
      Array.prototype.push.apply(arrBoxes, arrBundles)
      return arrBoxes
    },
    serviceDetails() {
      const selectedService = this.SERVICES_COSTS.filter((service) => {
        return service.service === this.receiver.service
      })
      return selectedService
    },
    totalPrice() {
      const subPrice = this.selected.reduce((sum, x) => sum + x.price, 0)
      const packagingPrice = this.selected.length * 10000
      let shippingPrice = 0
      if (this.receiver.courier !== 'OGC') {
        shippingPrice = this.serviceDetails[0].cost[0].value
      }
      const totalPrice = subPrice + packagingPrice + shippingPrice
      return totalPrice
    },
    validUserAddress() {
      if (
        this.address === '' ||
        this.address.length < 10 ||
        this.receiver.address.length > 70
      ) {
        return false
      } else {
        return true
      }
    },
    validUserPhone() {
      return /^\d{6,12}$/.test(this.phoneNum)
    },
    validCity() {
      let validity = {}
      if (this.receiver.province === '') {
        validity = {
          valid: false,
          message: 'Province must be selected first',
        }
      } else if (this.receiver.city === '') {
        validity = {
          valid: false,
          message: 'Required',
        }
      } else {
        validity = {
          valid: true,
          message: 'OK',
        }
      }
      return validity
    },
    validReceiverAddress() {
      if (
        this.receiver.address === '' ||
        this.receiver.address.length < 10 ||
        this.receiver.address.length > 70
      ) {
        return false
      } else {
        return true
      }
    },
    validReceiverPhone() {
      return /^\d{6,12}$/.test(this.receiver.phoneNum)
    },
    validCourier() {
      let validity = {}
      if (this.receiver.city === '') {
        validity = {
          valid: false,
          message: 'City must be selected first',
        }
      } else if (this.receiver.courier === '') {
        validity = {
          valid: false,
          message: 'Required',
        }
      } else {
        validity = {
          valid: true,
          message: 'OK',
        }
      }
      return validity
    },
    validDate() {
      if (this.receiver.arrivalDate < this.receiver.minDate) {
        return false
      } else {
        return true
      }
    },
    weightExceeds() {
      let validity = true
      if (this.selected) {
        if (this.selected.reduce((sum, x) => sum + x.weight, 0) > 30000) {
          validity = false
        } else {
          validity = true
        }
      }
      return validity
    },
  },
  watch: {
    tempAddress: debounce(function (newVal) {
      this.address = newVal
    }, 500),
    tempPhoneNum: debounce(function (newVal) {
      this.phoneNum = newVal
    }, 500),
    'receiver.tempAddress': debounce(function (newVal) {
      this.receiver.address = newVal
    }, 500),
    'receiver.tempPhoneNum': debounce(function (newVal) {
      this.receiver.phoneNum = newVal
    }, 500),

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
        const arrCity = this.receiver.city.split('|')
        const cityId = arrCity[1]
        const details = {
          destination: cityId,
          weight: this.totalWeight,
          courier: this.receiver.courier,
        }
        try {
          this.loading = true
          await this.GET_SERVICES_COSTS(details)
        } finally {
          this.loading = false
        }
      } else if (val === 'OGC') {
        this.shippingPrice = 0
      }
    },
    'receiver.service'() {
      this.shippingPrice = 0
      if (this.receiver.service !== '' && this.receiver.courier !== 'OGC') {
        this.shippingPrice = this.serviceDetails[0].cost[0].value
      }
    },
  },

  methods: {
    ...mapActions({
      GET_CART: 'users/GET_CART',
      GET_PROVINCES: 'shipping/GET_PROVINCES',
      GET_CITIES: 'shipping/GET_CITIES',
      GET_SERVICES_COSTS: 'shipping/GET_SERVICES_COSTS',
      GET_USER_DETAILS: 'users/GET_USER_DETAILS',
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
        (future.getDate() < 10 ? '0' : '') +
        future.getDate()
      console.log(finalDate)
      this.receiver.arrivalDate = finalDate
      this.receiver.minDate = finalDate
    },
    checkoutPrompt() {
      this.tempAddress = this.USER_DETAILS.data.address ?? ''
      // this.tempAddress = this.$auth.user.detail.address ?? ''
      this.tempPhoneNum = this.USER_DETAILS.data.phone_num ?? ''
      // this.tempPhoneNum = this.$auth.user.detail.phone_num ?? ''
      this.totalWeight = this.selected.reduce((sum, x) => sum + x.weight, 0)
      this.activePrompt = !this.activePrompt
    },
    async midtransSnap() {
      const arrBundles = []
      const arrBoxes = []
      this.selected.map((x) => {
        if (x.type.includes('bundle')) {
          arrBundles.push(x.id)
        } else {
          arrBoxes.push(x.id)
        }
      })

      const arrCity = this.receiver.city.split('|')
      const cityName = arrCity[0]
      const postal = arrCity[4]
      const form = {
        // arrBundles,
        // arrBoxes,
        // shippingFee: this.shippingPrice,
        // shipping_address: {
        //   phone: this.receiver.phoneNum,
        //   address: this.receiver.address,
        //   city: cityName,
        //   postal_code: postal,
        //   courier: ''
        // },
        arrBundles,
        arrBoxes,
        receiver_phone: this.receiver.phoneNum,
        receiver_address: this.receiver.address,
        receiver_city: cityName,
        receiver_postal_code: postal,
        courier: this.receiver.courier,
        service:
          this.receiver.courier !== 'OGC' ? this.receiver.service : 'AOT',
        shippingFee: this.shippingPrice,
        arrivalDate: this.receiver.arrivalDate,
        buyer_phoneNum: this.phoneNum,
        buyer_address: this.address,
      }
      try {
        // this.$axios.$post('/checkout', form).then((response) => {
        //   window.snap.pay(response)
        // })
        if (this.isUpdate) {
          const udetail = {
            phone_num: this.phoneNum,
            address: this.address,
          }
          await this.$axios.$patch(`/users/${this.$auth.user.id}`, udetail)
        }
        await this.$axios.$post('/transactions', form)
        // this.clear()
        this.activePrompt = false
        this.$router.push('/transactions')
      } catch (e) {
        alert(e)
      }
    },
    payment() {
      if (
        this.validUserAddress &&
        this.validUserPhone &&
        this.validCity.valid &&
        this.validReceiverAddress &&
        this.validReceiverPhone &&
        this.validCourier
      ) {
        if (this.receiver.courier === 'OGC' && this.validDate) {
          this.midtransSnap()
        } else if (
          this.receiver.courier !== 'OGC' &&
          this.receiver.service !== ''
        ) {
          this.midtransSnap()
        } else {
          alert('Oops.. something is wrong')
        }
      } else {
        alert('Please fill all inputs as instructed')
      }
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

.cursor-change {
  cursor: default;
}

.vs-card {
  cursor: default;
}
</style>
