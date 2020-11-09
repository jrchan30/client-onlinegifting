<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-11 col-md-6 col-lg-3 my-3 p-0">
        <div class="card border text-center shadow border-0">
          <img
            class="card-image-top w-25 m-auto pt-3"
            src="/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"
            alt=""
          />

          <div class="card-body">
            <h2 class="card-title text-uppercase">Email verification</h2>
            <div
              :class="alertClass"
              class="alert mt-4 mb-0"
              style="border-radius: 0"
              role="alert"
            >
              <h4>{{ title }}</h4>
              <span>{{ status }}</span>
            </div>
            <div>
              <nuxt-link to="/login"
                ><p v-if="success">Proceed to login page</p>
                <p v-else>Back to login page</p></nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'LoginRegister',
  middleware: ['guest'],
  data() {
    return {
      alertClass: '',
      status: '',
      success: Boolean,
      title: '',
    }
  },
  async mounted() {
    try {
      await this.$axios.$post(`${this.$route.fullPath}`).then((res) => {
        this.$swal({
          position: 'top-end',
          toast: true,
          icon: 'success',
          title: 'Nice...',
          text: 'Happy gifting',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        })
        this.alertClass = 'alert-success'
        this.status = res.message
        this.success = true
        this.title = 'Success'
      })
      // setTimeout(() => {
      //   this.$router.push('/login')
      // }, 3000)
    } catch (e) {
      this.alertClass = 'alert-danger'
      if (e.response?.data?.message) {
        this.status = e.response.data.message
      } else if (e.response?.data?.errors?.message) {
        this.status = e.response.data.errors.message
      } else {
        this.status = e.response.message
      }
      this.success = false
      this.title = 'Error'
      this.$swal({
        position: 'top-end',
        toast: true,
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timerProgressBar: true,
        timer: 4000,
      })
    }
  },
}
</script>

<style></style>
