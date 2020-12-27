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
                    Here you can see general account information as well as
                    filling out your profile details (optional).
                    <br />
                    <b class="text-info"
                      >Your profile details may be used to help us improve our
                      items catalog in the future.</b
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
        <div class="col-12 col-md-6 col-lg-5">
          <div class="card border-0 card-shadow" data-aos="fade-up">
            <div class="card-body text-center p-2">
              <div class="row justify-content-between">
                <div class="col">
                  <small
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
                    history
                    history-gradient
                  >
                    <img :src="getProfilePic()" alt="" />
                  </vs-avatar>
                </div>
                <div class="col">
                  <small class="text-small"
                    ><nuxt-link to="/transactions"
                      >Transactions</nuxt-link
                    ></small
                  >
                  <div v-if="!$fetchState.pending">
                    <span class="font-weight-bold">
                      {{ TRANSACTIONS.data.length }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-center">
                  <vs-button circle icon border danger @click="deleteUser()">
                    <i class="bx bxs-trash"></i>
                  </vs-button>
                  <vs-button circle color="#336699" @click="editPrompt"
                    >Edit Profile
                  </vs-button>
                  <vs-button circle icon border to="/carts">
                    <i class="bx bx-cart-alt"></i>
                  </vs-button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-5"> -->
          <div
            class="card my-4 card-shadow"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div class="card-header border-0">
              <h3 class="text-monospace">General Details</h3>
            </div>
            <div class="card-body">
              <dl class="row mb-0">
                <dt class="col-sm-4">Type</dt>
                <dd class="col-sm-8">
                  {{ USER_DETAILS.data.type }}
                </dd>
                <dt class="col-sm-4">Joined At</dt>
                <dd class="col-sm-8">
                  {{ $auth.user.created_at }}
                </dd>
              </dl>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div class="col-md-6 col-lg-7">
          <div
            class="card card-shadow mb-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div class="card-header border-0">
              <h3 class="text-monospace">User Details</h3>
            </div>
            <div class="card-body">
              <dl class="row mb-0">
                <dt class="col-sm-4">Name</dt>
                <dd class="col-sm-8">
                  {{ $auth.user.name }}
                </dd>

                <dt class="col-sm-4">Email</dt>
                <dd class="col-sm-8">
                  {{ $auth.user.email }}
                </dd>

                <dt class="col-sm-4">Address</dt>
                <dd v-if="!USER_DETAILS.data.address" class="col-sm-8">
                  <span class="text-muted"> Not yet filled </span>
                </dd>
                <dd v-else class="col-sm-8">
                  {{ USER_DETAILS.data.address }}
                </dd>

                <dt class="col-sm-4">City</dt>
                <dd v-if="!USER_DETAILS.data.city" class="col-sm-8">
                  <span class="text-muted"> Not yet filled </span>
                </dd>
                <dd v-else class="col-sm-8">
                  {{ USER_DETAILS.data.city }}
                </dd>

                <dt class="col-sm-4">Province</dt>
                <dd v-if="!USER_DETAILS.data.province" class="col-sm-8">
                  <span class="text-muted"> Not yet filled </span>
                </dd>
                <dd v-else class="col-sm-8">
                  {{ USER_DETAILS.data.province }}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <vs-dialog v-model="activePrompt" blur prevent-close>
        <template #header>
          <h4>Edit Profile</h4>
        </template>

        <div class="container">
          <div class="row">
            <div v-if="PROVINCES" class="col-12 col-md-6 pb-4">
              <vs-select
                v-model="province_selected"
                color="#336699"
                filter
                :disabled="loading"
                :loading="loading"
                placeholder="Province"
                label="Receiver Province"
              >
                <template v-if="province_selected === ''" #message-danger>
                  Required
                </template>
                <vs-option
                  v-for="(province, index) in PROVINCES"
                  :key="index"
                  :value="`${province.province}|${province.province_id}`"
                  :label="province.province"
                  >{{ province.province }}</vs-option
                >
              </vs-select>
            </div>
            <!-- <div v-if="CITIES" class="col-12 col-md-6 pb-4">
              <vs-select
                v-model="city_selected"
                color="#336699"
                :disabled="province_selected === ''"
                placeholder="City"
                label="Receiver City | Postal Code"
              >
                <template v-if="!validCity.valid" #message-danger>
                  {{ validCity.message }}
                </template>
                <template v-for="city in CITIES(province)">
                  <vs-option
                    :key="`${city.city_id}-${city.province_id}`"
                    :value="`${city.city_name}|${city.city_id}|${city.province_id}|${city.type}|${city.postal_code}`"
                    :label="`${city.city_name} | ${city.postal_code}`"
                    >{{ city.city_name }} | {{ city.postal_code }}</vs-option
                  >
                </template>
              </vs-select>
            </div> -->
          </div>
        </div>
      </vs-dialog>
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
    await this.GET_USER_DETAILS()
  },

  data() {
    return {
      form: {
        image: null,
      },
      admin: {
        active: true,
      },
      activePrompt: false,
      province_selected: '',
      city_selected: '',
      loading: false,
    }
  },

  computed: {
    ...mapGetters({
      LIKED_PRODUCTS: 'users/LIKED_PRODUCTS',
      LIKED_BUNDLES: 'users/LIKED_BUNDLES',
      TRANSACTIONS: 'transactions/TRANSACTIONS',
      USER_DETAILS: 'users/USER_DETAILS',
      PROVINCES: 'shipping/PROVINCES',
      // CITIES: 'shipping/CITIES',
    }),
    likedItems() {
      return this.LIKED_PRODUCTS.concat(this.LIKED_BUNDLES)
    },
    // validCity() {
    //   let validity = {}
    //   if (this.province_selected === '') {
    //     validity = {
    //       valid: false,
    //       message: 'Province must be selected first',
    //     }
    //   } else if (this.city_selected === '') {
    //     validity = {
    //       valid: false,
    //       message: 'Required',
    //     }
    //   } else {
    //     validity = {
    //       valid: true,
    //       message: 'OK',
    //     }
    //   }
    //   return validity
    // },
  },

  methods: {
    ...mapActions({
      GET_LIKED_ITEMS: 'users/GET_LIKED_ITEMS',
      GET_USER_DETAILS: 'users/GET_USER_DETAILS',
      GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS',
      GET_PROVINCES: 'shipping/GET_PROVINCES',
      GET_CITIES: 'shipping/GET_CITIES',
    }),
    clear() {
      Object.assign(this.$data, this.$options.data())
    },
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
    async editPrompt() {
      this.activePrompt = !this.activePrompt
      this.loading = true
      try {
        await this.GET_PROVINCES()
        await this.GET_CITIES()
      } finally {
        this.loading = false
      }
    },
    deleteUser() {
      this.$swal({
        title: 'Delete Account?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$axios.$delete(`/users/${this.$auth.user.id}`)
            await this.$auth.logout()
            this.$swal({
              position: 'top-end',
              icon: 'success',
              title: 'Account Deleted',
              showConfirmButton: false,
              timer: 1500,
            })
            this.$router.push('/register')
          } catch (e) {
            alert(e)
          }
        }
      })
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
