<template>
  <div>ini page profile admin</div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
}
</script>

<style></style>
