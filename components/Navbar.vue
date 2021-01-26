<template>
  <client-only>
    <div class="pb-5" style="max-width: 100wh" data-aos="fade-down">
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
        <vs-input
          v-model="search"
          aria-placeholder="search"
          aria-label="searchbar"
          placeholder="Search items..."
          class="w-100"
          color="#336699"
          type="search"
        >
          <template #icon>
            <i class="bx bx-search-alt"></i>
          </template>
        </vs-input>
        <div v-if="search.length > 0" class="h-100 align-items-center">
          <vs-button
            data-aos="fade"
            data-aos-duration="500"
            icon
            circle
            color="#336699"
            style="min-width: 35px"
            class="my-auto"
            @click="searchSubmit"
          >
            <i class="bx bx-search-alt-2"></i>
          </vs-button>
        </div>
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
            <vs-avatar
              pointer
              badge-position="top-right"
              badge
              :badge-color="colourOnOff"
              @click="goToProfile()"
            >
              <img
                class="text-muted"
                :src="getProfilePic()"
                alt="profile picture"
              />
              <template #badge>
                <span v-if="$nuxt.isOnline"> On </span>
                <span v-else> Off </span>
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

      <div v-if="$nuxt.isOffline">
        <div class="mt-5 pt-5" data-aos="fade" data-aos-duration="1000">
          <vs-alert color="danger">
            <template #icon>
              <strong>!</strong>
            </template>
            <template #title> Offline &#128561;</template>
            It seems that you are offline, some feature and images might not
            load properly.
          </vs-alert>
        </div>
      </div>

      <div class="position-sticky" style="z-index: 9999">
        <vs-sidebar
          v-model="active"
          color="#336699"
          :open.sync="activeSidebar"
          class="h-100"
        >
          <template #logo>
            <img src="/image/OnlineGiftingTextEdited.svg" alt="" />
          </template>
          <div class="d-flex w-100 px-2">
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
            <div v-if="search.length > 0" class="h-100 align-items-center">
              <vs-button
                data-aos="fade"
                data-aos-duration="500"
                icon
                circle
                color="#336699"
                style="min-width: 35px"
                class="my-auto"
                @click="searchSubmit"
              >
                <i class="bx bx-search-alt-2"></i>
              </vs-button>
            </div>
          </div>
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
          <!-- <vs-sidebar-item id="categories" to="/categories">
            <template #icon>
              <i class="bx bx-book-content"></i>
            </template>
            Categories
          </vs-sidebar-item> -->
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
          <vs-sidebar-item
            v-if="$auth.user"
            id="transaction"
            to="/transactions"
          >
            <template #icon> <i class="bx bx-credit-card-alt"></i> </template>
            Transactions
          </vs-sidebar-item>
          <!-- <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class="bx bx-help-circle"></i>
                </template>
                Orders
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item
              id="Instagram"
              href="https://www.instagram.com/jrussellchan/"
            >
              <template #icon>
                <i class="bx bxl-instagram"></i>
              </template>
              Details
            </vs-sidebar-item>
            <vs-sidebar-item
              id="Instagram"
              href="https://www.instagram.com/jrussellchan/"
            >
              <template #icon>
                <i class="bx bx-credit-card-alt"></i>
              </template>
              Details
            </vs-sidebar-item>
          </vs-sidebar-group> -->
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
            <!-- <vs-sidebar-item id="Line">
              <template #icon>
                <i class="fab fa-line"></i>
              </template>
              Line
            </vs-sidebar-item> -->
            <vs-sidebar-item id="tutorial" disabled>
              <template #icon>
                <i class="fas fa-info"></i>
              </template>
              Tutorial (Unavailable)
            </vs-sidebar-item>
            <vs-sidebar-item id="chat" to="/chat">
              <template #icon>
                <i class="bx bx-chat"></i>
              </template>
              Chat (In Development)
            </vs-sidebar-item>
          </vs-sidebar-group>
          <div class="row ml-1">
            <div class="col-12 pt-2 justify-content-between">
              <div v-if="!$auth.user">
                <div>Login to unlock all features</div>
              </div>
              <div v-else class="d-flex">
                <p>Notifications</p>
                <vs-switch
                  :disabled="pushButtonDisabled || loading"
                  v-model="isPushEnabled"
                  @click="togglePush"
                  class="ml-4"
                >
                  <i class="bx bxs-message"></i>
                </vs-switch>
              </div>
            </div>
          </div>

          <!-- <vs-row justify="center"> -->
          <!-- <vs-col w="11"> -->

          <!-- </vs-col> -->
          <!-- </vs-row> -->
          <template #footer>
            <vs-row v-if="$auth.user" justify="space-between">
              <vs-avatar
                badge-position="top-right"
                badge
                :badge-color="colourOnOff"
              >
                <template #text>
                  {{ $auth.user.name }}
                </template>
                <template #badge>
                  <span v-if="$nuxt.isOnline"> On </span>
                  <span v-else> Off </span>
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
                <template v-if="getCartItemCount > 0" #badge>
                  {{ getCartItemCount }}
                </template>
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data({ route }) {
    return {
      active: this.$route.name,
      activeSidebar: false,
      search: '',
      cart_qty: 0,
      activeTooltip1: false,
      initialLoad: true,
      isPushEnabled: false,
      pushButtonDisabled: true,
      loading: false,
    }
  },
  async mounted() {
    try {
      if (this.$auth.loggedIn) {
        if (process.env.NODE_ENV === 'development') {
          this.registerServiceWorker()
        } else {
          this.initialiseServiceWorker()
        }
        this.initialLoad = true
        await this.GET_CART()
      }
    } finally {
      this.initialLoad = false
    }
  },
  computed: {
    ...mapGetters({
      CART: 'users/CART',
    }),
    colourOnOff() {
      if (this.$nuxt.isOnline) {
        return '#4BB543'
      } else {
        return '#fd4557'
      }
    },
    getCartItemCount() {
      if (this.$auth.user && !this.initialLoad && this.$auth.loggedIn) {
        return (
          this.$store.state.users.cart.data.boxes.length +
          this.$store.state.users.cart.data.bundles.length
        )
      } else {
        return '0'
      }
    },
  },
  methods: {
    ...mapActions({
      GET_CART: 'users/GET_CART',
    }),
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
    searchSubmit() {
      this.$router.push(`/search?search=${this.search}`)
    },

    registerServiceWorker() {
      if (!('serviceWorker' in navigator)) {
        console.log("Service workers aren't supported in this browser.")
        return
      } else {
        console.log('Service workers is available')
      }
      navigator.serviceWorker
        .register('/push-sw.js')
        .then(() => this.initialiseServiceWorker())

      // console.log(navigator.serviceWorker.register('/push-sw.js'))
    },
    initialiseServiceWorker() {
      if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
        console.log("Notifications aren't supported.")
        return
      }
      if (Notification.permission === 'denied') {
        console.log('The user has blocked notifications.')
        return
      }
      if (!('PushManager' in window)) {
        console.log("Push messaging isn't supported.")
        return
      }
      // console.log('initaliaseServiceWorkerSupported')
      navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager
          .getSubscription()
          .then((subscription) => {
            this.pushButtonDisabled = false
            console.log(subscription)
            if (!subscription) {
              return
            }
            this.updateSubscription(subscription)
            // console.log(this.isPushEnabled)
            this.isPushEnabled = true
          })
          .catch((e) => {
            console.log('Error during getSubscription()', e)
          })
      })
    },
    /**
     * Subscribe for push notifications.
     */
    subscribe() {
      navigator.serviceWorker.ready.then((registration) => {
        const options = { userVisibleOnly: true }
        const vapidPublicKey = process.env.VAPID_PUBLIC_KEY
        if (vapidPublicKey) {
          options.applicationServerKey = this.urlBase64ToUint8Array(
            vapidPublicKey
          )
        }
        registration.pushManager
          .subscribe(options)
          .then((subscription) => {
            this.isPushEnabled = true
            this.pushButtonDisabled = false
            this.updateSubscription(subscription)
          })
          .catch((e) => {
            if (Notification.permission === 'denied') {
              console.log('Permission for Notifications was denied')
              this.pushButtonDisabled = true
            } else {
              console.log('Unable to subscribe to push.', e)
              this.pushButtonDisabled = false
            }
          })
      })
    },
    /**
     * Unsubscribe from push notifications.
     */
    unsubscribe() {
      navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager
          .getSubscription()
          .then((subscription) => {
            if (!subscription) {
              this.isPushEnabled = false
              this.pushButtonDisabled = false
              return
            }
            subscription
              .unsubscribe()
              .then(() => {
                this.deleteSubscription(subscription)
                this.isPushEnabled = false
                this.pushButtonDisabled = false
              })
              .catch((e) => {
                console.log('Unsubscription error: ', e)
                this.pushButtonDisabled = false
              })
          })
          .catch((e) => {
            console.log('Error thrown while unsubscribing.', e)
          })
      })
    },
    /**
     * Toggle push notifications subscription.
     */
    togglePush() {
      if (this.isPushEnabled) {
        this.unsubscribe()
      } else {
        this.subscribe()
      }
    },
    /**
     * Send a request to the server to update user's subscription.
     *
     * @param {PushSubscription} subscription
     */
    updateSubscription(subscription) {
      const key = subscription.getKey('p256dh')
      const token = subscription.getKey('auth')
      const contentEncoding = (PushManager.supportedContentEncodings || [
        'aesgcm',
      ])[0]
      const data = {
        endpoint: subscription.endpoint,
        publicKey: key
          ? btoa(String.fromCharCode.apply(null, new Uint8Array(key)))
          : null,
        authToken: token
          ? btoa(String.fromCharCode.apply(null, new Uint8Array(token)))
          : null,
        contentEncoding,
      }
      this.loading = true
      this.$axios.post('/subscriptions', data).then(() => {
        this.loading = false
      })
    },
    /**
     * Send a requst to the server to delete user's subscription.
     *
     * @param {PushSubscription} subscription
     */
    deleteSubscription(subscription) {
      this.loading = true
      this.$axios
        .post('/subscriptions/delete', { endpoint: subscription.endpoint })
        .then(() => {
          this.loading = false
        })
    },
    /**
     * Send a request to the server for a push notification.
     */
    sendNotification() {
      this.loading = true
      this.$axios
        .post('/notifications')
        .catch((error) => console.log(error))
        .then(() => {
          this.loading = false
        })
    },
    /**
     * https://github.com/Minishlink/physbook/blob/02a0d5d7ca0d5d2cc6d308a3a9b81244c63b3f14/app/Resources/public/js/app.js#L177
     *
     * @param  {String} base64String
     * @return {Uint8Array}
     */
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
      const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/')
      const rawData = window.atob(base64)
      const outputArray = new Uint8Array(rawData.length)
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
      }
      return outputArray
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
