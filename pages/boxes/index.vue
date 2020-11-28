<template>
  <div class="box-content">
    <div class="bg-img">
      <template v-if="!$fetchState.pending">
        <div class="container h-100">
          <template v-if="!BOXES">
            <div
              class="d-flex row justify-content-center align-items-center h-100"
            >
              <div class="col-7"></div>
              <div class="col-5">
                <div class="text-secondary mb-3">
                  You have no box yet. Create one now.
                </div>
                <div class="card rounded py-4">
                  <div class="card-body">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 mb-5">
                          <vs-input
                            v-model="value"
                            label-placeholder="Box name"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <vs-input
                            v-model="value"
                            label-placeholder="Colour"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else> box table </template>
          <template v-if="showForm">
            <div class="row">
              <div class="col-4">
                <vs-input v-model="value" border placeholder="Name" />
              </div>
              <div class="col-4">
                <vs-input
                  v-model="value2"
                  color="#7d33ff"
                  border
                  type="password"
                  placeholder="Password"
                >
                  <template #icon>
                    <i class="bx bx-lock-open-alt"></i>
                  </template>
                </vs-input>
              </div>
              <div class="col-4">
                <vs-input
                  v-model="value3"
                  border
                  warn
                  type="email"
                  icon-after
                  label-placeholder="Address"
                >
                  <template #icon>
                    <i class="bx bxl-bitcoin"></i>
                  </template>
                </vs-input>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'default',
  middleware: 'auth',
  async fetch() {
    await this.GET_BOXES()
  },
  data() {
    return {
      showForm: false,
      value: '',
    }
  },
  computed: {
    ...mapGetters({
      BOXES: 'boxes/BOXES',
    }),
  },
  methods: {
    ...mapActions({
      GET_BOXES: 'boxes/GET_BOXES',
    }),
  },
}
</script>

<style>
.bg-img {
  background-image: url('/image/undraw_empty_xct9.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100%;
}

.box-content {
  width: 100vw;
  height: calc(100vh - 10rem);
}
.vs-input-content {
  width: 100% !important;
}

.vs-input {
  width: 100% !important;
}
</style>
