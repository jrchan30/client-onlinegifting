<template>
  <div class="login-bg">
    <div class="container fill">
      <div class="row justify-content-center fill">
        <div class="col-10 col-md-6 col-lg-4 my-3 p-0 my-auto">
          <CardForm
            :loading="loading"
            :alert-class="alert.class"
            :alert-show="alert.show"
            @formSubmitted="formSubmit"
          >
            <template v-slot:alert>
              <p v-html="alert.text"></p>
              <nuxt-link to="verification/resend"
                >Resend verification email</nuxt-link
              >
            </template>
            <template v-slot:title>Login</template>

            <template v-slot:fields>
              <div
                v-for="(value, key, index) in form"
                :key="index"
                class="px-2"
              >
                <label
                  :for="value.id"
                  class="text-capitalize text-primary float-left mb-0"
                  >{{ key }}</label
                >
                <InputField
                  :id="value.id"
                  class="pb-3"
                  :errors="errors"
                  :name="key"
                  :key-value="value.val"
                  :icon="value.icon"
                  :placeholder="value.placeholder"
                  :input-type="value.type"
                  @new-input="value.val = $event"
                />
              </div>
            </template>
            <template v-slot:btnSubmit>Login</template>
            <template v-slot:reset-password>
              <nuxt-link
                id="forgot-pass"
                tag="p"
                to="/password/email"
                class="text-left my-0 px-2 text-secondary"
                >Forgot password?</nuxt-link
              >
            </template>
            <template v-slot:footer>
              <span>Dont have an account yet?</span>
              <nuxt-link to="register">Create Account</nuxt-link>
            </template>
          </CardForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['guest'],
  layout: 'login-register',
  data() {
    return {
      loading: false,
      form: {
        email: {
          type: 'text',
          val: '',
          placeholder: 'Email Address...',
          icon: 'fas fa-envelope',
          id: 'loginEmail',
        },
        password: {
          type: 'password',
          val: '',
          placeholder: 'Password...',
          icon: 'fas fa-user-lock',
          id: 'loginPassword',
        },
      },
      errors: {},
      alert: {
        class: '',
        show: false,
        text: '',
      },
    }
  },
  // beforeCreate() {
  //   if (this.$auth.user) {
  //     this.$router.push({ name: 'index' })
  //   }
  // },
  methods: {
    async formSubmit() {
      this.errors = {}
      this.loading = true
      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.form.email.val,
            password: this.form.password.val,
          },
        })
      } catch (e) {
        if (
          e.response.status === 403 &&
          e.response.data.errors.includes('need to verify')
        ) {
          this.alert.class = 'alert-danger'
          this.alert.show = true
          this.alert.text = e.response.data.errors
        } else {
          this.errors = e.response.data.errors
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
#forgot-pass {
  cursor: pointer;
}

.login-bg {
  background-image: url('/image/Login-Background.svg');
  background-size: 100vh;
  background-position: center;
  background-repeat: no-repeat;
}

.fill {
  min-height: 70vh;
  height: 100%;
}
</style>
