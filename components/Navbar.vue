<template>
  <client-only>
    <div class="pb-5" data-aos="fade-down">
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
              <img
                class="text-muted"
                :src="getProfilePic()"
                alt="profile picture"
              />
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
          <vs-sidebar-item id="index" to="/">
            <template #icon>
              <i class="bx bx-home"></i>
            </template>
            Home
          </vs-sidebar-item>
          <vs-sidebar-item id="products" to="/products">
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
          <vs-sidebar-item v-if="$auth.user" id="liked-items" to="/liked-items">
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
                <template #text>
                  {{ $auth.user.name }}
                </template>
              </vs-avatar>

              <vs-button v-if="$auth.user.detail.type == 'admin'" to="/admin">
                Admin Page
              </vs-button>

              <vs-avatar
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
  data({ route }) {
    return {
      active: this.$route.name,
      activeSidebar: false,
      search: '',
      cart_qty: 0,
      activeTooltip1: false,
    }
  },
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

<style>
.vs-tooltip {
  margin-top: 20px;
}

.content-tooltip .body {
  /* margin-top: 30px; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.content-tooltip .body .vs-avatar-content {
  margin-top: -30px;
  border: 3px solid var(--vs-theme-layout);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
}
.content-tooltip .body .text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 0.55rem;
  padding: 10px;
  font-weight: normal;
}
.content-tooltip .body .text span {
  font-weight: bold;
  font-size: 0.7rem;
}

.content-tooltip footer {
  /* padding-top: 20px; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-tooltip h4 {
  padding: 20px;
  margin: 0px;
  text-align: left;
}
.content-tooltip p {
  text-align: left;
  padding: 0px;
  margin: 0px;
  line-height: 1rem;
  padding-bottom: 5px;
  padding-left: 8px;
}

.vs-navbar__center {
  width: 30%;
}

.vs-input {
  min-width: 100%;
}
</style>
