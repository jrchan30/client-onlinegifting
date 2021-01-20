<template></template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  methods: {
    markAsRead() {
      this.$emit('read')
    },
  },
}
</script>
