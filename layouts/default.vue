<template>
  <div>
    <Navbar />
    <div class="minheight" :class="{ 'mt-5 pt-5': $nuxt.isOnline }">
      <Nuxt />
    </div>
    <LoginRegisterFooter />
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      admin: {
        active: true,
      },
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      if (this.$auth.user.type == 'admin') {
        const noti = this.$vs.notification({
          title: '<b>Warning Admin</b>',
          duration: 10000,
          buttonClose: false,
          progress: 'auto',
          text: `Please refrain from using any functionalities in the customer pages, you can navigate to admin page by clicking this notification`,
          onClick: () => {
            noti.close()
            this.$router.push('/admin')
          },
        })
      }
    }
  },
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
.swal2-container {
  z-index: 100000 !important;
}

.custom-color {
  color: #2c3e50;
}

.bg-all {
  background-image: url('/image/Confetti-Doodles.svg');
  background-size: contain;
  background-repeat: repeat;
  /* opacity: 0.1; */
  /* background-attachment: fixed; */
}

.swal-container {
  z-index: 100000;
}

.vs-avatar img {
  width: 100% !important;
  height: 100% !important;
}

.bg-wave {
  background-image: url('/image/wave-bg.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  width: 100vw;
}

html {
  overflow-y: scroll;
  overflow-y: overlay;
  scroll-behavior: smooth;
  /* max-width: 100wh; */
}
body {
  font-family: 'Raleway', sans-serif;
  background-color: #f4f7f8;
}

/* ::-webkit-scrollbar {
  width: 5px;
} */

::-webkit-scrollbar-track {
  background: none;
}

/* ::-webkit-scrollbar-thumb {
  background: #888;
} */

::-webkit-scrollbar-thumb {
  background: var(--vs-theme-color);
  border-radius: 5px;
  background: #2c3e50;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  display: block;
  background: var(--vs-theme-layout);
}

::-webkit-scrollbar-thumb:hover {
  background: black;
}

/* .navDiv {
  transition: transform 0.4s;
}
.navDiv:hover {
  transform: scale(1.1);
} */

.text-size {
  font-size: 12px;
}

.img-ratio {
  object-fit: cover;
  height: 150px;
  width: 300px;
}

.minheight {
  /* min-height: calc(100vh - 9rem); */
  min-height: calc(100vh - 9rem);
}
</style>
