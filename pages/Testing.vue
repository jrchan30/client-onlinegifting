<template>
  <div class="container">
    <div class="login-bg">
      <div class="row justify-content-end">
        <div class="col-4">
          <CardForm @formSubmitted="formSubmit" :loading="loading">
            <template v-slot:title> Register </template>

            <template v-slot:fields>
              <div v-for="(value, key, index) in form" :key="index">
                <label
                  :for="value.id"
                  class="text-capitalize text-primary float-left mb-0"
                  >{{ key }}</label
                >
                <InputField
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

            <template v-slot:btnSubmit> Register </template>
          </CardForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testing',
  layout: 'LoginRegister',
  data() {
    return {
      loading: false,
      form: {
        username: {
          type: 'text',
          val: '',
          placeholder: 'Username...',
          icon: 'fas fa-user',
          id: 'registerUsername',
        },
        name: {
          type: 'text',
          val: '',
          placeholder: 'Name...',
          icon: 'fas fa-address-card',
          id: 'registerName',
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
    }
  },
  methods: {
    async formSubmit() {
      this.loading = true
      try {
        await this.$axios.$post('/register', {
          username: this.form.username.val,
          name: this.form.name.val,
          password: this.form.password.val,
          password_confirmation: this.form.password_confirmation.val,
          email: this.form.email.val,
        })

        /**swal */
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
  background-image: url('/image/Background-2.svg');
  background-size: 80%;
  background-position: bottom left;
  background-repeat: no-repeat;
  height: auto;
}
</style>
