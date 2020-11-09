<template>
  <div>
    <form @submit.prevent="formSubmit" @keyup.enter.prevent>
      <slot name="fields"></slot>
      <button type="submit" class="btn btn-primary mt-2">
        <i v-if="loading" class="fas fa-spinner fa-spin"></i>
        <slot name="btnSubmit"></slot>
      </button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
