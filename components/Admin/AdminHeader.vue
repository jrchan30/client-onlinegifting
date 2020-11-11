<template>
  <div class="header bg-primary pb-6">
    <div class="container-fluid">
      <div class="header-body">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 col-7">
            <h6 class="h2 text-white d-inline-block mb-0 text-capitalize">
              {{ getPageName }} Page
            </h6>
            <!-- <nav
              aria-label="breadcrumb"
              class="d-none d-md-inline-block ml-md-4"
            >
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item">
                  <nuxt-link to="/admin"><i class="fas fa-home"></i></nuxt-link>
                </li>

                <div
                  v-for="crumb in breadcrumb"
                  :key="crumb.link"
                  tag="li"
                  class="breadcrumb-item"
                >
                  <nuxt-link :to="crumb.link">{{ crumb.title }}</nuxt-link>
                </div>

                <li class="breadcrumb-item active" aria-current="page">
                  {{ title }}
                </li>
              </ol>
            </nav> -->
          </div>
        </div>
        <!-- Card stats -->
        <template v-if="$route.path === '/admin'">
          <div class="row">
            <div
              v-for="card in cards"
              :key="card.title"
              class="col-xl-3 col-md-6"
            >
              <div class="card card-stats">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        {{ card.title }}
                      </h5>
                      <span class="h2 font-weight-bold mb-0">{{
                        card.amount
                      }}</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="icon icon-shape text-white rounded-circle shadow"
                        :class="card.background"
                      >
                        <i :class="card.icon"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"
                      ><i class="fa fa-arrow-up"></i>
                      {{ card.percentage }}%</span
                    >
                    <span class="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page_title: '',
      cards: {
        total_transaction: {
          title: 'Total transaction',
          amount: 1234,
          percentage: 3.14,
          icon: 'ni ni-credit-card',
          background: 'bg-gradient-red',
        },
        transaction_amount: {
          title: 'Transaction amount',
          amount: 1234,
          percentage: 3.14,
          icon: 'ni ni-money-coins',
          background: 'bg-gradient-green',
        },
        new_users: {
          title: 'New users',
          amount: 1234,
          percentage: 3.14,
          icon: 'ni ni-single-02',
          background: 'bg-gradient-orange',
        },
        new_products: {
          title: 'New products',
          amount: 1234,
          percentage: 3.14,
          icon: 'fas fa-boxes',
          background: 'bg-gradient-info',
        },
      },
      breadcrumb: {
        title: 'Home',
        crumbs: {},
      },
    }
  },
  computed: {
    getPageName() {
      const fullname = this.$route.name
      return fullname.substr(fullname.lastIndexOf('-') + 1)
    },
  },
}
</script>

<style></style>
