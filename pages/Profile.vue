<template>
  <div>
    <div class="box-content">
      <template v-if="$auth.user">
        <div class="container">
          <div v-if="$auth.user.detail">
            <template
              v-if="$auth.user.detail.type == 'admin'"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <vs-alert v-model="admin.active" closable danger class="mb-5">
                <template #icon>
                  <strong>!</strong>
                </template>
                <template #title> Warning Admin </template>
                To see admin's profile, you should navigate to the profile page
                in the admin section provided
                <nuxt-link to="/admin/profile">HERE!</nuxt-link>
              </vs-alert>
            </template>
          </div>
          <div class="bg-top pt-0">
            <div class="row pt-0 pt-md-5">
              <div class="d-none d-md-flex col-md-3 col-lg-6"></div>
              <div class="col-12 col-md-9 col-lg-5">
                <vs-alert relief>
                  <template #icon>
                    <i class="bx bxs-chat"></i>
                  </template>
                  <template #title>
                    Welcome to your profile page, {{ $auth.user.name }}
                  </template>
                  <p>
                    Here you can see all your past transactions as well as
                    filling out your profile details (optional).

                    <b class="text-info"
                      >Your profile details will only be used to improve our
                      items catalog to adjust based on our customers</b
                    >
                  </p>
                </vs-alert>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="$auth.user">
        <div v-if="$auth.user.detail" class="container">
          <CardSkeleton
            v-if="$auth.user.detail.type !== 'admin'"
            class="pt-0 pt-lg-5"
          >
            <template v-slot:title>
              <h4 class="font-weight-bold custom-color">Past Transactions</h4>
              <p class="custom-color">
                This is your latest past transactions, click on each record to
                see more details about the transaction
              </p>
            </template>
            <template v-slot:body> </template>
          </CardSkeleton>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'default',
  middleware: ['auth'],
  data() {
    return {
      form: {
        image: null,
      },
      admin: {
        active: true,
      },
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      loggedInUser: 'loggedInUser',
    }),
  },
  mounted() {
    this.GET_TRANSACTIONS()
  },
  methods: {
    ...mapActions({
      GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS',
    }),
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
  width: 100wh;
  height: calc(100vh - 10rem);
}

.box-content {
  width: 100vw;
  height: 100%;
}
</style>
