exports.ids = [6];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/forms/bundle.vue?vue&type=template&id=3a5e8dbc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form enctype=\"multipart/form-data\">","</form>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-6\"><div class=\"card-wrapper\"><div class=\"card\"><div class=\"card-header\"><h3 class=\"mb-0\">Input bundle</h3></div> <div class=\"card-body\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group\"><div class=\"input-group input-group-merge\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-parachute-box\"></i></span></div> <input placeholder=\"Bundle name\" type=\"text\""+(_vm._ssrAttr("value",(_vm.form.bundle_name)))+" class=\"form-control\"></div></div> <div class=\"form-group\"><div class=\"input-group input-group-merge\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-palette\"></i></span></div> <input placeholder=\"Colour\" type=\"text\""+(_vm._ssrAttr("value",(_vm.form.colour)))+" class=\"form-control\"></div></div></div></div></div></div></div></div> "),_vm._ssrNode("<div class=\"col-lg-6\">","</div>",[_vm._ssrNode("<div class=\"card-wrapper\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h3 class=\"mb-0\">Images</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-6 col-md-4 mt-2\">","</div>",[_c('picture-input',{ref:"pictureInput",attrs:{"width":"130","height":"130","size":"1","margin":"16","z-index":10,"toggle-aspect-ratio":true,"button-class":"btn mb-0 mt-1","remove-button-class":"btn my-0","radius":"5","removable":true,"custom-strings":{
                      upload: '<h1>Bummer!</h1>',
                      drag: 'Drag an image',
                      remove: 'Remove',
                      change: 'Change',
                    }},on:{"change":function($event){return _vm.onChange()}}})],1)])])],2)])]),_vm._ssrNode(" "),(!_vm.$fetchState.pending)?_vm._ssrNode("<div class=\"col-lg-6\">","</div>",[_vm._ssrNode("<div class=\"card-wrapper\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header col-12\"><h3 class=\"mb-0\">Categories</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-12\">","</div>",[_c('v-select',{staticStyle:{},attrs:{"multiple":"","label":"name","required":"","reduce":function (name) { return name.id; },"options":_vm.CATEGORIES},model:{value:(_vm.form.categories),callback:function ($$v) {_vm.$set(_vm.form, "categories", $$v)},expression:"form.categories"}})],1)])])],2)])]):_vm._e(),_vm._ssrNode(" "),(!_vm.$fetchState.pending)?_vm._ssrNode("<div class=\"col-lg-6\">","</div>",[_vm._ssrNode("<div class=\"card-wrapper\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h3 class=\"mb-0\">Products to be included</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-12\">","</div>",[_c('v-select',{staticStyle:{},attrs:{"multiple":"","label":"name","required":"","reduce":function (name) { return name.id; },"options":_vm.ALL_PRODUCTS},model:{value:(_vm.form.products),callback:function ($$v) {_vm.$set(_vm.form, "products", $$v)},expression:"form.products"}})],1)])])],2)])]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"card-wrapper\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h3 class=\"mb-0\">Bundle description</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-12\">","</div>",[_c('editor-menu-bar',{attrs:{"editor":_vm.editor},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                    var commands = ref.commands;
                    var isActive = ref.isActive;
return [_c('div',[_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.bold() },attrs:{"type":"button"},on:{"click":commands.bold}},[_c('i',{staticClass:"fas fa-bold"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.italic() },attrs:{"type":"button"},on:{"click":commands.italic}},[_c('i',{staticClass:"fas fa-italic"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.strike() },attrs:{"type":"button"},on:{"click":commands.strike}},[_c('i',{staticClass:"fas fa-strikethrough"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.underline() },on:{"click":commands.underline}},[_c('i',{staticClass:"fas fa-underline"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.bullet_list() },attrs:{"type":"button"},on:{"click":commands.bullet_list}},[_c('i',{staticClass:"fas fa-list-ul"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.ordered_list() },attrs:{"type":"button"},on:{"click":commands.ordered_list}},[_c('i',{staticClass:"fas fa-list-ol"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",attrs:{"type":"button"},on:{"click":commands.undo}},[_c('i',{staticClass:"fas fa-undo-alt"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",attrs:{"type":"button"},on:{"click":commands.redo}},[_c('i',{staticClass:"fas fa-redo"})])])]}}])}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border-danger p-2\">","</div>",[_c('editor-content',{staticClass:"editor__content border-1",attrs:{"editor":_vm.editor}}),_vm._ssrNode(" <input type=\"hidden\" name=\"content\""+(_vm._ssrAttr("value",_vm.editor))+">")],2)],2)])])],2)])])],2),_vm._ssrNode(" <button type=\"submit\""+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"btn btn-info btn-lg btn-block\">"+((_vm.loading)?("<i class=\"fas fa-spinner fa-spin\"></i>"):"<!---->")+"\n      Submit\n    </button>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/forms/bundle.vue?vue&type=template&id=3a5e8dbc&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "tiptap"
var external_tiptap_ = __webpack_require__(63);

// EXTERNAL MODULE: external "tiptap-extensions"
var external_tiptap_extensions_ = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/forms/bundle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var bundlevue_type_script_lang_js_ = ({
  layout: 'admin',
  middleware: ['auth', 'admin-only'],

  async fetch() {
    await this.GET_CATEGORIES();
    await this.GET_ALL_PRODUCTS();
  },

  data() {
    return {
      form: {
        bundle_name: '',
        description: '',
        image: '',
        colour: '',
        products: [],
        categories: []
      },
      editor: null,
      loading: false
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      CATEGORIES: 'categories/CATEGORIES',
      ALL_PRODUCTS: 'products/ALL_PRODUCTS'
    })
  },

  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  },

  beforeMount() {
    this.editor = new external_tiptap_["Editor"]({
      content: '<p>Product description goes here!</p>',
      extensions: [new external_tiptap_extensions_["BulletList"](), new external_tiptap_extensions_["ListItem"](), new external_tiptap_extensions_["OrderedList"](), new external_tiptap_extensions_["Link"](), new external_tiptap_extensions_["Bold"](), new external_tiptap_extensions_["Italic"](), new external_tiptap_extensions_["Strike"](), new external_tiptap_extensions_["Underline"](), new external_tiptap_extensions_["History"]()],
      onUpdate: ({
        getJSON,
        getHTML
      }) => {
        this.json = getJSON();
        this.html = getHTML();
        this.form.description = this.html;
      }
    });
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      GET_CATEGORIES: 'categories/GET_CATEGORIES',
      GET_ALL_PRODUCTS: 'products/GET_ALL_PRODUCTS'
    }),

    closeForm() {
      Object.assign(this.$data, this.$options.data());
    },

    onChange() {
      const file = this.$refs.pictureInput.file;

      if (file) {
        this.form.image = file;
      } else {
        alert('Old browser (not supported). Chrome latest updated browser is suggested');
      }
    },

    onRemoved() {
      this.image = '';
    },

    submit() {
      this.errors = {};
      this.$swal({
        title: 'Are you sure?',
        text: 'Please recheck before inserting',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, insert it!'
      }).then(async result => {
        if (result.isConfirmed) {
          this.loading = true;
          const form = {
            name: this.form.bundle_name,
            description: this.form.description,
            colour: this.form.colour
          };
          const formData = new FormData();

          for (const x in form) {
            formData.append(x, form[x]);
          }

          for (const y in this.form.categories) {
            formData.append('categories[]', this.form.categories[y]);
          }

          for (const z in this.form.products) {
            formData.append('products[]', this.form.products[z]);
          }

          formData.append('image', this.form.image);

          try {
            await this.$axios.$post('/bundles', formData);
            this.$swal('Inserted!', 'Bundle has been inserted.', 'success');
            this.closeForm();
          } catch (e) {
            var _e$response$data;

            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: (_e$response$data = e.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message
            });
          } finally {
            this.loading = false;
          }
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/forms/bundle.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_bundlevue_type_script_lang_js_ = (bundlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/forms/bundle.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_bundlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "177dc4c3"
  
)

/* harmony default export */ var bundle = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Form: __webpack_require__(15).default})


/***/ })

};;
//# sourceMappingURL=bundle.js.map