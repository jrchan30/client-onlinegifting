<template>
  <div></div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
}
</script>

<style></style>
