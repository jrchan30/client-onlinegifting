(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{468:function(t,e,r){"use strict";r.r(e);r(62),r(25),r(26),r(14),r(53);var n=r(27),c=(r(12),r(4)),o=r(38);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.GET_LOWPRICE();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{activeItem:null,active:"guide",activeSidebar:!1}},computed:f(f({},Object(o.c)({LOWPRICE:"products/LOWPRICE"})),{},{products:function(){return this.LOWPRICE.filter((function(i){return i.stock>0}))}}),methods:f({},Object(o.b)({GET_LOWPRICE:"products/GET_LOWPRICE"}))},d=r(8),component=Object(d.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mt-3"},t._l(t.LOWPRICE,(function(e){return r("div",{key:e.id,staticClass:"col-sm-3 col-md-4 col-lg-3 pb-4"},[r("vs-card",{scopedSlots:t._u([{key:"title",fn:function(){return[r("h3",[t._v(t._s(e.name))])]},proxy:!0},{key:"img",fn:function(){return[r("img",{attrs:{src:e.images[0].url,alt:""}})]},proxy:!0},{key:"text",fn:function(){return[r("p",[t._v("blablabla")])]},proxy:!0},{key:"interactions",fn:function(){return[r("vs-button",{attrs:{danger:"",icon:""}},[r("i",{staticClass:"bx bx-heart"})]),t._v(" "),r("vs-button",{staticClass:"btn-chat",attrs:{shadow:"",primary:""}},[r("i",{staticClass:"bx bx-chat"}),t._v(" "),r("span",{staticClass:"span"},[t._v(" 54 ")])])]},proxy:!0}],null,!0)})],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);