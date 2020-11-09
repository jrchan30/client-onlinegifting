<template>
  <div>
    <MainNavbarTop />
    <MainNavbarBottom />
    <Nuxt />
    <Search />
    <LoginRegisterFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/style/bootstrap.min.css',
        },
      ],
      script: [
        {
          src: '/js/navbar.js',
          body: true,
        },
        {
          src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          integrity:
            'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
          crossorigin: 'anonymous',
          body: true,
        },
        {
          src:
            'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
          integrity:
            'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN',
          crossorigin: 'anonymous',
          body: true,
        },
        {
          src:
            'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
          integrity:
            'sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV',
          crossorigin: 'anonymous',
          body: true,
        },
      ],
    }
  },
}
</script>

<style>
/* @import '~/static/style/bootstrap.min.css'; */

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
