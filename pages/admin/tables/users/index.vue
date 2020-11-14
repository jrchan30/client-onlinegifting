<template>
  <div>ini pages users list</div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
}
</script>

<style></style>
