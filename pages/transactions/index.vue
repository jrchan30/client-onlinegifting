<template>
  <div>
    <template v-if="$auth.user && !initialLoading">
      <div v-if="$auth.user.detail" class="container">
        <!-- Show only if not admin v-if="$auth.user.detail.type !== 'admin'" -->
        <vs-alert
          color="primary"
          v-if="
            this.$route.query.order_id && this.$route.query.transaction_status
          "
        >
          <template #title> Payment Notification </template>
          Your payment request for transaction
          <b>{{ this.$route.query.order_id }}</b> was received with a response
          of
          <b>{{ this.$route.query.transaction_status }}</b>
        </vs-alert>
        <CardSkeleton class="pt-0 pt-lg-5">
          <template v-slot:title>
            <h4 class="font-weight-bold custom-color">Past Transactions</h4>
            <p class="custom-color">
              This is your latest past transactions, click on each record to see
              more details about the transaction
            </p>
          </template>
          <template v-slot:body>
            <vs-table striped>
              <template #thead>
                <vs-tr>
                  <vs-th> Transaction Number </vs-th>
                  <vs-th> Total Price (IDR)</vs-th>
                  <vs-th> Status </vs-th>
                  <vs-th>
                    Actions
                    <vs-button
                      class="float-right p-0"
                      circle
                      icon
                      color="#336699"
                      animation-type="scale"
                      :disabled="loading"
                      @click="refresh()"
                    >
                      <i class="bx bx-refresh bx-lg"></i>
                    </vs-button>
                  </vs-th>
                  <vs-th>Arrived At</vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr
                  v-for="(transaction, index) in TRANSACTIONS.data"
                  :key="transaction.id"
                  :data="transaction"
                >
                  <vs-td>
                    <nuxt-link :to="`/transactions/${transaction.id}`">
                      {{ transaction.transaction_number }}
                    </nuxt-link>
                  </vs-td>
                  <vs-td>
                    {{ transaction.total_price }}
                  </vs-td>
                  <vs-td>
                    {{ transaction.payment_status }}
                    <span v-if="transaction.transaction_status"
                      >({{ transaction.transaction_status }})</span
                    >
                  </vs-td>
                  <vs-td
                    v-if="
                      (transaction.transaction_status == 'success' ||
                        transaction.transaction_status == 'settlement' ||
                        transaction.transaction_status == 'challenge') &&
                      !transaction.is_arrived
                    "
                    class="d-flex"
                  >
                    <vs-button
                      success
                      :disabled="loading"
                      @click="confirmArrival(transaction.id, index)"
                      ><span class="text-white"
                        >Confirm Arrival</span
                      ></vs-button
                    >
                  </vs-td>
                  <vs-td
                    v-else-if="
                      (transaction.transaction_status == 'success' ||
                        transaction.transaction_status == 'settlement' ||
                        transaction.transaction_status == 'challenge') &&
                      transaction.is_arrived
                    "
                  >
                    Arrived
                  </vs-td>
                  <vs-td v-else-if="transaction.transaction_status == 'expire'">
                    <vs-button
                      danger
                      gradient
                      @click="midtransSnap(transaction.token)"
                    >
                      Expired
                    </vs-button>
                  </vs-td>
                  <vs-td v-else>
                    <vs-button
                      warn
                      gradient
                      @click="midtransSnap(transaction.token)"
                    >
                      Pay Now
                    </vs-button>
                  </vs-td>

                  <vs-td>{{ transaction.is_arrived }}</vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </template>
        </CardSkeleton>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'default',
  middleware: ['auth-ssr', 'auth'],
  data() {
    return {
      initialLoading: true,
      loading: false,
    }
  },

  computed: {
    ...mapGetters({
      TRANSACTIONS: 'transactions/TRANSACTIONS',
    }),
  },

  async created() {
    this.initialLoading = true
    try {
      await this.GET_TRANSACTIONS()
    } finally {
      this.initialLoading = false
    }
  },

  methods: {
    ...mapActions({
      GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS',
    }),
    async midtransSnap(snapToken) {
      try {
        window.snap.pay(snapToken)
        await this.GET_TRANSACTIONS()
      } catch (e) {
        alert(e)
      }
    },
    confirmArrival(id, idx) {
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
            const payload = {
              isArrived: res.data.is_arrived,
              idx,
            }
            this.$store.commit(
              'transactions/SET_IS_ARRIVED_TRANSACTIONS',
              payload
            )
          }
        })
      } catch (e) {
        alert(e)
      } finally {
        this.loading = false
      }
    },
    async refresh() {
      this.loading = true
      const loading = this.$vs.loading({
        text: 'Refreshing...',
      })
      try {
        await this.GET_TRANSACTIONS()
      } finally {
        this.loading = false
        loading.close()
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

<style></style>
