<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header border-0">
          <h3 class="mb-0">Admins table</h3>
        </div>

        <div
          class="table-responsive"
          data-toggle="list"
          data-list-values='["id", "name", "user name", "email", "created_at"]'
        >
          <table class="table align-items-center table-flush">
            <thead class="thead-light">
              <tr>
                <th
                  scope="col"
                  class="sort"
                  data-sort="id"
                  @click="settingFilter('id')"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="sort"
                  data-sort="id"
                  @click="settingFilter('name')"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="sort"
                  data-sort="id"
                  @click="settingFilter('username')"
                >
                  User Name
                </th>
                <th
                  scope="col"
                  class="sort"
                  data-sort="id"
                  @click="settingFilter('email')"
                >
                  Email
                </th>
                <th
                  scope="col"
                  class="sort"
                  data-sort="id"
                  @click="settingFilter('created_at')"
                >
                  Created At
                </th>
              </tr>
            </thead>
            <tbody v-if="!$fetchState.pending" class="list">
              <tr v-for="admin in ADMINS.data" :key="admin.id">
                <td>{{ admin.id }}</td>
                <th>
                  <span class="text-capitalize">{{ admin.name }}</span>
                </th>
                <td class="price">{{ admin.username }}</td>
                <td>
                  <span>{{ admin.email }}</span>
                </td>
                <td>
                  <span>{{ admin.created_at }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer py-4">
          <AdminPagination
            :store-action="'users/GET_ADMINS'"
            :store-getter="'users/ADMINS'"
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
  async fetch() {
    await this.GET_ADMINS()
  },
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
      ADMINS: 'users/ADMINS',
    }),
  },
  methods: {
    ...mapActions({
      GET_ADMINS: 'users/GET_ADMINS',
    }),
    ...mapMutations({
      SET_FILTER: 'users/SET_FILTER',
    }),
    settingFilter(value) {
      switch (value) {
        case 'id':
          if (this.filter.orderBy !== 'id') {
            this.filter.orderDir = 'desc'
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc'
            this.filter.orderDir = dir
          }
          this.filter.orderBy = 'id'
          break
        case 'name':
          if (this.filter.orderBy !== 'name') {
            this.filter.orderDir = 'desc'
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc'
            this.filter.orderDir = dir
          }
          this.filter.orderBy = 'name'
          break
        case 'username':
          if (this.filter.orderBy !== 'username') {
            this.filter.orderDir = 'desc'
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc'
            this.filter.orderDir = dir
          }
          this.filter.orderBy = 'username'
          break
        case 'email':
          if (this.filter.orderBy !== 'email') {
            this.filter.orderDir = 'desc'
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc'
            this.filter.orderDir = dir
          }
          this.filter.orderBy = 'email'
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
      this.GET_ADMINS()
    },
  },
}
</script>

<style></style>
