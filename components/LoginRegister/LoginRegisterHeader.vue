<template>
  <div class="container">
    <div class="row justify-content-center my-3 pb-2">
      <img
        class="col-10 col-md-5 cursor"
        src="/image/OnlineGiftingTextEdited.svg"
        alt=""
        @click="toHome()"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
