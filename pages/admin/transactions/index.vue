<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header border-0">
          <h3 class="mb-0">Products table</h3>
        </div>

        <div
          class="table-responsive"
          data-toggle="list"
          data-list-values='["id", "name", "price", "stock", "weight"]'
        >
          <table class="table align-items-center table-flush">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort">Transaction Number</th>
                <th scope="col" class="sort">User Name</th>
                <th scope="col" class="sort">Total Price (IDR)</th>
                <th scope="col" class="sort">Datetime</th>
                <th scope="col">Navigate</th>
              </tr>
            </thead>
            <tbody class="list">
              <tr
                v-for="transaction in TRANSACTIONS.data"
                :key="transaction.id"
              >
                <td>{{ transaction.transaction_number }}</td>
                <th class="name">
                  <span class="text-capitalize">{{
                    transaction.user.name
                  }}</span>
                </th>
                <td class="price">{{ transaction.total_price }}</td>
                <td>
                  <span>{{ transaction.created_at }}</span>
                </td>
                <td>
                  <nuxt-link :to="`/admin/transactions/${transaction.id}`"
                    ><button class="btn btn-primary">
                      See Details
                    </button></nuxt-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer py-4">
          <AdminPagination
            :store-action="'transactions/GET_TRANSACTIONS'"
            :store-getter="'transactions/TRANSACTIONS'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
  computed: {
    ...mapGetters({
      TRANSACTIONS: 'transactions/TRANSACTIONS',
    }),
  },
  async mounted() {
    await this.GET_TRANSACTIONS()
  },
  methods: {
    ...mapActions({
      GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS',
    }),
  },
}
</script>

<style></style>
