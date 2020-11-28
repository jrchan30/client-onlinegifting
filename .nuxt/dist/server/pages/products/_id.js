exports.ids = [25];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=template&id=235bb17d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ItemPage',{attrs:{"item":_vm.PRODUCT}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=template&id=235bb17d&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async fetch({
    store,
    params
  }) {
    await store.dispatch('products/GET_PRODUCT', params.id);
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      PRODUCT: 'products/PRODUCT'
    })
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      GET_PRODUCT: 'products/GET_PRODUCT'
    }),

    activeImage(index) {
      this.currentImage.index = index;
    },

    expandImage(url) {
      this.$swal({
        showCloseButton: true,
        imageUrl: url,
        width: 1000,
        showConfirmButton: false,
        imageWidth: '100%',
        imageAlt: 'Custom image'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/products/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "235bb17d",
  "3fd9dc09"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ItemPage: __webpack_require__(77).default})


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2ed76c55", content, true, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_style_index_0_id_4d1fdd10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_style_index_0_id_4d1fdd10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_style_index_0_id_4d1fdd10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_style_index_0_id_4d1fdd10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPage_vue_vue_type_style_index_0_id_4d1fdd10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".list-inline-item[data-v-4d1fdd10]{cursor:pointer}#price-value[data-v-4d1fdd10]{font-size:30px}.item-image[data-v-4d1fdd10],.item-image-bottom[data-v-4d1fdd10]{border-radius:10px;cursor:pointer}.item-image-bottom[data-v-4d1fdd10]{transition:transform .4s}.item-image-bottom[data-v-4d1fdd10]:hover{transform:scale(1.1)}.active-image[data-v-4d1fdd10]{box-shadow:0 8px 25px -3px #000}input[type=number][data-v-4d1fdd10]::-webkit-inner-spin-button{-webkit-appearance:none}input[data-v-4d1fdd10]:focus,textarea[data-v-4d1fdd10]:focus{outline:none}input[data-v-4d1fdd10]{text-align:center;border:0;outline:0;background:transparent;border-bottom:1px solid grey;width:50px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ItemPage.vue?vue&type=template&id=4d1fdd10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.item.data)?_vm._ssrNode("<div data-v-4d1fdd10>","</div>",[_vm._ssrNode("<div class=\"container mt-5 pb-4\" data-v-4d1fdd10>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-4d1fdd10>","</div>",[_vm._ssrNode("<div class=\"col-12\" data-v-4d1fdd10>","</div>",[_c('BreadCrumb')],1)]),_vm._ssrNode(" <div class=\"row justify-content-around pb-5\" data-v-4d1fdd10>"+((_vm.item.data.images.length > 0)?("<div class=\"col-12 col-md-6\" data-v-4d1fdd10><div class=\"row\" data-v-4d1fdd10><div class=\"col-12 py-2 border-bottom\" data-v-4d1fdd10><img"+(_vm._ssrAttr("src",_vm.item.data.images[this.currentImage.index].url))+" alt=\"image unavailable\" loading=\"lazy\" class=\"w-100 item-image\" data-v-4d1fdd10></div> "+((_vm.item.data.images.length > 1)?((_vm._ssrList((_vm.item.data.images),function(image,index){return ("<div class=\"col-3 pr-0 mt-2\" data-v-4d1fdd10><img"+(_vm._ssrAttr("src",image.url))+" alt=\"Image unavailable\" loading=\"lazy\""+(_vm._ssrClass("w-100 item-image-bottom",{
                      'active-image': index == _vm.currentImage.index,
                    }))+" data-v-4d1fdd10></div>")}))):"<!---->")+"</div></div>"):("<p class=\"text-danger col-12 col-md-6\" data-v-4d1fdd10>Image cannot be found</p>"))+" <div class=\"col-12 col-md-6\" data-v-4d1fdd10><div class=\"row pt-3\" data-v-4d1fdd10><div class=\"col-12\" data-v-4d1fdd10><div class=\"text-uppercase font-weight-bold\" data-v-4d1fdd10>"+_vm._ssrEscape("\n                "+_vm._s(_vm.item.data.name)+"\n              ")+"</div></div></div> <div class=\"row border-bottom pb-3\" data-v-4d1fdd10><div class=\"col-12\" data-v-4d1fdd10><p class=\"font-weight-bold text-muted mb-0 text-size\" data-v-4d1fdd10>"+_vm._ssrEscape("\n                  "+_vm._s(_vm.item.data.avg_rating)+" ")+"<i class=\"fas fa-star\" data-v-4d1fdd10></i>"+_vm._ssrEscape(" ("+_vm._s(_vm.item.data.reviews.length)+") •\n                ")+" "+_vm._ssrEscape("\n                  Liked by "+_vm._s(_vm.item.data.likes_count)+" people •\n                ")+"  Seen by 100 people </p></div></div> <div class=\"row border-bottom py-3\" data-v-4d1fdd10><div class=\"col-12\" data-v-4d1fdd10><span class=\"text-uppercase text-muted font-weight-bold text-size\" data-v-4d1fdd10>PRICE</span> <span id=\"price-value\" class=\"font-weight-bold text-secondary ml-3\" data-v-4d1fdd10>"+_vm._ssrEscape("Rp."+_vm._s(_vm.item.data.price))+"</span></div></div> <div class=\"row border-bottom py-3\" data-v-4d1fdd10><div class=\"col-12\" data-v-4d1fdd10><span class=\"text-uppercase text-muted font-weight-bold text-size\" data-v-4d1fdd10>Quantity</span> <span class=\"font-weight-bold text-primary ml-3\" data-v-4d1fdd10><button"+(_vm._ssrAttr("disabled",_vm.quantity <= 1))+" class=\"border-0 bg-white\" data-v-4d1fdd10><i class=\"fas fa-minus-circle\" data-v-4d1fdd10></i></button> <input type=\"number\" min=\"1\""+(_vm._ssrAttr("max",_vm.item.data.stock))+" oninput=\"validity.valid||(value='');\""+(_vm._ssrAttr("value",(_vm.quantity)))+" data-v-4d1fdd10> <button"+(_vm._ssrAttr("disabled",_vm.quantity >= _vm.item.data.stock))+" class=\"border-0 bg-white\" data-v-4d1fdd10><i class=\"fas fa-plus-circle\" data-v-4d1fdd10></i></button></span> <span class=\"text-muted text-size\" data-v-4d1fdd10>Min. purchase of 1</span></div></div> <div class=\"row py-2\" data-v-4d1fdd10><div class=\"col-12\" data-v-4d1fdd10><span class=\"text-uppercase text-primary font-weight-bold\" data-v-4d1fdd10>item DESCRIPTION</span> <p data-v-4d1fdd10>"+_vm._ssrEscape(_vm._s(_vm.item.data.description))+"</p></div></div></div></div> <div class=\"row mt-5 sticky-top\" data-v-4d1fdd10><div class=\"col-12 border-top border-bottom align-middle\" data-v-4d1fdd10><ul class=\"list-inline my-auto\" data-v-4d1fdd10><li id=\"discussions\""+(_vm._ssrClass("list-inline-item py-3 mr-2 mr-md-4 border-primary navDiv",{ 'border-bottom': _vm.navigation == 1 }))+" data-v-4d1fdd10>\n              DISCUSSIONS\n            </li> <li id=\"reviews\""+(_vm._ssrClass("list-inline-item py-3 mr-2 mr-md-4 border-primary navDiv",{ 'border-bottom': _vm.navigation == 2 }))+" data-v-4d1fdd10>\n              REVIEWS\n            </li> <li id=\"policy\""+(_vm._ssrClass("list-inline-item py-3 mr-2 mr-md-4 border-primary navDiv",{ 'border-bottom': _vm.navigation == 3 }))+" data-v-4d1fdd10>\n              BUNDLED\n            </li></ul></div></div> <div class=\"row py-3\" data-v-4d1fdd10><span class=\"col-12 font-weight-bold\" data-v-4d1fdd10>"+_vm._ssrEscape("DISCUSSIONS ("+_vm._s(_vm.item.data.discussions.length)+")")+"</span></div> "+((_vm.item.data.discussions.length > 0)?((_vm._ssrList((_vm.item.data.discussions),function(discussion){return ("<div data-v-4d1fdd10><div class=\"row py-2 border-bottom\" data-v-4d1fdd10><div class=\"col-4 col-md-2 text-size text-truncate border-right font-weight-bold\" data-v-4d1fdd10>"+_vm._ssrEscape("\n              "+_vm._s(discussion.user.name)+"\n              ")+"<p class=\"text-muted mb-0\" data-v-4d1fdd10>"+_vm._ssrEscape(_vm._s(discussion.created_at))+"</p></div> <div class=\"col-8 col-md-10\" data-v-4d1fdd10><p class=\"mb-0\" data-v-4d1fdd10>"+_vm._ssrEscape(_vm._s(discussion.body))+"</p> "+((discussion.replies.length > 0)?("<div class=\"row py-1\" data-v-4d1fdd10><span class=\"col-12 font-weight-bold\" data-v-4d1fdd10>"+_vm._ssrEscape("Replies ("+_vm._s(discussion.replies.length)+")")+"</span></div> "+(_vm._ssrList((discussion.replies),function(reply){return ("<div data-v-4d1fdd10><div class=\"row py-2 border-bottom\" data-v-4d1fdd10><div class=\"col-4 col-md-2 text-size text-truncate border-right font-weight-bold\" data-v-4d1fdd10>"+_vm._ssrEscape("\n                      "+_vm._s(reply.user.name)+"\n                      ")+"<p class=\"text-muted mb-0\" data-v-4d1fdd10>"+_vm._ssrEscape(_vm._s(reply.created_at))+"</p></div> <div class=\"col-8 col-md-10\" data-v-4d1fdd10><p class=\"mb-0\" data-v-4d1fdd10>"+_vm._ssrEscape(_vm._s(reply.body))+"</p></div></div></div>")}))):"<!---->")+"</div></div></div>")}))):("<div data-v-4d1fdd10><p class=\"text-muted\" data-v-4d1fdd10>There is no discussions</p></div>"))+" <div class=\"row py-3 mt-5\" data-v-4d1fdd10><span class=\"col-12 font-weight-bold\" data-v-4d1fdd10>"+_vm._ssrEscape("REVIEWS ("+_vm._s(_vm.item.data.reviews.length)+")")+"</span></div> "+((_vm.item.data.reviews.length > 0)?((_vm._ssrList((_vm.item.data.reviews),function(review){return ("<div data-v-4d1fdd10><div class=\"row py-2\" data-v-4d1fdd10><div class=\"col text-size text-truncate border-right font-weight-bold\" data-v-4d1fdd10>"+_vm._ssrEscape("\n              "+_vm._s(review.user.name)+"\n              ")+"<p class=\"text-muted mb-0\" data-v-4d1fdd10>"+_vm._ssrEscape(_vm._s(review.created_at))+"</p></div> <div class=\"col-10\" data-v-4d1fdd10><p class=\"mb-0\" data-v-4d1fdd10>"+_vm._ssrEscape(_vm._s(review.body))+"</p></div></div></div>")}))):("<div data-v-4d1fdd10><p class=\"text-muted\" data-v-4d1fdd10>There is no reviews</p></div>")))],2),_vm._ssrNode(" <div class=\"w-100 container-fluid bg-white shadow-lg fixed-bottom\" data-v-4d1fdd10><div class=\"row w-100 py-2 align-items-center justify-content-center\" data-v-4d1fdd10><div class=\"col-5 col-md-2 text-center\" data-v-4d1fdd10><span class=\"font-weight-bold text-primary\" data-v-4d1fdd10><i class=\"fas fa-minus-circle\" data-v-4d1fdd10></i> <input type=\"number\" min=\"1\""+(_vm._ssrAttr("max",_vm.item.data.stock))+" oninput=\"validity.valid||(value='');\""+(_vm._ssrAttr("value",(_vm.quantity)))+" data-v-4d1fdd10> <i class=\"fas fa-plus-circle\" data-v-4d1fdd10></i></span></div> <div class=\"col-5 col-md-2\" data-v-4d1fdd10><span class=\"text-dark\" data-v-4d1fdd10>Total</span> <p class=\"font-weight-bold text-secondary mb-0\" data-v-4d1fdd10>"+_vm._ssrEscape("\n            Rp."+_vm._s(_vm.item.data.price)+"\n          ")+"</p></div></div></div>")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ItemPage.vue?vue&type=template&id=4d1fdd10&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ItemPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ItemPagevue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentImage: {
        index: 0
      },
      quantity: 1,
      isDecreaseable: false,
      totalPrice: 0,
      navigation: undefined
    };
  },

  methods: {
    activeImage(index) {
      this.currentImage.index = index;
    },

    expandImage(url) {
      this.$swal({
        showCloseButton: true,
        imageUrl: url,
        width: 1000,
        showConfirmButton: false,
        imageWidth: '100%',
        imageAlt: 'Custom image'
      });
    }

  }
});
// CONCATENATED MODULE: ./components/ItemPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ItemPagevue_type_script_lang_js_ = (ItemPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ItemPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ItemPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4d1fdd10",
  "3d551c6e"
  
)

/* harmony default export */ var ItemPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BreadCrumb: __webpack_require__(78).default})


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BreadCrumb.vue?vue&type=template&id=19dd7256&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"aria-label":"breadcrumb"}},[_vm._ssrNode("<ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li> <li aria-current=\"page\" class=\"breadcrumb-item active\">Library</li></ol>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BreadCrumb.vue?vue&type=template&id=19dd7256&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BreadCrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BreadCrumbvue_type_script_lang_js_ = ({
  methods: {// goBack() {
    //   console.log(this.$router)
    //   this.$router.go(-1)
    // },
  }
});
// CONCATENATED MODULE: ./components/BreadCrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BreadCrumbvue_type_script_lang_js_ = (BreadCrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BreadCrumb.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BreadCrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7bfdadac"
  
)

/* harmony default export */ var BreadCrumb = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map