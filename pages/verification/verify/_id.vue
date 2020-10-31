<template>
  <div>
    <nuxt-link to="/home">
      <button>test</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'LoginRegister',
  async mounted() {
    try {
      await this.$axios.$post(`${this.$route.fullPath}`).then(() => {
        this.$swal({
          toast: true,
          icon: 'success',
          title: 'Your email has been verified!',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 4000,
        })
      })

      setTimeout(() => {
        this.$router.push('/home')
      }, 3000)
    } catch (error) {
      this.$swal({
        toast: true,
        icon: 'error',
        title: `${error.response.message}`,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 4000,
      })
    }
  },
}
</script>

<style></style>
