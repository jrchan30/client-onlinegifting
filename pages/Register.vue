<template>
  <div>
    <div class="container">
      <div class="row justify-content-around align-items-center text-center">
        <div class="col-6 d-none d-md-block">
          <img src="/image/Login-Background.svg" alt="" />
          <h2 class="pt-2 mb-0">Gifts for Your Loved Ones</h2>
          <p>Simple, fast, and convenient gifting experience</p>
        </div>
        <div class="col-10 col-md-6 p-0">
          <div class="card w-100">
            <img
              class="card-image-top w-50 p-4"
              src="/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"
              alt=""
            />
            <h2 class="card-title font-weight-bold text-uppercase">Register</h2>
            <form class="form" @submit.prevent="submit">
              <alert-success :form="form">
                We have sent you an email to activate your account.
              </alert-success>
              <div class="card-body form-field m-auto">
                <div class="input-group no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    v-model.trim="form.username"
                    name="username"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('username') }"
                    placeholder="Username..."
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
                <div class="input-group no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    v-model.trim="form.name"
                    name="name"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                    placeholder="Name..."
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
                <div class="input-group no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons ui-1_email-85"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    v-model.trim="form.email"
                    name="email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                    placeholder="Email Address..."
                  />
                  <has-error :form="form" field="email"></has-error>
                </div>
                <div class="input-group no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    v-model.trim="form.password"
                    name="password"
                    placeholder="Password..."
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('password') }"
                  />
                  <has-error :form="form" field="password"></has-error>
                </div>
                <div class="input-group no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    v-model.trim="form.password_confirmation"
                    name="confirm_password"
                    placeholder="Confirm Password..."
                    class="form-control"
                  />
                </div>
              </div>
              <div class="card-footer text-left px-3">
                <button
                  type="submit"
                  class="btn btn-primary btn-round btn-lg btn-block register-btn"
                >
                  <span v-if="form.busy">
                    <i class="fas fa-spinner fa-spin"></i>
                  </span>
                  Register
                </button>
                <div class="pb-4">
                  <h6 class="text-custom">
                    Already Have an Account?
                    <nuxt-link to="/login" class="font-color-custom">
                      Login
                    </nuxt-link>
                  </h6>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LoginRegister',
  data() {
    return {
      form: this.$vform({
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }),
    }
  },
  methods: {
    async submit() {
      try {
        //JALANIN
        this.form.post('http://localhost:8000/api/register')
        console.log('success register')
      } catch (e) {
        console.log(e)
      }
    },
    // async submit() {
    //   try {
    //     //JALANIN
    //     this.$axios.$post('http://localhost:8000/register', this.form)
    //     console.log('success register')
    //   } catch (e) {
    //     console.log(e)
    //   } finally {
    //     console.log('success (finally)')
    //   }
    // },
    // async submit() {
    //   $token = await this.$axios.$get(
    //     'http://localhost:8000/sanctum/csrf-cookie'
    //   )
    //   this.$auth.token.set($token)
    //   this.form
    //     .post('laravelSanctum', 'http://localhost:8000/register', $token)
    //     .then((res) => {
    //       this.form.reset()
    //       console.log(res)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    // async setToken() {
    //   $token = await this.$axios.$get(
    //     'http://localhost:8000/sanctum/csrf-cookie'
    //   )
    //   await this.$auth.token.set($token)
    // },
    // async submit() {
    //   await setToken()
    //   await this.$axios.$post('/register', {
    //     data: {
    //       name: this.form.name,
    //       email: this.form.email,
    //       password: this.form.password,
    //     },
    //   })
    //   console.log(this.data)
    // },
    // submit() {
    //   this.$axios
    //     .$get('http://localhost:8000/sanctum/csrf-cookie', (res) => {
    //       this.$auth.token.set($token)
    //     })
    //     .then(
    //       this.form
    //         .post('/register')
    //         .then((res) => {
    //           this.form.reset()
    //           console.log(res)
    //         })
    //         .catch((error) => {
    //           console.log(error)
    //         })
    //     )
    // },
  },
}
</script>

<style scoped>
@media screen and (max-height: 850px) {
  .footer {
    position: relative;
  }
}

.register-btn {
  background-color: #336699;
  width: 100%;
}

.form-field {
  width: 90%;
}

#header-padding {
  padding-bottom: 5%;
}

.card {
  max-width: 320px;
}
</style>
