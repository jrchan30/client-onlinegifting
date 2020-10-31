<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <!-- <nuxt-link
        v-for="(link, index) in crumbs"
        :key="index"
        :to="item.path"
        tag="li"
        exact-active-class="active"
        class="breadcrumb-item"
        >{{ item.name }}</nuxt-link
      > -->
      <!-- <button @click="goBack"></button> -->
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</template>

<script>
export default {
  methods: {
    // goBack() {
    //   console.log(this.$router)
    //   this.$router.go(-1)
    // },
  },
}
</script>

<style></style>
