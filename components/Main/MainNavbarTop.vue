<template>
  <nav class="navbar navbar-expand navbar-dark bg-white py-0">
    <div class="navbar-collapse collapse justify-content-stretch">
      <ul class="navbar-nav text-primary">
        <li class="nav-item d-flex align-items-center mr-3">
          <nuxt-link to="aboutus" class="nav-link text-primary navDiv">
            <i class="far fa-building d-none d-sm-inline-block"></i>
            About</nuxt-link
          >
        </li>
        <li class="nav-item d-flex align-items-center">
          <nuxt-link to="" class="nav-link text-primary navDiv">
            <i class="fas fa-headset d-none d-sm-inline-block"></i>
            C.Service</nuxt-link
          >
        </li>
      </ul>
      <!-- Before Logged In -->
      <template v-if="!$auth.loggedIn">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/login" class="nav-link text-primary navDiv"
              >Login</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link to="/register" class="nav-link text-primary navDiv"
              >Register</nuxt-link
            >
          </li>
        </ul>
      </template>
      <!-- End Before Logged In -->

      <!-- After Logged In -->
      <template v-else>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/profile" class="nav-link text-primary navDiv"
              >Profile</nuxt-link
            >
          </li>
          <li class="nav-item">
            <a
              @click="logout"
              id="logout-cursor"
              class="nav-link text-primary navDiv"
            >
              Logout
            </a>
          </li>
        </ul>
      </template>
      <!-- End After Logged In -->
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()

      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
#logout-cursor {
  cursor: pointer;
}
</style>
