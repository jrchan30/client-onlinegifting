<template>
  <footer class="text-center footer">
    <div class="container">
      <div class="row">
        <nav class="col-6">
          <ul class="text-secondary">
            <li>
              <nuxt-link to=""> About Us </nuxt-link>
            </li>
            <li>
              <nuxt-link to=""> Blog </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="copyright text-secondary col-6" id="copyright">
          &copy;
          {{ new Date().getFullYear() }} Online Gifting | Coded and Designed by
          <a
            href="https://linkedin.com/in/russell-chan-944a02195"
            target="_blank"
            >Russell</a
          >
          & <a href="#" target="_blank">Albert</a>.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
