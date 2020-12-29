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
    <template v-if="$auth.user">
      <div class="container pt-5 pt-md-5">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5">
            <div class="card border-0 card-shadow" data-aos="fade-up">
              <div class="card-body text-center p-2">
                <div class="row justify-content-between">
                  <div class="col">
                    <small
                      ><nuxt-link to="/liked-items"
                        >Liked Items</nuxt-link
                      ></small
                    >
                    <vs-avatar v-if="$fetchState.pending">
                      <i class="bx bx-loader-circle"></i>
                    </vs-avatar>
                    <div v-else>
                      <div v-if="likedItems.length < 1">
                        <span class="font-weight-bold">0</span>
                      </div>
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
                      <img :src="$auth.user.profile_pic" alt="" />
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
                <dl v-if="!$fetchState.pending" class="row mb-0">
                  <dt class="col-sm-4">Type</dt>
                  <dd class="col-sm-8">
                    {{ USER_DETAILS.data.type }}
                  </dd>
                  <dt class="col-sm-4">Joined</dt>
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
                <dl v-if="!$fetchState.pending" class="row mb-0">
                  <dt class="col-sm-4">Name</dt>
                  <dd class="col-sm-8">
                    {{ $auth.user.name }}
                  </dd>

                  <dt class="col-sm-4">Email</dt>
                  <dd class="col-sm-8">
                    {{ $auth.user.email }}
                  </dd>

                  <dt class="col-sm-4">Province</dt>
                  <dd v-if="!USER_DETAILS.data.province" class="col-sm-8">
                    <span class="text-muted"> Not yet filled </span>
                  </dd>
                  <dd v-else class="col-sm-8">
                    <!-- {{ USER_DETAILS.data.province }} -->
                    {{ splittedProvinceCity.tempProvince }}
                  </dd>

                  <dt class="col-sm-4">City</dt>
                  <dd v-if="!USER_DETAILS.data.city" class="col-sm-8">
                    <span class="text-muted"> Not yet filled </span>
                  </dd>
                  <dd v-else class="col-sm-8">
                    <!-- {{ USER_DETAILS.data.city }} -->
                    {{ splittedProvinceCity.tempCity }}
                  </dd>

                  <dt class="col-sm-4">Address</dt>
                  <dd v-if="!USER_DETAILS.data.address" class="col-sm-8">
                    <span class="text-muted"> Not yet filled </span>
                  </dd>
                  <dd v-else class="col-sm-8">
                    {{ USER_DETAILS.data.address }}
                  </dd>

                  <dt class="col-sm-4">Phone Number</dt>
                  <dd v-if="!USER_DETAILS.data.phone_num" class="col-sm-8">
                    <span class="text-muted"> Not yet filled </span>
                  </dd>
                  <dd v-else class="col-sm-8">
                    {{ USER_DETAILS.data.phone_num }}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="container"> -->
      <vs-dialog v-model="activePrompt" blur prevent-close :loading="loading">
        <template #header>
          <h4>Edit Profile Details</h4>
        </template>

        <div class="container">
          <div class="row">
            <div v-if="PROVINCES.length > 0" class="col-12 col-sm-6 py-4">
              <vs-select
                v-model="province_selected"
                color="#336699"
                filter
                placeholder="Jakarta"
                label="Province"
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
            <div v-if="showCity && !loading" class="col-12 col-sm-6 py-4">
              <vs-select
                v-model="city_selected"
                color="#336699"
                placeholder="Jakarta Timur"
                label="City | Postal Code"
              >
                <template v-if="!validCity.valid" #message-danger>
                  {{ validCity.message }}
                </template>
                <template v-for="city in CITIES_LOCAL">
                  <vs-option
                    :key="`${city.city_id}-${city.province_id}`"
                    :value="`${city.city_name}|${city.city_id}|${city.province_id}|${city.type}|${city.postal_code}`"
                    :label="`${city.city_name} | ${city.postal_code}`"
                    >{{ city.city_name }} | {{ city.postal_code }}</vs-option
                  >
                </template>
              </vs-select>
            </div>
            <div class="col-12 col-md-8 py-4">
              <vs-input
                v-model="tempAddress"
                color="#336699"
                type="text"
                label="Full Address"
                placeholder="Jl. Raya Kb. Jeruk No.27"
                class="pb-3"
                required
              >
                <template v-if="!validAddress" #message-danger>
                  Required (Between 10-60 letters)
                </template>
                <template #icon>
                  <i class="bx bxs-edit-location"></i>
                </template>
              </vs-input>
            </div>
            <div class="col-12 col-md-4 py-4">
              <vs-input
                v-model="tempPhoneNum"
                color="#336699"
                type="tel"
                label="Phone Number"
                placeholder="081514329539"
                required
              >
                <template v-if="!validPhone" #message-danger>
                  Required (Indonesia Format)
                </template>
                <template #icon> <i class="bx bx-phone"></i> </template>
              </vs-input>
            </div>
          </div>
          <dl class="row mb-0">
            <dt class="col-sm-4">Province</dt>
            <dd v-if="!province_selected" class="col-sm-8">
              <span class="text-muted"> Not yet filled </span>
            </dd>
            <dd v-else class="col-sm-8">
              {{ province_selected }}
            </dd>

            <dt class="col-sm-4">City</dt>
            <dd v-if="!city_selected" class="col-sm-8">
              <span class="text-muted"> Not yet filled </span>
            </dd>
            <dd v-else class="col-sm-8">
              {{ city_selected }}
            </dd>

            <dt class="col-sm-4">Address</dt>
            <dd v-if="!address" class="col-sm-8">
              <span class="text-muted"> Not yet filled </span>
            </dd>
            <dd v-else class="col-sm-8">
              {{ address }}
            </dd>

            <dt class="col-sm-4">Phone Number</dt>
            <dd v-if="!phoneNum" class="col-sm-8">
              <span class="text-muted"> Not yet filled </span>
            </dd>
            <dd v-else class="col-sm-8">
              {{ phoneNum }}
            </dd>
          </dl>
          <div class="row">
            <div class="mx-auto">
              <vs-button animation-type="vertical" @click="submit">
                Save
                <template #animate> <i class="bx bx-save"></i> </template
              ></vs-button>
            </div>
          </div>
        </div>
      </vs-dialog>
    </template>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { debounce } from '@/plugins/customUtil'
