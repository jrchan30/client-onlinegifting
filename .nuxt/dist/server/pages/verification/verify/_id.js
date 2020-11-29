exports.ids = [31];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/verification/verify/_id.vue?vue&type=template&id=8384624c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row justify-content-center\">","</div>",[_vm._ssrNode("<div class=\"col-11 col-md-6 col-lg-3 my-3 p-0\">","</div>",[_vm._ssrNode("<div class=\"card border text-center shadow border-0\">","</div>",[_vm._ssrNode("<img src=\"/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg\" alt class=\"card-image-top w-25 m-auto pt-3\"> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<h2 class=\"card-title text-uppercase\">Email verification</h2> <div role=\"alert\""+(_vm._ssrClass("alert mt-4 mb-0",_vm.alertClass))+" style=\"border-radius: 0\"><h4>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h4> <span>"+_vm._ssrEscape(_vm._s(_vm.status))+"</span></div> "),_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{attrs:{"to":"/login"}},[(_vm.success)?_c('p',[_vm._v("Proceed to login page")]):_c('p',[_vm._v("Back to login page")])])],1)],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/verification/verify/_id.vue?vue&type=template&id=8384624c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/verification/verify/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: 'LoginRegister',
  middleware: ['guest'],

  data() {
    return {
      alertClass: '',
      status: '',
      success: Boolean,
      title: ''
    };
  },

  async mounted() {
    try {
      await this.$axios.$post(`${this.$route.fullPath}`).then(res => {
        this.$swal({
          position: 'top-end',
          toast: true,
          icon: 'success',
          title: 'Nice...',
          text: 'Happy gifting',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000
        });
        this.alertClass = 'alert-success';
        this.status = res.message;
        this.success = true;
        this.title = 'Success';
      }); // setTimeout(() => {
      //   this.$router.push('/login')
      // }, 3000)
    } catch (e) {
      var _e$response, _e$response$data, _e$response2, _e$response2$data, _e$response2$data$err;

      this.alertClass = 'alert-danger';

      if ((_e$response = e.response) === null || _e$response === void 0 ? void 0 : (_e$response$data = _e$response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) {
        this.status = e.response.data.message;
      } else if ((_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : (_e$response2$data = _e$response2.data) === null || _e$response2$data === void 0 ? void 0 : (_e$response2$data$err = _e$response2$data.errors) === null || _e$response2$data$err === void 0 ? void 0 : _e$response2$data$err.message) {
        this.status = e.response.data.errors.message;
      } else {
        this.status = e.response.message;
      }

      this.success = false;
      this.title = 'Error';
      this.$swal({
        position: 'top-end',
        toast: true,
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timerProgressBar: true,
        timer: 4000
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/verification/verify/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var verify_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/verification/verify/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  verify_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5a2ffc41"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map