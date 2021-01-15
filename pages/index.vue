<template>
  <div class="home-margin">
    <HomeSlider />
    <div class="container-fluid">
      <div
        class="row mt-0 mt-md-5 justify-content-center"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div
          class="col-12 col-sm-9 col-md-5 my-auto text-center order-2 order-md-1"
        >
          <h2 class="text-primary font-weight-bold">Premade Bundles</h2>
          <p class="d-none d-md-block">
            We all know that choosing gifts can be confusing and hard.
            <br />
            Will he/she likes it? Will this be appropriate? Where do i even buy
            this stuff?
          </p>
          <p>
            Online Gifting helps you pick the most suitable gifts for your
            occassions with our <b>Premade Bundles</b>.
          </p>
          <div class="d-flex justify-content-center">
            <vs-button color="#336699" circle gradient to="/bundles">
              <i class="bx bx-box mr-2"></i> Browse Bundles
            </vs-button>
          </div>
        </div>

        <img
          class="col-6 col-md-5 col-lg-3 order-1 order-md-2"
          src="/image/gift_man_top.svg"
          alt="multiple device image"
        />
      </div>
      <div
        class="row mt-5 justify-content-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          class="col-6 col-md-5 col-lg-6 mx-auto mx-md-0"
          src="/image/devices.svg"
          alt="multiple device image"
        />
        <div
          class="col-10 col-sm-9 col-md-6 col-lg-4 my-auto text-center text-md-left mx-auto mx-md-0"
        >
          <h2 class="text-primary font-weight-bold">
            Supporting Multiple Screen Sizes!
          </h2>
          <p class="d-none d-md-block">
            Online Gifting now supports multiple devices' screen size, this
            ensures our customer's user experience when accessing our website.
          </p>
          <p>
            You can access our website anytime anywhere through your smartphone,
            laptop, Smart TV, and other possible devices.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <LatestProductTest2 />
      <ProductLowPriceTest2 />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  methods: {
    goToAdmin() {
      this.$router.push({
        path: '/admin/AdminHome',
      })
    },
  },
  mounted() {
    Echo.channel('DemoChannel').on('WebsocketDemoEvent', (e) => {
      console.log(e)
    })
  },
}
</script>

<style scoped>
.carousel-inner {
  box-shadow: none;
}

.home-margin {
  margin-top: -3.5rem;
}
</style>
