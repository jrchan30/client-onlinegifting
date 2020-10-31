<template>
  <div>
    <nav class="container-fluid text-center py-3 shadow justify-content-center">
      <!-- Links Nav-->
      <div class="row align-items-center">
        <nuxt-link to="/home" class="col-4 col-md-1 m-auto">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 437.27 132.52"
          >
            <defs>
              <style>
                .cls-1,
                .cls-2 {
                  isolation: isolate;
                }
                .cls-1 {
                  font-size: 77.04px;
                  fill: #369;
                  stroke: #369;
                  stroke-miterlimit: 10;
                  font-family: KeepCalm-Medium, Keep Calm;
                  font-weight: 500;
                }
              </style>
            </defs>
            <text class="cls-1" transform="translate(0.5 69.84) scale(0.78 1)">
              Online Gifting
            </text>
            <text class="cls-2" x="-0.64" y="-8.24" />
          </svg>
        </nuxt-link>
        <div class="w-100 d-block d-md-none mt-4 mt-md-0"></div>
        <div class="col-4 col-md-1 p-0 navDiv">
          <nuxt-link
            to="/home"
            class="text-dark text-decoration-none nav-link-custom"
            >HOME</nuxt-link
          >
        </div>
        <div class="col-4 col-md-2 p-0 navDiv">
          <nuxt-link
            to="/home"
            class="text-dark text-decoration-none nav-link-custom"
            >PRODUCTS</nuxt-link
          >
        </div>

        <div class="col-4 col-md-2 p-0 navDiv">
          <nuxt-link
            to="/home"
            class="text-dark text-decoration-none nav-link-custom"
            @mouseover.native="isShowCategories = true"
            @mouseleave.native="isShowCategories = false"
            >CATEGORIES
          </nuxt-link>
        </div>
        <!-- End Links Nav -->

        <!-- Searchbar -->
        <form class="input-group col-6 col-md-4 m-0 mt-4 mt-md-0">
          <div class="input-group-prepend">
            <button class="input-group-text" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <input type="text" class="form-control" placeholder="Search..." />
        </form>
        <!-- End Searchbar -->

        <client-only placeholder="Loading...">
          <!-- Before Logged In -->
          <template v-if="!$auth.loggedIn">
            <nuxt-link
              to="/Login"
              class="col col-md-1 mt-4 mt-md-0 rounded-sm border p-3 register-btn text-white text-decoration-none mr-0"
            >
              LOGIN
            </nuxt-link>
            <nuxt-link
              to="/Register"
              class="col col-md-1 mt-4 mt-md-0 p-0 text-dark text-decoration-none"
              >REGISTER</nuxt-link
            >
          </template>
          <!-- End Before Logged In -->

          <!-- After Logged In -->
          <template v-else>
            <div class="col-2 col-md-1 mt-4 mt-md-0">
              <a class="" href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
            </div>
            <div class="col-2 col-md-1 mt-4 mt-md-0">
              <button
                type="button"
                class="dropdown-toggle btn-light btn-outline-light"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="far fa-user-circle">{{ $auth.user.name }}</i>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">
                  Edit Profile
                </button>
                <button class="dropdown-item" type="button">Settings</button>
                <button class="dropdown-item" type="button">Logout</button>
              </div>
            </div>
          </template>
          <!-- End After Logged In -->
        </client-only>
      </div>
    </nav>
    <transition name="fade">
      <categories-dropdown
        v-show="isShowCategories"
        @mouseover.native="isShowCategories = true"
        @mouseleave.native="isShowCategories = false"
        @clicked="onChildClicked"
      >
      </categories-dropdown>
    </transition>
  </div>
</template>

<script>
import CategoriesDropdown from '@/components/CategoriesDropdown'
export default {
  components: {
    CategoriesDropdown,
  },
  data() {
    return {
      isShowCategories: false,
    }
  },
  methods: {
    onChildClicked(value) {
      this.isShowCategories = value
    },
  },
}
</script>

<style scoped>
.dropdown-toggle {
  border: none;
}

.dropdown-toggle:hover {
  border: none;
  background-color: none;
}
.dropdown-toggle:focus {
  outline: none;
  box-shadow: none;
}

.fa-shopping-cart,
.fa-user-circle {
  color: #343a40;
}

.fa-shopping-cart:hover,
.fa-user-circle:hover {
  color: #336699;
}
.register-btn {
  background-color: #336699;
  width: 100%;
}

.navDiv {
  transition: transform 0.4s;
}
.navDiv:hover {
  transform: scale(1.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
