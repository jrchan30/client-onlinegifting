<template>
  <div class="bg-wave h-100 minheight">
    <div v-if="!initialLoading">
      <div class="container">
        <div
          class="jumbotron bg-glass"
          data-aos="fade"
          data-aos-duration="1500"
        >
          <h1 class="display-4">Transaction</h1>
          <p class="lead">
            {{ TRANSACTION.transaction_number }} (Created
            {{ TRANSACTION.created_at }})
          </p>
          <nuxt-link to="/transactions">
            See all transactions <i class="fas fa-greater-than"></i>
          </nuxt-link>
          <hr class="my-4" />
          <p>
            Click button below to see more details about the transaction (or pay
            if you haven't)
          </p>
          <div class="d-flex">
            <vs-button
              color="#336699"
              gradient
              class="mr-2"
              @click="isShow = true"
            >
              <i class="bx bx-detail mr-2"></i> See Details
            </vs-button>
            <vs-button
              v-if="
                (TRANSACTION.transaction_status == 'success' ||
                  TRANSACTION.transaction_status == 'settlement' ||
                  TRANSACTION.transaction_status == 'challenge') &&
                !TRANSACTION.is_arrived
              "
              success
              gradient
              @click="confirmArrival(TRANSACTION.id)"
            >
              <i class="bx bxs-credit-card mr-2"></i> Confirm Arrival
            </vs-button>
            <div
              v-else-if="
                (TRANSACTION.transaction_status == 'success' ||
                  TRANSACTION.transaction_status == 'settlement' ||
                  TRANSACTION.transaction_status == 'challenge') &&
                TRANSACTION.is_arrived
              "
              class="my-auto"
            >
              Status: <b>Arrived</b> ({{ TRANSACTION.is_arrived }})
            </div>
            <vs-button
              v-else-if="TRANSACTION.transaction_status == 'expire'"
              danger
              gradient
              @click="midtransSnap(TRANSACTION.token, TRANSACTION.id)"
            >
              <i class="bx bxs-credit-card mr-2"></i> Expired
            </vs-button>
            <vs-button
              v-else
              warn
              gradient
              @click="midtransSnap(TRANSACTION.token, TRANSACTION.id)"
            >
              <i class="bx bxs-credit-card mr-2"></i> Pay Now
            </vs-button>
          </div>
        </div>
        <div class="pb-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Bundles</h3>
              <template v-if="TRANSACTION.paid_bundles.length > 0">
                <div
                  v-for="(bundle, indexBundle) in TRANSACTION.paid_bundles"
                  :key="bundle.id"
                  class="row py-2 border-bottom justify-content-center"
                >
                  <div class="col-12 col-md-4">
                    <vs-card>
                      <template #title>
                        <h3>{{ bundle.name }}</h3>
                      </template>
                      <template #img>
                        <img :src="bundle.url" :alt="`${bundle.name} image`" />
                      </template>
                      <template #text>
                        <p>
                          Products Type Count: {{ bundle.paid_products.length }}
                        </p>
                      </template>
                    </vs-card>
                  </div>

                  <div class="col-12 mt-2 mt-md-0 col-md-8">
                    <h5>Products</h5>
                    <div
                      v-for="(product, indexProduct) in bundle.paid_products"
                      :key="product.id"
                      class="row"
                    >
                      <div class="col-10 text-truncate">
                        {{ indexProduct + 1 }}. {{ product.name }} (Rp.{{
                          priceFormatted(product.price)
                        }}
                        x {{ product.quantity }} qty)
                      </div>
                    </div>
                  </div>
                  <vs-button
                    v-if="bundle.review.length < 1 && TRANSACTION.is_arrived"
                    class="col-9 mt-2"
                    warn
                    circle
                    block
                    floating
                    :disabled="reviewLoad"
                    animation-type="scale"
                    @click="review(bundle, indexBundle, null)"
                  >
                    <i class="bx bx-star"></i> Review {{ bundle.name }}
                    <template #animate>
                      <i class="bx bxs-star"></i>
                    </template>
                  </vs-button>
                  <div v-if="bundle.review.length > 0" class="col-12">
                    <div class="text-muted text-center">
                      <i
                        v-for="(star, indexStar) in bundle.review[0].rating"
                        :key="indexStar"
                        class="bx bxs-star"
                        style="color: #ffdf00"
                      ></i
                      ><span class="ml-2">{{ bundle.review[0].body }}</span>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div>No bundles in this transaction</div>
              </template>
            </div>
          </div>
        </div>

        <div class="pb-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Boxes</h3>
              <template v-if="TRANSACTION.paid_boxes.length > 0">
                <div
                  v-for="(box, indexBox) in TRANSACTION.paid_boxes"
                  :key="box.id"
                  class="row py-2 border-bottom"
                >
                  <div class="col-12 col-md-4">
                    <vs-card>
                      <template #title>
                        <h3>{{ box.name }}</h3>
                      </template>
                      <template #img>
                        <img
                          src="/image/undraw_gift.svg"
                          :alt="`${box.name} image`"
                        />
                      </template>
                      <template #text>
                        <p>
                          Products Type Count: {{ box.paid_products.length }}
                        </p>
                      </template>
                    </vs-card>
                  </div>
                  <div class="col-12 mt-2 mt-md-0 col-md-8">
                    <h5>Products</h5>
                    <div
                      v-for="(product, indexProduct) in box.paid_products"
                      :key="product.id"
                      class="row d-flex"
                    >
                      <div class="col-10 col-lg-8 text-truncate my-auto">
                        {{ indexProduct + 1 }}. {{ product.name }} (Rp.{{
                          priceFormatted(product.price)
                        }}
                        x {{ product.quantity }} qty)
                      </div>
                      <vs-button
                        v-if="
                          product.review.length < 1 && TRANSACTION.is_arrived
                        "
                        class="col-2 col-lg-1"
                        warn
                        circle
                        floating
                        :disabled="reviewLoad"
                        animation-type="scale"
                        style="max-width: 35px"
                        @click="review(product, indexBox, indexProduct)"
                      >
                        <i class="bx bx-star"></i>
                        <template #animate>
                          <i class="bx bxs-star"></i>
                        </template>
                      </vs-button>
                      <span
                        v-if="product.review.length > 0"
                        class="col-10 offset-1 text-muted"
                      >
                        <i
                          v-for="(star, indexStar) in product.review[0].rating"
                          :key="indexStar"
                          class="bx bxs-star"
                          style="color: #ffdf00"
                        ></i>
                        {{ product.review[0].body }}</span
                      >
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div>No boxes in this transaction</div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <vs-dialog
        v-model="isShow"
        scroll
        overflow-hidden
        not-close
        auto-width
        blur
      >
        <template #header>
          <h3>Transaction Details</h3>
        </template>
        <div>
          <h4>General Details</h4>
          <p>
            Transaction created at <b>{{ TRANSACTION.created_at }}</b
            >, using
            <b
              >{{ TRANSACTION.delivery_courier_code }} ({{
                TRANSACTION.delivery_courier_service
              }})</b
            >
            as its courier.
          </p>

          <h4>Shipping Details</h4>

          <p>
            - Shipping Cost: <b>{{ TRANSACTION.delivery_fee }} (IDR)</b>
            <br />
            <br />
            - Courier: <b>{{ TRANSACTION.delivery_courier_code }}</b>
            <br />
            <br />
            - Service: <b>{{ TRANSACTION.delivery_courier_service }}</b>
            <br />
            <br />
            - Total Weight: <b>{{ TRANSACTION.total_weight }}</b>
            <br />
            <br />
            - City (Postal Code):
            <b
              >{{ TRANSACTION.receiver_city }} ({{
                TRANSACTION.receiver_postal_code
              }})</b
            >
            <br />
            <br />
            - Full Address: <b>{{ TRANSACTION.receiver_full_address }}</b>
            <br />
            <br />
            - Receiver Phone Num:
            <b>{{ TRANSACTION.receiver_phone_number }}</b>
          </p>

          <h4>Payment Details</h4>

          <p v-if="TRANSACTION.transaction_status == null">
            <b>Initial payment hasn't been made yet.</b>
          </p>
          <p v-else>
            - Transaction/Order ID:
            <b>{{ TRANSACTION.transaction_number }}</b>
            <br />
            <br />
            - Total Price: <b>{{ TRANSACTION.total_price }}</b>
            <br />
            <br />
            - Payment Type: <b>{{ TRANSACTION.payment_type }} (IDR)</b>
            <br />
            <br />
            - Payment Status: <b>{{ TRANSACTION.payment_status }}</b>
            <br />
            <br />
            - Transaction Status:
            <b>{{ TRANSACTION.transaction_status }}</b>
          </p>
        </div>
      </vs-dialog>
    </div>
  </div>
</template>

<script>
import { formatPrice } from '@/plugins/customUtil'
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'default',
  middleware: ['auth-ssr', 'auth'],
  data() {
    return {
      transaction: null,
      isShow: false,
      initialLoading: false,
      loading: false,
      form: {},
      reviewLoad: false,
    }
  },
  async created() {
    this.initialLoading = true
    try {
      await this.$store.dispatch(
        'transactions/GET_TRANSACTION',
        this.$route.params.id
      )
    } finally {
      this.initialLoading = false
    }
  },
  computed: {
    ...mapGetters({
      TRANSACTION: 'transactions/TRANSACTION',
    }),
  },
  methods: {
    ...mapActions({
      GET_TRANSACTION: 'transactions/GET_TRANSACTION',
    }),
    async midtransSnap(snapToken, id) {
      try {
        window.snap.pay(snapToken)
        // await this.$axios.$get(`/transactions/${id}`)
        await this.GET_TRANSACTION()
      } catch (e) {
        alert(e)
      }
    },
    priceFormatted(price) {
      return formatPrice(price)
    },
    confirmArrival(id) {
      this.loading = true
      try {
        this.$swal({
          title: 'Are you sure?',
          text: 'Please confirm that your order have arrived safely',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, mark as arrived!',
        }).then(async (result) => {
          if (result.isConfirmed) {
            const form = {
              transaction_id: id,
            }
            const res = await this.$axios.$post('/arrive', form)
            this.$store.commit(
              'transactions/SET_IS_ARRIVED_TRANSACTION',
              res.data.is_arrived
            )
          } else {
            this.loading = false
          }
        })
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    review(item, indexParent, indexProduct) {
      this.$swal({
        title: 'Rate!',
        icon: 'question',
        input: 'range',
        inputLabel: 'How many stars?',
        showCancelButton: true,
        inputAttributes: {
          min: 1,
          max: 5,
          step: 1,
        },
        inputValue: 1,
      }).then((stars) => {
        if (stars.isConfirmed) {
          this.form.rating = stars.value
          this.$swal({
            title: 'How is it?',
            icon: 'question',
            input: 'text',
            inputLabel: `Your thoughts on this ${item.type}`,
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to write something!'
              }
            },
          }).then(async (body) => {
            if (body.isConfirmed) {
              let itemId = 0
              item.type === 'product'
                ? (itemId = item.product_id)
                : (itemId = item.bundle_id)
              const form = {
                id: itemId,
                type: item.type,
                body: body.value,
                rating: parseInt(stars.value),
                ...(item.type === 'product' && {
                  paid_product_id: item.id,
                }),
                ...(item.type === 'bundle' && {
                  paid_bundle_id: item.id,
                }),
              }
              try {
                this.reviewLoad = true
                const res = await this.$axios.$post('/reviews', form)
                const payload = {
                  res: res.data,
                  type: item.type,
                  idxParent: indexParent,
                  idxProduct: indexProduct,
                }
                console.log(payload)
                if (item.review.length < 1) {
                  this.$store.commit('transactions/SET_REVIEW', payload)
                }
              } finally {
                this.reviewLoad = false
              }
            }
          })
        }
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
.bg-wave {
  background-image: url('/image/wave-bg.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  width: 100vw;
}

.custom-title {
  font-size: 1.5rem;
}

.bg-custom {
  background-color: #336699;
}

.bg-glass {
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(5px);
}

.cursor {
  cursor: pointer;
}
</style>
