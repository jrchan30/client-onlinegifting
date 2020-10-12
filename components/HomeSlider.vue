<template>
  <client-only class="py-2" placeholder="Loading...">
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
  </client-only>
</template>

<script>
export default {}
</script>

<style>
.main-slider-border {
  border-radius: 50px;
  border: none;
}
</style>
