<template>
  <div class="bg-wave minheight">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-md-6 col-lg-3 my-3 p-0">
          <CardForm
            :loading="loading"
            :alert-class="alert.class"
            :alert-show="alert.show"
            @formSubmitted="formSubmit"
          >
            <template v-slot:alert
              ><span v-html="alert.text"></span>
              <div v-if="success">
                <nuxt-link to="/login" tag="a">Proceed to login</nuxt-link>
              </div>
            </template>
            <template v-slot:title> Reset Password </template>

            <template v-slot:fields>
              <!-- Email Input -->
              <label
                for="resetEmail"
                class="text-capitalize text-primary float-left mb-0 px-2"
                >Email</label
              >
              <div class="input-group mb-2 px-2">
                <div class="input-group-prepend">
                  <div
                    class="input-group-text text-primary bg-transparent border-right-0"
                  >
                    <i class="fas fa-envelope"></i>
                  </div>
                </div>
                <input
                  id="resetEmail"
                  v-model="email"
                  class="form-control border-left-0"
                  type="text"
                  name="email"
                  placeholder="Email..."
                  readonly
                />
              </div>
              <!-- End Email Input -->

              <!-- Data (Form) Inputs -->
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
              <!-- End Data (Form) Inputs -->
            </template>

            <template v-slot:btnSubmit> Reset Password </template>
            <!-- <template v-slot:footer>
            <nuxt-link to="/login">Back to login</nuxt-link></template
          > -->
          </CardForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,

      email: '',
      token: '',
      form: {
        password: {
          type: 'password',
          val: '',
          placeholder: 'New Password...',
          icon: 'fas fa-user-lock',
          id: 'newPassword',
        },
        password_confirmation: {
          type: 'password',
          val: '',
          placeholder: 'Password Confirmation...',
          icon: 'fas fa-user-lock',
          id: 'newPasswordConfirmation',
        },
      },
      errors: {},
      status: '',
      alert: {
        class: '',
        show: false,
        text: '',
      },
      success: false,
    }
  },
  created() {
    this.email = this.$route.query.email
    this.token = this.$route.params.token
  },
  methods: {
    async formSubmit() {
      this.errors = {}
      this.alert = {}
      this.loading = true
      try {
        await this.$axios
          .$post('/password/reset', {
            email: this.email,
            token: this.token,
            password: this.form.password.val,
            password_confirmation: this.form.password_confirmation.val,
          })
          .then((res) => {
            this.status = res.status
          })
        this.alert.class = 'alert-success'
        this.alert.show = true
        this.alert.text = this.status
        this.success = true
      } catch (e) {
        if (e.response.data?.errors?.message?.includes('already verified')) {
          this.alert.show = true
          this.alert.class = 'alert-danger'
          this.alert.text =
            e.response.data.errors.message +
            ` <strong>(${this.form.email.val})</strong>`
        } else if (e.response.data?.email) {
          this.alert.show = true
          this.alert.class = 'alert-danger'
          this.alert.text = e.response.data.email
        } else {
          this.errors = e.response.data.errors
        }
        this.success = false
      } finally {
        this.loading = false
      }
    },
    // clear() {
    //   Object.assign(this.$data, this.$options.data())
    // },
  },
}
</script>

<style></style>
