exports.ids = [22];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=5ada5484&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-bg"},[_vm._ssrNode("<div class=\"container fill\" data-v-5ada5484>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center fill\" data-v-5ada5484>","</div>",[_vm._ssrNode("<div class=\"col-10 col-md-6 col-lg-4 my-3 p-0 my-auto\" data-v-5ada5484>","</div>",[_c('CardForm',{attrs:{"loading":_vm.loading,"alert-class":_vm.alert.class,"alert-show":_vm.alert.show},on:{"formSubmitted":_vm.formSubmit},scopedSlots:_vm._u([{key:"alert",fn:function(){return [_c('p',{domProps:{"innerHTML":_vm._s(_vm.alert.text)}}),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"verification/resend"}},[_vm._v("Resend verification email")])]},proxy:true},{key:"title",fn:function(){return [_vm._v("Login")]},proxy:true},{key:"fields",fn:function(){return _vm._l((_vm.form),function(value,key,index){return _c('div',{key:index,staticClass:"px-2"},[_c('label',{staticClass:"text-capitalize text-primary float-left mb-0",attrs:{"for":value.id}},[_vm._v(_vm._s(key))]),_vm._v(" "),_c('InputField',{staticClass:"pb-3",attrs:{"id":value.id,"errors":_vm.errors,"name":key,"key-value":value.val,"icon":value.icon,"placeholder":value.placeholder,"input-type":value.type},on:{"new-input":function($event){value.val = $event}}})],1)})},proxy:true},{key:"btnSubmit",fn:function(){return [_vm._v("Login")]},proxy:true},{key:"reset-password",fn:function(){return [_c('nuxt-link',{staticClass:"text-left my-0 px-2 text-secondary",attrs:{"id":"forgot-pass","tag":"p","to":"/password/email"}},[_vm._v("Forgot password?")])]},proxy:true},{key:"footer",fn:function(){return [_c('span',[_vm._v("Dont have an account yet?")]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"register"}},[_vm._v("Create Account")])]},proxy:true}])})],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=5ada5484&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: ['guest'],
  layout: 'login-register',

  data() {
    return {
      loading: false,
      form: {
        email: {
          type: 'text',
          val: '',
          placeholder: 'Email Address...',
          icon: 'fas fa-envelope',
          id: 'loginEmail'
        },
        password: {
          type: 'password',
          val: '',
          placeholder: 'Password...',
          icon: 'fas fa-user-lock',
          id: 'loginPassword'
        }
      },
      errors: {},
      alert: {
        class: '',
        show: false,
        text: ''
      }
    };
  },

  // beforeCreate() {
  //   if (this.$auth.user) {
  //     this.$router.push({ name: 'index' })
  //   }
  // },
  methods: {
    async formSubmit() {
      this.errors = {};
      this.loading = true;

      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.form.email.val,
            password: this.form.password.val
          }
        });
      } catch (e) {
        if (e.response.status === 403 && e.response.data.errors.includes('need to verify')) {
          this.alert.class = 'alert-danger';
          this.alert.show = true;
          this.alert.text = e.response.data.errors;
        } else {
          this.errors = e.response.data.errors;
        }
      } finally {
        this.loading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ada5484",
  "560b1532"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputField: __webpack_require__(66).default,CardForm: __webpack_require__(67).default})


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputField.vue?vue&type=template&id=02c69cb2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"input-group\"><div class=\"input-group-prepend\"><div class=\"input-group-text text-primary bg-transparent border-right-0\"><i"+(_vm._ssrClass(null,_vm.icon))+"></i></div></div> <input"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("type",_vm.inputType))+(_vm._ssrAttr("placeholder",_vm.placeholder))+" required=\"required\""+(_vm._ssrAttr("value",_vm.keyValue))+(_vm._ssrClass("form-control border-left-0",{ 'is-invalid': _vm.errors.hasOwnProperty(("" + _vm.name)) }))+"></div> "+((_vm.errors.hasOwnProperty(_vm.name))?("<span class=\"m-0 text-danger\">"+_vm._ssrEscape(_vm._s(_vm.errors[_vm.name][0]))+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InputField.vue?vue&type=template&id=02c69cb2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputFieldvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'fas fa-question'
    },
    placeholder: {
      type: String,
      default: '...'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    keyValue: {
      type: String,
      default: ''
    },
    errors: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./components/InputField.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InputFieldvue_type_script_lang_js_ = (InputFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/InputField.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InputFieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "36031217"
  
)

/* harmony default export */ var InputField = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card/CardForm.vue?vue&type=template&id=58f7ce7d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card border text-center shadow border-0"},[_vm._ssrNode("<img src=\"/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg\" alt class=\"card-image-top w-25 m-auto pt-3\"> "),(_vm.alertShow)?_vm._ssrNode("<div role=\"alert\""+(_vm._ssrClass("alert mt-4 mb-0",_vm.alertClass))+" style=\"border-radius: 0\">","</div>",[_vm._t("alert")],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<h2 class=\"card-title text-uppercase\">","</h2>",[_vm._t("title")],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<form>","</form>",[_vm._t("fields"),_vm._ssrNode(" "),_vm._t("reset-password"),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid\">","</div>",[_c('vs-row',{attrs:{"align":"center","justify":"space-around"}},[_c('vs-col',{attrs:{"w":"3","justify":"center"}},[_c('vs-button',{attrs:{"loading":_vm.loading,"color":"rgb(51, 102, 153)","relief":""},scopedSlots:_vm._u([{key:"animate",fn:function(){return [_c('i',{staticClass:"bx bx-send"})]},proxy:true}])},[_vm._t("btnSubmit")],2)],1)],1)],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-footer border-0 shadow\">","</div>",[_vm._t("footer")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card/CardForm.vue?vue&type=template&id=58f7ce7d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card/CardForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CardFormvue_type_script_lang_js_ = ({
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    alertClass: {
      type: String,
      default: 'alert-danger'
    },
    alertShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formSubmit() {
      this.$emit('formSubmitted');
    }

  }
});
// CONCATENATED MODULE: ./components/Card/CardForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardFormvue_type_script_lang_js_ = (CardFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Card/CardForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_CardFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9e8c992e"
  
)

/* harmony default export */ var CardForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Form: __webpack_require__(15).default})


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c34c19e2", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_5ada5484_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_5ada5484_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_5ada5484_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_5ada5484_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_5ada5484_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#forgot-pass[data-v-5ada5484]{cursor:pointer}.login-bg[data-v-5ada5484]{background-image:url(/image/Login-Background.svg);background-size:100vh;background-position:50%;background-repeat:no-repeat}.fill[data-v-5ada5484]{min-height:70vh;height:100%}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=login.js.map