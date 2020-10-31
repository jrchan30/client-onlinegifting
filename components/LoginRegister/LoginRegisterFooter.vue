<template>
  <footer class="py-2 text-center">
    <div class="container">
      <div class="row">
        <nav class="col-6">
          <ul class="text-secondary list-inline">
            <li class="list-inline-item pr-3">
              <nuxt-link to=""> About Us </nuxt-link>
            </li>
            <li class="list-inline-item">
              <nuxt-link to=""> Blog </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="text-secondary col-6">
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

<style></style>
