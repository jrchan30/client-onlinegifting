<template>
  <div>
    <div class="row">
      <div class="col-xl-8">
        <div class="card bg-default">
          <div class="card-header bg-transparent">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">Sales value</h5>
              </div>
            </div>
          </div>
          <div class="card-body">
            <!-- Chart -->
            <div>
              <AdminLineChart
                v-if="lineChart.loaded"
                :chartdata="lineChart.chartdata"
                :options="lineChart.options"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card bg-default">
          <div class="card-header bg-transparent">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-light text-uppercase ls-1 mb-1">Performance</h6>
                <h5 class="h3 text-white mb-0">Transactions Count</h5>
              </div>
            </div>
          </div>
          <div class="card-body">
            <!-- Chart -->
            <div>
              <AdminBarChart
                v-if="barChart.loaded"
                :chartdata="barChart.chartdata"
                :options="barChart.options"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-header border-0">
                <h3 class="mb-0">Latest Discussions Posted</h3>
              </div>
              <!-- Table -->
              <div class="table-responsive">
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col" class="sort">Name</th>
                      <th scope="col" class="sort">Discussion</th>
                      <th scope="col" class="sort">Item Type</th>
                      <th scope="col" class="sort">Item Name</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody class="list">
                    <tr v-for="discussion in DISCUSSIONS" :key="discussion.id">
                      <th scope="row">
                        <div class="media align-items-center">
                          <a href="#" class="avatar rounded-circle mr-3">
                            <img
                              alt="Image placeholder"
                              src="/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"
                            />
                          </a>
                          <div class="media-body">
                            <span class="name mb-0 text-sm">{{
                              discussion.user.name
                            }}</span>
                          </div>
                        </div>
                      </th>
                      <td class="discussion">
                        {{ discussion.body }}
                      </td>
                      <td>
                        <span>{{ discussion.type }}</span>
                      </td>
                      <td>
                        <span>{{ discussion.item_name }}</span>
                      </td>
                      <td>
                        <button class="btn btn-primary">
                          Go to discussion
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- End Table -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <!-- Members list group card -->
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <!-- Title -->
            <h5 class="h3 mb-0">Admin members</h5>
          </div>
          <!-- Card body -->
          <div class="card-body">
            <!-- List group -->
            <ul class="list-group list-group-flush list my--3">
              <li class="list-group-item px-0">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <!-- Avatar -->
                    <a href="#" class="avatar rounded-circle">
                      <img
                        alt="Image placeholder"
                        src="/assets/img/theme/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div class="col ml--2">
                    <h4 class="mb-0">
                      <a href="#!">Admin 1</a>
                    </h4>
                  </div>
                  <div class="col-auto">
                    <button type="button" class="btn btn-sm btn-primary">
                      See Profile
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Username card -->
      <div class="col">
        <div class="card bg-gradient-primary">
          <!-- Card body -->
          <div class="card-body">
            <div class="row justify-content-between align-items-center">
              <div class="col">
                <div href="#" class="avatar rounded-circle">
                  <template v-if="$auth.user.detail.image">
                    <img :src="$auth.user.detail.image" alt="No Image" />
                  </template>
                  <template v-else>
                    <img
                      src="/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"
                    />
                  </template>
                </div>
              </div>
              <div class="col-auto">
                <span class="badge badge-lg badge-success">Active</span>
              </div>
            </div>
            <div class="my-4">
              <span class="h6 surtitle text-light">
                {{ $auth.user.username }}
              </span>
              <div class="h1 text-white">{{ $auth.user.email }}</div>
            </div>
            <div class="row">
              <div class="col">
                <span class="h6 surtitle text-light">Name</span>
                <span class="d-block h3 text-white">{{ $auth.user.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Username Card -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'admin',
  middleware: ['auth'],
  data() {
    return {
      userlogin: '',
      discussions: {},
      lineChart: {
        loaded: false,
        chartdata: null,
        options: null,
      },
      barChart: {
        loaded: false,
        chartdata: null,
        options: null,
      },
    }
  },
  computed: {
    ...mapGetters({
      DISCUSSIONS: 'discussions/DISCUSSIONS',
    }),
  },
  async mounted() {
    this.lineChart.loaded = false
    this.barChart.loaded = false
    try {
      const res = await this.$axios.$get('/monthly-sales')
      this.lineChart.chartdata = res
      this.lineChart.options = {
        responsive: true,
        maintainAspectRatio: false,
      }
      this.lineChart.loaded = true
    } catch (e) {
      console.error(e)
    }
    try {
      const res = await this.$axios.$get('/transactions-count')
      this.barChart.chartdata = res
      this.barChart.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }
      this.barChart.loaded = true
    } catch (e) {
      console.error(e)
    }
    await this.GET_DISCUSSIONS()
  },
  methods: {
    ...mapActions({
      GET_DISCUSSIONS: 'discussions/GET_DISCUSSIONS',
    }),
  },
}
</script>

<style></style>
