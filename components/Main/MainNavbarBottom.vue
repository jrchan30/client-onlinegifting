<template>
  <div class="sticky-top shadow">
    <nav class="navbar navbar-expand-lg navbar-mainbg">
      <nuxt-link to="/home" class="navbar-brand navbar-logo navDiv"
        >Online Gifting</nuxt-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-white"></i>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <div id="selector" class="hori-selector">
            <div class="left"></div>
            <div class="right"></div>
          </div>
          <nuxt-link
            tag="li"
            to="/home"
            exact-active-class="active"
            class="nav-item"
          >
            <a class="nav-link navDiv" href="javascript:void(0);"
              ><i class="fas fa-home"></i>Home</a
            >
          </nuxt-link>

          <nuxt-link
            tag="li"
            class="nav-item"
            to="/carts"
            exact-active-class="active"
          >
            <a class="nav-link navDiv" href="javascript:void(0);"
              ><i class="fas fa-shopping-cart"></i>Cart</a
            >
          </nuxt-link>

          <nuxt-link
            tag="li"
            class="nav-item"
            to="/products"
            exact-active-class="active"
          >
            <a class="nav-link navDiv" href="javascript:void(0);"
              ><i class="fas fa-boxes"></i>Products</a
            >
          </nuxt-link>

          <nuxt-link
            tag="li"
            to="/categories"
            exact-active-class="active"
            class="nav-item"
          >
            <a class="nav-link navDiv" href="javascript:void(0);"
              ><i class="far fa-clone"></i>Categories</a
            >
          </nuxt-link>

          <nuxt-link
            tag="li"
            to="/bundles"
            class="nav-item"
            exact-active-class="active"
          >
            <a class="nav-link navDiv" href="javascript:void(0);"
              ><i class="fas fa-parachute-box"></i>Bundles</a
            >
          </nuxt-link>
        </ul>
      </div>
    </nav>
    <!-- <div class="py-1 bg-white shadow"></div> -->

    <!-- <div class="py-1 bg-white shadow">
      <InputField
        class="w-50 mx-auto border-0"
        :errors="errors"
        :keyValue="searchForm.val"
        v-on:new-input="searchForm.val = $event"
        :icon="searchForm.icon"
        :placeholder="searchForm.placeholder"
        :inputType="searchForm.type"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        type: 'text',
        val: '',
        placeholder: 'Search for products or bundles...',
        icon: 'fas fa-search',
      },
      errors: {},
    }
  },
  watch: {
    async $route() {
      await this.$nuxt.$loading.start()
      // eslint-disable-next-line no-undef
      moveActive()
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
i {
  margin-right: 10px;
}

.logo-white {
  fill: white;
}
.navbar-logo {
  padding: 15px;
  color: #fff;
}
.navbar-mainbg {
  background-color: #336699;
  padding: 0px;
}
#navbarSupportedContent {
  overflow: hidden;
  position: relative;
}
#navbarSupportedContent ul {
  padding: 0px;
  margin: 0px;
}
#navbarSupportedContent ul li a i {
  margin-right: 10px;
}
#navbarSupportedContent li {
  list-style-type: none;
  float: left;
}
#navbarSupportedContent ul li a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 15px;
  display: block;
  padding: 20px 20px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}
#navbarSupportedContent > ul > li.active > a {
  color: #336699;
  background-color: transparent;
  transition: all 0.7s;
}
#navbarSupportedContent a:not(:only-child):after {
  content: '\f105';
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 14px;
  font-family: 'Font Awesome 5 Free';
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  transition: 0.5s;
}
#navbarSupportedContent .active > a:not(:only-child):after {
  transform: rotate(90deg);
}
.hori-selector {
  /* display: inline-block; */
  display: none;
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: 10px;
}
.hori-selector .right,
.hori-selector .left {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #fff;
  bottom: 10px;
}
.hori-selector .right {
  right: -25px;
}
.hori-selector .left {
  left: -25px;
}
.hori-selector .right:before,
.hori-selector .left:before {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #336699;
}
.hori-selector .right:before {
  bottom: 0;
  right: -25px;
}
.hori-selector .left:before {
  bottom: 0;
  left: -25px;
}

@media (max-width: 991px) {
  #navbarSupportedContent ul li a {
    padding: 12px 30px;
  }
  .hori-selector {
    margin-top: 0px;
    margin-left: 10px;
    border-radius: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .hori-selector .left,
  .hori-selector .right {
    right: 10px;
  }
  .hori-selector .left {
    top: -25px;
    left: auto;
  }
  .hori-selector .right {
    bottom: -25px;
  }
  .hori-selector .left:before {
    left: -25px;
    top: -25px;
  }
  .hori-selector .right:before {
    bottom: -25px;
    left: -25px;
  }
}
</style>
