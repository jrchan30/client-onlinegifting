(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{439:function(t,e,r){var map={"./af":292,"./af.js":292,"./ar":293,"./ar-dz":294,"./ar-dz.js":294,"./ar-kw":295,"./ar-kw.js":295,"./ar-ly":296,"./ar-ly.js":296,"./ar-ma":297,"./ar-ma.js":297,"./ar-sa":298,"./ar-sa.js":298,"./ar-tn":299,"./ar-tn.js":299,"./ar.js":293,"./az":300,"./az.js":300,"./be":301,"./be.js":301,"./bg":302,"./bg.js":302,"./bm":303,"./bm.js":303,"./bn":304,"./bn-bd":305,"./bn-bd.js":305,"./bn.js":304,"./bo":306,"./bo.js":306,"./br":307,"./br.js":307,"./bs":308,"./bs.js":308,"./ca":309,"./ca.js":309,"./cs":310,"./cs.js":310,"./cv":311,"./cv.js":311,"./cy":312,"./cy.js":312,"./da":313,"./da.js":313,"./de":314,"./de-at":315,"./de-at.js":315,"./de-ch":316,"./de-ch.js":316,"./de.js":314,"./dv":317,"./dv.js":317,"./el":318,"./el.js":318,"./en-au":319,"./en-au.js":319,"./en-ca":320,"./en-ca.js":320,"./en-gb":321,"./en-gb.js":321,"./en-ie":322,"./en-ie.js":322,"./en-il":323,"./en-il.js":323,"./en-in":324,"./en-in.js":324,"./en-nz":325,"./en-nz.js":325,"./en-sg":326,"./en-sg.js":326,"./eo":327,"./eo.js":327,"./es":328,"./es-do":329,"./es-do.js":329,"./es-mx":330,"./es-mx.js":330,"./es-us":331,"./es-us.js":331,"./es.js":328,"./et":332,"./et.js":332,"./eu":333,"./eu.js":333,"./fa":334,"./fa.js":334,"./fi":335,"./fi.js":335,"./fil":336,"./fil.js":336,"./fo":337,"./fo.js":337,"./fr":338,"./fr-ca":339,"./fr-ca.js":339,"./fr-ch":340,"./fr-ch.js":340,"./fr.js":338,"./fy":341,"./fy.js":341,"./ga":342,"./ga.js":342,"./gd":343,"./gd.js":343,"./gl":344,"./gl.js":344,"./gom-deva":345,"./gom-deva.js":345,"./gom-latn":346,"./gom-latn.js":346,"./gu":347,"./gu.js":347,"./he":348,"./he.js":348,"./hi":349,"./hi.js":349,"./hr":350,"./hr.js":350,"./hu":351,"./hu.js":351,"./hy-am":352,"./hy-am.js":352,"./id":353,"./id.js":353,"./is":354,"./is.js":354,"./it":355,"./it-ch":356,"./it-ch.js":356,"./it.js":355,"./ja":357,"./ja.js":357,"./jv":358,"./jv.js":358,"./ka":359,"./ka.js":359,"./kk":360,"./kk.js":360,"./km":361,"./km.js":361,"./kn":362,"./kn.js":362,"./ko":363,"./ko.js":363,"./ku":364,"./ku.js":364,"./ky":365,"./ky.js":365,"./lb":366,"./lb.js":366,"./lo":367,"./lo.js":367,"./lt":368,"./lt.js":368,"./lv":369,"./lv.js":369,"./me":370,"./me.js":370,"./mi":371,"./mi.js":371,"./mk":372,"./mk.js":372,"./ml":373,"./ml.js":373,"./mn":374,"./mn.js":374,"./mr":375,"./mr.js":375,"./ms":376,"./ms-my":377,"./ms-my.js":377,"./ms.js":376,"./mt":378,"./mt.js":378,"./my":379,"./my.js":379,"./nb":380,"./nb.js":380,"./ne":381,"./ne.js":381,"./nl":382,"./nl-be":383,"./nl-be.js":383,"./nl.js":382,"./nn":384,"./nn.js":384,"./oc-lnc":385,"./oc-lnc.js":385,"./pa-in":386,"./pa-in.js":386,"./pl":387,"./pl.js":387,"./pt":388,"./pt-br":389,"./pt-br.js":389,"./pt.js":388,"./ro":390,"./ro.js":390,"./ru":391,"./ru.js":391,"./sd":392,"./sd.js":392,"./se":393,"./se.js":393,"./si":394,"./si.js":394,"./sk":395,"./sk.js":395,"./sl":396,"./sl.js":396,"./sq":397,"./sq.js":397,"./sr":398,"./sr-cyrl":399,"./sr-cyrl.js":399,"./sr.js":398,"./ss":400,"./ss.js":400,"./sv":401,"./sv.js":401,"./sw":402,"./sw.js":402,"./ta":403,"./ta.js":403,"./te":404,"./te.js":404,"./tet":405,"./tet.js":405,"./tg":406,"./tg.js":406,"./th":407,"./th.js":407,"./tk":408,"./tk.js":408,"./tl-ph":409,"./tl-ph.js":409,"./tlh":410,"./tlh.js":410,"./tr":411,"./tr.js":411,"./tzl":412,"./tzl.js":412,"./tzm":413,"./tzm-latn":414,"./tzm-latn.js":414,"./tzm.js":413,"./ug-cn":415,"./ug-cn.js":415,"./uk":416,"./uk.js":416,"./ur":417,"./ur.js":417,"./uz":418,"./uz-latn":419,"./uz-latn.js":419,"./uz.js":418,"./vi":420,"./vi.js":420,"./x-pseudo":421,"./x-pseudo.js":421,"./yo":422,"./yo.js":422,"./zh-cn":423,"./zh-cn.js":423,"./zh-hk":424,"./zh-hk.js":424,"./zh-mo":425,"./zh-mo.js":425,"./zh-tw":426,"./zh-tw.js":426};function n(t){var e=l(t);return r(e)}function l(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=l,t.exports=n,n.id=439},466:function(t,e,r){"use strict";r.r(e);var n={extends:r(436).b,props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},l=r(8),component=Object(l.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports},467:function(t,e,r){"use strict";r.r(e);var n={extends:r(436).a,props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},l=r(8),component=Object(l.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports},469:function(t,e,r){"use strict";r.r(e);r(62),r(27),r(28),r(15),r(53),r(12);var n=r(4),l=r(29),c=r(38);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={layout:"admin",middleware:["auth","admin-only"],data:function(){return{userlogin:"",discussions:{},lineChart:{loaded:!1,chartdata:null,options:null},barChart:{loaded:!1,chartdata:null,options:null}}},computed:d({},Object(c.c)({DISCUSSIONS:"discussions/DISCUSSIONS"})),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.lineChart.loaded=!1,t.barChart.loaded=!1,e.prev=2,e.next=5,t.$axios.$get("/monthly-sales");case 5:r=e.sent,t.lineChart.chartdata=r,t.lineChart.options={responsive:!0,maintainAspectRatio:!1},t.lineChart.loaded=!0,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return e.prev=14,e.next=17,t.$axios.$get("/transactions-count");case 17:n=e.sent,t.barChart.chartdata=n,t.barChart.options={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},t.barChart.loaded=!0,e.next=26;break;case 23:e.prev=23,e.t1=e.catch(14),console.error(e.t1);case 26:return e.next=28,t.GET_DISCUSSIONS();case 28:case"end":return e.stop()}}),e,null,[[2,11],[14,23]])})))()},methods:d({},Object(c.b)({GET_DISCUSSIONS:"discussions/GET_DISCUSSIONS"}))},j=r(8),component=Object(j.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-8"},[r("div",{staticClass:"card bg-default"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("div",[t.lineChart.loaded?r("AdminLineChart",{attrs:{chartdata:t.lineChart.chartdata,options:t.lineChart.options}}):t._e()],1)])])]),t._v(" "),r("div",{staticClass:"col-xl-4"},[r("div",{staticClass:"card bg-default"},[t._m(1),t._v(" "),r("div",{staticClass:"card-body"},[r("div",[t.barChart.loaded?r("AdminBarChart",{attrs:{chartdata:t.barChart.chartdata,options:t.barChart.options}}):t._e()],1)])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"card"},[t._m(2),t._v(" "),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table align-items-center table-flush"},[t._m(3),t._v(" "),r("tbody",{staticClass:"list"},t._l(t.DISCUSSIONS,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[r("div",{staticClass:"media align-items-center"},[t._m(4,!0),t._v(" "),r("div",{staticClass:"media-body"},[r("span",{staticClass:"name mb-0 text-sm"},[t._v(t._s(e.user.name))])])])]),t._v(" "),r("td",{staticClass:"discussion"},[t._v("\n                      "+t._s(e.body)+"\n                    ")]),t._v(" "),r("td",[r("span",[t._v(t._s(e.type))])]),t._v(" "),r("td",[r("span",[t._v(t._s(e.item_name))])]),t._v(" "),t._m(5,!0)])})),0)])])])])])])]),t._v(" "),r("div",{staticClass:"row"},[t._m(6),t._v(" "),r("div",{staticClass:"col"},[r("div",{staticClass:"card bg-gradient-primary"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row justify-content-between align-items-center"},[r("div",{staticClass:"col"},[r("div",{staticClass:"avatar rounded-circle",attrs:{href:"#"}},[t.$auth.user.detail.image?[r("img",{attrs:{src:t.$auth.user.detail.image,alt:"No Image"}})]:[r("img",{attrs:{src:"/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"}})]],2)]),t._v(" "),t._m(7)]),t._v(" "),r("div",{staticClass:"my-4"},[r("span",{staticClass:"h6 surtitle text-light"},[t._v("\n              "+t._s(t.$auth.user.username)+"\n            ")]),t._v(" "),r("div",{staticClass:"h1 text-white"},[t._v(t._s(t.$auth.user.email))])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("span",{staticClass:"h6 surtitle text-light"},[t._v("Name")]),t._v(" "),r("span",{staticClass:"d-block h3 text-white"},[t._v(t._s(t.$auth.user.name))])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header bg-transparent"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col"},[e("h6",{staticClass:"text-light text-uppercase ls-1 mb-1"},[this._v("Overview")]),this._v(" "),e("h5",{staticClass:"h3 text-white mb-0"},[this._v("Sales value")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header bg-transparent"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col"},[e("h6",{staticClass:"text-light text-uppercase ls-1 mb-1"},[this._v("Performance")]),this._v(" "),e("h5",{staticClass:"h3 text-white mb-0"},[this._v("Transactions Count")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header border-0"},[e("h3",{staticClass:"mb-0"},[this._v("Latest Discussions Posted")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-light"},[r("tr",[r("th",{staticClass:"sort",attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),r("th",{staticClass:"sort",attrs:{scope:"col"}},[t._v("Discussion")]),t._v(" "),r("th",{staticClass:"sort",attrs:{scope:"col"}},[t._v("Item Type")]),t._v(" "),r("th",{staticClass:"sort",attrs:{scope:"col"}},[t._v("Item Name")]),t._v(" "),r("th",{attrs:{scope:"col"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:"/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("button",{staticClass:"btn btn-primary"},[this._v("\n                        Go to discussion\n                      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h5",{staticClass:"h3 mb-0"},[this._v("Admin members")])]),this._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush list my--3"},[e("li",{staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("a",{staticClass:"avatar rounded-circle",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:"/assets/img/theme/team-1.jpg"}})])]),this._v(" "),e("div",{staticClass:"col ml--2"},[e("h4",{staticClass:"mb-0"},[e("a",{attrs:{href:"#!"}},[this._v("Admin 1")])])]),this._v(" "),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"}},[this._v("\n                    See Profile\n                  ")])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-auto"},[e("span",{staticClass:"badge badge-lg badge-success"},[this._v("Active")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminLineChart:r(466).default,AdminBarChart:r(467).default})}}]);