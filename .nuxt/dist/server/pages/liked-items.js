exports.ids = [21];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/liked-items.vue?vue&type=template&id=c41e559e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items)?_c('div',{staticClass:"container bg-white rounded p-3"},[_vm._ssrNode("<h4 class=\"font-weight-bold custom-color\" data-v-c41e559e>Liked Products</h4> <p class=\"custom-color\" data-v-c41e559e>\n    This is our latest products, click on product's card to see more details\n    about the product\n  </p> "),(_vm.items)?_c('vs-table',{scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('vs-input',{attrs:{"border":"","color":"#336699","placeholder":"Search"},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}})]},proxy:true},{key:"thead",fn:function(){return [_c('vs-tr',[_c('vs-th',{attrs:{"sort":""},on:{"click":function($event){_vm.items = _vm.$vs.sortData($event, _vm.items, 'name')}}},[_vm._v("\n          Name\n        ")]),_vm._v(" "),_c('vs-th',{attrs:{"sort":""},on:{"click":function($event){_vm.items = _vm.$vs.sortData($event, _vm.items, 'price')}}},[_vm._v("\n          Price (IDR)\n        ")]),_vm._v(" "),_c('vs-th',{attrs:{"sort":""},on:{"click":function($event){_vm.items = _vm.$vs.sortData($event, _vm.items, 'stock')}}},[_vm._v("\n          Stock\n        ")]),_vm._v(" "),_c('vs-th',{attrs:{"sort":""},on:{"click":function($event){_vm.items = _vm.$vs.sortData($event, _vm.items, 'weight')}}},[_vm._v("\n          Weight\n        ")])],1)]},proxy:true},{key:"tbody",fn:function(){return _vm._l((_vm.$vs.getPage(
          _vm.$vs.getSearch(_vm.items, _vm.search),
          _vm.page,
          _vm.max
        )),function(tr,i){return _c('vs-tr',{key:i,scopedSlots:_vm._u([{key:"expand",fn:function(){return [_c('div',{staticClass:"float-left"},[_c('div',{staticClass:"d-flex"},[_c('vs-avatar',{staticClass:"mb-auto",attrs:{"cursor":""}},[_c('img',{staticClass:"img-ratio",attrs:{"src":tr.images[0].url,"alt":""},on:{"click":function($event){return _vm.expandImage(tr.images[0].url)}}})]),_vm._v(" "),_c('span',{staticClass:"ml-2 my-auto"},[_vm._v("\n                "+_vm._s(tr.name)+"\n              ")])],1)]),_vm._v(" "),_c('div',{staticClass:"float-right"},[_c('div',{staticClass:"d-flex"},[_c('vs-button',{attrs:{"flat":"","icon":""},on:{"click":function($event){return _vm.goTo(tr.id)}}},[_vm._v("\n                See Details\n              ")]),_vm._v(" "),_c('vs-button',{attrs:{"border":"","danger":""},on:{"click":function($event){return _vm.unlike(tr.id)}}},[_vm._v("\n                Unlike\n              ")])],1)])]},proxy:true}],null,true)},[_c('vs-td',[_vm._v("\n          "+_vm._s(tr.name)+"\n        ")]),_vm._v(" "),_c('vs-td',[_vm._v(" "+_vm._s(tr.price)+" ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n          "+_vm._s(tr.stock)+"\n        ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n          "+_vm._s(tr.weight)+"\n        ")])],1)})},proxy:true}],null,false,362017330)}):_vm._e()],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/liked-items.vue?vue&type=template&id=c41e559e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/liked-items.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var liked_itemsvue_type_script_lang_js_ = ({
  asyncData({
    store
  }) {
    const items = store.loggedInUser.liked_products;
    return items;
  },

  data() {
    return {
      edit: null,
      search: '',
      allCheck: false,
      page: 1,
      max: 100,
      isLoading: false
    };
  },

  methods: {
    expandImage(url) {
      this.$swal({
        showCloseButton: true,
        imageUrl: url,
        // width: 100%,
        showConfirmButton: false,
        imageWidth: '100%',
        imageAlt: 'Image Not Available'
      });
    },

    goTo(id) {
      this.$router.push(`/products/${id}`);
    },

    unlike(id) {
      this.isLoading = true;

      try {
        console.log('test');
        this.$axios.$delete(`/likes/${id}`);
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/liked-items.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_liked_itemsvue_type_script_lang_js_ = (liked_itemsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/liked-items.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_liked_itemsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c41e559e",
  "14ec19ae"
  
)

/* harmony default export */ var liked_items = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3f0d2708", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_liked_items_vue_vue_type_style_index_0_id_c41e559e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_liked_items_vue_vue_type_style_index_0_id_c41e559e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_liked_items_vue_vue_type_style_index_0_id_c41e559e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_liked_items_vue_vue_type_style_index_0_id_c41e559e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_liked_items_vue_vue_type_style_index_0_id_c41e559e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".img-ratio[data-v-c41e559e]{cursor:pointer;-o-object-fit:cover;object-fit:cover;height:50px;width:50px}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=liked-items.js.map