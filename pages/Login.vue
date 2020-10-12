<template>
  <div>
    <div class="container">
      <div class="row justify-content-around align-items-center text-center">
        <div class="login-bg d-none d-md-block"></div>
        <div class="col-10 col-md-6 p-0">
          <div class="card">
            <img
              class="card-image-top w-50 p-4"
              src="/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"
              alt=""
            />
            <h2 class="card-title font-weight-bold text-uppercase">Login</h2>
            <form class="form" method="post" @submit.prevent="login">
              <div class="card-body form-field m-auto">
                <div class="input-group no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons ui-1_email-85"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    v-model="loginForm.email"
                    class="form-control"
                    placeholder="Email Address..."
                  />
                </div>
                <div class="input-group no-border input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    v-model="loginForm.password"
                    placeholder="Password..."
                    class="form-control"
                  />
                </div>
              </div>
              <div class="card-footer px-3">
                <button
                  type="submit"
                  class="btn btn-primary btn-round btn-lg btn-block register-btn"
                >
                  Login
                </button>
                <div class="pull-left">
                  <h6>
                    <nuxt-link
                      to="/register"
                      class="font-color-custom text-custom"
                      >Create Account
                    </nuxt-link>
                  </h6>
                </div>
                <div class="pull-right">
                  <h6 class="pb-4">
                    <nuxt-link to="/" class="font-color-custom text-custom"
                      >Need Help?</nuxt-link
                    >
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
  // middleware: ,
  layout: 'LoginRegister',
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.loginForm.email,
            password: this.loginForm.password,
          },
        })

        this.$router.push({
          path: '/home',
        })
        console.log('success')
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>

<style scoped>
.login-bg {
  background-image: url(/image/Login-Background.svg);
  background-size: 50%;
  background-repeat: no-repeat;
  position: absolute;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
}

@media screen and (max-width: 1200px) {
  .login-bg {
    background-size: 70%;
  }
}

.register-btn {
  background-color: #336699;
  width: 100%;
}

.form-field {
  width: 90%;
}

.card {
  max-width: 320px;
}
</style>
