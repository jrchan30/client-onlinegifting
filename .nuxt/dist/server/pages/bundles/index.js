exports.ids = [17];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/bundles/index.vue?vue&type=template&id=062024dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills pt-5\"><li class=\"nav-item\"><a href=\"#\" class=\"nav-link active\">Most Recent</a></li> <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">Most Likes</a></li> <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">Top Rated</a></li></ul> "),(_vm.$fetchState.pending)?_vm._ssrNode("<div class=\"row pt-5\">","</div>",_vm._l((12),function(index){return _vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-3 pb-4\">","</div>",[_c('content-placeholders',{attrs:{"rounded":true}},[_c('content-placeholders-img'),_vm._v(" "),_c('content-placeholders-heading')],1)],1)}),0):_vm._ssrNode("<div class=\"pt-5\">","</div>",[_c('CardMain',{attrs:{"items":_vm.BUNDLES.data,"item-type":'bundles'}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-flex justify-content-center\">","</div>",[_c('Pagination',{attrs:{"action":'products'}})],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/bundles/index.vue?vue&type=template&id=062024dc&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/bundles/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bundlesvue_type_script_lang_js_ = ({
  async fetch() {
    await this.GET_BUNDLES();
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      BUNDLES: 'bundles/BUNDLES'
    }) // bundles() {
    //   if (this.BUNDLES.data) {
    //     return this.BUNDLES.data.filter((bundle) => {
    //       const bundleProducts = bundle.products.filter(
    //         (product) => product.stock > 0
    //       )
    //       return bundleProducts
    //     })
    //   }
    //   return []
    // },

  },
  methods: { ...Object(external_vuex_["mapActions"])({
      GET_BUNDLES: 'bundles/GET_BUNDLES'
    }),

    goTo(id) {
      this.$router.push(`/bundles/${id}`);
    }

  }
});
// CONCATENATED MODULE: ./pages/bundles/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_bundlesvue_type_script_lang_js_ = (bundlesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/bundles/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_bundlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5d0eef30"
  
)

/* harmony default export */ var bundles = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CardMain: __webpack_require__(73).default,Pagination: __webpack_require__(76).default})


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f2b25a38", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMain_vue_vue_type_style_index_0_id_202d093e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMain_vue_vue_type_style_index_0_id_202d093e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMain_vue_vue_type_style_index_0_id_202d093e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMain_vue_vue_type_style_index_0_id_202d093e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMain_vue_vue_type_style_index_0_id_202d093e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".swal2-container[data-v-202d093e]{margin-top:25%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card/CardMain.vue?vue&type=template&id=202d093e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},_vm._l((_vm.items),function(item,index){return _vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-3 pb-4\" data-v-202d093e>","</div>",[_c('vs-card',{scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('h3',{on:{"click":function($event){return _vm.goTo(item.id)}}},[_vm._v(_vm._s(item.name))])]},proxy:true},{key:"img",fn:function(){return [_c('img',{staticClass:"img-ratio",attrs:{"src":item.main_image,"alt":"No image"},on:{"click":function($event){return _vm.goTo(item.id)}}})]},proxy:true},{key:"text",fn:function(){return [_c('p',{staticClass:"text-truncate",on:{"click":function($event){return _vm.goTo(item.id)}}},[_vm._v("\n          "+_vm._s(item.price)+" IDR\n        ")])]},proxy:true},{key:"interactions",fn:function(){return [_c('vs-button',{attrs:{"shadow":!item.isLiked,"danger":item.isLiked,"icon":"","disabled":_vm.$auth.user == null},on:{"click":function($event){return _vm.like(item.id, index)}}},[_c('i',{staticClass:"bx bx-heart"})]),_vm._v(" "),_c('vs-button',{attrs:{"shadow":"","icon":"","disabled":_vm.$auth.user == null}},[_c('i',{staticClass:"fas fa-cart-plus text-primary"})])]},proxy:true}],null,true)})],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card/CardMain.vue?vue&type=template&id=202d093e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card/CardMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CardMainvue_type_script_lang_js_ = ({
  name: 'CardMain',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    },
    itemType: {
      type: String,
      default: 'products'
    },
    storeState: {
      type: String,
      default: ''
    }
  },
  methods: {
    async like(id, idx) {
      let type = '';
      type = this.itemType.includes('product') ? 'product' : 'bundle';
      const likeForm = {
        type,
        id
      };

      try {
        await this.$axios.$post('/likes', likeForm).then(res => {
          if (res.status === 204) {
            this.$swal({
              customClass: {
                container: 'mt-5 pt-3'
              },
              position: 'top',
              icon: 'success',
              toast: true,
              title: 'Unliked',
              showConfirmButton: false,
              timer: 2000
            });
          } else {
            this.$swal({
              customClass: {
                container: 'mt-5 pt-3'
              },
              position: 'top',
              icon: 'success',
              toast: true,
              title: 'Liked',
              showConfirmButton: false,
              timer: 2000
            });
          }

          this.$store.commit(`${type}s/SET_LIKE`, {
            index: idx,
            storeState: this.storeState
          });
        });
      } catch (e) {
        this.$swal({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: e,
          timerProgressBar: true,
          timer: 4000
        });
      }
    },

    goTo(id) {
      this.$router.push(`/${this.itemType}/${id}`);
    }

  }
});
// CONCATENATED MODULE: ./components/Card/CardMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardMainvue_type_script_lang_js_ = (CardMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Card/CardMain.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_CardMainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "202d093e",
  "d805ac44"
  
)

/* harmony default export */ var CardMain = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=6b1ad80d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav aria-label=\"Page navigation\"><ul class=\"pagination\"><li class=\"page-item\"><a href=\"#\" class=\"page-link\"><i class=\"fas fa-arrow-left\"></i></a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\">"+_vm._ssrEscape(_vm._s(_vm.currentPage))+"</a></li> <li class=\"page-item\"><a href=\"#\" class=\"page-link\"><i class=\"fas fa-arrow-right\"></i></a></li></ul></nav>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=6b1ad80d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    }
  },
  methods: {
    changePage(direction) {}

  }
});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Pagination.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3fe56d61"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map