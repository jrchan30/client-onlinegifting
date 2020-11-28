exports.ids = [14];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/transactions/_id.vue?vue&type=template&id=1ab6f134&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-xl-4 order-xl-2\"><div class=\"card card-profile\"><img src=\"/assets/img/theme/img-1-1000x600.jpg\" alt=\"Image placeholder\" class=\"card-img-top\"> <div class=\"row justify-content-center\"><div class=\"col-lg-3 order-lg-2\"><div class=\"card-profile-image\"><img src=\"/assets/img/theme/team-4.jpg\" class=\"rounded-circle\"></div></div></div> <div class=\"card-header text-center border-0 pt-8 pt-md-5 pb-0 pb-md-5\"></div> <div class=\"card-body pt-0\"><div class=\"row text-center\"><div class=\"col\"><h5 class=\"h3\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.TRANSACTION.user.name)+"\n            ")+"</h5> <div class=\"h5 font-weight-300\"><i class=\"fas fa-envelope mr-2\"></i>"+_vm._ssrEscape(_vm._s(_vm.TRANSACTION.user.email)+"\n            ")+"</div> <div class=\"h5 mt-4\"><i class=\"fas fa-user mr-2\"></i><span class=\"text-capitalize\">"+_vm._ssrEscape(_vm._s(_vm.TRANSACTION.user.type))+"</span></div> <div><i class=\"far fa-clock mr-2\"></i>"+_vm._ssrEscape("Member since\n              "+_vm._s(_vm.TRANSACTION.user.created_at)+"\n            ")+"</div></div></div></div></div> <div class=\"card\"><div class=\"card-header\"><h3>Items</h3></div> <div class=\"card-body\"><div class=\"row\">"+((_vm.TRANSACTION.paid_boxes)?("<div class=\"col-12\">"+_vm._ssrEscape("\n            Box Quantity: "+_vm._s(_vm.TRANSACTION.paid_boxes.length)+"\n          ")+"</div>"):"<!---->")+" "+((_vm.TRANSACTION.paid_bundles)?("<div class=\"col-12\">"+_vm._ssrEscape("\n            Bundle Quantity: "+_vm._s(_vm.TRANSACTION.paid_bundles.length)+"\n          ")+"</div>"):"<!---->")+"</div></div></div></div> <div class=\"col-xl-8 order-xl-1\"><div class=\"card\"><div class=\"card-header\"><h3>Transaction Info</h3></div> <div class=\"card-body\"><div class=\"pl-lg-4\"><div class=\"row\">"+(_vm._ssrList((_vm.transaction_info),function(field,index){return ("<div"+(_vm._ssrClass(null,field.class))+"><div class=\"form-group\"><label class=\"form-control-label\">"+_vm._ssrEscape(_vm._s(field.label))+"</label> <span class=\"form-control text-capitalize\">"+_vm._ssrEscape("\n                  "+_vm._s(field.value)+"\n                ")+"</span></div></div>")}))+"</div></div> <hr class=\"my-4\"> <h6 class=\"heading-small text-muted mb-4\">\n          Delivery Information (Receiver)\n        </h6> <div class=\"pl-lg-4\"><div class=\"row\">"+(_vm._ssrList((_vm.delivery_info),function(field,index){return ("<div"+(_vm._ssrClass(null,field.class))+"><div class=\"form-group\"><label class=\"form-control-label\">"+_vm._ssrEscape(_vm._s(field.label))+"</label> <span class=\"form-control\">"+_vm._ssrEscape("\n                  "+_vm._s(field.value)+"\n                ")+"</span></div></div>")}))+"</div></div></div></div></div> <div class=\"col-xl-12 order-xl-3\">"+((_vm.TRANSACTION.paid_boxes.length > 0)?("<div class=\"card\"><div class=\"card-header\"><h3>Box Details</h3></div> "+(_vm._ssrList((_vm.TRANSACTION.paid_boxes),function(box){return ("<div class=\"card-body\"><h6 class=\"heading-small text-muted mb-4\">"+_vm._ssrEscape(_vm._s(box.name))+"</h6> <div data-toggle=\"list\" data-list-values=\"[\"id\", \"name\", \"price\", \"stock\", \"weight\"]\" class=\"table-responsive\"><table class=\"table align-items-center table-flush\"><thead class=\"thead-light\"><tr><th scope=\"col\" class=\"sort\">Product Name</th> <th scope=\"col\" class=\"sort\">Product Price</th> <th scope=\"col\" class=\"sort\">Product Quantity</th></tr></thead> <tbody class=\"list\">"+(_vm._ssrList((box.paid_products),function(product){return ("<tr><th class=\"name\"><span class=\"text-capitalize\">"+_vm._ssrEscape(_vm._s(product.name))+"</span></th> <td><span>"+_vm._ssrEscape(_vm._s(product.price))+"</span></td> <td><span>"+_vm._ssrEscape(_vm._s(product.quantity))+"</span></td></tr>")}))+"</tbody></table></div></div>")}))+"</div>"):"<!---->")+"</div> <div class=\"col-xl-12 order-xl-3\">"+((_vm.TRANSACTION.paid_bundles.length > 0)?("<div class=\"card\"><div class=\"card-header\"><h3>Bundle Details</h3></div> "+(_vm._ssrList((_vm.TRANSACTION.paid_bundles),function(bundle){return ("<div class=\"card-body\"><h6 class=\"heading-small text-muted mb-4\">"+_vm._ssrEscape(_vm._s(bundle.name))+"</h6> <div data-toggle=\"list\" data-list-values=\"[\"id\", \"name\", \"price\", \"stock\", \"weight\"]\" class=\"table-responsive\"><table class=\"table align-items-center table-flush\"><thead class=\"thead-light\"><tr><th scope=\"col\" class=\"sort\">Product Name</th> <th scope=\"col\" class=\"sort\">Product Price</th> <th scope=\"col\" class=\"sort\">Product Quantity</th></tr></thead> <tbody class=\"list\">"+(_vm._ssrList((bundle.paid_products),function(product){return ("<tr><th class=\"name\"><span class=\"text-capitalize\">"+_vm._ssrEscape(_vm._s(product.name))+"</span></th> <td><span>"+_vm._ssrEscape(_vm._s(product.price))+"</span></td> <td><span>"+_vm._ssrEscape(_vm._s(product.quantity))+"</span></td></tr>")}))+"</tbody></table></div></div>")}))+"</div>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/transactions/_id.vue?vue&type=template&id=1ab6f134&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/transactions/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: 'admin',
  middleware: ['auth', 'admin-only'],

  async fetch({
    store,
    params
  }) {
    await store.dispatch('transactions/GET_TRANSACTION', params.id);
  },

  fetchOnServer: false,

  data() {
    return {
      transaction_info: {
        invoice: {
          class: 'col-lg-6',
          label: 'INVOICE',
          value: '-'
        },
        payment_type: {
          class: 'col-lg-6',
          label: 'Payment Type',
          value: '-'
        },
        total_price: {
          class: 'col-lg-6',
          label: 'Total Price',
          value: '-'
        },
        time_created: {
          class: 'col-lg-6',
          label: 'Time Created',
          value: '-'
        }
      },
      delivery_info: {
        full_address: {
          class: 'col-md-12',
          label: 'Full Address',
          value: '-'
        },
        destination_code: {
          class: 'col-lg-4',
          label: 'Destination Code',
          value: '-'
        },
        phone_number: {
          class: 'col-lg-4',
          label: 'Phone Number',
          value: '-'
        },
        delivery_fee: {
          class: 'col-lg-4',
          label: 'Delivery Fee',
          value: '-'
        },
        courier_code: {
          class: 'col-lg-4',
          label: 'Courier Code',
          value: '-'
        },
        service_type: {
          class: 'col-lg-4',
          label: 'Service Type',
          value: '-'
        },
        total_weight: {
          class: 'col-lg-4',
          label: 'Total Weight',
          value: '-'
        },
        arrival_date: {
          class: 'col-md-12',
          label: 'Arrival Date',
          value: null
        }
      }
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      TRANSACTION: 'transactions/TRANSACTION'
    })
  },

  created() {
    this.fillData();
  },

  methods: {
    fillData() {
      // Transaction Info
      this.transaction_info.invoice.value = this.TRANSACTION.transaction_number;
      this.transaction_info.payment_type.value = this.TRANSACTION.payment_type;
      this.transaction_info.total_price.value = this.TRANSACTION.total_price;
      this.transaction_info.time_created.value = this.TRANSACTION.created_at; // Delivery Info

      this.delivery_info.full_address.value = this.TRANSACTION.receiver_full_address;
      this.delivery_info.destination_code.value = this.TRANSACTION.receiver_destination_code;
      this.delivery_info.phone_number.value = this.TRANSACTION.receiver_phone_number;
      this.delivery_info.delivery_fee.value = this.TRANSACTION.delivery_fee;
      this.delivery_info.courier_code.value = this.TRANSACTION.delivery_courier_code;
      this.delivery_info.service_type.value = this.TRANSACTION.delivery_courier_service;
      this.delivery_info.total_weight.value = this.TRANSACTION.total_weight;
      this.delivery_info.arrival_date.value = this.TRANSACTION.arrival_date;
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/transactions/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var transactions_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/transactions/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  transactions_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0a2fd2a7"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map