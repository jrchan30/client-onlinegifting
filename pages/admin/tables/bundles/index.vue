<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header border-0">
          <h3 class="mb-0">Bundles table</h3>
        </div>
        <!-- Tabs -->
        <div class="nav-wrapper px-2 ml-3">
          <ul
            id="tabs-icons-text"
            class="nav nav-pills flex-column flex-md-row"
            role="tablist"
          >
            <li class="nav-item">
              <a
                id="tabs-icons-text-1-tab"
                class="nav-link mb-sm-3 mb-md-0 active"
                data-toggle="tab"
                href="#tabs-icons-text-1"
                role="tab"
                aria-controls="tabs-icons-text-1"
                aria-selected="true"
                @click="getBundles()"
                ><i class="fas fa-boxes mr-2"></i>Bundles</a
              >
            </li>
            <li class="nav-item">
              <a
                id="tabs-icons-text-2-tab"
                class="nav-link mb-sm-3 mb-md-0"
                data-toggle="tab"
                href="#tabs-icons-text-2"
                role="tab"
                aria-controls="tabs-icons-text-2"
                aria-selected="false"
                @click="getHiddenBundles()"
                ><i class="fas fa-trash-alt mr-2"></i>Hidden Bundles</a
              >
            </li>
          </ul>
        </div>
        <!-- End Tabs -->
        <div
          class="table-responsive"
          data-toggle="list"
          data-list-values='["id", "name", "price", "stock", "weight"]'
        >
          <table class="table align-items-center table-flush">
            <thead class="thead-light">
              <tr>
                <th
                  scope="col"
                  class="sort"
                  data-sort="id"
                  @click="settingFilter('id')"
                >
                  Id
                </th>
                <th
                  scope="col"
                  class="sort"
                  data-sort="name"
                  @click="settingFilter('name')"
                >
                  Bundle Name
                </th>
                <th scope="col" class="sort">Price</th>
                <th scope="col">Image</th>
                <th scope="col" class="sort">Rating</th>
                <th scope="col" class="sort">Likes</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="list">
              <tr v-for="bundle in BUNDLES.data" :key="bundle.id">
                <td class="id">{{ bundle.id }}</td>
                <th class="name">
                  <span class="text-capitalize">{{ bundle.name }}</span>
                </th>
                <td class="price">{{ bundle.price }} (IDR)</td>
                <td>
                  <img
                    alt="Image placeholder"
                    class="item-image"
                    :src="bundle.main_image"
                    width="80px"
                    @click="expandImage(`${bundle.main_image}`)"
                  />
                </td>
                <td class="rating">
                  <span v-if="bundle.avg_rating == null">Not rated</span
                  >{{ parseFloat(bundle.avg_rating).toFixed(1) }}
                </td>
                <td class="likes">
                  {{ bundle.likes_count }}
                </td>
                <td class="text-right">
                  <div class="dropdown">
                    <a
                      class="btn btn-sm btn-icon-only text-light"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                    >
                      <template v-if="!isHiddenBundles">
                        <button
                          class="dropdown-item"
                          @click="toggleEdit(bundle)"
                        >
                          Edit
                        </button>
                        <button
                          class="dropdown-item"
                          @click="hideBundle(bundle.id)"
                        >
                          Hide
                        </button>
                      </template>
                      <template v-else>
                        <button
                          class="dropdown-item"
                          @click="restoreBundle(bundle.id)"
                        >
                          Restore
                        </button>
                      </template>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer py-4">
          <AdminPagination
            :store-action="'bundles/GET_BUNDLES'"
            :store-getter="'bundles/BUNDLES'"
          />
        </div>
      </div>
      <div id="edit" class="card">
        <div class="card-header border-0">
          <template v-if="isEdit">
            <h3 class="mb-0 text-capitalize">
              Edit Bundle ({{ currentBundleName }})
              <button
                class="btn p-0 float-right fas fa-times"
                @click="closeForm"
              ></button>
            </h3>
            <form @submit.prevent="submitEdit" @keyup.enter.prevent>
              <div class="card-body">
                <div class="row">
                  <div class="col-3">
                    <picture-input
                      ref="pictureInput"
                      width="130"
                      height="130"
                      size="10"
                      margin="16"
                      :z-index="10"
                      button-class="btn btn-sm"
                      radius="5"
                      :prefill="form.image.url"
                      :custom-strings="{
                        upload: '<h1>Bummer!</h1>',
                        drag: 'Drag an image',
                      }"
                      @change="onChange(form.image.id)"
                    >
                    </picture-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="form-control-label">Name</label>
                      <input
                        v-model="form.bundle_name"
                        class="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div
                      class="form-group d-flex d-md-block justify-content-between"
                    >
                      <label class="form-control-label" for="colour"
                        >Colour</label
                      >
                      <!-- <input
                        v-model="form.colour"
                        class="form-control"
                        type="text"
                      /> -->
                      <div id="colour" class="form__input">
                        <v-swatches
                          v-model="form.colour"
                          popover-x="left"
                        ></v-swatches>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div
                      class="form-group d-flex d-md-block justify-content-between"
                    >
                      <label class="form-control-label" for="design"
                        >Design
                      </label>
                      <div id="design" class="form__input position-relative">
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
                        <div v-show="showDesign">
                          <div class="card custom-card">
                            <div class="card-body">
                              <div class="row mb-2">
                                <div class="col">
                                  <u
                                    class="text-primary"
                                    @click="
                                      ;(form.design = ''),
                                        (form.designImage = ''),
                                        (showDesign = false)
                                    "
                                    >Clear Design</u
                                  >
                                </div>
                              </div>
                              <div class="row justify-content-between">
                                <div v-for="design in DESIGNS" :key="design.id">
                                  <vs-avatar
                                    class="m-2"
                                    @click="changeDesign(design)"
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
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="form-control-label">Categories</label>
                      <!-- <v-select
                        v-model="form.categories"
                        multiple
                        label="name"
                        required
                        :reduce="(name) => name.id"
                        :options="SUB_CATEGORIES"
                        style="z-index = 1000"
                      /> -->
                      <treeselect
                        v-model="form.categories"
                        :multiple="true"
                        :options="CATEGORIES"
                        value-consists-of="LEAF_PRIORITY"
                        :normalizer="normalizer"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="form-control-label"
                        >Products included</label
                      >
                      <v-select
                        v-model="form.products"
                        multiple
                        label="name"
                        required
                        :reduce="(name) => name.id"
                        :options="ALL_PRODUCTS"
                        style="z-index = 1000"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="card-wrapper">
                      <div class="card">
                        <div class="card-header">
                          <h3 class="mb-0">Bundle description</h3>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-12">
                              <editor-menu-bar
                                v-slot="{ commands, isActive }"
                                :editor="editor"
                              >
                                <div>
                                  <button
                                    class="btn px-1 py-0"
                                    :class="{ 'is-active': isActive.bold() }"
                                    type="button"
                                    @click="commands.bold"
                                  >
                                    <i class="fas fa-bold"></i>
                                  </button>

                                  <button
                                    class="btn px-1 py-0"
                                    :class="{ 'is-active': isActive.italic() }"
                                    type="button"
                                    @click="commands.italic"
                                  >
                                    <i class="fas fa-italic"></i>
                                  </button>

                                  <button
                                    class="btn px-1 py-0"
                                    :class="{ 'is-active': isActive.strike() }"
                                    type="button"
                                    @click="commands.strike"
                                  >
                                    <i class="fas fa-strikethrough"></i>
                                  </button>

                                  <button
                                    class="btn px-1 py-0"
                                    :class="{
                                      'is-active': isActive.underline(),
                                    }"
                                    @click="commands.underline"
                                  >
                                    <i class="fas fa-underline"></i>
                                  </button>

                                  <button
                                    class="btn px-1 py-0"
                                    :class="{
                                      'is-active': isActive.bullet_list(),
                                    }"
                                    type="button"
                                    @click="commands.bullet_list"
                                  >
                                    <i class="fas fa-list-ul"></i>
                                  </button>

                                  <button
                                    class="btn px-1 py-0"
                                    :class="{
                                      'is-active': isActive.ordered_list(),
                                    }"
                                    type="button"
                                    @click="commands.ordered_list"
                                  >
                                    <i class="fas fa-list-ol"></i>
                                  </button>

                                  <button
                                    class="btn px-1 py-0"
                                    type="button"
                                    @click="commands.undo"
                                  >
                                    <i class="fas fa-undo-alt"></i>
                                  </button>

                                  <button
                                    class="btn px-1 py-0"
                                    type="button"
                                    @click="commands.redo"
                                  >
                                    <i class="fas fa-redo"></i>
                                  </button>
                                </div>
                              </editor-menu-bar>
                              <div class="border-danger p-2">
                                <editor-content
                                  class="editor__content border-1"
                                  :editor="editor"
                                />
                                <input
                                  type="hidden"
                                  name="content"
                                  :value="editor"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-info btn-lg btn-block"
                    @click="submitEdit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </template>
          <template v-else>
            <div>
              <small class="mb-0 text-gray">
                This is the edit bundle section, please select which bundle to
                edit from the dropdown on each bundle's record
              </small>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { Editor } from 'tiptap'
