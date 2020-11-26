<template>
  <!-- <div class="container bg-white d-flex rounded justify-content-center p-5"> -->
  <div class="row">
    <div class="col">
      <div class="hello">
        <picture-input
          ref="pictureInput"
          :z-index="10"
          width="200"
          height="200"
          margin="16"
          accept="image/jpeg,image/png"
          size="1"
          button-class="btn"
          :custom-strings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'Pick photo',
            aspect: 'Landscape/Portrait', // Text only
          }"
          @change="onChange"
        >
        </picture-input>
      </div>
    </div>
  </div>
  <!-- </div> -->
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
