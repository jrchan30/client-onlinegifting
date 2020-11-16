<template>
  <div>
    <!-- <div class="container-fluid mt--6"> -->
    <form @submit.prevent="submit" @keyup.enter.prevent>
      <div class="row">
        <div class="col-lg-6">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Input product</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <!--Main Fields Loop -->
                  <div
                    v-for="(field, index) in fields"
                    :key="index"
                    :class="field.class"
                  >
                    <div class="form-group">
                      <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i :class="field.icon"></i
                          ></span>
                        </div>
                        <input
                          v-model="field.value"
                          class="form-control"
                          :placeholder="field.placeholder"
                          :type="field.type"
                        />
                        <template v-if="field.appendable">
                          <div class="input-group-append">
                            <span class="input-group-text"
                              ><small class="font-weight-bold">{{
                                field.appendable_value
                              }}</small></span
                            >
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div class="card-header col-12">
                    <h3 class="mb-0">Categories</h3>
                  </div>
                  <div class="card-body">
                    <v-select
                      v-model="categories"
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

        <!--End Main Fields Loop -->

        <div class="col-lg-6">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Images</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="col-6 col-md-4 mt-2"
                  >
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
                      @change="onChange(index)"
                    >
                    </picture-input>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-lg btn-block mt-3"
                  @click="addImage"
                >
                  Add Image
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-12">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">Product Description</h3>
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

        <button type="submit" class="btn btn-info btn-lg btn-block">
          Submit
        </button>
      </div>
    </form>
  </div>
  <!-- </div> -->
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
      fields: {
        name: {
          class: 'col-md-6',
          placeholder: 'Product name',
          icon: 'fas fa-signature',
          appendable: false,
          type: 'text',
          value: '',
        },
        price: {
          placeholder: 'Price',
          class: 'col-md-6',
          icon: 'fas fa-credit-card',
          appendable: true,
          appendable_value: 'IDR',
          type: 'number',
          value: 0,
        },
        weight: {
          class: 'col-md-6',
          placeholder: 'Weight',
          icon: 'fas fa-weight-hanging',
          appendable: true,
          appendable_value: 'gr',
          type: 'number',
          value: 100,
        },
        stock: {
          class: 'col-md-6',
          placeholder: 'Stock',
          icon: 'fas fa-cubes',
          appendable: false,
          type: 'number',
          value: 0,
        },
        // description: {
        //   class: 'col-md-12',
        //   placeholder: 'Description',
        //   icon: 'fas fa-align-left',
        //   appendable: false,
        //   type: 'text',
        //   value: '',
        // },
      },
      images: [],
      categories: [],
      editor: null,
      description: '',
    }
  },

  computed: {
    ...mapGetters({
      CATEGORIES: 'categories/CATEGORIES',
    }),
  },

  beforeDestroy() {
    this.editor.destroy()
  },

  async mounted() {
    await this.GET_CATEGORIES()

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
        this.description = this.html
      },
    })
  },

  methods: {
    ...mapActions({
      GET_CATEGORIES: 'categories/GET_CATEGORIES',
    }),
    onChange(idx) {
      const file = this.$refs.pictureInput[idx].file
      if (file) {
        this.images[idx] = file
      } else {
        console.log('Old browser. No support for Filereader API')
      }
    },
    addImage() {
      this.images.push({
        id: null,
        path: '',
        url: '',
      })
    },
    async submit() {
      const form = {
        name: this.fields.name.value,
        description: this.description,
        price: this.fields.price.value,
        stock: this.fields.stock.value,
        weight: this.fields.weight.value,
      }

      const formData = new FormData()
      for (const x in form) {
        formData.append(x, form[x])
      }

      for (const y in this.categories) {
        formData.append('categories[]', this.categories[y])
      }

      for (const z in this.images) {
        formData.append('images[]', this.images[z])
      }

      try {
        await this.$axios.$post('/products', formData)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style></style>
