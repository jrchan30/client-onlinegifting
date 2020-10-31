<template>
  <div class="login-bg">
    <div class="container fill">
      <div class="row justify-content-center fill">
        <div class="col-10 col-md-4 col-lg-3 my-3 p-0 my-auto">
          <CardForm @formSubmitted="formSubmit" :loading="loading">
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
                  class="pb-3"
                  :errors="errors"
                  :name="key"
                  :keyValue="value.val"
                  v-on:new-input="value.val = $event"
                  :icon="value.icon"
                  :placeholder="value.placeholder"
                  :inputType="value.type"
                  :id="value.id"
                />
              </div>
            </template>
            <template v-slot:btnSubmit>Login</template>
            <template v-slot:footer>
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
  layout: 'LoginRegister',
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
    }
  },
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
        this.$router.push({
          path: '/home',
        })
      } catch (e) {
        this.errors = e.response.data.errors
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
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
