<template>
  <div>
    <template v-if="$auth.user && !$fetchState.pending">
      <div v-if="$auth.user.detail" class="container">
        <!-- Show only if not admin v-if="$auth.user.detail.type !== 'admin'" -->
        <CardSkeleton class="pt-0 pt-lg-5">
          <template v-slot:title>
            <h4 class="font-weight-bold custom-color">Past Transactions</h4>
            <p class="custom-color">
              This is your latest past transactions, click on each record to see
              more details about the transaction
            </p>
          </template>
          <template v-slot:body>
            <!-- <client-only> -->

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
                  v-for="transaction in TRANSACTIONS.data"
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
                    <vs-button success @click="confirmArrival(transaction.id)"
                      ><span class="text-white"
                        >Confirm Arrival</span
                      ></vs-button
                    >
                  </vs-td>
                  <vs-td
                    v-if="
                      (transaction.transaction_status == 'success' ||
                        transaction.transaction_status == 'settlement' ||
                        transaction.transaction_status == 'challenge') &&
                      transaction.is_arrived
                    "
                    class="d-flex"
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
            <!-- </client-only> -->
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
  middleware: 'auth',
  async fetch() {
    await this.GET_TRANSACTIONS()
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapGetters({
      TRANSACTIONS: 'transactions/TRANSACTIONS',
    }),
    // isArrived(arriveDate) {
    //   let message = ''
    //   if (arriveDate) {
    //     message = arriveDate
    //   } else if (transaction) {
    //   }
    //   return message
    // },
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
    async confirmArrival(id) {
      const form = {
        transaction_id: id,
      }
      const res = await this.$axios.$post('/arrive', form)
      console.log(res)
    },
    async refresh() {
      // this.loading = true
      const loading = this.$vs.loading({
        text: 'Refreshing...',
      })
      try {
        await this.GET_TRANSACTIONS()
      } finally {
        // this.loading = false
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
