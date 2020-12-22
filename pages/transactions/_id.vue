<template>
  <div class="bg-wave h-100 minheight">
    <div v-if="!$fetchState.pending">
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
                transaction.data.transaction_status !== 'success' &&
                transaction.data.transaction_status !== 'settlement' &&
                transaction.data.transaction_status !== 'challenge'
              "
              warn
              gradient
              @click="midtransSnap(transaction.data.token, transaction.data.id)"
            >
              <i class="bx bxs-credit-card mr-2"></i> Pay Now
            </vs-button>
          </div>
        </div>
      </div>
      <div>Disini tampilin bundle / box beserta dengan detilnya</div>
      <div class=""></div>
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
export default {
  layout: 'default',
  middleware: 'auth',
  async fetch() {
    const res = await this.$axios.$get(`/transactions/${this.$route.params.id}`)
    this.transaction = res
  },
  data() {
    return {
      transaction: null,
      isShow: false,
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
</style>