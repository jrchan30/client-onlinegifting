<template>
  <div class="box-content">
    <template v-if="!$fetchState.pending">
      <div
        class="bg-container"
        :class="{
          'bg-img-empty': items.length < 1,
          'bg-img-main': items.length > 0,
        }"
      >
        <div class="container h-100">
          <template v-if="items.length < 1">
            <div
              class="d-flex row justify-content-center align-items-center h-100"
            >
              <div
                class="d-none d-sm-none d-md-flex col-6 col-md-6 col-lg-7"
              ></div>
              <div class="col-8 col-md-6 col-lg-5">
                <div class="text-secondary mb-3 bg-white rounded p-4">
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
            <vs-alert v-model="isAlert" closable primary class="">
              <template #icon>
                <i class="bx bxs-cart-add"></i>
              </template>
              <template #title> Adding to Cart </template>
              You can select multiple boxes from the checkboxes to add them to
              your cart
            </vs-alert>
            <div class="bg-white rounded p-3">
              <h4 class="font-weight-bold custom-color">
                Your Boxes <i class="fas fa-boxes"></i>
              </h4>
              <p class="custom-color d-flex">
                This is your list of box, you can add products to your box
                whilst browsing our products pages
              </p>
              <vs-button
                class="mb-4"
                gradient
                block
                @click="
                  active = !active
                  ;(form.boxName = ''), (form.colour = '#336699')
                "
              >
                Create New Box
              </vs-button>
              <vs-dialog v-model="active" blur>
                <template #header>
                  <h4 class="pt-2 mb-2">Create your new <b>Box</b></h4>
                </template>

                <div>
                  <vs-input
                    v-model="form.boxName"
                    class="mb-2"
                    placeholder="Box name"
                    label="Box Name"
                  >
                    <!-- <template #icon> @ </template> -->
                  </vs-input>
                  <div class="d-flex justify-content-between">
                    <div class="ml-2">
                      <small>Choose a colour:</small>
                    </div>
                    <div>
                      <v-swatches
                        v-model="form.colour"
                        popover-x="left"
                      ></v-swatches>
                    </div>
                  </div>
                </div>

                <template #footer>
                  <div class="pb-2">
                    <vs-button block @click="createBox()">
                      <i class="fas fa-box-open"></i>
                      <span class="ml-2">Create</span>
                    </vs-button>
                  </div>
                </template>
              </vs-dialog>
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
                      @click="items = $vs.sortData($event, items, 'price')"
                    >
                      Price
                    </vs-th>
                    <vs-th
                      sort
                      @click="
                        items = $vs.sortData($event, items, 'products_count')
                      "
                    >
                      Products Count
                    </vs-th>
                    <vs-th> Edit/Delete </vs-th>
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
                      {{ tr.price }}
                    </vs-td>
                    <vs-td>
                      {{ tr.products.length }}
                    </vs-td>
                    <vs-td class="d-flex">
                      <vs-button primary gradient>
                        <i class="bx bxs-edit"></i>
                        <template #animate> Edit </template>
                      </vs-button>
                      <vs-button danger gradient style="min-width: 60px">
                        <i class="bx bx-trash"></i>
                        <template #animate> Delete </template>
                      </vs-button>
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
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'default',
  middleware: 'auth-user',
  fetch() {
    this.getBoxes()
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

      isAlert: true,

      active: false,
      checkbox1: false,
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
    async getBoxes() {
      await this.GET_BOXES()
      this.items = this.BOXES.data
    },
    async createBox() {
      const formattedForm = {
        name: this.form.boxName,
        colour: this.form.colour,
      }
      try {
        await this.$axios.$post('/boxes', formattedForm)
        this.getBoxes()
        this.clear()
      } catch (e) {
        alert('error')
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

.bg-img-main {
  background-image: url('/image/undraw_deliveries_131a.svg');
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
