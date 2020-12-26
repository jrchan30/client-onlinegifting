<template>
  <div>
    <div class="box-content">
      <template v-if="$auth.user">
        <div class="container">
          <div v-if="$auth.user.detail">
            <template
              v-if="$auth.user.detail.type == 'admin'"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <vs-alert v-model="admin.active" closable danger class="mb-5">
                <template #icon>
                  <strong>!</strong>
                </template>
                <template #title> Warning Admin </template>
                To see admin's profile, you should navigate to the profile page
                in the admin section provided
                <nuxt-link to="/admin/profile">HERE!</nuxt-link>
              </vs-alert>
            </template>
          </div>
          <div class="bg-top pt-0">
            <div class="row pt-0 pt-md-5">
              <div class="d-none d-md-flex col-md-3 col-lg-6"></div>
              <div class="col-12 col-md-9 col-lg-5">
                <vs-alert relief>
                  <template #icon>
                    <i class="bx bxs-chat"></i>
                  </template>
                  <template #title>
                    Welcome to your profile page, {{ $auth.user.name }}
                  </template>
                  <p>
                    Here you can see all your past transactions as well as
                    filling out your profile details (optional).

                    <b class="text-info"
                      >Your profile details will only be used to improve our
                      items catalog to adjust based on our customers</b
                    >
                  </p>
                </vs-alert>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="container pt-5 pt-md-5">
      <div class="row">
        <div class="col-12 col-md-6" data-aos="fade-up">
          <div class="card border-0 card-shadow">
            <div class="card-body text-center p-2">
              <div class="row justify-content-between">
                <div class="col">
                  <small class="font-weight-bold"
                    ><nuxt-link to="/liked-items">Liked Items</nuxt-link></small
                  >
                  <vs-avatar v-if="$fetchState.pending">
                    <i class="bx bx-loader-circle"></i>
                  </vs-avatar>
                  <div v-else>
                    <div v-if="likedItems.length < 1">0</div>
                    <vs-avatar-group v-else max="3">
                      <vs-avatar
                        v-for="(item, index) in likedItems"
                        :key="index"
                        badge-position="bottom-left"
                      >
                        <template #badge>
                          <i v-if="item.type == 'product'">P</i>
                          <i v-else>B</i>
                        </template>
                        <img
                          class="profilepic-ratio h-100 w-100"
                          :src="item.main_image"
                          alt=""
                        />
                      </vs-avatar>
                    </vs-avatar-group>
                  </div>
                </div>
                <div class="col p-0">
                  <vs-avatar
                    class="mx-auto mt-n5"
                    style="width: 100px; height: 100px"
                    circle
                  >
                    <img :src="getProfilePic()" alt="" />
                  </vs-avatar>
                </div>
                <div class="col">
                  <small class="text-small font-weight-bold"
                    ><nuxt-link to="/transactions"
                      >Transactions</nuxt-link
                    ></small
                  >
                  <div v-if="!$fetchState.pending">
                    <span> {{ TRANSACTIONS.data.length }}</span>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col">
                  <h5 class="text-truncate">
                    {{ $auth.user.name }}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'default',
  middleware: ['auth'],
  async fetch() {
    await this.GET_LIKED_ITEMS()
    await this.GET_TRANSACTIONS()
  },
  data() {
    return {
      form: {
        image: null,
      },
      admin: {
        active: true,
      },
    }
  },

  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      loggedInUser: 'loggedInUser',
      LIKED_PRODUCTS: 'users/LIKED_PRODUCTS',
      LIKED_BUNDLES: 'users/LIKED_BUNDLES',
      TRANSACTIONS: 'transactions/TRANSACTIONS',
    }),
    likedItems() {
      return this.LIKED_PRODUCTS.concat(this.LIKED_BUNDLES)
    },
  },
  // mounted() {
  //   this.GET_TRANSACTIONS()
  // },

  methods: {
    ...mapActions({
      GET_LIKED_ITEMS: 'users/GET_LIKED_ITEMS',
      GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS',
    }),
    onChange() {
      const file = this.$refs.pictureInput.file
      if (file) {
        this.form.image = file
      } else {
        alert(
          'Old browser (not supported). Chrome latest updated browser is suggested'
        )
      }
    },
    onRemoved() {
      this.image = ''
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
.profilepic-ratio {
  object-fit: cover;
  height: 200px;
  width: 200px;
}
.item-image {
  object-fit: cover;
}

.bg-top {
  background-image: url('/image/undraw_Gift_box_re_vau4.svg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  height: calc(100vh - 10rem);
}

@media only screen and (max-width: 768px) {
  .bg-top {
    height: calc(100vh - 20rem);
  }
}

@media only screen and (max-width: 576px) {
  .bg-top {
    height: calc(100vh - 15rem);
  }
}

.box-content {
  width: 100vw;
  height: 100%;
}

.card-shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-shadow:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
