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
                  <vs-th> Payment Status </vs-th>
                  <vs-th> Transaction Status </vs-th>
                  <vs-th> Payment </vs-th>
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
                  <vs-td> {{ transaction.payment_status }} </vs-td>
                  <vs-td>
                    {{ transaction.transaction_status }}
                  </vs-td>
                  <vs-td
                    v-if="
                      transaction.transaction_status == 'success' ||
                      transaction.transaction_status == 'settlement' ||
                      transaction.transaction_status == 'challenge'
                    "
                  >
                    Already Paid
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
  computed: {
    ...mapGetters({
      TRANSACTIONS: 'transactions/TRANSACTIONS',
    }),
  },
  methods: {
    ...mapActions({
      GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS',
    }),
    async midtransSnap(snapToken) {
      try {
        window.snap.pay(snapToken)
        //   this.$axios.$post('/checkout', form).then((response) => {
        //   })
        // await this.$axios.$post('/transactions', form)
        await this.GET_TRANSACTIONS()
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

<style></style>
