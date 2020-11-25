<template>
  <!-- <client-only class="py-2" placeholder="Loading...">
    <section>
      <div id="example">
        <carousel-3d
          class=""
          :autoplay="true"
          :inverse-scaling="0"
          :space="1580"
          :width="1500"
          :height="386.59"
          :perspective="0"
          :clickable="true"
          :animation-speed="2000"
          :autoplay-timeout="5000"
          :border="0"
        >
          <slide class="main-slider-border" :index="0">
            <img src="/image/slider/Slider1.png" alt="" />
          </slide>
          <slide class="main-slider-border" :index="1">
            <img src="/image/slider/Slider2.png" alt="" />
          </slide>
          <slide class="main-slider-border" :index="2">
            <img src="/image/slider/Slider3.png" alt="" />
          </slide>
        </carousel-3d>
      </div>
    </section>
  </client-only> -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="/image/slider/Slider1.png"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="/image/slider/Slider2.png"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="/image/slider/Slider3.png"
          alt="Third slide"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* .main-slider-border {
  border-radius: 50px;
  border: none;
} */
</style>
