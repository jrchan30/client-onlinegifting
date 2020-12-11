<template>
  <div class="card border text-center shadow border-0">
    <img
      class="card-image-top w-25 m-auto pt-3"
      src="/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"
      alt=""
    />
    <div
      v-if="alertShow"
      :class="alertClass"
      class="alert mt-4 mb-0"
      style="border-radius: 0"
      role="alert"
    >
      <slot name="alert"></slot>
    </div>
    <div class="card-body">
      <h2 class="card-title text-uppercase">
        <slot name="title"></slot>
      </h2>
      <div>
        <form @submit.prevent="formSubmit" @keyup.enter.prevent>
          <slot name="fields"></slot>
          <slot name="reset-password"></slot>
          <!-- <button
            type="submit"
            :disabled="loading"
            class="btn btn-primary mt-2"
          >
            <i v-if="loading" class="fas fa-spinner fa-spin"></i>
            <slot name="btnSubmit"></slot>
          </button> -->

          <div class="d-flex justify-content-center">
            <vs-button :loading="loading" color="rgb(51, 102, 153)" relief>
              <slot name="btnSubmit"></slot>
              <template #animate>
                <i class="bx bx-send"></i>
              </template>
            </vs-button>
          </div>
        </form>
      </div>
    </div>
    <div class="card-footer border-0 shadow">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    alertClass: {
      type: String,
      default: 'alert-danger',
    },
    alertShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formSubmit() {
      this.$emit('formSubmitted')
    },
  },
}
</script>

<style></style>
