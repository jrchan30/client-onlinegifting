<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-11 col-md-6 col-lg-3 my-3 p-0">
        <CardForm
          :loading="loading"
          :alert-class="alert.class"
          :alert-show="alert.show"
          @formSubmitted="formSubmit"
        >
          <template v-slot:alert><span v-html="alert.text"></span></template>
          <template v-slot:title> Resend </template>

          <template v-slot:fields>
            <div v-for="(value, key, index) in form" :key="index" class="px-2">
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

          <template v-slot:btnSubmit> Resend </template>
        </CardForm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['guest'],
  data() {
    return {
      loading: false,
      form: {
        email: {
          type: 'text',
          val: '',
          placeholder: 'Email...',
          icon: 'fas fa-envelope',
          id: 'resendEmail',
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
  methods: {
    async formSubmit() {
      this.errors = {}
      this.loading = true
      //   this.clear()
      try {
        await this.$axios.$post(`/verification/resend`, {
          email: this.form.email.val,
        })
        this.alert.class = 'alert-success'
        this.alert.show = true
        this.alert.text = `Success! Please verify your email <strong>${this.form.email.val}</strong>`
      } catch (e) {
        if (e.response.data?.errors?.message?.includes('already verified')) {
          this.alert.class = 'alert-danger'
          this.alert.show = true
          this.alert.text =
            e.response.data.errors.message +
            ` <strong>(${this.form.email.val})</strong>`
        } else {
          this.errors = e.response.data.errors
        }
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

<style></style>
