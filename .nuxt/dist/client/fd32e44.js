(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{481:function(t,e,l){"use strict";l.r(e);l(62),l(25),l(26),l(14),l(53);var r=l(27),c=(l(12),l(4)),n=l(38);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var d={layout:"admin",middleware:["auth","admin-only"],fetch:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.store,r=t.params,e.next=3,l.dispatch("transactions/GET_TRANSACTION",r.id);case 3:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1,data:function(){return{transaction_info:{invoice:{class:"col-lg-6",label:"INVOICE",value:"-"},payment_type:{class:"col-lg-6",label:"Payment Type",value:"-"},total_price:{class:"col-lg-6",label:"Total Price",value:"-"},time_created:{class:"col-lg-6",label:"Time Created",value:"-"}},delivery_info:{full_address:{class:"col-md-12",label:"Full Address",value:"-"},destination_code:{class:"col-lg-4",label:"Destination Code",value:"-"},phone_number:{class:"col-lg-4",label:"Phone Number",value:"-"},delivery_fee:{class:"col-lg-4",label:"Delivery Fee",value:"-"},courier_code:{class:"col-lg-4",label:"Courier Code",value:"-"},service_type:{class:"col-lg-4",label:"Service Type",value:"-"},total_weight:{class:"col-lg-4",label:"Total Weight",value:"-"},arrival_date:{class:"col-md-12",label:"Arrival Date",value:null}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({TRANSACTION:"transactions/TRANSACTION"})),created:function(){this.fillData()},methods:{fillData:function(){this.transaction_info.invoice.value=this.TRANSACTION.transaction_number,this.transaction_info.payment_type.value=this.TRANSACTION.payment_type,this.transaction_info.total_price.value=this.TRANSACTION.total_price,this.transaction_info.time_created.value=this.TRANSACTION.created_at,this.delivery_info.full_address.value=this.TRANSACTION.receiver_full_address,this.delivery_info.destination_code.value=this.TRANSACTION.receiver_destination_code,this.delivery_info.phone_number.value=this.TRANSACTION.receiver_phone_number,this.delivery_info.delivery_fee.value=this.TRANSACTION.delivery_fee,this.delivery_info.courier_code.value=this.TRANSACTION.delivery_courier_code,this.delivery_info.service_type.value=this.TRANSACTION.delivery_courier_service,this.delivery_info.total_weight.value=this.TRANSACTION.total_weight,this.delivery_info.arrival_date.value=this.TRANSACTION.arrival_date}}},v=l(8),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-4 order-xl-2"},[l("div",{staticClass:"card card-profile"},[l("img",{staticClass:"card-img-top",attrs:{src:"/assets/img/theme/img-1-1000x600.jpg",alt:"Image placeholder"}}),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"card-header text-center border-0 pt-8 pt-md-5 pb-0 pb-md-5"}),t._v(" "),l("div",{staticClass:"card-body pt-0"},[l("div",{staticClass:"row text-center"},[l("div",{staticClass:"col"},[l("h5",{staticClass:"h3"},[t._v("\n              "+t._s(t.TRANSACTION.user.name)+"\n            ")]),t._v(" "),l("div",{staticClass:"h5 font-weight-300"},[l("i",{staticClass:"fas fa-envelope mr-2"}),t._v(t._s(t.TRANSACTION.user.email)+"\n            ")]),t._v(" "),l("div",{staticClass:"h5 mt-4"},[l("i",{staticClass:"fas fa-user mr-2"}),l("span",{staticClass:"text-capitalize"},[t._v(t._s(t.TRANSACTION.user.type))])]),t._v(" "),l("div",[l("i",{staticClass:"far fa-clock mr-2"}),t._v("Member since\n              "+t._s(t.TRANSACTION.user.created_at)+"\n            ")])])])])]),t._v(" "),l("div",{staticClass:"card"},[t._m(1),t._v(" "),l("div",{staticClass:"card-body"},[l("div",{staticClass:"row"},[t.TRANSACTION.paid_boxes?l("div",{staticClass:"col-12"},[t._v("\n            Box Quantity: "+t._s(t.TRANSACTION.paid_boxes.length)+"\n          ")]):t._e(),t._v(" "),t.TRANSACTION.paid_bundles?l("div",{staticClass:"col-12"},[t._v("\n            Bundle Quantity: "+t._s(t.TRANSACTION.paid_bundles.length)+"\n          ")]):t._e()])])])]),t._v(" "),l("div",{staticClass:"col-xl-8 order-xl-1"},[l("div",{staticClass:"card"},[t._m(2),t._v(" "),l("div",{staticClass:"card-body"},[l("div",{staticClass:"pl-lg-4"},[l("div",{staticClass:"row"},t._l(t.transaction_info,(function(e,r){return l("div",{key:r,class:e.class},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-control-label"},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticClass:"form-control text-capitalize"},[t._v("\n                  "+t._s(e.value)+"\n                ")])])])})),0)]),t._v(" "),l("hr",{staticClass:"my-4"}),t._v(" "),l("h6",{staticClass:"heading-small text-muted mb-4"},[t._v("\n          Delivery Information (Receiver)\n        ")]),t._v(" "),l("div",{staticClass:"pl-lg-4"},[l("div",{staticClass:"row"},t._l(t.delivery_info,(function(e,r){return l("div",{key:r,class:e.class},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-control-label"},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticClass:"form-control"},[t._v("\n                  "+t._s(e.value)+"\n                ")])])])})),0)])])])]),t._v(" "),l("div",{staticClass:"col-xl-12 order-xl-3"},[t.TRANSACTION.paid_boxes.length>0?l("div",{staticClass:"card"},[t._m(3),t._v(" "),t._l(t.TRANSACTION.paid_boxes,(function(e){return l("div",{key:e.id,staticClass:"card-body"},[l("h6",{staticClass:"heading-small text-muted mb-4"},[t._v(t._s(e.name))]),t._v(" "),l("div",{staticClass:"table-responsive",attrs:{"data-toggle":"list","data-list-values":'["id", "name", "price", "stock", "weight"]'}},[l("table",{staticClass:"table align-items-center table-flush"},[t._m(4,!0),t._v(" "),l("tbody",{staticClass:"list"},t._l(e.paid_products,(function(e){return l("tr",{key:e.id},[l("th",{staticClass:"name"},[l("span",{staticClass:"text-capitalize"},[t._v(t._s(e.name))])]),t._v(" "),l("td",[l("span",[t._v(t._s(e.price))])]),t._v(" "),l("td",[l("span",[t._v(t._s(e.quantity))])])])})),0)])])])}))],2):t._e()]),t._v(" "),l("div",{staticClass:"col-xl-12 order-xl-3"},[t.TRANSACTION.paid_bundles.length>0?l("div",{staticClass:"card"},[t._m(5),t._v(" "),t._l(t.TRANSACTION.paid_bundles,(function(e){return l("div",{key:e.id,staticClass:"card-body"},[l("h6",{staticClass:"heading-small text-muted mb-4"},[t._v(t._s(e.name))]),t._v(" "),l("div",{staticClass:"table-responsive",attrs:{"data-toggle":"list","data-list-values":'["id", "name", "price", "stock", "weight"]'}},[l("table",{staticClass:"table align-items-center table-flush"},[t._m(6,!0),t._v(" "),l("tbody",{staticClass:"list"},t._l(e.paid_products,(function(e){return l("tr",{key:e.id},[l("th",{staticClass:"name"},[l("span",{staticClass:"text-capitalize"},[t._v(t._s(e.name))])]),t._v(" "),l("td",[l("span",[t._v(t._s(e.price))])]),t._v(" "),l("td",[l("span",[t._v(t._s(e.quantity))])])])})),0)])])])}))],2):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-3 order-lg-2"},[e("div",{staticClass:"card-profile-image"},[e("img",{staticClass:"rounded-circle",attrs:{src:"/assets/img/theme/team-4.jpg"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",[this._v("Items")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",[this._v("Transaction Info")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",[this._v("Box Details")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",{staticClass:"sort",attrs:{scope:"col"}},[this._v("Product Name")]),this._v(" "),e("th",{staticClass:"sort",attrs:{scope:"col"}},[this._v("Product Price")]),this._v(" "),e("th",{staticClass:"sort",attrs:{scope:"col"}},[this._v("Product Quantity")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",[this._v("Bundle Details")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",{staticClass:"sort",attrs:{scope:"col"}},[this._v("Product Name")]),this._v(" "),e("th",{staticClass:"sort",attrs:{scope:"col"}},[this._v("Product Price")]),this._v(" "),e("th",{staticClass:"sort",attrs:{scope:"col"}},[this._v("Product Quantity")])])])}],!1,null,null,null);e.default=component.exports}}]);