<template>
  <div>
    <MainNavbarTop />
    <MainNavbarBottom />
    <!-- <div class="bg-white"> -->
    <Nuxt />
    <!-- </div> -->
    <Search />
    <LoginRegisterFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: '/js/navbar.js',
          body: true,
        },
      ],
    }
  },
}
</script>

<style>
html {
  overflow-y: scroll;
  overflow-y: overlay;
}
body {
  font-family: 'Raleway', sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.navDiv {
  transition: transform 0.4s;
}
.navDiv:hover {
  transform: scale(1.1);
}

.text-size {
  font-size: 12px;
}
</style>
