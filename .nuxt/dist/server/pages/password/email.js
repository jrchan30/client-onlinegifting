exports.ids = [24];
exports.modules = {

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/password/email.vue?vue&type=template&id=27031bff&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row justify-content-center\">","</div>",[_vm._ssrNode("<div class=\"col-11 col-md-6 col-lg-3 my-3 p-0\">","</div>",[_c('CardForm',{attrs:{"loading":_vm.loading,"alert-class":_vm.alert.class,"alert-show":_vm.alert.show},on:{"formSubmitted":_vm.formSubmit},scopedSlots:_vm._u([{key:"alert",fn:function(){return [_c('span',{domProps:{"innerHTML":_vm._s(_vm.alert.text)}})]},proxy:true},{key:"title",fn:function(){return [_vm._v(" Reset Password ")]},proxy:true},{key:"fields",fn:function(){return _vm._l((_vm.form),function(value,key,index){return _c('div',{key:index,staticClass:"px-2"},[_c('label',{staticClass:"text-capitalize text-primary float-left mb-0",attrs:{"for":value.id}},[_vm._v(_vm._s(key))]),_vm._v("\n            "+_vm._s(key)+"\n            "),_c('InputField',{staticClass:"pb-3",attrs:{"id":value.id,"errors":_vm.errors,"name":key,"key-value":value.val,"icon":value.icon,"placeholder":value.placeholder,"input-type":value.type},on:{"new-input":function($event){value.val = $event}}})],1)})},proxy:true},{key:"btnSubmit",fn:function(){return [_vm._v(" Send Reset Link ")]},proxy:true},{key:"footer",fn:function(){return [_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Back to login")])]},proxy:true}])})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/password/email.vue?vue&type=template&id=27031bff&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/password/email.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var emailvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      form: {
        email: {
          type: 'text',
          val: '',
          placeholder: 'Email...',
          icon: 'fas fa-envelope',
          id: 'sentResetEmail'
        }
      },
      errors: {},
      status: '',
      alert: {
        class: '',
        show: false,
        text: ''
      }
    };
  },

  methods: {
    async formSubmit() {
      this.errors = {};
      this.alert = {};
      this.loading = true;

      try {
        await this.$axios.$post('/password/email', {
          email: this.form.email.val
        }).then(res => {
          this.status = res.status;
        });
        this.alert.class = 'alert-success';
        this.alert.show = true;
        this.alert.text = this.status;
      } catch (e) {
        var _e$response$data, _e$response$data$erro, _e$response$data$erro2, _e$response$data2;

        if ((_e$response$data = e.response.data) === null || _e$response$data === void 0 ? void 0 : (_e$response$data$erro = _e$response$data.errors) === null || _e$response$data$erro === void 0 ? void 0 : (_e$response$data$erro2 = _e$response$data$erro.message) === null || _e$response$data$erro2 === void 0 ? void 0 : _e$response$data$erro2.includes('already verified')) {
          this.alert.show = true;
          this.alert.class = 'alert-danger';
          this.alert.text = e.response.data.errors.message + ` <strong>(${this.form.email.val})</strong>`;
        } else if ((_e$response$data2 = e.response.data) === null || _e$response$data2 === void 0 ? void 0 : _e$response$data2.email) {
          this.alert.show = true;
          this.alert.class = 'alert-danger';
          this.alert.text = e.response.data.email;
        } else {
          this.errors = e.response.data.errors;
        }
      } finally {
        this.loading = false;
      }
    },

    clear() {
      Object.assign(this.$data, this.$options.data());
    }

  }
});
// CONCATENATED MODULE: ./pages/password/email.vue?vue&type=script&lang=js&
 /* harmony default export */ var password_emailvue_type_script_lang_js_ = (emailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/password/email.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  password_emailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2731b3a2"
  
)

/* harmony default export */ var email = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputField: __webpack_require__(70).default,CardForm: __webpack_require__(71).default})


/***/ }),

/***/ 70:
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

/***/ 71:
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


/***/ })

};;
//# sourceMappingURL=email.js.map