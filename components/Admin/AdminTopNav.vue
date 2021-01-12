<template>
  <nav
    class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom"
  >
    <div class="container-fluid">
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <!-- Search form -->
        <form
          id="navbar-search-main"
          class="navbar-search navbar-search-light form-inline mr-sm-3"
          @submit.prevent="submitSearch"
        >
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative input-group-merge">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="fas fa-search"></i
                ></span>
              </div>
              <input
                v-model="search"
                class="form-control"
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
          <button
            type="button"
            class="close"
            data-action="search-close"
            data-target="#navbar-search-main"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </form>
        <!-- Navbar links -->
        <ul class="navbar-nav align-items-center ml-md-auto">
          <li class="nav-item d-xl-none">
            <!-- Sidenav toggler -->
            <div
              class="pr-3 sidenav-toggler sidenav-toggler-dark"
              data-action="sidenav-pin"
              data-target="#sidenav-main"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </div>
          </li>
          <li class="nav-item d-sm-none">
            <a
              class="nav-link"
              href="#"
              data-action="search-show"
              data-target="#navbar-search-main"
            >
              <i class="ni ni-zoom-split-in"></i>
            </a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="ni ni-bell-55"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden"
            >
              <div class="px-3 py-3">
                <h6 class="text-sm text-muted m-0">
                  You have
                  <strong class="text-primary">13</strong> notifications.
                </h6>
              </div>
              <div class="list-group list-group-flush">
                <a href="#!" class="list-group-item list-group-item-action">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <img
                        alt="Image placeholder"
                        src="/assets/img/theme/team-1.jpg"
                        class="avatar rounded-circle"
                      />
                    </div>
                    <div class="col ml--2">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <h4 class="mb-0 text-sm">John Snow</h4>
                        </div>
                        <div class="text-right text-muted">
                          <small>2 hrs ago</small>
                        </div>
                      </div>
                      <p class="text-sm mb-0">
                        Let's meet at Starbucks at 11:30. Wdyt?
                      </p>
                    </div>
                  </div>
                </a>
                <a href="#!" class="list-group-item list-group-item-action">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <img
                        alt="Image placeholder"
                        src="/assets/img/theme/team-5.jpg"
                        class="avatar rounded-circle"
                      />
                    </div>
                    <div class="col ml--2">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <h4 class="mb-0 text-sm">John Snow</h4>
                        </div>
                        <div class="text-right text-muted">
                          <small>3 hrs ago</small>
                        </div>
                      </div>
                      <p class="text-sm mb-0">
                        A new issue has been reported for Argon.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="#!"
                class="dropdown-item text-center text-primary font-weight-bold py-3"
                >View all</a
              >
            </div>
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="ni ni-air-baloon"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right"
            >
              <div class="row shortcuts px-4">
                <nuxt-link to="/" class="col-4 shortcut-item">
                  <span
                    class="shortcut-media avatar rounded-circle bg-gradient-red"
                  >
                    <i class="fas fa-home"></i>
                  </span>
                  <small>Home</small>
                </nuxt-link>
                <nuxt-link to="/products" class="col-4 shortcut-item">
                  <span
                    class="shortcut-media avatar rounded-circle bg-gradient-orange"
                  >
                    <i class="fas fa-boxes"></i>
                  </span>
                  <small>Products</small>
                </nuxt-link>
                <nuxt-link to="/bundles" class="col-4 shortcut-item">
                  <span
                    class="shortcut-media avatar rounded-circle bg-gradient-info"
                  >
                    <i class="ni ni-credit-card"></i>
                  </span>
                  <small>Bundles</small>
                </nuxt-link>
                <!-- <nuxt-link to="/categories" class="col-4 shortcut-item">
                  <span
                    class="shortcut-media avatar rounded-circle bg-gradient-green"
                  >
                    <i class="ni ni-books"></i>
                  </span>
                  <small>Categories</small>
                </nuxt-link> -->
              </div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav align-items-center ml-auto ml-md-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link pr-0"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img
                    alt="Image placeholder"
                    src="/assets/img/theme/team-4.jpg"
                  />
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm font-weight-bold">{{
                    $auth.user.name
                  }}</span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome!</h6>
              </div>
              <nuxt-link to="/admin/profile" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>My profile</span>
              </nuxt-link>
              <div class="dropdown-divider"></div>
              <span class="dropdown-item logout-cursor" @click="logout">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    ...mapMutations({
      SET_SEARCH_QUERY: 'search/SET_SEARCH_QUERY',
    }),
    ...mapActions({
      GET_SEARCH_RESULTS: 'search/GET_SEARCH_RESULTS',
    }),
    submitSearch() {
      if (this.$route.name === 'admin-search') {
        this.SET_SEARCH_QUERY(this.search)
        this.GET_SEARCH_RESULTS()
      }
      this.$router.push(`/admin/search?q=${this.search}`)
    },
    async logout() {
      try {
        await this.$auth.logout()
      } catch (err) {
        alert(err)
      }
    },
  },
}
</script>

<style scoped>
.logout-cursor {
  cursor: pointer;
}
</style>
