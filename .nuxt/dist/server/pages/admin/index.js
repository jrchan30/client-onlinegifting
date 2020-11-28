exports.ids = [8];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue-chartjs"
var external_vue_chartjs_ = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminLineChart.vue?vue&type=script&lang=js&

/* harmony default export */ var AdminLineChartvue_type_script_lang_js_ = ({
  extends: external_vue_chartjs_["Line"],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }

});
// CONCATENATED MODULE: ./components/Admin/AdminLineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_AdminLineChartvue_type_script_lang_js_ = (AdminLineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Admin/AdminLineChart.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Admin_AdminLineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cda8b3e2"
  
)

/* harmony default export */ var AdminLineChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue-chartjs"
var external_vue_chartjs_ = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminBarChart.vue?vue&type=script&lang=js&

/* harmony default export */ var AdminBarChartvue_type_script_lang_js_ = ({
  extends: external_vue_chartjs_["Bar"],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }

});
// CONCATENATED MODULE: ./components/Admin/AdminBarChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_AdminBarChartvue_type_script_lang_js_ = (AdminBarChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Admin/AdminBarChart.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Admin_AdminBarChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6b8ca2d6"
  
)

/* harmony default export */ var AdminBarChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=00e96212&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xl-8\">","</div>",[_vm._ssrNode("<div class=\"card bg-default\">","</div>",[_vm._ssrNode("<div class=\"card-header bg-transparent\"><div class=\"row align-items-center\"><div class=\"col\"><h6 class=\"text-light text-uppercase ls-1 mb-1\">Overview</h6> <h5 class=\"h3 text-white mb-0\">Sales value</h5></div></div></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div>","</div>",[(_vm.lineChart.loaded)?_c('AdminLineChart',{attrs:{"chartdata":_vm.lineChart.chartdata,"options":_vm.lineChart.options}}):_vm._e()],1)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-4\">","</div>",[_vm._ssrNode("<div class=\"card bg-default\">","</div>",[_vm._ssrNode("<div class=\"card-header bg-transparent\"><div class=\"row align-items-center\"><div class=\"col\"><h6 class=\"text-light text-uppercase ls-1 mb-1\">Performance</h6> <h5 class=\"h3 text-white mb-0\">Transactions Count</h5></div></div></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div>","</div>",[(_vm.barChart.loaded)?_c('AdminBarChart',{attrs:{"chartdata":_vm.barChart.chartdata,"options":_vm.barChart.options}}):_vm._e()],1)])],2)])],2),_vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"><div class=\"row\"><div class=\"col\"><div class=\"card\"><div class=\"card-header border-0\"><h3 class=\"mb-0\">Latest Discussions Posted</h3></div> <div class=\"table-responsive\"><table class=\"table align-items-center table-flush\"><thead class=\"thead-light\"><tr><th scope=\"col\" class=\"sort\">Name</th> <th scope=\"col\" class=\"sort\">Discussion</th> <th scope=\"col\" class=\"sort\">Item Type</th> <th scope=\"col\" class=\"sort\">Item Name</th> <th scope=\"col\"></th></tr></thead> <tbody class=\"list\">"+(_vm._ssrList((_vm.DISCUSSIONS),function(discussion){return ("<tr><th scope=\"row\"><div class=\"media align-items-center\"><a href=\"#\" class=\"avatar rounded-circle mr-3\"><img alt=\"Image placeholder\" src=\"/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg\"></a> <div class=\"media-body\"><span class=\"name mb-0 text-sm\">"+_vm._ssrEscape(_vm._s(discussion.user.name))+"</span></div></div></th> <td class=\"discussion\">"+_vm._ssrEscape("\n                      "+_vm._s(discussion.body)+"\n                    ")+"</td> <td><span>"+_vm._ssrEscape(_vm._s(discussion.type))+"</span></td> <td><span>"+_vm._ssrEscape(_vm._s(discussion.item_name))+"</span></td> <td><button class=\"btn btn-primary\">\n                        Go to discussion\n                      </button></td></tr>")}))+"</tbody></table></div></div></div></div></div></div> <div class=\"row\"><div class=\"col-6\"><div class=\"card\"><div class=\"card-header\"><h5 class=\"h3 mb-0\">Admin members</h5></div> <div class=\"card-body\"><ul class=\"list-group list-group-flush list my--3\"><li class=\"list-group-item px-0\"><div class=\"row align-items-center\"><div class=\"col-auto\"><a href=\"#\" class=\"avatar rounded-circle\"><img alt=\"Image placeholder\" src=\"/assets/img/theme/team-1.jpg\"></a></div> <div class=\"col ml--2\"><h4 class=\"mb-0\"><a href=\"#!\">Admin 1</a></h4></div> <div class=\"col-auto\"><button type=\"button\" class=\"btn btn-sm btn-primary\">\n                    See Profile\n                  </button></div></div></li></ul></div></div></div> <div class=\"col\"><div class=\"card bg-gradient-primary\"><div class=\"card-body\"><div class=\"row justify-content-between align-items-center\"><div class=\"col\"><div href=\"#\" class=\"avatar rounded-circle\">"+((_vm.$auth.user.detail.image)?("<img"+(_vm._ssrAttr("src",_vm.$auth.user.detail.image))+" alt=\"No Image\">"):("<img src=\"/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg\">"))+"</div></div> <div class=\"col-auto\"><span class=\"badge badge-lg badge-success\">Active</span></div></div> <div class=\"my-4\"><span class=\"h6 surtitle text-light\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.$auth.user.username)+"\n            ")+"</span> <div class=\"h1 text-white\">"+_vm._ssrEscape(_vm._s(_vm.$auth.user.email))+"</div></div> <div class=\"row\"><div class=\"col\"><span class=\"h6 surtitle text-light\">Name</span> <span class=\"d-block h3 text-white\">"+_vm._ssrEscape(_vm._s(_vm.$auth.user.name))+"</span></div></div></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=00e96212&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  layout: 'admin',
  middleware: ['auth', 'admin-only'],

  data() {
    return {
      userlogin: '',
      discussions: {},
      lineChart: {
        loaded: false,
        chartdata: null,
        options: null
      },
      barChart: {
        loaded: false,
        chartdata: null,
        options: null
      }
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      DISCUSSIONS: 'discussions/DISCUSSIONS'
    })
  },

  async mounted() {
    this.lineChart.loaded = false;
    this.barChart.loaded = false;

    try {
      const res = await this.$axios.$get('/monthly-sales');
      this.lineChart.chartdata = res;
      this.lineChart.options = {
        responsive: true,
        maintainAspectRatio: false
      };
      this.lineChart.loaded = true;
    } catch (e) {
      console.error(e);
    }

    try {
      const res = await this.$axios.$get('/transactions-count');
      this.barChart.chartdata = res;
      this.barChart.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };
      this.barChart.loaded = true;
    } catch (e) {
      console.error(e);
    }

    await this.GET_DISCUSSIONS();
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      GET_DISCUSSIONS: 'discussions/GET_DISCUSSIONS'
    })
  }
});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b71d85e4"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AdminLineChart: __webpack_require__(104).default,AdminBarChart: __webpack_require__(105).default})


/***/ })

};;
//# sourceMappingURL=index.js.map