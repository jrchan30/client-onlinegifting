<template>
  <div class="card border text-center shadow border-0">
    <img
      class="card-image-top w-25 m-auto pt-3"
      src="/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"
      alt=""
    />
    <div class="card-body">
      <h2 class="card-title text-uppercase">
        <slot name="title"></slot>
      </h2>
      <div>
        <form @submit.prevent="formSubmit" @keyup.enter.prevent>
          <slot name="fields"></slot>
          <button type="submit" class="btn btn-primary mt-4">
            <i v-if="loading" class="fas fa-spinner fa-spin"></i>
            <slot name="btnSubmit"></slot>
          </button>
        </form>
      </div>
    </div>
    <div class="card-footer bg-white border-0"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    default: false,
  },
  methods: {
    formSubmit() {
      this.$emit('formSubmitted')
    },
  },
}
</script>

<style></style>
