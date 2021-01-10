<template>
  <div class="bg-wave h-100 minheight">
    <div v-if="!loading">
      <div class="container">
        <div
          class="jumbotron bg-glass"
          data-aos="fade"
          data-aos-duration="1500"
        >
          <h1 class="display-4">Transaction</h1>
          <p class="lead">
            {{ transaction.data.transaction_number }} (Created
            {{ transaction.data.created_at }})
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
                (transaction.data.transaction_status == 'success' ||
                  transaction.data.transaction_status == 'settlement' ||
                  transaction.data.transaction_status == 'challenge') &&
                !transaction.data.is_arrived
              "
              success
              gradient
              @click="confirmArrival()"
            >
              <i class="bx bxs-credit-card mr-2"></i> Confirm Arrival
            </vs-button>
            <div
              v-if="
                (transaction.data.transaction_status == 'success' ||
                  transaction.data.transaction_status == 'settlement' ||
                  transaction.data.transaction_status == 'challenge') &&
                transaction.data.is_arrived
              "
              class="my-auto"
            >
              Status: <b>Arrived</b> ({{ transaction.data.is_arrived }})
            </div>
            <vs-button
              v-else-if="transaction.data.transaction_status == 'expire'"
              danger
              gradient
              @click="midtransSnap(transaction.data.token, transaction.data.id)"
            >
              <i class="bx bxs-credit-card mr-2"></i> Expired
            </vs-button>
            <vs-button
              v-else
              warn
              gradient
              @click="midtransSnap(transaction.data.token, transaction.data.id)"
            >
              <i class="bx bxs-credit-card mr-2"></i> Pay Now
            </vs-button>
          </div>
        </div>
        <div class="pb-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Bundles</h3>
              <template v-if="transaction.data.paid_bundles.length > 0">
                <div
                  v-for="bundle in transaction.data.paid_bundles"
                  :key="bundle.id"
                  class="row py-2 border-bottom"
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
                      v-for="(product, index) in bundle.paid_products"
                      :key="product.id"
                      class="row"
                    >
                      <div class="col-10 text-truncate">
                        {{ index + 1 }}. {{ product.name }} (Rp.{{
                          priceFormatted(product.price)
                        }}
                        x {{ product.quantity }} qty)
                      </div>
                    </div>
                    <button @click="review(bundle)">Review bundle</button>
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
              <template v-if="transaction.data.paid_boxes.length > 0">
                <div
                  v-for="box in transaction.data.paid_boxes"
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
                      v-for="(product, index) in box.paid_products"
                      :key="product.id"
                      class="row"
                    >
                      <div class="col-10 text-truncate">
                        {{ index + 1 }}. {{ product.name }} (Rp.{{
                          priceFormatted(product.price)
                        }}
                        x {{ product.quantity }} qty)
                      </div>
                      <div class="offset-1 col-10 d-flex">
                        <u
                          class="text-primary cursor"
                          :disabled="reviewLoad"
                          @click="review(product)"
                          ><small>Add review</small></u
                        >
                      </div>
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
            Transaction created at <b>{{ transaction.data.created_at }}</b
            >, using
            <b
              >{{ transaction.data.delivery_courier_code }} ({{
                transaction.data.delivery_courier_service
              }})</b
            >
            as its courier.
          </p>

          <h4>Shipping Details</h4>

          <p>
            - Shipping Cost: <b>{{ transaction.data.delivery_fee }} (IDR)</b>
            <br />
            <br />
            - Courier: <b>{{ transaction.data.delivery_courier_code }}</b>
            <br />
            <br />
            - Service: <b>{{ transaction.data.delivery_courier_service }}</b>
            <br />
            <br />
            - Total Weight: <b>{{ transaction.data.total_weight }}</b>
            <br />
            <br />
            - City (Postal Code):
            <b
              >{{ transaction.data.receiver_city }} ({{
                transaction.data.receiver_postal_code
              }})</b
            >
            <br />
            <br />
            - Full Address: <b>{{ transaction.data.receiver_full_address }}</b>
            <br />
            <br />
            - Receiver Phone Num:
            <b>{{ transaction.data.receiver_phone_number }}</b>
          </p>

          <h4>Payment Details</h4>

          <p v-if="transaction.data.transaction_status == null">
            <b>Initial payment hasn't been made yet.</b>
          </p>
          <p v-else>
            - Transaction/Order ID:
            <b>{{ transaction.data.transaction_number }}</b>
            <br />
            <br />
            - Total Price: <b>{{ transaction.data.total_price }}</b>
            <br />
            <br />
            - Payment Type: <b>{{ transaction.data.payment_type }} (IDR)</b>
            <br />
            <br />
            - Payment Status: <b>{{ transaction.data.payment_status }}</b>
            <br />
            <br />
            - Transaction Status:
            <b>{{ transaction.data.transaction_status }}</b>
          </p>
        </div>
      </vs-dialog>
    </div>
  </div>
</template>

<script>
import { formatPrice } from '@/plugins/customUtil'

export default {
  layout: 'default',
  middleware: ['auth-ssr', 'auth'],
  data() {
    return {
      transaction: null,
      isShow: false,
      loading: false,
      form: {},
      reviewLoad: false,
    }
  },
  async created() {
    this.loading = true
    try {
      const res = await this.$axios.$get(
        `/transactions/${this.$route.params.id}`
      )
      this.transaction = res
    } finally {
      this.loading = false
    }
  },
  methods: {
    async midtransSnap(snapToken, id) {
      try {
        window.snap.pay(snapToken)
        await this.$axios.$get(`/transactions/${id}`)
      } catch (e) {
        alert(e)
      }
    },
    priceFormatted(price) {
      return formatPrice(price)
    },
    review(item) {
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
              console.log(form)
              try {
                this.reviewLoad = true
                await this.$axios.$post('/reviews', form)
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
