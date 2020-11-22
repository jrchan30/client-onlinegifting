<template>
  <div>
    <form
      enctype="multipart/form-data"
      @submit.prevent="submit"
      @keyup.enter.prevent
    >
      <div class="row">
        <!-- Bundle Name, Color Section -->
        <div class="col-lg-6">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Input bundle</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fas fa-parachute-box"></i
                          ></span>
                        </div>
                        <input
                          v-model="form.bundle_name"
                          class="form-control"
                          placeholder="Bundle name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fas fa-palette"></i
                          ></span>
                        </div>
                        <input
                          v-model="form.colour"
                          class="form-control"
                          placeholder="Colour"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Bundle Name, Color Section -->

        <!-- Image Section -->
        <div class="col-lg-6">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Images</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-6 col-md-4 mt-2">
                    <picture-input
                      ref="pictureInput"
                      width="130"
                      height="130"
                      size="10"
                      margin="16"
                      button-class="btn mb-0 mt-1"
                      remove-button-class="btn my-0"
                      radius="5"
                      :removable="true"
                      :custom-strings="{
                        upload: '<h1>Bummer!</h1>',
                        drag: 'Drag an image',
                        remove: 'Remove',
                        change: 'Change',
                      }"
                      @change="onChange()"
                    >
                    </picture-input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Image Section -->

        <!-- Categories Section -->
        <div class="col-lg-6">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-header col-12">
                <h3 class="mb-0">Categories</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <v-select
                      v-model="form.categories"
                      multiple
                      label="name"
                      required
                      :reduce="(name) => name.id"
                      :options="CATEGORIES"
                      style="z-index = 1000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Categories Section -->

        <!-- Products to include Section -->
        <div class="col-lg-6">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Products to be included</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
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
              </div>
            </div>
          </div>
        </div>
        <!-- End Products to include Section -->

        <!-- Bundle Description Section -->
        <div class="col-lg-12">
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
                          :class="{ 'is-active': isActive.underline() }"
                          @click="commands.underline"
                        >
                          <i class="fas fa-underline"></i>
                        </button>

                        <button
                          class="btn px-1 py-0"
                          :class="{ 'is-active': isActive.bullet_list() }"
                          type="button"
                          @click="commands.bullet_list"
                        >
                          <i class="fas fa-list-ul"></i>
                        </button>

                        <button
                          class="btn px-1 py-0"
                          :class="{ 'is-active': isActive.ordered_list() }"
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
                      <input type="hidden" name="content" :value="editor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Bundle Description Section -->
      </div>
      <button
        type="submit"
        class="btn btn-info btn-lg btn-block"
        :disabled="loading"
      >
        <i v-if="loading" class="fas fa-spinner fa-spin"></i>
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  data() {
    return {
      form: {
        bundle_name: '',
        description: '',
        image: '',
        colour: '',
        products: [],
        categories: [],
      },
      editor: null,
      loading: false,
    }
  },
  computed: {
    ...mapGetters({
      CATEGORIES: 'categories/CATEGORIES',
      ALL_PRODUCTS: 'products/ALL_PRODUCTS',
    }),
  },
  beforeDestroy() {
    this.editor.destroy()
  },

  async mounted() {
    await this.GET_CATEGORIES()
    await this.GET_ALL_PRODUCTS()

    this.editor = new Editor({
      content: '<p>Product description goes here!</p>',
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
  },

  methods: {
    ...mapActions({
      GET_CATEGORIES: 'categories/GET_CATEGORIES',
      GET_ALL_PRODUCTS: 'products/GET_ALL_PRODUCTS',
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
    submit() {
      this.errors = {}
      this.$swal({
        title: 'Are you sure?',
        text: 'Please recheck before inserting',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, insert it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.loading = true

          const form = {
            name: this.form.bundle_name,
            description: this.form.description,
            colour: this.form.colour,
          }

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

          formData.append('image', this.form.image)

          try {
            await this.$axios.$post('/bundles', formData)
            this.$swal('Inserted!', 'Bundle has been inserted.', 'success')
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
  },
}
</script>

<style></style>
