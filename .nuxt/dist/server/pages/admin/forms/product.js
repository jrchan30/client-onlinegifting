exports.ids = [7];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/forms/product.vue?vue&type=template&id=58010eb2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-6\">","</div>",[_vm._ssrNode("<div class=\"card-wrapper\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h3 class=\"mb-0\">Input product</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode((_vm._ssrList((_vm.fields),function(field,index){return ("<div"+(_vm._ssrClass(null,field.class))+"><div class=\"form-group\"><div class=\"input-group input-group-merge\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i"+(_vm._ssrClass(null,field.icon))+"></i></span></div> "+(((field.type)==='checkbox')?("<input"+(_vm._ssrAttr("placeholder",field.placeholder))+" type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(field.value)?_vm._i(field.value,null)>-1:(field.value)))+" class=\"form-control\">"):((field.type)==='radio')?("<input"+(_vm._ssrAttr("placeholder",field.placeholder))+" type=\"radio\""+(_vm._ssrAttr("checked",_vm._q(field.value,null)))+" class=\"form-control\">"):("<input"+(_vm._ssrAttr("placeholder",field.placeholder))+(_vm._ssrAttr("type",field.type))+(_vm._ssrAttr("value",(field.value)))+" class=\"form-control\">"))+" "+((field.appendable)?("<div class=\"input-group-append\"><span class=\"input-group-text\"><small class=\"font-weight-bold\">"+_vm._ssrEscape(_vm._s(field.appendable_value))+"</small></span></div>"):"<!---->")+"</div></div></div>")}))+" <div class=\"card-header col-12\"><h3 class=\"mb-0\">Categories</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_c('v-select',{staticStyle:{},attrs:{"multiple":"","label":"name","required":"","reduce":function (name) { return name.id; },"options":_vm.SUB_CATEGORIES},model:{value:(_vm.categories),callback:function ($$v) {_vm.categories=$$v},expression:"categories"}})],1)],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6\">","</div>",[_vm._ssrNode("<div class=\"card-wrapper\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h3 class=\"mb-0\">Images</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.images),function(image,index){return _vm._ssrNode("<div class=\"col-6 col-md-4 mt-2\">","</div>",[_c('picture-input',{ref:"pictureInput",refInFor:true,attrs:{"width":"130","height":"130","size":"3","margin":"16","z-index":10,"button-class":"btn mb-0 mt-1","remove-button-class":"btn my-0","radius":"5","removable":true,"custom-strings":{
                      upload: '<h1>Bummer!</h1>',
                      drag: 'Drag an image',
                      remove: 'Remove',
                      change: 'Change',
                    }},on:{"change":function($event){return _vm.onChange(index)}}})],1)}),0),_vm._ssrNode(" <button type=\"button\" class=\"btn btn-primary btn-lg btn-block mt-3\">\n                Add Image\n              </button>")],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"card-wrapper\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h3 class=\"mb-0\">Product Description</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-12\">","</div>",[_c('editor-menu-bar',{attrs:{"editor":_vm.editor},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                    var commands = ref.commands;
                    var isActive = ref.isActive;
return [_c('div',[_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.bold() },attrs:{"type":"button"},on:{"click":commands.bold}},[_c('i',{staticClass:"fas fa-bold"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.italic() },attrs:{"type":"button"},on:{"click":commands.italic}},[_c('i',{staticClass:"fas fa-italic"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.strike() },attrs:{"type":"button"},on:{"click":commands.strike}},[_c('i',{staticClass:"fas fa-strikethrough"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.underline() },on:{"click":commands.underline}},[_c('i',{staticClass:"fas fa-underline"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.bullet_list() },attrs:{"type":"button"},on:{"click":commands.bullet_list}},[_c('i',{staticClass:"fas fa-list-ul"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",class:{ 'is-active': isActive.ordered_list() },attrs:{"type":"button"},on:{"click":commands.ordered_list}},[_c('i',{staticClass:"fas fa-list-ol"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",attrs:{"type":"button"},on:{"click":commands.undo}},[_c('i',{staticClass:"fas fa-undo-alt"})]),_vm._v(" "),_c('button',{staticClass:"btn px-1 py-0",attrs:{"type":"button"},on:{"click":commands.redo}},[_c('i',{staticClass:"fas fa-redo"})])])]}}])}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border-danger p-2\">","</div>",[_c('editor-content',{staticClass:"editor__content border-1",attrs:{"editor":_vm.editor}}),_vm._ssrNode(" <input type=\"hidden\" name=\"content\""+(_vm._ssrAttr("value",_vm.editor))+">")],2)],2)])])],2)])]),_vm._ssrNode(" <button type=\"submit\""+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"btn btn-info btn-lg btn-block\">"+((_vm.loading)?("<i class=\"fas fa-spinner fa-spin\"></i>"):"<!---->")+"\n        Submit\n      </button>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/forms/product.vue?vue&type=template&id=58010eb2&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "tiptap"
var external_tiptap_ = __webpack_require__(67);

// EXTERNAL MODULE: external "tiptap-extensions"
var external_tiptap_extensions_ = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/forms/product.vue?vue&type=script&lang=js&
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



/* harmony default export */ var productvue_type_script_lang_js_ = ({
  layout: 'admin',
  middleware: ['auth', 'admin-only'],

  async fetch() {
    await this.GET_CATEGORIES();
  },

  data() {
    return {
      fields: {
        name: {
          class: 'col-md-6',
          placeholder: 'Product name',
          icon: 'fas fa-signature',
          appendable: false,
          type: 'text',
          value: ''
        },
        price: {
          placeholder: 'Price',
          class: 'col-md-6',
          icon: 'fas fa-credit-card',
          appendable: true,
          appendable_value: 'IDR',
          type: 'number',
          value: 0
        },
        weight: {
          class: 'col-md-6',
          placeholder: 'Weight',
          icon: 'fas fa-weight-hanging',
          appendable: true,
          appendable_value: 'gr',
          type: 'number',
          value: 100
        },
        stock: {
          class: 'col-md-6',
          placeholder: 'Stock',
          icon: 'fas fa-cubes',
          appendable: false,
          type: 'number',
          value: 0
        } // description: {
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
      loading: false
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      CATEGORIES: 'categories/CATEGORIES',
      SUB_CATEGORIES: 'categories/SUB_CATEGORIES'
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
        this.description = this.html;
      }
    });
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      GET_CATEGORIES: 'categories/GET_CATEGORIES'
    }),

    closeForm() {
      Object.assign(this.$data, this.$options.data());
    },

    onChange(idx) {
      const file = this.$refs.pictureInput[idx].file;

      if (file) {
        this.images[idx] = file;
      } else {
        console.log('Old browser. No support for Filereader API');
      }
    },

    addImage() {
      this.images.push({
        id: null,
        path: '',
        url: ''
      });
    },

    submit() {
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
            name: this.fields.name.value,
            description: this.description,
            price: this.fields.price.value,
            stock: this.fields.stock.value,
            weight: this.fields.weight.value
          };
          const formData = new FormData();

          for (const x in form) {
            formData.append(x, form[x]);
          }

          for (const y in this.categories) {
            formData.append('categories[]', this.categories[y]);
          }

          for (const z in this.images) {
            formData.append('images[]', this.images[z]);
          }

          try {
            await this.$axios.$post('/products', formData);
            this.$swal('Inserted!', 'Product has been inserted.', 'success');
            this.editor.destroy();
            this.closeForm();
            this.editor = new external_tiptap_["Editor"]({
              content: '<p>Product description goes here!</p>',
              extensions: [new external_tiptap_extensions_["BulletList"](), new external_tiptap_extensions_["ListItem"](), new external_tiptap_extensions_["OrderedList"](), new external_tiptap_extensions_["Link"](), new external_tiptap_extensions_["Bold"](), new external_tiptap_extensions_["Italic"](), new external_tiptap_extensions_["Strike"](), new external_tiptap_extensions_["Underline"](), new external_tiptap_extensions_["History"]()],
              onUpdate: ({
                getJSON,
                getHTML
              }) => {
                this.json = getJSON();
                this.html = getHTML();
                this.description = this.html;
              }
            });
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
// CONCATENATED MODULE: ./pages/admin/forms/product.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_productvue_type_script_lang_js_ = (productvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/forms/product.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_productvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "dee65b04"
  
)

/* harmony default export */ var product = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Form: __webpack_require__(15).default})


/***/ })

};;
//# sourceMappingURL=product.js.map