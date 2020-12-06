<template>
  <client-only>
    <div class="pb-5">
      <vs-navbar
        v-model="active"
        padding-scroll
        style="z-index: 9999"
        fixed
        center-collapsed
      >
        <template #left>
          <vs-button
            flat
            icon
            aria-label="toggle dropdown"
            @click="activeSidebar = !activeSidebar"
          >
            <i class="text-primary bx bx-menu"></i>
          </vs-button>
        </template>
        <vs-navbar-item class="w-100">
          <vs-input
            v-model="search"
            aria-placeholder="search"
            aria-label="searchbar"
            class="w-100"
            color="#336699"
            type="search"
          >
            <template #icon>
              <i class="bx bx-search-alt"></i>
            </template>
          </vs-input>
        </vs-navbar-item>
        <template #right>
          <template v-if="!$auth.loggedIn">
            <vs-button flat color="#336699" to="/login" aria-label="login">
              Login
            </vs-button>
            <vs-button color="#336699" to="/register" aria-label="register"
              >Get Started</vs-button
            >
          </template>
          <template v-else>
            <vs-avatar pointer @click="goToProfile()">
              <template #text>
                {{ $auth.user.name }}
              </template>
            </vs-avatar>
            <vs-button
              color="#336699"
              aria-label="logout"
              transparent
              @click="logout()"
            >
              Logout
              <template #animate>
                <i class="bx bx-run"></i>
              </template>
            </vs-button>
          </template>
        </template>
      </vs-navbar>
      <div class="position-sticky" style="z-index: 9999">
        <vs-sidebar v-model="active" color="#336699" :open.sync="activeSidebar">
          <template #logo>
            <img src="/image/OnlineGiftingTextEdited.svg" alt="" />
          </template>
          <vs-sidebar-item id="home" to="/">
            <template #icon>
              <i class="bx bx-home"></i>
            </template>
            Home
          </vs-sidebar-item>
          <vs-sidebar-item id="product" to="/products">
            <template #icon>
              <i class="bx bx-grid-alt"></i>
            </template>
            Products
          </vs-sidebar-item>
          <vs-sidebar-item v-if="$auth.user" id="boxes" to="/boxes">
            <template #icon>
              <i class="bx bxs-box"></i>
            </template>
            Your Boxes
          </vs-sidebar-item>
          <vs-sidebar-item id="bundles" to="/bundles">
            <template #icon>
              <i class="bx bx-box"></i>
            </template>
            Bundles
          </vs-sidebar-item>
          <vs-sidebar-item id="categories" to="/categories">
            <template #icon>
              <i class="bx bx-book-content"></i>
            </template>
            Categories
          </vs-sidebar-item>
          <vs-sidebar-item v-if="$auth.user" id="likes" to="/liked-items">
            <template #icon>
              <i class="bx bx-happy-heart-eyes"></i>
            </template>
            Liked Items
          </vs-sidebar-item>
          <vs-sidebar-item v-if="$auth.user" id="profile" to="/profile">
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
          <vs-row justify="center">
            <vs-col w="11">
              <vs-input
                v-model="search"
                aria-placeholder="search"
                aria-label="searchbar"
                class="w-100"
                color="primary"
                type="search"
              >
                <template #icon>
                  <i class="bx bx-search-alt"></i>
                </template>
              </vs-input>
            </vs-col>
          </vs-row>
          <template #footer>
            <vs-row v-if="$auth.user" justify="space-between">
              <vs-avatar>
                <img class="text-muted" :src="getProfilePic()" alt="" />
              </vs-avatar>

              <vs-avatar
                to="/cart"
                badge-color="primary"
                badge-position="top-right"
                @click="goToCart()"
              >
                <i class="bx bx-cart"></i>
                <template #badge> {{ getCartItemCount }} </template>
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data: () => ({
    active: 'home',
    activeSidebar: false,
    search: '',
    cart_qty: 0,
  }),
  computed: {
    getCartItemCount() {
      if (this.$auth.user.cart) {
        return (
          this.$auth.user.cart.boxes.length +
          this.$auth.user.cart.bundles.length
        )
      }
      return '0'
    },
  },
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
    getProfilePic() {
      if (this.$auth.user.detail.image == null) {
        return '/image/bx-user.svg'
      } else {
        return `${this.$auth.user.detail.image.url}`
      }
    },
  },
}
</script>
