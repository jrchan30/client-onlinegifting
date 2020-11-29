exports.ids = [16];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/boxes/index.vue?vue&type=template&id=3455cf8e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box-content"},[(!_vm.$fetchState.pending)?[_vm._ssrNode("<div"+(_vm._ssrClass("bg-container",{
        'bg-img-empty': _vm.items.length < 1,
        'bg-img-main': _vm.items.length > 0,
      }))+" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"container h-100\" data-v-3455cf8e>","</div>",[(_vm.items.length < 1)?[_vm._ssrNode("<div class=\"d-flex row justify-content-center align-items-center h-100\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"d-none d-sm-none d-md-flex col-6 col-md-6 col-lg-7\" data-v-3455cf8e></div> "),_vm._ssrNode("<div class=\"col-8 col-md-6 col-lg-5\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"text-secondary mb-3 bg-white rounded p-4\" data-v-3455cf8e><small data-v-3455cf8e>You have no box yet. Create one now!</small></div> "),_vm._ssrNode("<div class=\"card rounded py-3\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"card-body\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"row mb-5\" data-v-3455cf8e><strong class=\"col-12\" data-v-3455cf8e>Create Box</strong></div> "),_vm._ssrNode("<div class=\"row\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"col-12 col-md-10 mb-4\" data-v-3455cf8e>","</div>",[_c('vs-input',{attrs:{"label":"Box name","placeholder":"My brand new box"},model:{value:(_vm.form.boxName),callback:function ($$v) {_vm.$set(_vm.form, "boxName", $$v)},expression:"form.boxName"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row mb-3\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"col-12\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"form__field d-flex justify-content-between\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"form__label\" data-v-3455cf8e><small data-v-3455cf8e>Choose a colour:</small></div> "),_vm._ssrNode("<div class=\"form__input\" data-v-3455cf8e>","</div>",[_c('v-swatches',{attrs:{"popover-x":"left"},model:{value:(_vm.form.colour),callback:function ($$v) {_vm.$set(_vm.form, "colour", $$v)},expression:"form.colour"}})],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<div class=\"col-12\" data-v-3455cf8e>","</div>",[_c('vs-button',{attrs:{"block":""},on:{"click":function($event){return _vm.createBox()}}},[_c('i',{staticClass:"fas fa-box-open"}),_vm._v(" "),_c('span',{staticClass:"ml-2"},[_vm._v("Create")])])],1)])],2)])])],2)],2)]:[_vm._ssrNode("<div class=\"bg-white rounded p-3\" data-v-3455cf8e>","</div>",[_vm._ssrNode("<h4 class=\"font-weight-bold custom-color\" data-v-3455cf8e>\n              Your Boxes <i class=\"fas fa-boxes\" data-v-3455cf8e></i></h4> <p class=\"custom-color\" data-v-3455cf8e>\n              This is your list of box, you can add products to your box\n              whilst browsing our products pages\n            </p> "),_c('vs-table',{scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('vs-input',{attrs:{"border":"","color":"#336699","placeholder":"Search"},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}})]},proxy:true},{key:"thead",fn:function(){return [_c('vs-tr',[_c('vs-th',[_c('vs-checkbox',{attrs:{"indeterminate":_vm.selected.length == _vm.items.length},on:{"change":function($event){_vm.selected = _vm.$vs.checkAll(_vm.selected, _vm.items)}},model:{value:(_vm.allCheck),callback:function ($$v) {_vm.allCheck=$$v},expression:"allCheck"}})],1),_vm._v(" "),_c('vs-th',{attrs:{"sort":""},on:{"click":function($event){_vm.items = _vm.$vs.sortData($event, _vm.items, 'name')}}},[_vm._v("\n                    Name\n                  ")]),_vm._v(" "),_c('vs-th',{attrs:{"sort":""},on:{"click":function($event){_vm.items = _vm.$vs.sortData($event, _vm.items, 'email')}}},[_vm._v("\n                    Email\n                  ")]),_vm._v(" "),_c('vs-th',{attrs:{"sort":""},on:{"click":function($event){_vm.items = _vm.$vs.sortData($event, _vm.items, 'id')}}},[_vm._v("\n                    Id\n                  ")])],1)]},proxy:true},{key:"tbody",fn:function(){return _vm._l((_vm.$vs.getSearch(_vm.items, _vm.search)),function(tr,i){return _c('vs-tr',{key:i,attrs:{"data":tr,"is-selected":!!_vm.selected.includes(tr)}},[_c('vs-td',{attrs:{"checkbox":""}},[_c('vs-checkbox',{attrs:{"val":tr},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})],1),_vm._v(" "),_c('vs-td',[_vm._v("\n                    "+_vm._s(tr.name)+"\n                  ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n                    "+_vm._s(tr.email)+"\n                  ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n                    "+_vm._s(tr.id)+"\n                  ")])],1)})},proxy:true}],null,false,706477692)}),_vm._ssrNode(" <span class=\"data\" data-v-3455cf8e><pre data-v-3455cf8e>"+_vm._ssrEscape(_vm._s(_vm.selected.length > 0
                    ? _vm.selected
                    : 'Select an item in the table to add to cart')+"\n      ")+"</pre></span>")],2)]],2)])]:_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/boxes/index.vue?vue&type=template&id=3455cf8e&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/boxes/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var boxesvue_type_script_lang_js_ = ({
  layout: 'default',
  middleware: 'auth',

  fetch() {
    this.getBoxes();
  },

  data() {
    return {
      form: {
        boxName: '',
        colour: '#336699'
      },
      search: '',
      allCheck: false,
      selected: [],
      items: []
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      BOXES: 'boxes/BOXES'
    })
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      GET_BOXES: 'boxes/GET_BOXES'
    }),

    async getBoxes() {
      await this.GET_BOXES();
      this.items = this.BOXES.data;
    },

    async createBox() {
      const formattedForm = {
        name: this.form.boxName,
        colour: this.form.colour
      };

      try {
        await this.$axios.$post('/boxes', formattedForm);
        this.getBoxes();
        this.clear();
      } catch (e) {
        console.log('error');
      }
    },

    clear() {
      Object.assign(this.$data, this.$options.data());
    }

  }
});
// CONCATENATED MODULE: ./pages/boxes/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_boxesvue_type_script_lang_js_ = (boxesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/boxes/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(94)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_boxesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3455cf8e",
  "87b2fe10"
  
)

/* harmony default export */ var boxes = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("45cdcce5", content, true, context)
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1cc23eb8", content, true, context)
};

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3455cf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3455cf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3455cf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3455cf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3455cf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bg-img-empty[data-v-3455cf8e]{background-image:url(/image/undraw_empty_xct9.svg)}.bg-img-main[data-v-3455cf8e]{background-image:url(/image/undraw_deliveries_131a.svg)}.bg-container[data-v-3455cf8e]{background-repeat:no-repeat;background-position:50%;background-size:contain;width:100%;height:100%}.box-content[data-v-3455cf8e]{width:100vw;height:calc(100vh - 10rem)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vs-input,.vs-input-content{width:100%!important}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=index.js.map