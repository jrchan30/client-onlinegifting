<template>
  <div class="container-fluid">
    <div class="register-bg w-100">
      <div class="row justify-content-center">
        <div class="col-11 col-md-6 col-lg-4 col-xl-3 my-3 p-0">
          <CardForm
            :loading="loading"
            :alert-class="alert.class"
            :alert-show="alert.show"
            @formSubmitted="formSubmit"
          >
            <template v-slot:alert
              ><span v-html="alert.text"></span
              ><span v-if="alert.text">
                Didn't receive it?
                <nuxt-link to="/verification/resend">Resend</nuxt-link></span
              ></template
            >
            <template v-slot:title> Register </template>

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

            <template v-slot:btnSubmit> Register </template>
            <template v-slot:footer>
              <p class="">
                Already Have an Account?
                <nuxt-link to="login">Login</nuxt-link>
              </p>
            </template>
          </CardForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login-register',
  middleware: ['guest'],
  data() {
    return {
      loading: false,
      form: {
        name: {
          type: 'text',
          val: '',
          placeholder: 'Name...',
          icon: 'fas fa-address-card',
          id: 'registerName',
        },
        username: {
          type: 'text',
          val: '',
          placeholder: 'Username...',
          icon: 'fas fa-user',
          id: 'registerUsername',
        },
        email: {
          type: 'text',
          val: '',
          placeholder: 'Email...',
          icon: 'fas fa-envelope',
          id: 'registerEmail',
        },
        password: {
          type: 'password',
          val: '',
          placeholder: 'Password...',
          icon: 'fas fa-user-lock',
          id: 'registerPassword',
        },
        password_confirmation: {
          type: 'password',
          val: '',
          placeholder: 'Password Confirmation...',
          icon: 'fas fa-user-lock',
          id: 'registerPasswordConfirmation',
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
  beforeDestroy() {
    this.clear()
  },
  methods: {
    async formSubmit() {
      this.errors = {}
      this.alert = {}
      this.loading = true
      try {
        await this.$axios.$post('/register', {
          username: this.form.username.val,
          name: this.form.name.val,
          password: this.form.password.val,
          password_confirmation: this.form.password_confirmation.val,
          email: this.form.email.val,
        })
        // this.clear()
        this.alert.class = 'alert-success'
        this.alert.show = true
        this.alert.text = `Success! Please verify your email <strong>${this.form.email.val}</strong>.`
      } catch (e) {
        this.errors = e.response.data.errors
      } finally {
        this.loading = false
      }
    },
    clear() {
      Object.assign(this.$data, this.$options.data())
    },
  },
}
</script>

<style scoped>
.register-bg {
  background-image: url('/image/Background-2.svg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
