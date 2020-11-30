<template>
  <!-- <div> -->
  <div class="box-content">
    <div class="container">
      <div class="bg-top pt-0">
        <div class="row pt-0 pt-md-5">
          <div class="d-none d-md-flex col-md-6 col-lg-6"></div>
          <div class="col-12 col-md-6 col-lg-5">
            <vs-alert relief class="align-middle">
              <template #icon>
                <i class="bx bxs-chat"></i>
              </template>
              <template #title>
                Welcome to your profile page, {{ $auth.user.name }}
              </template>
              <p>
                Here you can see all your past transactions as well as filling
                out your profile details (optional).
              </p>
              <b class="text-info"
                >Your profile details will only be used to improve our items
                catalog to adjust based on our customers</b
              >
            </vs-alert>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-body">
          lalalalalalalaaaaalalallalalalalalalalalalalalalallalalalalalalaaaaalalallalalalalalalalalalalalalallalalalalalalaaaaalalallalalalalalalalalalalalalallalalalalalalaaaaalalallalalalalalalalalalalalalallalalalalalalaaaaalalallalalalalalalalalalalalalallalalalalalalaaaaalalallalalalalalalalalalalalalal
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'default',
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

<style>
.profilepic-ratio {
  object-fit: cover;
  height: 200px;
  width: 200px;
}

.bg-top {
  background-image: url('/image/undraw_Gift_box_re_vau4.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 600px;
}

.box-content {
  width: 100vw;
  height: calc(100% - 10rem);
}
</style>