import requrl from 'requrl'

export default {
  layout: 'default',
  middleware: ['auth'],
  // middleware: ['auth-user'],

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
      tempAddress: '',
      address: '',
      showCity: false,
      tempPhoneNum: '',
      phoneNum: '',
    }
  },

  nuxtServerInit() {
    console.log(process.server)
    if (process.server) {
      this.$auth.ctx.$axios.setHeader('referer', requrl(this.req))
    }
  },

  computed: {
    ...mapGetters({
      LIKED_PRODUCTS: 'users/LIKED_PRODUCTS',
      LIKED_BUNDLES: 'users/LIKED_BUNDLES',
      TRANSACTIONS: 'transactions/TRANSACTIONS',
      USER_DETAILS: 'users/USER_DETAILS',
      PROVINCES: 'shipping/PROVINCES',
      CITIES_LOCAL: 'shipping/CITIES_LOCAL',
    }),
    likedItems() {
      return this.LIKED_PRODUCTS.concat(this.LIKED_BUNDLES)
    },
    validCity() {
      let validity = {}
      if (this.province_selected === '') {
        validity = {
          valid: false,
          message: 'Province must be selected first',
        }
      } else if (this.city_selected === '') {
        validity = {
          valid: false,
          message: 'Required',
        }
      } else {
        validity = {
          valid: true,
          message: 'OK',
        }
      }
      return validity
    },
    validAddress() {
      if (
        this.address === '' ||
        this.address.length < 10 ||
        this.address.length > 70
      ) {
        return false
      } else {
        return true
      }
    },
    validPhone() {
      return /^\d{6,12}$/.test(this.phoneNum)
    },
    splittedProvinceCity() {
      let tempProvince = this.USER_DETAILS.data.province
      let tempCity = this.USER_DETAILS.data.city
      if (tempProvince !== null) {
        const arrProvince = tempProvince.split('|')
        tempProvince = arrProvince[0]
      }

      if (tempCity !== null) {
        const arrCity = tempCity.split('|')
        tempCity = arrCity[0]
      }
      return { tempProvince, tempCity }
    },
  },

  watch: {
    async province_selected(val) {
      this.loading = true
      this.city_selected = ''
      const arrVal = val.split('|')
      const provinceId = arrVal[1]
      try {
        this.showCity = false
        await this.GET_CITIES(provinceId)
      } finally {
        this.showCity = true
        this.loading = false
      }
    },
    tempAddress: debounce(function (newVal) {
      this.address = newVal
    }, 500),
    tempPhoneNum: debounce(function (newVal) {
      this.phoneNum = newVal
    }, 500),
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
      this.tempAddress = this.USER_DETAILS.data.address ?? ''
      this.tempPhoneNum = this.USER_DETAILS.data.phone_num ?? ''
      try {
        this.province_selected = this.USER_DETAILS.data.province ?? ''

        await this.GET_PROVINCES()
        // await this.GET_CITIES()
      } finally {
        this.loading = false
        this.city_selected = this.USER_DETAILS.data.city ?? ''
      }
    },
    async submit() {
      if (
        this.validCity &&
        this.validAddress &&
        this.validPhone &&
        this.province_selected !== ''
      ) {
        try {
          const form = {
            province: this.province_selected,
            city: this.city_selected,
            phone_num: this.phoneNum,
            address: this.address,
          }
          this.loading = true
          await this.$axios.$patch(`/users/${this.$auth.user.id}`, form)
          this.GET_USER_DETAILS()
        } catch (e) {
          alert(e)
        } finally {
          this.loading = false
        }
      } else {
        alert('Please fill all inputs as instructed')
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

.vs-select-content {
  max-width: 100%;
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
