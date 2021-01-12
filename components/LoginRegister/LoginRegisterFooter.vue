<template>
  <footer class="py-2">
    <div class="container">
      <div class="row text-center">
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
            rel="noreferrer"
            >Russell</a
          >
          & <a href="#" target="_blank" rel="noreferrer">Albert</a>.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
