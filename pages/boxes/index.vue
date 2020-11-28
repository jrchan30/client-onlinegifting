<template>
  <div class="box-content">
    <div class="bg-container bg-img-empty">
      <template v-if="!$fetchState.pending">
        <div class="container h-100">
          <template v-if="BOXES.data.length < 1">
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
          <template v-else>
            <div class="bg-white rounded p-3">
              <h4 class="font-weight-bold custom-color">
                Your Boxes <i class="fas fa-boxes"></i>
              </h4>
              <p class="custom-color">
                This is your list of box, you can add products to your box
                whilst browsing our products pages
              </p>
              <vs-table>
                <template #header>
                  <vs-input
                    v-model="search"
                    border
                    color="#336699"
                    placeholder="Search"
                  />
                </template>
                <template #thead>
                  <vs-tr>
                    <vs-th>
                      <vs-checkbox
                        v-model="allCheck"
                        :indeterminate="selected.length == items.length"
                        @change="selected = $vs.checkAll(selected, items)"
                      />
                    </vs-th>
                    <vs-th
                      sort
                      @click="items = $vs.sortData($event, items, 'name')"
                    >
                      Name
                    </vs-th>
                    <vs-th
                      sort
                      @click="items = $vs.sortData($event, items, 'email')"
                    >
                      Email
                    </vs-th>
                    <vs-th
                      sort
                      @click="items = $vs.sortData($event, items, 'id')"
                    >
                      Id
                    </vs-th>
                  </vs-tr>
                </template>
                <template #tbody>
                  <vs-tr
                    v-for="(tr, i) in $vs.getSearch(items, search)"
                    :key="i"
                    :data="tr"
                    :is-selected="!!selected.includes(tr)"
                  >
                    <vs-td checkbox>
                      <vs-checkbox v-model="selected" :val="tr" />
                    </vs-td>
                    <vs-td>
                      {{ tr.name }}
                    </vs-td>
                    <vs-td>
                      {{ tr.email }}
                    </vs-td>
                    <vs-td>
                      {{ tr.id }}
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
              <span class="data">
                <pre>
  {{
                    selected.length > 0
                      ? selected
                      : 'Select an item in the table to add to cart'
                  }}
        </pre
                >
              </span>
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
    this.items = this.BOXES.data
  },
  data() {
    return {
      form: {
        boxName: '',
        colour: '#336699',
      },
      search: '',
      allCheck: false,
      selected: [],
      items: [],
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
    async createBox() {
      const formattedForm = {
        name: this.form.boxName,
        colour: this.form.colour,
      }
      try {
        await this.$axios.$post('/boxes', formattedForm)
        this.GET_BOXES()
        this.clear()
        this.items = this.BOXES.data
      } catch (e) {
        console.log('error')
      }
    },
    clear() {
      Object.assign(this.$data, this.$options.data())
    },
  },
}
</script>

<style scoped>
.bg-img-empty {
  background-image: url('/image/undraw_empty_xct9.svg');
}

.bg-container {
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
</style>

<style>
.vs-input-content {
  width: 100% !important;
}

.vs-input {
  width: 100% !important;
}
</style>
