<template>
  <div class="home-margin">
    <HomeSlider />
    <div class="container-fluid">
      <div class="row mt-5 px-5 justify-content-center">
        <div class="col-4 my-auto text-center">
          <h2 class="text-primary font-weight-bold">Premade Bundles</h2>
          <p>
            We all know that choosing gifts is sometimes confusing and hard.
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
          class="col-3"
          src="/image/gift_man_top.svg"
          alt="multiple device image"
        />
      </div>
      <div class="row mt-5" data-aos="fade-right">
        <img
          class="col-7"
          src="/image/devices.svg"
          alt="multiple device image"
        />
        <div class="col-4 my-auto">
          <h2 class="text-primary font-weight-bold">
            Supporting Multiple Screen Sizes!
          </h2>
          <p>
            Online Gifting now supports multiple devices' screen size, this
            ensures our customer's user experience when accessing our website.
          </p>
          <p>
            You can access our website anytime anywhere through your mobile
            device, laptop, Smart TV, and other possible devices.
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
