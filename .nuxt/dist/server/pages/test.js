exports.ids = [28];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=2e6f5eec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row mt-3"},_vm._l((_vm.LOWPRICE),function(product){return _vm._ssrNode("<div class=\"col-sm-3 col-md-4 col-lg-3 pb-4\">","</div>",[_c('vs-card',{scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('h3',[_vm._v(_vm._s(product.name))])]},proxy:true},{key:"img",fn:function(){return [_c('img',{attrs:{"src":product.images[0].url,"alt":""}})]},proxy:true},{key:"text",fn:function(){return [_c('p',[_vm._v("blablabla")])]},proxy:true},{key:"interactions",fn:function(){return [_c('vs-button',{attrs:{"danger":"","icon":""}},[_c('i',{staticClass:"bx bx-heart"})]),_vm._v(" "),_c('vs-button',{staticClass:"btn-chat",attrs:{"shadow":"","primary":""}},[_c('i',{staticClass:"bx bx-chat"}),_vm._v(" "),_c('span',{staticClass:"span"},[_vm._v(" 54 ")])])]},proxy:true}],null,true)})],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=2e6f5eec&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var testvue_type_script_lang_js_ = ({
  async fetch() {
    await this.GET_LOWPRICE();
  },

  data() {
    return {
      activeItem: null,
      active: 'guide',
      activeSidebar: false
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      LOWPRICE: 'products/LOWPRICE'
    }),

    products() {
      return this.LOWPRICE.filter(i => i.stock > 0);
    }

  },
  methods: { ...Object(external_vuex_["mapActions"])({
      GET_LOWPRICE: 'products/GET_LOWPRICE'
    })
  }
});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/test.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e0cd459"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test.js.map