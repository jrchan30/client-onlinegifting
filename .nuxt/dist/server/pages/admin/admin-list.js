exports.ids = [4];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/admin-list.vue?vue&type=template&id=4279c596&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header border-0\"><h3 class=\"mb-0\">Admins table</h3></div> <div data-toggle=\"list\" data-list-values=\"[\"id\", \"name\", \"user name\", \"email\", \"created_at\"]\" class=\"table-responsive\"><table class=\"table align-items-center table-flush\"><thead class=\"thead-light\"><tr><th scope=\"col\" data-sort=\"id\" class=\"sort\">\n                ID\n              </th> <th scope=\"col\" data-sort=\"id\" class=\"sort\">\n                Name\n              </th> <th scope=\"col\" data-sort=\"id\" class=\"sort\">\n                User Name\n              </th> <th scope=\"col\" data-sort=\"id\" class=\"sort\">\n                Email\n              </th> <th scope=\"col\" data-sort=\"id\" class=\"sort\">\n                Created At\n              </th></tr></thead> "+((!_vm.$fetchState.pending)?("<tbody class=\"list\">"+(_vm._ssrList((_vm.ADMINS.data),function(admin){return ("<tr><td>"+_vm._ssrEscape(_vm._s(admin.id))+"</td> <th><span class=\"text-capitalize\">"+_vm._ssrEscape(_vm._s(admin.name))+"</span></th> <td class=\"price\">"+_vm._ssrEscape(_vm._s(admin.username))+"</td> <td><span>"+_vm._ssrEscape(_vm._s(admin.email))+"</span></td> <td><span>"+_vm._ssrEscape(_vm._s(admin.created_at))+"</span></td></tr>")}))+"</tbody>"):"<!---->")+"</table></div> "),_vm._ssrNode("<div class=\"card-footer py-4\">","</div>",[_c('AdminPagination',{attrs:{"store-action":'users/GET_ADMINS',"store-getter":'users/ADMINS'}})],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/admin-list.vue?vue&type=template&id=4279c596&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/admin-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var admin_listvue_type_script_lang_js_ = ({
  layout: 'admin',
  middleware: ['auth', 'admin-only'],

  async fetch() {
    await this.GET_ADMINS();
  },

  data() {
    return {
      filter: {
        search: '',
        orderBy: 'created_at',
        orderDir: 'desc'
      }
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      ADMINS: 'users/ADMINS'
    })
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      GET_ADMINS: 'users/GET_ADMINS'
    }),
    ...Object(external_vuex_["mapMutations"])({
      SET_FILTER: 'users/SET_FILTER'
    }),

    settingFilter(value) {
      switch (value) {
        case 'id':
          if (this.filter.orderBy !== 'id') {
            this.filter.orderDir = 'desc';
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc';
            this.filter.orderDir = dir;
          }

          this.filter.orderBy = 'id';
          break;

        case 'name':
          if (this.filter.orderBy !== 'name') {
            this.filter.orderDir = 'desc';
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc';
            this.filter.orderDir = dir;
          }

          this.filter.orderBy = 'name';
          break;

        case 'username':
          if (this.filter.orderBy !== 'username') {
            this.filter.orderDir = 'desc';
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc';
            this.filter.orderDir = dir;
          }

          this.filter.orderBy = 'username';
          break;

        case 'email':
          if (this.filter.orderBy !== 'email') {
            this.filter.orderDir = 'desc';
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc';
            this.filter.orderDir = dir;
          }

          this.filter.orderBy = 'email';
          break;

        case 'created_at':
          if (this.filter.orderBy !== 'created_at') {
            this.filter.orderDir = 'desc';
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc';
            this.filter.orderDir = dir;
          }

          this.filter.orderBy = 'created_at';
          break;

        default:
          break;
      }

      this.SET_FILTER(this.filter);
      this.GET_ADMINS();
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/admin-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_admin_listvue_type_script_lang_js_ = (admin_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/admin-list.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_admin_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "581998d0"
  
)

/* harmony default export */ var admin_list = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AdminPagination: __webpack_require__(68).default})


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminPagination.vue?vue&type=template&id=0579bea5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.currentObject.meta)?_c('nav',{attrs:{"aria-label":"..."}},[_vm._ssrNode("<ul class=\"pagination justify-content-end mb-0\"><li"+(_vm._ssrClass("page-item",{ disabled: !_vm.currentObject.links.prev }))+"><a href=\"javascript:void(0)\" tabindex=\"-1\" class=\"page-link\"><i class=\"fas fa-angle-left\"></i> <span class=\"sr-only\">Previous</span></a></li> "+((_vm.currentObject.meta.current_page !== 1)?("<li class=\"page-item\"><a href=\"javascript:void(0)\" class=\"page-link\">1</a></li>"):"<!---->")+" <li class=\"page-item active\" style=\"pointer-events: none\"><a href=\"javascript:void(0)\" disabled=\"disabled\" class=\"page-link\">"+_vm._ssrEscape(_vm._s(_vm.current_page)+" ")+"<span class=\"sr-only\">(current)</span></a></li> "+((_vm.currentObject.meta.last_page !== _vm.current_page)?("<li class=\"page-item\"><a href=\"javascript:void(0)\" class=\"page-link\">"+_vm._ssrEscape(_vm._s(_vm.currentObject.meta.last_page))+"</a></li>"):"<!---->")+" <li"+(_vm._ssrClass("page-item",{ disabled: !_vm.currentObject.links.next }))+"><a href=\"javascript:void(0)\" class=\"page-link\"><i class=\"fas fa-angle-right\"></i> <span class=\"sr-only\">Next</span></a></li></ul>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Admin/AdminPagination.vue?vue&type=template&id=0579bea5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminPagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AdminPaginationvue_type_script_lang_js_ = ({
  name: 'AdminPagination',
  props: {
    storeAction: {
      type: String,
      default: ''
    },
    storeGetter: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      current_page: 1,
      last_page: '',
      loading: false
    };
  },

  computed: {
    currentObject() {
      return this.$store.getters[`${this.storeGetter}`];
    }

  },
  methods: {
    async changePage(direction) {
      if (this.loading === true) return false;
      this.loading = true;

      switch (direction) {
        case 'next':
          this.current_page++;
          break;

        case 'prev':
          this.current_page--;
          break;

        case 'first':
          this.current_page = 1;
          break;

        case 'last':
          this.current_page = this.currentObject.meta.last_page;
          break;

        default:
          break;
      }

      await this.$store.dispatch(this.storeAction, this.current_page);
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }

  }
});
// CONCATENATED MODULE: ./components/Admin/AdminPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_AdminPaginationvue_type_script_lang_js_ = (AdminPaginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Admin/AdminPagination.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Admin_AdminPaginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e75d0ab6"
  
)

/* harmony default export */ var AdminPagination = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=admin-list.js.map