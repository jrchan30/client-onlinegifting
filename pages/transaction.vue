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
          <template v-slot:body> </template>
        </CardSkeleton>
      </div>
    </template>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

export default {
  //   computed: {
  //     ...mapActions({
  //       GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS',
  //     }),
  //   },
  //   mounted() {
  //     this.GET_TRANSACTIONS()
  //   },
  //   methods: {
  //     ...mapGetters({
  //       TRANSACTIONS: 'transactions/TRANSACTIONS',
  //     }),
  //   },
}
</script>

<style></style>
