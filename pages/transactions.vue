<template>
  <div>
    <template v-if="$auth.user">
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
            <div v-for="transaction in TRANSACTIONS.data" :key="transaction.id">
              <span>{{ transaction.transaction_number }}</span>
              <p>{{ transaction.total_price }}</p>
              <button @click="midtransSnap(transaction.token)">checkout</button>
            </div>
          </template>
        </CardSkeleton>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
    midtransSnap(snapToken) {
      try {
        window.snap.pay(snapToken)
        //   this.$axios.$post('/checkout', form).then((response) => {
        //   })
        // await this.$axios.$post('/transactions', form)
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
