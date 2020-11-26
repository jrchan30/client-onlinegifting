<template>
  <div class="container justify-content-center p-5">
    <div class="row">
      <div class="col-12">
        <div class="card bg-white">
          <div class="card-body">
            <img :src="$auth.user.detail.image" alt="No Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['auth'],
  data() {
    return {
      form: {
        image: null,
      },
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      loggedInUser: 'loggedInUser',
    }),
  },
  methods: {
    onChange() {
      const file = this.$refs.pictureInput.file
      if (file) {
        this.form.image = file
      } else {
        alert(
          'Old browser (not supported). Chrome latest updated browser is suggested'
        )
      }
    },
    onRemoved() {
      this.image = ''
    },
  },
}
</script>

<style></style>
