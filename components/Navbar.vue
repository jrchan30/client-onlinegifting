<template>
  <div class="hidden pb-5">
    <vs-navbar v-model="active" fixed center-collapsed>
      <template #left>
        <vs-button flat icon @click="activeSidebar = !activeSidebar">
          <i class="bx bx-menu"></i>
        </vs-button>
      </template>
      <vs-navbar-item class="w-100">
        <vs-input v-model="search" class="w-100" color="primary" type="search">
          <template #icon>
            <i class="bx bx-search-alt"></i>
          </template>
        </vs-input>
      </vs-navbar-item>
      <template #right>
        <template v-if="!$auth.loggedIn">
          <vs-button flat>
            <nuxt-link to="/login">Login</nuxt-link>
          </vs-button>
          <vs-button>Get Started</vs-button>
        </template>
        <template v-else>
          <vs-avatar
            circle
            pointer
            :writing="$auth.user.detail === null"
            :badge="$auth.user.detail === null"
            @click="goToProfile()"
          >
            <template #text>
              {{ $auth.user.name }}
            </template>
          </vs-avatar>
          <vs-button color="rgb(51, 102, 153)" relief @click="logout()">
            Logout
            <template #animate>
              <i class="bx bx-run"></i>
            </template>
          </vs-button>
        </template>
      </template>
    </vs-navbar>
    <div class="position-sticky" style="z-index: 9999">
      <vs-sidebar v-model="active" :open.sync="activeSidebar">
        <template #logo>
          <img src="/image/OnlineGiftingTextEdited.svg" alt="" />
        </template>
        <vs-sidebar-item id="home" to="/">
          <template #icon>
            <i class="bx bx-home"></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="market" to="/products">
          <template #icon>
            <i class="bx bx-grid-alt"></i>
          </template>
          Products
        </vs-sidebar-item>
        <vs-sidebar-item id="Music" to="/bundles">
          <template #icon>
            <i class="bx bx-box"></i>
          </template>
          Bundles
        </vs-sidebar-item>
        <vs-sidebar-item id="donate" to="/categories">
          <template #icon>
            <i class="bx bx-book-content"></i>
          </template>
          Categories
        </vs-sidebar-item>
        <vs-sidebar-item id="likes" to="/liked">
          <template #icon>
            <i class="bx bx-happy-heart-eyes"></i>
          </template>
          Liked Items
        </vs-sidebar-item>
        <vs-sidebar-item id="profile" to="/profile">
          <template #icon> <i class="bx bxs-user-detail"></i> </template>
          Profile
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class="bx bx-help-circle"></i>
              </template>
              Need Help?
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item
            id="Instagram"
            href="https://www.instagram.com/jrussellchan/"
          >
            <template #icon>
              <i class="bx bxl-instagram"></i>
            </template>
            Instagram
          </vs-sidebar-item>
          <vs-sidebar-item
            id="Facebook"
            href="https://www.facebook.com/russell.chan.338/"
          >
            <template #icon>
              <i class="bx bxl-facebook"></i>
            </template>
            Facebook
          </vs-sidebar-item>
          <vs-sidebar-item id="Line">
            <template #icon>
              <i class="fab fa-line"></i>
            </template>
            Line
          </vs-sidebar-item>
          <vs-sidebar-item id="tutorial">
            <template #icon>
              <i class="fas fa-info"></i>
            </template>
            Tutorial
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class="bx bx-chat"></i>
            </template>
            Chat
          </vs-sidebar-item>
        </vs-sidebar-group>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar
              :writing="$auth.user.detail.phone_num == null"
              :badge="$auth.user.detail.phone_num == null"
            >
              <img src="/image/profile-pic.jfif" alt="" />
            </vs-avatar>

            <vs-avatar
              to="/cart"
              badge-color="primary"
              badge-position="top-right"
              @click="goToCart()"
            >
              <i class="bx bx-cart"></i>
              <template #badge> {{ $auth.user.cart }} </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'home',
    activeSidebar: false,
    search: '',
    cart_qty: 0,
  }),
  methods: {
    goToCart() {
      this.$router.push('/carts')
    },
    goToProfile() {
      this.$router.push('/profile')
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
