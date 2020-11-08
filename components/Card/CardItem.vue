<template>
  <div class="mt-4 mb-1">
    <nuxt-link :to="route">
      <div class="card card-blog">
        <div class="card-image">
          <img
            class="img"
            loading="lazy"
            :src="image"
            alt="image unavailable"
          />
          <div class="card-caption">
            <p><slot name="caption"></slot></p>
          </div>
          <!-- <div class="ripple-cont"></div> -->
        </div>
        <div class="table">
          <h6 class="category text-secondary text-size text-truncate">
            <slot name="title"></slot>
          </h6>
          <small class="card-description font-weight-bold">
            <div class="row px-3">
              <slot name="price"></slot>
              <slot name="rating"></slot>
            </div>
          </small>
          <div v-if="stock > 0">
            <small>Stock: {{ stock }}</small>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                :style="{ width: stock + '%' }"
                :aria-valuenow="stock"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <!-- <Rating /> -->
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '',
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
.card {
  /* display: inline-block; */
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  /* border-radius: 6px; */
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.card .card-image {
  width: 100%;
  position: relative;
  overflow: hidden;
  /* margin-top: -30px; */
  box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.2), 0 5px 0px -5px rgba(0, 0, 0, 0.1);
}

.card .card-image img {
  width: 100%;
  height: 100%;
  border-radius: 6px 6px 0px 0px;
  pointer-events: none;
}

.card .card-image .card-caption {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #fff;
  font-size: 1.3em;
  text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);
}

.card img {
  width: 100%;
  height: auto;
}

.table {
  margin-bottom: 0px;
}

.card .table {
  padding: 15px 8px;
}

.progress {
  height: 5px;
}
</style>
