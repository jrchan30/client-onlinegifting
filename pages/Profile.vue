<template>
  <div>
    <p>{{ $auth.user }}</p>
    <p>{{ $auth.user.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['auth'],
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      loggedInUser: 'loggedInUser',
    }),
  },
}
</script>

<style></style>
