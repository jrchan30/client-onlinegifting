<template>
  <div class="row">
    <div class="col">
      <div v-if="!$fetchState.pending" class="card">
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
                <th
                  scope="col"
                  class="sort"
                  data-sort="transaction_number"
                  @click="settingFilter('transaction_number')"
                >
                  Transaction Number
                </th>
                <th scope="col" class="sort">User Name</th>
                <th
                  scope="col"
                  class="sort"
                  data-sort="total_price"
                  @click="settingFilter('total_price')"
                >
                  Total Price (IDR)
                </th>
                <th
                  scope="col"
                  class="sort"
                  data-sort="created_at"
                  @click="settingFilter('created_at')"
                >
                  Datetime
                </th>
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
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
  data() {
    return {
      filter: {
        search: '',
        orderBy: 'created_at',
        orderDir: 'desc',
      },
    }
  },
  computed: {
    ...mapGetters({
      TRANSACTIONS: 'transactions/TRANSACTIONS',
    }),
  },
  async fetch() {
    await this.GET_TRANSACTIONS()
  },
  methods: {
    ...mapActions({
      GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS',
    }),
    ...mapMutations({
      SET_FILTER: 'transactions/SET_FILTER',
    }),
    settingFilter(value) {
      switch (value) {
        case 'transaction_number':
          if (this.filter.orderBy !== 'transaction_number') {
            this.filter.orderDir = 'desc'
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc'
            this.filter.orderDir = dir
          }
          this.filter.orderBy = 'transaction_number'
          break
        case 'total_price':
          if (this.filter.orderBy !== 'total_price') {
            this.filter.orderDir = 'desc'
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc'
            this.filter.orderDir = dir
          }
          this.filter.orderBy = 'total_price'
          break
        case 'created_at':
          if (this.filter.orderBy !== 'created_at') {
            this.filter.orderDir = 'desc'
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc'
            this.filter.orderDir = dir
          }
          this.filter.orderBy = 'created_at'
          break
        default:
          break
      }

      this.SET_FILTER(this.filter)
      this.GET_TRANSACTIONS()
    },
  },
}
</script>

<style></style>
