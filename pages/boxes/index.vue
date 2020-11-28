<template>
  <div class="box-content">
    <div class="bg-img">
      <template v-if="!$fetchState.pending">
        <div class="container h-100">
          <template v-if="BOXES == null">
            <div
              class="d-flex row justify-content-center align-items-center h-100"
            >
              <div
                class="d-none d-sm-none d-md-flex col-6 col-md-6 col-lg-7"
              ></div>
              <div class="col-8 col-md-6 col-lg-5">
                <div class="text-secondary mb-3 bg-white rounded p-2">
                  <small>You have no box yet. Create one now!</small>
                </div>
                <div class="card rounded py-3">
                  <div class="card-body">
                    <div class="container">
                      <div class="row mb-5">
                        <strong class="col-12">Create Box</strong>
                      </div>
                      <div class="row">
                        <div class="col-12 col-md-10 mb-4">
                          <vs-input
                            v-model="form.boxName"
                            label="Box name"
                            placeholder="My brand new box"
                          />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-12">
                          <div
                            class="form__field d-flex justify-content-between"
                          >
                            <div class="form__label">
                              <small>Choose a colour:</small>
                            </div>
                            <div class="form__input">
                              <v-swatches
                                v-model="form.colour"
                                popover-x="left"
                              ></v-swatches>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <vs-button block @click="createBox()">
                            <i class="fas fa-box-open"></i>
                            <span class="ml-2">Create</span>
                          </vs-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else> box table </template>
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
      form: {
        boxName: '',
        colour: '#336699',
      },
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
    createBox() {
      const formattedForm = {
        name: this.form.boxName,
        colour: this.form.colour,
      }
      try {
        this.$axios.$post('/boxes', formattedForm)
        this.GET_BOXES()
      } catch (e) {
        console.log('error')
      }
    },
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
