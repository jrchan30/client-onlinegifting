<template>
  <div>dwasdwa</div>
</template>

<script>
export default {
  async mounted() {
    try {
      await this.$axios.$post(`${this.$route.fullPath}`)
    } catch (error) {
      console.log(error.response)
    }
    // console.log(this.$route.params)
  },
}
</script>

<style></style>
