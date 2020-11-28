exports.ids = [10];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/search/index.vue?vue&type=template&id=3cf2746e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.SEARCH_RESULTS)?("<div class=\"card\"><div class=\"card-body\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.SEARCH_RESULTS)+"\n    ")+"</div></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/search/index.vue?vue&type=template&id=3cf2746e&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/search/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  name: 'SearchIndex',
  layout: 'admin',
  computed: { ...Object(external_vuex_["mapGetters"])({
      SEARCH_RESULTS: 'search/SEARCH_RESULTS'
    })
  },

  async mounted() {
    await this.SET_SEARCH_QUERY(this.$route.query.q);
    await this.GET_SEARCH_RESULTS();
  },

  methods: { ...Object(external_vuex_["mapMutations"])({
      SET_SEARCH_QUERY: 'search/SET_SEARCH_QUERY'
    }),
    ...Object(external_vuex_["mapActions"])({
      GET_SEARCH_RESULTS: 'search/GET_SEARCH_RESULTS'
    })
  }
});
// CONCATENATED MODULE: ./pages/admin/search/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/search/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "79f2a212"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map