import {
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  layout: 'admin',
  middleware: ['auth', 'admin-only'],
  async fetch() {
    this.SET_FILTER(this.filter)
    await this.GET_BUNDLES()
    await this.GET_CATEGORIES()
    await this.GET_ALL_PRODUCTS()
  },
  data() {
    return {
      isEdit: false,
      currentBundleName: '',
      // fields: {
      //   bundle_name: {
      //     class: 'col-md-6',
      //     placeholder: 'Bundle name',
      //     icon: 'fas fa-signature',
      //     appendable: false,
      //     value: '',
      //   },
      // },
      form: {
        bundle_id: '',
        bundle_name: '',
        description: '',
        image: null,
        image_id: null,
        new_image: null,
        colour: '',
        products: [],
        categories: [],
        design: '',
        designImage: '',
      },
      showDesign: false,
      editor: null,
      filter: {
        search: '',
        orderBy: 'created_at',
        orderDir: 'desc',
        categories: '',
        min: 0,
        max: 10000000,
      },
      isHiddenBundles: false,
      loading: false,
      errors: {},

      normalizer(node) {
        if (node.children == null || node.children === 'null') {
          delete node.children
        }
      },
    }
  },
  computed: {
    ...mapGetters({
      BUNDLES: 'bundles/BUNDLES',
      CATEGORIES: 'categories/CATEGORIES',
      SUB_CATEGORIES: 'categories/SUB_CATEGORIES',
      ALL_PRODUCTS: 'products/ALL_PRODUCTS',
      DESIGNS: 'designs/DESIGNS',
    }),
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy()
    }
  },
  methods: {
    ...mapActions({
      GET_BUNDLES: 'bundles/GET_BUNDLES',
      GET_CATEGORIES: 'categories/GET_CATEGORIES',
      GET_ALL_PRODUCTS: 'products/GET_ALL_PRODUCTS',
      GET_HIDDEN_BUNDLES: 'bundles/GET_HIDDEN_BUNDLES',
    }),
    ...mapMutations({
      SET_FILTER: 'bundles/SET_FILTER',
    }),
    changeDesign(design) {
      this.form.design = design.label
      this.form.designImage = design.image
      this.showDesign = false
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
    onChange() {
      const file = this.$refs.pictureInput.file
      if (file) {
        this.form.image = file
        this.form.new_image = file
      } else {
        alert(
          'Old browser (not supported). Chrome latest updated browser is suggested'
        )
      }
    },
    settingFilter(value) {
      switch (value) {
        case 'id':
          if (this.filter.orderBy !== 'id') {
            this.filter.orderDir = 'desc'
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc'
            this.filter.orderDir = dir
          }
          this.filter.orderBy = 'id'
          break
        case 'name':
          if (this.filter.orderBy !== 'name') {
            this.filter.orderDir = 'desc'
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc'
            this.filter.orderDir = dir
          }
          this.filter.orderBy = 'name'
          break
        default:
          break
      }

      this.SET_FILTER(this.filter)
      if (!this.isHiddenBundles) {
        this.GET_BUNDLES()
      } else {
        this.GET_HIDDEN_BUNDLES()
      }
    },
    expandImage(url) {
      this.$swal({
        showCloseButton: true,
        imageUrl: url,
        width: 1000,
        showConfirmButton: false,
        imageWidth: '100%',
        imageAlt: 'Image Not Available',
      })
    },
    toggleEdit(bundle) {
      if (this.editor) {
        this.editor.destroy()
      }
      this.closeForm()
      const bundleCopy = JSON.parse(JSON.stringify(bundle))
      console.log(bundleCopy)
      this.isEdit = true
      this.form.bundle_id = bundleCopy.id
      this.form.bundle_name = bundleCopy.name
      this.form.image = bundleCopy.detail.image
      this.form.image.url += '?origin=' + window.location.host
      this.form.image_id = bundleCopy.detail.image.id
      this.currentBundleName = bundleCopy.name
      this.form.colour = bundleCopy.detail.colour
      this.form.design = bundleCopy.detail.design
      this.form.description = bundleCopy.description
      this.form.designImage = this.getDesignImage(
        bundleCopy.detail.design,
        'edit'
      ).image
      this.editor = new Editor({
        content: this.form.description,
        extensions: [
          new BulletList(),
          new ListItem(),
          new OrderedList(),
          new Link(),
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON()
          this.html = getHTML()
          this.form.description = this.html
        },
      })
      bundleCopy.detail.categories.map((x) => this.form.categories.push(x.id))
      // this.form.products = bundleCopy.products.colour
      bundleCopy.products.map((x) => this.form.products.push(x.id))
      document.getElementById('edit').scrollIntoView()
    },
    closeForm() {
      this.isEdit = false
      Object.assign(this.$data, this.$options.data())
    },
    getBundles() {
      this.isHiddenBundles = false
      this.GET_BUNDLES()
    },
    getHiddenBundles() {
      this.isHiddenBundles = true
      this.GET_HIDDEN_BUNDLES()
    },
    hideBundle(id) {
      this.loading = true
      this.$swal({
        title: 'Are you sure?',
        text: 'Bundle will be hidden from customers',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, hide it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$axios.$delete(`/bundles/${id}`)
            this.$swal('Hid!', 'Bundle is now hidden.', 'success')
            this.GET_BUNDLES()
          } catch (e) {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: e.response.data?.message,
            })
          } finally {
            this.loading = false
          }
        }
      })
    },
    restoreBundle(id) {
      this.loading = true
      this.$swal({
        title: 'Are you sure?',
        text: 'Bundle will be visible to customers',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, restore it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$axios.$post(`/restore-bundle/${id}`)
            this.$swal('Restored!', 'Bundle is restored.', 'success')
            this.GET_HIDDEN_BUNDLES()
          } catch (e) {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: e.response.data?.message,
            })
          } finally {
            this.loading = false
          }
        }
      })
    },
    submitEdit() {
      this.$swal({
        title: 'Are you sure?',
        text: 'Please recheck before saving!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loading = this.$vs.loading()

          const form = {
            name: this.form.bundle_name,
            colour: this.form.colour,
            description: this.form.description,
            design: this.form.design,
          }

          console.log(form)

          const formData = new FormData()
          for (const x in form) {
            formData.append(x, form[x])
          }

          for (const y in this.form.categories) {
            formData.append('categories[]', this.form.categories[y])
          }

          for (const z in this.form.products) {
            formData.append('products[]', this.form.products[z])
          }

          if (this.form.new_image) {
            formData.append('new_image', this.form.new_image)
            formData.append('delete_image', this.form.image_id)
          }

          formData.append('_method', 'patch')
          try {
            await this.$axios.$post(`/bundles/${this.form.bundle_id}`, formData)
            this.$swal('Inserted!', 'Bundle has been inserted.', 'success')
            this.editor.destroy()
            this.closeForm()
            this.editor = new Editor({
              content: '',
              extensions: [
                new BulletList(),
                new ListItem(),
                new OrderedList(),
                new Link(),
                new Bold(),
                new Italic(),
                new Strike(),
                new Underline(),
                new History(),
              ],
              onUpdate: ({ getJSON, getHTML }) => {
                this.json = getJSON()
                this.html = getHTML()
                this.description = this.html
              },
            })
          } catch (e) {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: e.response.data?.message,
            })
          } finally {
            this.GET_BUNDLES()
            // this.loading = false
            loading.close()
            this.closeForm()
          }
        }
      })
    },
  },
}
</script>

<style scoped>
.item-image {
  border-radius: 10px;
  /* max-width: 100%; */
  cursor: pointer;
}

.item-image-bottom {
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.4s;
}

.item-image-bottom:hover {
  transform: scale(1.1);
}

.logo {
  width: 44px;
  height: 44px;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

.custom-card {
  width: 200px;
  position: absolute !important;
  bottom: -40px;
  right: 100px;
  z-index: 10000;
}
</style>
