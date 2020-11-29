exports.ids = [2];
exports.modules = {

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Profile.vue?vue&type=template&id=527e0ee0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container justify-content-center p-5"},[_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"card bg-white\"><div class=\"card-body\"><img"+(_vm._ssrAttr("src",_vm.$auth.user.detail.image))+" alt=\"No Image\"></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Profile.vue?vue&type=template&id=527e0ee0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Profile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Profilevue_type_script_lang_js_ = ({
  layout: 'default',
  middleware: ['auth'],

  data() {
    return {
      form: {
        image: null
      }
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      isAuthenticated: 'isAuthenticated',
      loggedInUser: 'loggedInUser'
    })
  },
  methods: {
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
    }

  }
});
// CONCATENATED MODULE: ./pages/Profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Profilevue_type_script_lang_js_ = (Profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Profile.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5e310f12"
  
)

/* harmony default export */ var Profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Profile.js.map