exports.ids = [15];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/transactions/index.vue?vue&type=template&id=fad6eb10&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header border-0\"><h3 class=\"mb-0\">Products table</h3></div> "),_vm._ssrNode("<div data-toggle=\"list\" data-list-values=\"[\"id\", \"name\", \"price\", \"stock\", \"weight\"]\" class=\"table-responsive\">","</div>",[_vm._ssrNode("<table class=\"table align-items-center table-flush\">","</table>",[_vm._ssrNode("<thead class=\"thead-light\"><tr><th scope=\"col\" data-sort=\"transaction_number\" class=\"sort\">\n                Transaction Number\n              </th> <th scope=\"col\" class=\"sort\">User Name</th> <th scope=\"col\" data-sort=\"total_price\" class=\"sort\">\n                Total Price (IDR)\n              </th> <th scope=\"col\" data-sort=\"created_at\" class=\"sort\">\n                Datetime\n              </th> <th scope=\"col\">Navigate</th></tr></thead> "),_vm._ssrNode("<tbody class=\"list\">","</tbody>",_vm._l((_vm.TRANSACTIONS.data),function(transaction){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td>"+_vm._ssrEscape(_vm._s(transaction.transaction_number))+"</td> <th class=\"name\"><span class=\"text-capitalize\">"+_vm._ssrEscape(_vm._s(transaction.user.name))+"</span></th> <td class=\"price\">"+_vm._ssrEscape(_vm._s(transaction.total_price))+"</td> <td><span>"+_vm._ssrEscape(_vm._s(transaction.created_at))+"</span></td> "),_vm._ssrNode("<td>","</td>",[_c('nuxt-link',{attrs:{"to":("/admin/transactions/" + (transaction.id))}},[_c('button',{staticClass:"btn btn-primary"},[_vm._v("\n                    See Details\n                  ")])])],1)],2)}),0)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-footer py-4\">","</div>",[_c('AdminPagination',{attrs:{"store-action":'transactions/GET_TRANSACTIONS',"store-getter":'transactions/TRANSACTIONS'}})],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/transactions/index.vue?vue&type=template&id=fad6eb10&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/transactions/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var transactionsvue_type_script_lang_js_ = ({
  layout: 'admin',
  middleware: ['auth', 'admin-only'],

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
      TRANSACTIONS: 'transactions/TRANSACTIONS'
    })
  },

  async mounted() {
    await this.GET_TRANSACTIONS();
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      GET_TRANSACTIONS: 'transactions/GET_TRANSACTIONS'
    }),
    ...Object(external_vuex_["mapMutations"])({
      SET_FILTER: 'transactions/SET_FILTER'
    }),

    settingFilter(value) {
      switch (value) {
        case 'transaction_number':
          if (this.filter.orderBy !== 'transaction_number') {
            this.filter.orderDir = 'desc';
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc';
            this.filter.orderDir = dir;
          }

          this.filter.orderBy = 'transaction_number';
          break;

        case 'total_price':
          if (this.filter.orderBy !== 'total_price') {
            this.filter.orderDir = 'desc';
          } else {
            const dir = this.filter.orderDir === 'desc' ? 'asc' : 'desc';
            this.filter.orderDir = dir;
          }

          this.filter.orderBy = 'total_price';
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
      this.GET_TRANSACTIONS();
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/transactions/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_transactionsvue_type_script_lang_js_ = (transactionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/transactions/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_transactionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6d6ebc7f"
  
)

/* harmony default export */ var transactions = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AdminPagination: __webpack_require__(72).default})


/***/ }),

/***/ 72:
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
//# sourceMappingURL=index.js.map