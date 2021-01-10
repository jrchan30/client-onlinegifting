<template>
  <div class="box-content">
    <template v-if="!loading">
      <div
        class="bg-container"
        :class="{
          'bg-img-empty': BOXES.data.length < 1,
          'bg-img-main': BOXES.data.length > 0,
        }"
      >
        <div class="container h-100">
          <template v-if="BOXES.data.length < 1">
            <div
              class="d-flex row justify-content-center align-items-center h-100"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                class="d-none d-sm-none d-md-flex col-6 col-md-6 col-lg-7"
              ></div>
              <div class="col-12 col-md-6 col-lg-5">
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
                        <div class="col-12 col-md-10 mb-4 px-0">
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
                              <small>Choose colour:</small>
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
                      <div class="row mb-3">
                        <div class="col-12">
                          <div
                            class="form__field d-flex justify-content-between"
                          >
                            <div class="form__label">
                              <small>Choose design:</small>
                            </div>
                            <!-- <div class="d-flex"> -->
                            <div class="form__input position-relative">
                              <vs-tooltip circle>
                                <vs-avatar
                                  style="height: 44px; width: 44px"
                                  @click="showDesign = !showDesign"
                                >
                                  <div
                                    class="logo"
                                    :style="{
                                      mask: `url(${form.designImage})  center`,
                                      '-webkit-mask': `url(${form.designImage})  center`,
                                      backgroundColor: form.colour,
                                    }"
                                  ></div>
                                </vs-avatar>
                                <template v-if="form.design" #tooltip>
                                  {{ form.design }}
                                </template>
                                <template v-else #tooltip> None </template>
                              </vs-tooltip>
                              <div v-show="showDesign">
                                <div class="card custom-card">
                                  <div class="card-body">
                                    <div class="row mb-2">
                                      <div class="col">
                                        <vs-button
                                          block
                                          @click="
                                            ;(form.design = ''),
                                              (form.designImage = '')
                                          "
                                          >No Design</vs-button
                                        >
                                      </div>
                                    </div>
                                    <div class="row justify-content-between">
                                      <div
                                        v-for="design in DESIGNS"
                                        :key="design.id"
                                      >
                                        <vs-avatar
                                          class="m-2"
                                          @click="
                                            changeDesign(design, 'create')
                                          "
                                        >
                                          <img :src="design.image" alt="" />
                                        </vs-avatar>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- </div> -->
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
            <div
              class="bg-white rounded p-3"
              data-aos="fade"
              data-aos-duration="1000"
            >
              <h4
                class="font-weight-bold custom-color"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Your Boxes <i class="fas fa-boxes"></i>
              </h4>
              <p
                class="custom-color d-flex"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                This is your list of box, you can add products to your box
                whilst browsing our products pages
              </p>
              <vs-alert
                v-model="isAlert"
                data-aos="fade-up"
                data-aos-duration="1000"
                closable
                primary
                class="mb-4"
              >
                <template #icon>
                  <i class="bx bxs-cart-add"></i>
                </template>
                <template #title> Adding to Cart </template>
                You can select multiple boxes from the checkboxes to add them to
                your cart
              </vs-alert>
              <vs-button
                data-aos="fade-up"
                data-aos-duration="500"
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
              <vs-dialog v-model="active">
                <template #header>
                  <h4 class="pt-2 mb-2">Create your new <b>Box</b></h4>
                </template>

                <div class="row">
                  <vs-input
                    v-model="form.boxName"
                    class="mb-2 col-12"
                    placeholder="Box name"
                    label="Box Name"
                  >
                    <!-- <template #icon> @ </template> -->
                  </vs-input>
                  <div class="col-12 d-flex justify-content-between">
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
                  <div class="col-12">
                    <div class="d-flex justify-content-between">
                      <div class="ml-2">
                        <small>Choose design:</small>
                      </div>
                      <div class="form__input position-relative">
                        <vs-tooltip circle>
                          <vs-avatar
                            style="height: 44px; width: 44px"
                            @click="showDesign = !showDesign"
                          >
                            <div
                              class="logo"
                              :style="{
                                mask: `url(${form.designImage})  center`,
                                '-webkit-mask': `url(${form.designImage})  center`,
                                backgroundColor: form.colour,
                              }"
                            ></div>
                          </vs-avatar>
                          <template v-if="form.design" #tooltip>
                            {{ form.design }}
                          </template>
                          <template v-else #tooltip> None </template>
                        </vs-tooltip>
                        <div v-show="showDesign">
                          <div class="card custom-card">
                            <div class="card-body">
                              <div class="row mb-2">
                                <div class="col">
                                  <vs-button
                                    block
                                    @click="
                                      ;(form.design = ''),
                                        (form.designImage = '')
                                    "
                                    >No Design</vs-button
                                  >
                                </div>
                              </div>
                              <div class="row justify-content-between">
                                <div v-for="design in DESIGNS" :key="design.id">
                                  <vs-avatar
                                    class="m-2"
                                    @click="changeDesign(design, 'create')"
                                  >
                                    <img :src="design.image" alt="" />
                                  </vs-avatar>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
              <!-- <client-only> -->
              <vs-table data-aos="fade" data-aos-duration="1000">
                <template #header>
                  <vs-input
                    v-model="search"
                    aria-placeholder="search box"
                    aria-label="searchbar box"
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
                        :indeterminate="
                          selected.length == boxesData.data.length
                        "
                        @change="
                          selected = $vs.checkAll(selected, boxesData.data)
                        "
                      />
                    </vs-th>
                    <vs-th> Name </vs-th>
                    <vs-th> Price </vs-th>
                    <vs-th> Products </vs-th>
                    <vs-th> Color/Design </vs-th>
                    <vs-th> Edit/Delete </vs-th>
                  </vs-tr>
                </template>
                <template #tbody>
                  <vs-tr
                    v-for="(tr, i) in $vs.getSearch(boxesData.data, search)"
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
                      {{ parseInt(tr.products.length) }}
                    </vs-td>
                    <vs-td>
                      <div class="row">
                        <v-swatches
                          v-model="tr.detail.colour"
                          style="width: 44px; height: 44px"
                          class="mr-2"
                          popover-x="left"
                          disabled
                        ></v-swatches>
                        <vs-tooltip circle>
                          <vs-avatar>
                            <div
                              class="logo"
                              :style="{
                                mask: `url(${
                                  getDesignImage(tr.detail.design).image
                                }) left top`,
                                '-webkit-mask': `url(${
                                  getDesignImage(tr.detail.design).image
                                }) left top`,
                                backgroundColor: tr.detail.colour,
                              }"
                            ></div>
                          </vs-avatar>

                          <template #tooltip>
                            {{ tr.detail.design }}
                          </template>
                        </vs-tooltip>
                      </div>
                    </vs-td>
                    <vs-td>
                      <div class="row">
                        <vs-button
                          aria-label="edit box"
                          primary
                          gradient
                          @click="editBox(tr)"
                        >
                          <i class="bx bxs-edit"></i>
                          <template #animate> Edit </template>
                        </vs-button>
                        <vs-button
                          aria-label="delete box"
                          danger
                          gradient
                          style="min-width: 60px"
                          @click="deleteBox(tr.id, tr.name)"
                        >
                          <i class="bx bx-trash"></i>
                          <template #animate> Delete </template>
                        </vs-button>
                      </div>
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
              <!-- </client-only> -->
              <vs-button
                v-if="selected.length > 0"
                gradient
                color="#336699"
                block
                class="my-3"
                @click="addToCart()"
              >
                <i class="bx bxs-cart-add mr-2"></i>
                Add to Cart
              </vs-button>
            </div>
            <vs-dialog v-model="editShow">
              <template #header>
                <h4 class="pt-2 mb-2">
                  Edit
                  <b>{{ currentEdit.name }}</b>
                </h4>
              </template>

              <div class="row">
                <div class="col-12 mb-2">
                  <vs-input
                    v-model="editForm.name"
                    placeholder="Box name"
                    label="Box Name"
                  >
                    <!-- <template #icon> @ </template> -->
                  </vs-input>
                </div>
                <div class="col-12 mb-2">
                  <div class="d-flex justify-content-between">
                    <div class="ml-2">
                      <small>Choose a colour:</small>
                    </div>
                    <div>
                      <v-swatches
                        v-model="editForm.colour"
                        popover-x="left"
                      ></v-swatches>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex justify-content-between">
                    <div class="ml-2">
                      <small>Choose design:</small>
                    </div>
                    <div class="form__input position-relative">
                      <vs-tooltip circle>
                        <vs-avatar
                          style="height: 44px; width: 44px"
                          @click="showDesign = !showDesign"
                        >
                          <div
                            class="logo"
                            :style="{
                              mask: `url(${editForm.designImage}) center`,
                              '-webkit-mask': `url(${editForm.designImage}) center`,
                              backgroundColor: editForm.colour,
                            }"
                          ></div>
                        </vs-avatar>
                        <template v-if="editForm.design" #tooltip>
                          {{ editForm.design }}
                        </template>
                        <template v-else #tooltip> None </template>
                      </vs-tooltip>
                      <div v-show="showDesign">
                        <div class="card custom-card">
                          <div class="card-body">
                            <div class="row mb-2">
                              <div class="col">
                                <vs-button
                                  block
                                  @click="
                                    ;(editForm.design = ''),
                                      (editForm.designImage = '')
                                  "
                                  >No Design</vs-button
                                >
                              </div>
                            </div>
                            <div class="row justify-content-between">
                              <div v-for="design in DESIGNS" :key="design.id">
                                <vs-avatar
                                  class="m-2"
                                  @click="changeDesign(design, 'edit')"
                                >
                                  <img :src="design.image" alt="" />
                                </vs-avatar>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <button @click="swalfire()">test swal</button> -->
                <!-- <div class="col-12"> -->
                <template v-if="getEditItemCount > 0">
                  <h5 class="col-12">
                    Products
                    <small v-if="isQtyChanged">(Quantity changed)</small>
                  </h5>

                  <!-- <div class="col-12 align-items-end"> -->
                  <vs-card
                    v-for="(product, index) in currentEdit.products"
                    :key="index"
                    type="4"
                    class="py-2 col-12 col-md-6"
                  >
                    <template #title>
                      <h3 class="text-truncate">{{ product.name }}</h3>
                    </template>
                    <template #img>
                      <img
                        :disabled="isRemoved(product.id)"
                        :src="product.main_image"
                        alt="box default image"
                        class="image-resize"
                      />
                    </template>
                    <template #text class="w-100">
                      <p>Qty: {{ product.quantity }}</p>
                    </template>
                    <template #interactions>
                      <vs-button
                        v-if="!isRemoved(product.id)"
                        aria-label="edit box"
                        primary
                        gradient
                        @click="editQty(product)"
                      >
                        Edit Qty
                        <template #animate
                          ><i class="bx bxs-edit"></i
                        ></template>
                      </vs-button>
                      <vs-button
                        v-if="!isRemoved(product.id)"
                        aria-label="delete box"
                        danger
                        gradient
                        @click="removeProduct(product.id)"
                      >
                        Remove
                        <template #animate>
                          <i class="bx bx-trash"></i>
                        </template>
                      </vs-button>
                      <vs-button
                        v-else
                        aria-label="delete box"
                        primary
                        gradient
                        @click="restore(product.id)"
                      >
                        Restore
                        <template #animate>
                          <i class="bx bx-trash"></i>
                        </template>
                      </vs-button>
                    </template>
                  </vs-card>
                  <!-- </div> -->
                </template>
                <div v-else>
                  <span
                    data-aos="fade-up"
                    data-aos-duration="1300"
                    class="col-12"
                    >There is no product in this box. Click
                    <nuxt-link to="/products"><u> here</u></nuxt-link>
                    to browse products
                  </span>
                </div>
              </div>
              <!-- </div> -->

              <template #footer>
                <div class="pb-2">
                  <vs-button block @click="save()">
                    <i class="fas fa-box-open"></i>
                    <span class="ml-2">Save</span>
                  </vs-button>
                </div>
              </template>
            </vs-dialog>
          </template>
          <!-- <span class="data">
            <pre>
  {{
                selected.length > 0
                  ? selected
                  : 'Select an item in the table to add to cart'
              }}
        </pre
            >
          </span> -->
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'default',
  middleware: ['auth-ssr', 'auth'],
  data() {
    return {
      boxesData: {},
      form: {
        boxName: '',
        colour: '#336699',
        design: '',
        designImage: '',
      },
      editForm: {
        name: '',
        colour: '',
        design: '',
        designImage: '',
      },
      search: '',
      allCheck: false,
      selected: [],
      // items: [],
      loading: false,

      isAlert: true,

      active: false,
      checkbox1: false,
      editShow: false,
      currentEdit: {},
      isQtyChanged: false,

      showDesign: false,
      productsToRemove: [],
    }
  },

  async created() {
    this.loading = true
    try {
      await this.GET_BOXES()
      this.boxesData = JSON.parse(JSON.stringify(this.BOXES))
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  },

  computed: {
    ...mapGetters({
      BOXES: 'boxes/BOXES',
      DESIGNS: 'designs/DESIGNS',
    }),
    // boxesComputed() {
    //   return JSON.parse(JSON.stringify(this.BOXES))
    // },
    getEditItemCount() {
      let count = 0
      if (this.currentEdit?.products) {
        count = this.currentEdit.products.length
      }
      return count
    },
    isValid() {
      if (
        this.currentEdit.name.length > 0 &&
        this.currentEdit.detail.colour.length > 0
      ) {
        return true
      } else {
        return false
      }
    },
    getBoxCount() {
      return this.boxesData.data.length
    },
  },
  methods: {
    ...mapActions({
      GET_BOXES: 'boxes/GET_BOXES',
    }),
    // async getBoxes() {
    //   await this.GET_BOXES()
    //   this.items = this.BOXES.data
    // },
    clear() {
      Object.assign(this.$data, this.$options.data())
    },
    isRemoved(id) {
      return this.productsToRemove.includes(id)
    },
    restore(id) {
      const index = this.productsToRemove.indexOf(id)
      if (index > -1) {
        this.productsToRemove.splice(index, 1)
      }
    },
    removeProduct(id) {
      this.productsToRemove.push(id)
    },
    getDesignImage(label) {
      let result = {}
      const design = this.DESIGNS.find((x) => x.label === label)
      if (design) {
        result = {
          id: design.id,
          label: design.label,
          image: design.image,
        }
      } else {
        result = {
          id: 0,
          label: 'none',
          image: '/image/design/none.svg',
        }
      }
      return result
    },
    async createBox() {
      const formattedForm = {
        name: this.form.boxName,
        colour: this.form.colour,
        design: this.form.design !== '' ? this.form.design : 'none',
      }
      try {
        await this.$axios.$post('/boxes', formattedForm)
        await this.GET_BOXES()
        this.clear()
        this.boxesData = JSON.parse(JSON.stringify(this.BOXES))
        // this.$fetch()
      } catch (e) {
        alert('error')
      }
    },
    changeDesign(design, type) {
      if (type === 'create') {
        this.form.design = design.label
        this.form.designImage = design.image
      } else {
        this.editForm.design = design.label
        this.editForm.designImage = design.image
      }
      this.showDesign = false
    },
    addCartNotification(name) {
      const boxNotif = this.$vs.notification({
        duration: 10000,
        progress: 'auto',
        icon: `<i class='bx bx-cart'></i>`,
        color: '#336699',
        title: 'Click here to see your cart!',
        text: `Nice... <strong>${name}</strong> is successfuly added to your cart.`,
        onClick: () => {
          boxNotif.close()
          this.$router.push('/carts')
        },
      })
    },
    failNotification(name) {
      this.$vs.notification({
        duration: 10000,
        progress: 'auto',
        icon: '!',
        color: 'danger',
        title: 'Oops.. Failed to Add to Cart',
        text: `This box(es) <strong>${name}</strong> failed to add to cart, because there is no product.`,
      })
    },
    deleteBox(id, name) {
      this.$swal({
        title: 'Are you sure?',
        text: 'Box cannot be restored after deletion',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#336699',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$axios.$delete(`/boxes/${id}`)
            this.$swal('Deleted!', `${name} has been deleted`, 'success')
            await this.GET_BOXES()
            this.boxesData = JSON.parse(JSON.stringify(this.BOXES))
            // this.$fetch()
          } catch (e) {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          }
        }
      })
    },
    async addToCart() {
      try {
        const arrIds = []
        const arrName = []
        const arrFailed = []
        this.selected.map((x) => {
          if (x.products.length > 0) {
            arrIds.push(x.id)
            arrName.push(x.name)
          } else {
            arrFailed.push(x.name)
          }
        })
        const form = {
          type: 'box',
          ids: arrIds,
        }
        if (arrFailed.length > 0) {
          this.failNotification(arrFailed.toString())
        }

        if (arrIds.length > 0) {
          await this.$axios.post(`/carts`, form)
          this.addCartNotification(arrName.toString())
        }
        await this.GET_BOXES()
        this.clear()
        this.boxesData = JSON.parse(JSON.stringify(this.BOXES))
      } catch (e) {
        alert(e)
      }
    },
    editQty(product) {
      this.$swal({
        title: 'Input quantity',
        input: 'range',
        inputLabel:
          'Before payment, you might need to rechoose if product exceeds available stocks at that moment',
        showCancelButton: true,
        inputAttributes: {
          min: 1,
          max: product.stock,
          step: 1,
        },
        inputValue: 1,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value || value <= product.stock) {
              resolve()
            } else {
              resolve('You need to choose one')
            }
          })
        },
      }).then((result2) => {
        if (result2.isConfirmed) {
          const foundIndex = this.currentEdit.products.findIndex(
            (x) => x.id === product.id
          )
          this.currentEdit.products[foundIndex].quantity = result2.value
          this.isQtyChanged = true
        }
      })
    },

    editBox(item) {
      this.currentEdit = JSON.parse(JSON.stringify(item))
      this.editForm.designImage = this.getDesignImage(
        this.currentEdit.detail.design,
        'edit'
      ).image
      this.editForm.name = item.name
      this.editForm.colour = item.detail.colour
      this.editForm.design = item.detail.design
      this.editShow = true
    },
    async save() {
      let form = {}
      const allProducts = {}
      if (this.isValid) {
        const loadingvs = this.$vs.loading()
        try {
          form = {
            name: this.editForm.name,
            colour: this.editForm.colour,
            design: this.editForm.design,
          }

          if (this.getEditItemCount > 0) {
            this.currentEdit.products.map((x) => {
              if (!this.productsToRemove.includes(x.id)) {
                allProducts[x.id] = { quantity: x.quantity }
              }
            })
            form.allProducts = JSON.stringify(allProducts)
          }
          await this.$axios.$patch(`/boxes/${this.currentEdit.id}`, form)
          await this.GET_BOXES()
          // this.$fetch()
          this.editShow = false
          this.clear()
          this.boxesData = JSON.parse(JSON.stringify(this.BOXES))
        } catch (e) {
          alert(e)
        } finally {
          loadingvs.close()
          // this.loading = false
        }
      } else {
        alert('Please fill all necessary field')
      }
    },
  },
}
</script>

<style scoped>
.logo {
  width: 44px;
  height: 44px;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

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
  width: 100vw;
  min-height: calc(100vh - 15rem);
}

.box-content {
  min-width: 100vw;
  min-height: calc(100vh - 15rem);
}

.image-resize {
  object-fit: cover;
  height: 200px;
  max-width: 550px;
  border-radius: 10px;
  cursor: pointer;
}

.type-4 .vs-card__text {
  width: 100%;
}
</style>

<style>
.vs-input-content {
  width: 100% !important;
}

.vs-input {
  width: 100% !important;
}

.swal2-container {
  z-index: 100000;
}

.vs-card-content.type-4 .vs-card__text {
  width: 100%;
}

.custom-card {
  width: 200px;
  position: absolute !important;
  bottom: 0;
  right: 50px;
  z-index: 10000;
}

.vs-avatar-content {
  cursor: pointer;
}
</style>
