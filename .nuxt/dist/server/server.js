module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/Carts","2":"pages/Profile","3":"pages/about-us","4":"pages/admin/admin-list","5":"pages/admin/dashboard-tutorial","6":"pages/admin/forms/bundle","7":"pages/admin/forms/product","8":"pages/admin/index","9":"pages/admin/profile","10":"pages/admin/search/index","11":"pages/admin/tables/bundles/index","12":"pages/admin/tables/products/index","13":"pages/admin/tables/users/index","14":"pages/admin/transactions/_id","15":"pages/admin/transactions/index","16":"pages/bundles/_id","17":"pages/bundles/index","18":"pages/categories/_id","19":"pages/categories/index","20":"pages/index","21":"pages/liked-items","22":"pages/login","23":"pages/password/email","24":"pages/password/reset/_token","25":"pages/products/_id","26":"pages/products/index","27":"pages/register","28":"pages/test","29":"pages/verification/resend","30":"pages/verification/verify/_id"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatType; });
const formatPrice = price => {
  const res = [];
  let counter = 0;

  if (price > 0) {
    const reversed = Math.round(price).toString().split('').reverse();
    reversed.forEach(el => {
      if (counter === 3) {
        res.push(`${el}.`);
        counter = 0;
      } else {
        res.push(el);
      }

      counter++;
    });
    return res.reverse().join('');
  }
};
const formatType = type => {
  const startIdx = type.lastIndexOf('\\') + 1;
  const formatedType = type.substr(startIdx);
  return formatedType;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vform");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/Form.vue?vue&type=template&id=26a0be8b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form>","</form>",[_vm._t("fields"),_vm._ssrNode(" "),_vm._ssrNode("<button type=\"submit\" class=\"btn btn-primary mt-2\">","</button>",[_vm._ssrNode(((_vm.loading)?("<i class=\"fas fa-spinner fa-spin\"></i>"):"<!---->")+" "),_vm._t("btnSubmit")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Admin/Form.vue?vue&type=template&id=26a0be8b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/Form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Formvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Admin/Form.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_Formvue_type_script_lang_js_ = (Formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Admin/Form.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Admin_Formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9f79a8d0"
  
)

/* harmony default export */ var Form = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Form: __webpack_require__(15).default})


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3f6fdfb1", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("09092bd6", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("56b15182", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("66fb0106", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginRegister/LoginRegisterFooter.vue?vue&type=template&id=5f0bcfa6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"py-2 text-center"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<nav class=\"col-6\">","</nav>",[_vm._ssrNode("<ul class=\"text-secondary list-inline\">","</ul>",[_vm._ssrNode("<li class=\"list-inline-item pr-3\">","</li>",[_c('nuxt-link',{attrs:{"to":""}},[_vm._v(" About Us ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"list-inline-item\">","</li>",[_c('nuxt-link',{attrs:{"to":""}},[_vm._v(" Blog ")])],1)],2)]),_vm._ssrNode(" <div class=\"text-secondary col-6\">"+_vm._ssrEscape("\n        ©\n        "+_vm._s(new Date().getFullYear())+" Online Gifting | Coded and Designed by\n        ")+"<a href=\"https://linkedin.com/in/russell-chan-944a02195\" target=\"_blank\">Russell</a>\n        &amp; <a href=\"#\" target=\"_blank\">Albert</a>.\n      </div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LoginRegister/LoginRegisterFooter.vue?vue&type=template&id=5f0bcfa6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginRegister/LoginRegisterFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoginRegisterFootervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/LoginRegister/LoginRegisterFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var LoginRegister_LoginRegisterFootervue_type_script_lang_js_ = (LoginRegisterFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/LoginRegister/LoginRegisterFooter.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LoginRegister_LoginRegisterFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6bdf5120"
  
)

/* harmony default export */ var LoginRegisterFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 27 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Online Gifting\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"Online Gifting\"},{\"hid\":\"author\",\"name\":\"author\",\"content\":\"Jonathan Russell Chan\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"Choose your gifts, we handle the rest\"},{\"hid\":\"theme-color\",\"name\":\"theme-color\",\"content\":\"#336699\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"Online Gifting\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"Online Gifting\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"Choose your gifts, we handle the rest\"}],\"link\":[{\"rel\":\"shortcut icon\",\"href\":\"/_nuxt/icons/icon_64x64.81e192.png\"},{\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.81e192.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.5f5bb560.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
};

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vuesax");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(56);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  const options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

const functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  const render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ({
  app,
  redirect
}) {
  if (app.$auth.user.type !== 'admin') {
    return redirect('/');
  }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ({
  app,
  redirect
}) {
  if (app.$auth.loggedIn) {
    return redirect('/');
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSideNav_vue_vue_type_style_index_0_id_21bd0a9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSideNav_vue_vue_type_style_index_0_id_21bd0a9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSideNav_vue_vue_type_style_index_0_id_21bd0a9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSideNav_vue_vue_type_style_index_0_id_21bd0a9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSideNav_vue_vue_type_style_index_0_id_21bd0a9f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nav-link.nuxt-link-exact-active[data-v-21bd0a9f]{background-color:#f6f9fc;font-weight:700}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTopNav_vue_vue_type_style_index_0_id_31843bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTopNav_vue_vue_type_style_index_0_id_31843bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTopNav_vue_vue_type_style_index_0_id_31843bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTopNav_vue_vue_type_style_index_0_id_31843bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTopNav_vue_vue_type_style_index_0_id_31843bca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".logout-cursor[data-v-31843bca]{cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-color{color:#2c3e50}html{overflow-y:scroll;overflow-y:overlay}body{font-family:\"Raleway\",sans-serif;background-color:#f4f7f8}::-webkit-scrollbar-track{background:none}::-webkit-scrollbar-thumb{background:var(--vs-theme-color);border-radius:5px;background:#2c3e50}::-webkit-scrollbar{width:5px;height:5px;display:block;background:var(--vs-theme-layout)}::-webkit-scrollbar-thumb:hover{background:#000}.navDiv{transition:transform .4s}.navDiv:hover{transform:scale(1.1)}.text-size{font-size:12px}.img-ratio{-o-object-fit:cover;object-fit:cover;height:150px;width:300px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body,html{height:100%}.footer-lg{position:absolute;bottom:0;width:100%}@media screen and (max-height:633px){.footer-lg{position:relative}}.footer-rg{position:absolute;bottom:0;width:100%}@media screen and (max-height:925px){.footer-rg{position:relative}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({// isLoggedIn: false,
});
const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  }

};
const mutations = {// SET_AUTH(state, payload) {
  //   state.isLoggedIn = payload
  // },
};
const actions = {// async nuxtServerInit({ commit }, { req }) {
  //   let auth = false
  //   if (req.headers.cookie) {
  //     // cookie found
  //     try {
  //       // check data user login with cookie
  //       await this.$axios.$get('/user')
  //       // server return the data is cookie valid loggedIn is true
  //       auth = true // set the data auth
  //     } catch (err) {
  //       // No valid cookie found
  //       auth = false
  //     }
  //   }
  //   commit('SET_AUTH', auth) // set state auth
  // },
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  bundles: {},
  bundle: {},
  filter: {
    search: '',
    orderBy: 'created_at',
    orderDir: 'desc'
  }
});
const getters = {
  BUNDLES(state) {
    return state.bundles;
  },

  BUNDLE(state) {
    return state.bundle;
  }

};
const mutations = {
  SET_BUNDLES(state, payload) {
    payload.data.forEach(x => {
      x.price = Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatPrice */ "a"])(x.price);
      x.main_image = x.detail.image.url;
    });
    state.bundles = payload; // state.bundles = payload.data
  },

  SET_BUNDLE(state, payload) {
    state.bundle = {
      data: {
        id: payload.data.id,
        user: payload.data.user,
        name: payload.data.name,
        description: '',
        price: Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatPrice */ "a"])(payload.data.price),
        stock: 0,
        images: [payload.data.detail.image],
        categories: [],
        reviews: payload.data.reviews,
        discussions: payload.data.discussions,
        likes_count: payload.data.likes_count
      }
    };
  },

  SET_FILTER(state, payload) {
    state.filter.search = payload.search;
    state.filter.orderBy = payload.orderBy;
    state.filter.orderDir = payload.orderDir;
  },

  SET_LIKE(state, payload) {
    state.bundles[payload.index].data.isLiked = !state.bundles[payload.index].data.isLiked;
  }

};
const actions = {
  async GET_BUNDLES({
    state,
    commit
  }, page = 1) {
    const filter = state.filter;
    const data = await this.$axios.$get(`bundles?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`);
    commit('SET_BUNDLES', data);
  },

  async GET_HIDDEN_BUNDLES({
    state,
    commit
  }, page = 1) {
    const filter = state.filter;
    const data = await this.$axios.$get(`trashed-bundles?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`);
    commit('SET_BUNDLES', data);
  },

  async GET_BUNDLE({
    commit
  }, id) {
    const data = await this.$axios.$get(`bundles/${id}`);
    commit('SET_BUNDLE', data);
  }

};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  categories: {}
});
const getters = {
  CATEGORIES(state) {
    return state.categories.data;
  }

};
const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload;
  }

};
const actions = {
  async GET_CATEGORIES({
    commit
  }) {
    const data = await this.$axios.$get('categories');
    commit('SET_CATEGORIES', data);
  }

};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  discussions: {}
});
const getters = {
  DISCUSSIONS(state) {
    return state.discussions;
  }

};
const mutations = {
  SET_DISCUSSIONS(state, payload) {
    payload.data.forEach(x => {
      x.type = Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatType */ "b"])(x.type);
    });
    state.discussions = payload.data;
  }

};
const actions = {
  async GET_DISCUSSIONS({
    commit
  }, page = 1) {
    const data = await this.$axios.$get(`discussions?page=${page}`);
    commit('SET_DISCUSSIONS', data);
  }

};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  products: {},
  latest: {},
  lowPrice: {},
  product: {},
  allProducts: {},
  filter: {
    search: '',
    orderBy: 'created_at',
    orderDir: 'desc'
  }
});
const getters = {
  PRODUCTS(state) {
    return state.products;
  },

  PRODUCT(state) {
    return state.product;
  },

  LATEST(state) {
    return state.latest.data;
  },

  LOWPRICE(state) {
    return state.lowPrice.data;
  },

  ALL_PRODUCTS(state) {
    return state.allProducts;
  }

};
const mutations = {
  SET_PRODUCTS(state, payload) {
    payload.data.forEach(x => {
      x.price = Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatPrice */ "a"])(x.price);
      x.main_image = x.images[0].url;
    });
    state.products = payload;
  },

  SET_PRODUCT(state, payload) {
    payload.data.price = Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatPrice */ "a"])(payload.data.price);
    state.product = payload;
  },

  SET_LATEST(state, payload) {
    payload.data.forEach(x => {
      x.price = Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatPrice */ "a"])(x.price);
      x.main_image = x.images[0].url;
    });
    state.latest = payload;
  },

  SET_LOWPRICE(state, payload) {
    payload.data.forEach(x => {
      x.price = Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatPrice */ "a"])(x.price);
      x.main_image = x.images[0].url;
    });
    state.lowPrice = payload;
  },

  SET_FILTER(state, payload) {
    state.filter.search = payload.search;
    state.filter.orderBy = payload.orderBy;
    state.filter.orderDir = payload.orderDir;
  },

  SET_ALL_PRODUCTS(state, payload) {
    state.allProducts = payload;
  },

  SET_LIKE(state, payload) {
    switch (payload.storeState) {
      case 'products':
        state.products.data[payload.index].isLiked = !state.products.data[payload.index].isLiked;
        break;

      case 'lowprice':
        state.lowPrice[payload.index].isLiked = !state.lowPrice[payload.index].isLiked;
        break;

      case 'latest':
        state.latest[payload.index].isLiked = !state.latest[payload.index].isLiked;
        break;

      default:
        break;
    }
  }

};
const actions = {
  async GET_PRODUCTS({
    state,
    commit
  }, page = 1) {
    const filter = state.filter;
    const data = await this.$axios.$get(`products?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`);
    commit('SET_PRODUCTS', data);
  },

  async GET_HIDDEN_PRODUCTS({
    state,
    commit
  }, page = 1) {
    const filter = state.filter;
    const data = await this.$axios.$get(`trashed-products?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`);
    commit('SET_PRODUCTS', data);
  },

  async GET_PRODUCT({
    commit
  }, id) {
    const data = await this.$axios.$get(`products/${id}`);
    commit('SET_PRODUCT', data);
  },

  async GET_LATEST({
    commit
  }) {
    const data = await this.$axios.$get('latest-products');
    commit('SET_LATEST', data);
  },

  async GET_LOWPRICE({
    commit
  }) {
    const data = await this.$axios.$get('low-price');
    commit('SET_LOWPRICE', data);
  },

  async GET_ALL_PRODUCTS({
    commit
  }) {
    const data = await this.$axios.$get('all-products');
    commit('SET_ALL_PRODUCTS', data);
  }

};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  results: {},
  searchQuery: ''
});
const getters = {
  SEARCH_RESULTS(state) {
    return state.results;
  }

};
const mutations = {
  SET_RESULTS(state, payload) {
    state.results = payload;
  },

  SET_SEARCH_QUERY(state, payload) {
    state.searchQuery = payload;
  }

};
const actions = {
  async GET_SEARCH_RESULTS({
    state,
    commit
  }) {
    const form = {
      search: state.searchQuery
    };
    const res = await this.$axios.$post('/admin-search', form);
    commit('SET_RESULTS', res);
  }

};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  transactions: {},
  transaction: {}
});
const getters = {
  TRANSACTIONS(state) {
    return state.transactions;
  },

  TRANSACTION(state) {
    return state.transaction;
  }

};
const mutations = {
  SET_TRANSACTIONS(state, payload) {
    payload.data.forEach(x => {
      x.total_price = Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatPrice */ "a"])(x.total_price);
    });
    state.transactions = payload;
  },

  SET_TRANSACTION(state, payload) {
    payload.data.total_price = Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatPrice */ "a"])(payload.data.total_price);
    payload.data.delivery_fee = Object(_plugins_customUtil__WEBPACK_IMPORTED_MODULE_0__[/* formatPrice */ "a"])(payload.data.delivery_fee);
    state.transaction = payload.data;
  }

};
const actions = {
  async GET_TRANSACTIONS({
    commit
  }, page = 1) {
    const data = await this.$axios.$get(`transactions?page=${page}`);
    commit('SET_TRANSACTIONS', data);
  },

  async GET_TRANSACTION({
    commit
  }, id) {
    const data = await this.$axios.$get(`transactions/${id}`);
    commit('SET_TRANSACTION', data);
  }

};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  users: {},
  admins: {},
  filter: {
    search: '',
    orderBy: 'created_at',
    orderDir: 'desc'
  }
});
const getters = {
  ADMINS(state) {
    return state.admins;
  },

  USERS(state) {
    return state.users;
  }

};
const mutations = {
  SET_ADMINS(state, payload) {
    state.admins = payload;
  },

  SET_USERS(state, payload) {
    state.users = payload;
  },

  SET_FILTER(state, payload) {
    state.filter.search = payload.search;
    state.filter.orderBy = payload.orderBy;
    state.filter.orderDir = payload.orderDir;
  }

};
const actions = {
  async GET_ADMINS({
    state,
    commit
  }, page = 1) {
    const filter = state.filter;
    const data = await this.$axios.$get(`admins?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`);
    commit('SET_ADMINS', data);
  },

  async GET_USERS({
    state,
    commit
  }, page = 1) {
    const filter = state.filter;
    const data = await this.$axios.$get(`users?page=${page}&search=${filter.search}&orderBy=${filter.orderBy}&orderDir=${filter.orderDir}`);
    commit('SET_USERS', data);
  }

};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("e8e18342", content, true)

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n  * Vuesax v4.0.1-alpha.24 🖖 (https://lusaxweb.github.io/vuesax/)\n  * Forged by Luis Daniel Rovira\n  * Released under the MIT License.\n  * Donate: https://www.patreon.com/bePatron?c=1567892\n  * © 2019, Lusaxweb. (https://lusaxweb.net)\n  */.vs-button{--vs-color:\"\";--vs-color-rotate:var(--vs-primary);--vs-color-darken:var(--vs-primary);--vs-button-padding:8px 12px;--vs-button-margin:5px;--vs-button-border-radius:12px;--vs-button-text-color:#fff;border:0;margin:var(--vs-button-margin);border-radius:var(--vs-button-border-radius);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0;outline:none;font-size:.8rem;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}.vs-button--fff:focus{color:#1e1e1e!important}.vs-button__content{padding:var(--vs-button-padding);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--active-disabled{pointer-events:none;opacity:.6}.vs-button:disabled{pointer-events:none;opacity:.35}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content i{font-size:1.15rem}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__content{-webkit-transform:translate(-100%);transform:translate(-100%)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__animate{-webkit-transform:translate(0);transform:translate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__content{-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__animate{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__content{-webkit-transform:scale(1.4)!important;transform:scale(1.4)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__animate{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__content{-webkit-transform:rotate(180deg)!important;transform:rotate(180deg)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__animate{opacity:1;-webkit-transform:rotate(0);transform:rotate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content,.vs-button__animate{-webkit-transition:-webkit-transform .25s ease;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease}.vs-button__animate{position:absolute;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;top:0;left:0;-webkit-transform:translate(100%);transform:translate(100%);pointer-events:none}.vs-button__animate--vertical{-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-button__animate--scale{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}.vs-button__animate--rotate{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);opacity:0}.vs-button--block{width:100%;display:block}.vs-button--upload:after{content:\"\";position:absolute;width:100%;height:100%;background:rgba(17,18,20,.4);background:rgba(var(--vs-color),.4);top:0;left:0;z-index:1200;-webkit-animation:btnupload .7s ease infinite;animation:btnupload .7s ease infinite;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-button .vs-button__loading{width:100%;height:100%;position:absolute;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(17,18,20,.8);background:rgba(var(--vs-color),.8);border-radius:inherit}.vs-button .vs-button__loading:after{border:2px solid hsla(0,0%,100%,0);border-left:2px dotted hsla(0,0%,100%,.6);border-radius:50%;-webkit-animation:btnload .6s linear infinite;animation:btnload .6s linear infinite}.vs-button .vs-button__loading:after,.vs-button .vs-button__loading:before{content:\"\";width:17px;height:17px;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button .vs-button__loading:before{border:2px solid hsla(0,0%,100%,0);border-left-color:#fff;border-radius:50%;-webkit-animation:btnload .6s ease infinite;animation:btnload .6s ease infinite}.vs-button--size-xl{border-radius:20px}.vs-button--size-xl .vs-button__content{padding:15px 20px;font-size:1.1rem}.vs-button--size-large{font-size:1rem;border-radius:15px}.vs-button--size-large .vs-button__content{padding:10px 15px}.vs-button--size-small{font-size:.75rem;border-radius:9px}.vs-button--size-small .vs-button__content{padding:5px 10px}.vs-button--size-mini{font-size:.6rem;border-radius:7px}.vs-button--size-mini .vs-button__content{padding:3px 8px}.vs-button--circle{border-radius:25px}.vs-button--square{border-radius:0}.vs-button--icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--icon .vs-button__content{padding:8px}.vs-button--icon i{font-size:1.15rem}.vs-button--default{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-button--default.vs-button--active,.vs-button--default:hover{-webkit-box-shadow:0 10px 20px -10px #111214;-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);box-shadow:0 10px 20px -10px #111214;box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--flat{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--flat.vs-button--dark{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-button--flat:hover{background:rgba(17,18,20,.25);background:rgba(var(--vs-color),.25)}.vs-button--flat:focus{-webkit-transition:all .25s ease,background .25s ease .25s;transition:all .25s ease,background .25s ease .25s}.vs-button--flat.vs-button--active,.vs-button--flat:focus{color:#fff;background:#111214;background:rgba(var(--vs-color),1)}.vs-button--floating{background:#111214;background:rgba(var(--vs-color),1);color:#fff;-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--floating,.vs-button--floating:hover{-webkit-box-shadow:0 8px 20px -6px #111214;-webkit-box-shadow:0 8px 20px -6px rgba(var(--vs-color),1);box-shadow:0 8px 20px -6px #111214;box-shadow:0 8px 20px -6px rgba(var(--vs-color),1)}.vs-button--floating:hover{-webkit-transform:translateY(-6px);transform:translateY(-6px)}.vs-button--floating.vs-button--active,.vs-button--floating:focus{-webkit-transform:translate(0);transform:translate(0);-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-button--border{background:rgba(17,18,20,0);background:rgba(var(--vs-color),0);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--border:before{content:\"\";border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background:transparent;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--border:hover:before{border:2px solid rgba(17,18,20,.5);border:2px solid rgba(var(--vs-color),.5)}.vs-button--border.vs-button--active,.vs-button--border:focus,.vs-button--gradient{color:#fff;background:#111214;background:rgba(var(--vs-color),1)}.vs-button--gradient{overflow:hidden}.vs-button--gradient.vs-button--primary:before,.vs-button--gradient.vs-button--success:before{-webkit-filter:hue-rotate(40deg);filter:hue-rotate(40deg)}.vs-button--gradient:before{content:\"\";background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:hue-rotate(-40deg);filter:hue-rotate(-40deg);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--gradient:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(17,18,20,.7);-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7);box-shadow:0 10px 20px -10px rgba(17,18,20,.7);box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7)}.vs-button--gradient:hover:before{opacity:0}.vs-button--gradient.vs-button--active{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(0,0,0,.35);box-shadow:0 10px 20px -10px rgba(0,0,0,.35)}.vs-button--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}.vs-button--relief .vs-button__content{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-button--relief.vs-button--icon.vs-button--active{height:auto}.vs-button--relief:before{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:calc(100% - 3px);border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:contrast(2) grayscale(.4);filter:contrast(2) grayscale(.4);border-bottom:3px solid #111214;border-bottom:3px solid rgba(var(--vs-color),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--relief:active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief:active .vs-button__content{padding-bottom:6px}.vs-button--relief:active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--relief.vs-button--active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief.vs-button--active .vs-button__content{padding-bottom:6px}.vs-button--relief.vs-button--active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--transparent{background:transparent;color:#111214;color:rgba(var(--vs-color),1);overflow:hidden}.vs-button--transparent:before{content:\"\";background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);position:absolute;bottom:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:-1;-webkit-transform:scale(.5);transform:scale(.5);opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--transparent:active:not(.vs-button--active):before{-webkit-transform:scale(.9)!important;transform:scale(.9)!important}.vs-button--transparent.vs-button--active:before,.vs-button--transparent:hover:before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-button--shadow{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);overflow:hidden;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-button--shadow:active:not(.vs-button--active){-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-button--shadow.vs-button--active,.vs-button--shadow:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 8px 25px 0 rgba(0,0,0,.05);box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}@keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}.vs-button-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button-group .vs-button{margin:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type){border-radius:0;border:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border:before{border-left:0;width:100%}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border+.vs-button--border:not(:last-of-type):before{border-right:0;width:100%}.vs-button-group .vs-button:last-of-type{border-radius:0 12px 12px 0}.vs-button-group .vs-button:first-of-type{border-radius:12px 0 0 12px}.vs-alert{--vs-color:var(--vs-primary);background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);color:#111214;color:rgba(var(--vs-color),1);width:100%;padding:0 20px;border-radius:0 12px 12px 0;position:relative;font-size:.9rem;z-index:10;-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert b{font-weight:600}.vs-alert a{color:inherit!important;text-decoration:underline}.vs-alert a:hover{opacity:.6}.vs-alert:after{content:\"\";left:0;top:0;width:2px;height:100%;position:absolute}.vs-alert--solid,.vs-alert:after{background:#111214;background:rgba(var(--vs-color),1)}.vs-alert--solid,.vs-alert--solid .vs-alert__icon i{color:#fff}.vs-alert--solid .vs-alert__icon svg{fill:#fff}.vs-alert--solid .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close svg{fill:#fff}.vs-alert--solid:after{background:hsla(0,0%,100%,.4)}.vs-alert--border{background:transparent}.vs-alert--border:before{border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-left:0;width:calc(100% - 2px);content:\"\";position:absolute;height:calc(100% - 2px);top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--shadow{background:transparent;-webkit-box-shadow:0 4px 15px 0 rgba(17,18,20,.12);-webkit-box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12);box-shadow:0 4px 15px 0 rgba(17,18,20,.12);box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12)}.vs-alert--gradient{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px}.vs-alert--gradient .vs-alert__icon i{color:#fff}.vs-alert--gradient .vs-alert__icon svg{fill:#fff}.vs-alert--gradient .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close svg{fill:#fff}.vs-alert--gradient:after{display:none}.vs-alert--gradient:before{background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));-webkit-filter:hue-rotate(-50deg);filter:hue-rotate(-50deg);width:100%;content:\"\";position:absolute;height:100%;top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--flat{background:rgba(0,0,0,.03)}.vs-alert--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px;-webkit-box-shadow:6px 6px 0 0 rgba(17,18,20,.3);-webkit-box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3);box-shadow:6px 6px 0 0 rgba(17,18,20,.3);box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3)}.vs-alert--relief .vs-alert__icon i{color:#fff}.vs-alert--relief .vs-alert__icon svg{fill:#fff}.vs-alert--relief .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);background:rgba(0,0,0,.2);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close svg{fill:#fff}.vs-alert--relief:after{display:none}.vs-alert__title{font-weight:600;font-size:1rem;padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vs-alert__title--clickHidden{cursor:pointer;padding-right:0}.vs-alert__title~.vs-alert__content .vs-alert__content__text{padding-top:0}.vs-alert__content{-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert__content__text{padding:20px 15px}.vs-alert__close{position:absolute;top:9px;right:6px;background:transparent;border:0;color:#111214;color:rgba(var(--vs-color),1);width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.3);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.3);box-shadow:0 0 0 0 rgba(17,18,20,.3);box-shadow:0 0 0 0 rgba(var(--vs-color),.3);border-radius:10px;padding:0}.vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 18px 0 rgba(17,18,20,.3);box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3)}.vs-alert__close svg{fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__footer{position:relative;width:100%;padding:0 15px 10px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-alert__footer,.vs-alert__icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-alert__icon{position:absolute;width:50px;height:100%;left:0;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:2px}.vs-alert__icon i{font-size:1.3rem;color:#111214;color:rgba(var(--vs-color),1)}.vs-alert__icon svg{width:24px;height:24px;fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__icon~.vs-alert__footer{padding-left:35px}.vs-alert__icon~.vs-alert__content{padding-left:20px}.vs-alert__icon~.vs-alert__title{padding-left:35px}.vs-alert__progress{width:100%;position:absolute;bottom:0;left:0;height:2px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-alert__progress__bar{width:30%;left:0;position:relative;height:100%;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination{position:relative;padding:0 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:10px}.vs-alert__pagination span{font-size:.8rem;margin:0 8px;min-width:28px;text-align:center}.vs-alert__pagination button{border:0;background:transparent;color:#111214;color:rgba(var(--vs-color),1);padding:0 7px;font-size:1rem;background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);border-radius:8px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination button:hover{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-icon-close{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-icon-close:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vs-icon-close:after,.vs-icon-close:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:16px;height:2px;border-radius:2px;-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-close:after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vs-icon-close.vs-icon-hover-less:hover:after,.vs-icon-close.vs-icon-hover-less:hover:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-plus{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer}.vs-icon-plus:before{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-plus:after,.vs-icon-plus:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:14px;height:2px;border-radius:2px}.vs-icon-plus:after{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .4s ease;transition:all .4s ease}.vs-icon-plus:hover:not(.less){-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.vs-icon-plus.less:hover{-webkit-transform:scale(.75);transform:scale(.75)}.vs-icon-plus.less:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-check{width:23px;height:23px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-icon-check span{-webkit-transform:rotate(45deg);transform:rotate(45deg);display:block;position:relative;width:8px;height:13px;margin-top:-4px}.vs-icon-check span .line1{background:transparent;content:\"\";position:absolute;height:2px;border-radius:2px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px;z-index:100;width:8px;bottom:0}.vs-icon-check span .line1:after{content:\"\";position:absolute;width:0;height:2px;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px 0 0 5px}.vs-icon-check span .line2{bottom:0;right:0;z-index:100;background:transparent;content:\"\";position:absolute;height:13px;border-radius:5px;-webkit-transition:all .2s ease;transition:all .2s ease;width:2px}.vs-icon-check span .line2:after{content:\"\";position:absolute;width:2px;height:0%;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;bottom:0;border-radius:5px 5px 0 0}.vs-icon-check.active:before{width:8px}.vs-icon-check.active:after{width:4px}.vs-icon-check.indeterminate span{-webkit-transform:rotate(0);transform:rotate(0);height:auto;margin:0;width:auto}.vs-icon-check.indeterminate span:after{position:relative;content:\"\";width:10px;height:2px;background:#fff;display:block}.vs-icon-check.indeterminate span .line1{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);bottom:0;right:-1px;opacity:0;display:none}.vs-icon-check.indeterminate span .line2{right:0!important;bottom:-.14rem!important;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important;-webkit-transition:all .25s ease!important;transition:all .25s ease!important;height:11px!important;display:none}.vs-icon-arrow{pointer-events:none;width:7px;height:7px;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform-origin:center;transform-origin:center}.vs-icon-arrow:after{width:100%;height:1px}.vs-icon-arrow:after,.vs-icon-arrow:before{content:\"\";background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;display:block;top:0}.vs-icon-arrow:before{width:1px;height:100%}.vs-input-parent{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}.vs-input-parent.square .vs-input-content{border-radius:0!important}.vs-input-parent.textWhite .vs-input{color:#fff}.vs-input-parent.transparent .vs-input{background:transparent!important}.vs-input-parent.block,.vs-input-parent.block .vs-input{width:100%}.vs-input-parent--has-label{margin-top:20px!important}.vs-input-parent--state-success .vs-input{background:rgba(70,201,58,.1)!important;background:rgba(var(--vs-success),.1)!important}.vs-input-parent--state-success .vs-input,.vs-input-parent--state-success .vs-input__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input-parent--state-success .vs-input__icon{color:#46c93a;color:rgba(var(--vs-success),1);background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-input-parent--state-danger .vs-input{background:rgba(255,71,87,.1)!important;background:rgba(var(--vs-danger),.1)!important}.vs-input-parent--state-danger .vs-input,.vs-input-parent--state-danger .vs-input__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input-parent--state-danger .vs-input__icon{color:#ff4757;color:rgba(var(--vs-danger),1);background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-input-parent--state-warn .vs-input{background:rgba(255,186,0,.1)!important;background:rgba(var(--vs-warn),.1)!important}.vs-input-parent--state-warn .vs-input,.vs-input-parent--state-warn .vs-input__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input-parent--state-warn .vs-input__icon{color:#ffba00;color:rgba(var(--vs-warn),1);background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-input-parent--state-dark .vs-input{background:rgba(30,30,30,.1)!important;background:rgba(var(--vs-dark),.1)!important}.vs-input-parent--state-dark .vs-input,.vs-input-parent--state-dark .vs-input__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input-parent--state-dark .vs-input__icon{color:#1e1e1e;color:rgba(var(--vs-dark),1);background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-input-parent--state-primary .vs-input{background:rgba(25,91,255,.1)!important;background:rgba(var(--vs-primary),.1)!important}.vs-input-parent--state-primary .vs-input,.vs-input-parent--state-primary .vs-input__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input-parent--state-primary .vs-input__icon{color:#195bff;color:rgba(var(--vs-primary),1);background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-input-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;border-radius:12px}.vs-input-content+.vs-input__message{padding-top:2px}.vs-input-content--has-color .vs-input:focus{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1)}.vs-input-content--has-color .vs-input:focus~.vs-input__icon,.vs-input-content--has-color .vs-input:focus~.vs-input__label,.vs-input-content--has-color .vs-input:focus~.vs-input__label--placeholder{color:#111214;color:rgba(var(--vs-color),1)}.vs-input{border:2px solid transparent;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;padding:7px 13px 7px 10px;width:200px}.vs-input:focus{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);padding-left:15px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after){padding-left:40px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__icon{-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){left:44px}.vs-input:focus~.vs-input__icon{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input:focus~.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input:focus~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){opacity:0;left:20px}.vs-input:focus~.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-77%);transform:translate(-3%,-77%);font-size:.75rem}.vs-input__label{position:absolute;left:13px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4}.vs-input__label--hidden{opacity:0;visibility:hidden}.vs-input__label--hidden.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3px,-80%);transform:translate(-3px,-80%);font-size:.75rem}.vs-input__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-2px,-77%);transform:translate(-2px,-77%);font-size:.75rem}.vs-input--has-icon{padding-left:38px}.vs-input--has-icon~.vs-input__label{left:44px}.vs-input--has-icon--after{padding-left:7px;padding-right:38px}.vs-input--has-icon--after~.vs-input__label{left:13px}.vs-input--has-icon--after.vs-input__label--label,.vs-input--has-icon:focus--has-icon--after~.vs-input__label--placeholder{-webkit-transform:translate(-25px,-80%)!important;transform:translate(-25px,-80%)!important}.vs-input--has-icon:focus--has-icon--after~.vs-input__label{left:44px}.vs-input__icon{position:absolute;right:auto;width:36px;height:36px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:12px 0 10px -10px rgba(0,0,0,.05);box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);pointer-events:none;left:0}.vs-input__icon--after{left:auto;right:0;-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input__icon--click{pointer-events:auto!important;cursor:pointer}.vs-input__icon--click:hover{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input__icon--click:hover.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-input__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input__progress{width:95%;left:2.5%;position:relative;height:2px;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);margin-top:5px;overflow:hidden;border-radius:5px}.vs-input__progress--danger .vs-input__progress__bar{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-input__progress--warn .vs-input__progress__bar{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-input__progress--success .vs-input__progress__bar{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-input__progress__bar{width:32%;height:2px;max-width:100%;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px}.vs-input__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default}.vs-input__loading:after{border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-input__loading:after,.vs-input__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-input__loading:before{border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-input-parent--border .vs-input__icon{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-input-parent--border .vs-input-content{border-radius:0}.vs-input-parent--border .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.vs-input-parent--border .vs-input-content .vs-input__affects__1{border-bottom:2px solid #f0f3f4;border-bottom:2px solid rgba(var(--vs-gray-3),1);width:100%;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-input-parent--border .vs-input-content .vs-input__affects__2{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1);width:0;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-input-parent--border .vs-input-content .vs-input{background:transparent;border-radius:0}.vs-input-parent--border .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__2{width:100%}.vs-input-parent--shadow .vs-input__icon{background:transparent;z-index:100}.vs-input-parent--shadow .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;border-radius:inherit;pointer-events:none;z-index:10}.vs-input-parent--shadow .vs-input-content .vs-input__affects__1{-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,.05);-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 6px 25px -6px rgba(0,0,0,.05);box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));width:100%;height:100%;position:absolute;top:0;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200;border-radius:inherit}.vs-input-parent--shadow .vs-input-content .vs-input{background:transparent;border-radius:0;border:2px solid transparent}.vs-input-parent--shadow .vs-input-content .vs-input:focus{-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__icon{background:#fff!important;background:rgba(var(--vs-background),1)!important;opacity:1;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__1{-webkit-transform:translateY(3px);transform:translateY(3px);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 3px 0 rgba(0,0,0,.05);box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox-content{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-checkbox-con{width:23px;height:23px;border-radius:9px;position:relative;z-index:1}.vs-checkbox-mask{border-radius:32%;width:100%;height:100%;position:absolute;z-index:50;cursor:pointer;pointer-events:none;-webkit-box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:-1;box-sizing:border-box}.vs-checkbox-mask i:not(.vs-icon-check){color:#fff;font-size:1.1em}.vs-checkbox-mask:after,.vs-checkbox-mask i:not(.vs-icon-check){opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox-mask:after{background:#111214;background:rgba(var(--vs-color),1);border-radius:inherit}.vs-checkbox-mask:after,.vs-checkbox-mask:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.vs-checkbox-mask:before{border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;border:2px solid #e6e9ea;border:2px solid rgba(var(--vs-gray-4),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-checkbox-mask .vs-icon-check{opacity:0;z-index:200}.vs-checkbox{position:absolute;width:100%;height:100%;top:0;left:0;margin:0;padding:0;opacity:0;z-index:100;cursor:pointer}.vs-checkbox:disabled{opacity:0;pointer-events:none}.vs-checkbox:active~.vs-checkbox-mask{background:#e6e9ea!important;background:rgba(var(--vs-gray-4),1)!important}.vs-checkbox:hover~.vs-checkbox-mask{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-checkbox:hover~.vs-checkbox-mask:before{border:2px solid rgba(230,233,234,0);border:2px solid rgba(var(--vs-gray-4),0)}.vs-checkbox:checked:hover~.vs-checkbox-mask{-webkit-box-shadow:0 3px 15px 0 rgba(17,18,20,.35);-webkit-box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35);box-shadow:0 3px 15px 0 rgba(17,18,20,.35);box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask{-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.35);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.35);box-shadow:0 0 0 0 rgba(17,18,20,.35);box-shadow:0 0 0 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask i:not(.vs-icon-check){opacity:1;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease .15s;transition:all .25s ease .15s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check{opacity:1}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line1:after{width:100%;-webkit-transition:all .25s ease .1s;transition:all .25s ease .1s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line2:after{-webkit-transition:all .2s ease .3s;transition:all .2s ease .3s;height:100%}.vs-checkbox:checked~.vs-checkbox-mask:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-checkbox:checked~.vs-checkbox-mask:before{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-checkbox-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:7px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem}.vs-checkbox-label,.vs-checkbox-label:before{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-checkbox-label:before{position:absolute;width:0;height:2px;background:rgba(44,62,80,.6);background:rgba(var(--vs-text),.6);content:\"\"}.vs-checkbox--disabled{pointer-events:none}.vs-checkbox--disabled .vs-checkbox-label{opacity:.5}.vs-checkbox--disabled .vs-checkbox-mask{opacity:.6;background:transparent!important}.vs-checkbox--checked .lineThrough{opacity:.4}.vs-checkbox--checked .lineThrough:before{width:calc(100% - 10px)}.vs-checkbox--loading{pointer-events:none}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:before{border-radius:50%;border:2px solid #111214!important;border:2px solid rgba(var(--vs-color),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite;opacity:1!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:after{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox--loading .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading .vs-checkbox-mask:before{border-radius:50%;border:2px solid #e6e9ea!important;border:2px solid rgba(var(--vs-gray-4),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite}@-webkit-keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox--label-before .vs-checkbox-label{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.vs-switch{--vs-color:var(--vs-primary)}@-webkit-keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-switch{color:#fff;padding:5px;border-radius:20px;min-width:48px;height:28px;border:0;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-switch--icon .vs-switch__input:checked~.vs-switch__circle{color:#fff!important}.vs-switch--icon .vs-switch__circle{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-switch--icon .vs-switch__circle i{opacity:1;font-size:1.3rem}.vs-switch--indeterminate .vs-switch__input{pointer-events:none}.vs-switch--indeterminate .vs-switch__circle{left:50%!important;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-switch--square{border-radius:5px}.vs-switch--square .vs-switch__background,.vs-switch--square .vs-switch__circle{border-radius:5px!important}.vs-switch:after{border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s linear .25s infinite;animation:rotateSwitch .6s linear .25s infinite}.vs-switch:after,.vs-switch:before{-webkit-transition:all 0s ease 0s;transition:all 0s ease 0s;opacity:0;visibility:hidden;content:\"\";position:absolute;width:calc(100% - 8px);height:calc(100% - 8px);z-index:200;pointer-events:none}.vs-switch:before{border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s ease .25s infinite;animation:rotateSwitch .6s ease .25s infinite}.vs-switch--loading{width:28px!important;min-width:28px!important;pointer-events:none;border-radius:20px!important}.vs-switch--loading .vs-switch__circle{border-radius:50%!important}.vs-switch--loading .vs-switch__background{opacity:0!important}.vs-switch--loading:after,.vs-switch--loading:before{opacity:1;visibility:visible;-webkit-transition:all .25s ease .3s;transition:all .25s ease .3s}.vs-switch:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-switch:active{-webkit-transform:scale(.9);transform:scale(.9)}.vs-switch__background{width:100%;height:auto;position:absolute;background:#111214;background:rgba(var(--vs-color),1);border-radius:inherit;z-index:2;-webkit-transition:all .25s ease-out;transition:all .25s ease-out;-webkit-transform:scale(1);transform:scale(1);left:-100%;border-radius:50%;padding-bottom:100%}.vs-switch__text{font-size:.7rem;padding:5px 5px 5px 25px;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;color:#2c3e50;color:rgba(var(--vs-text),1);z-index:9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;overflow:hidden;white-space:nowrap}.vs-switch__text.on{-webkit-transform:translate(-100%);transform:translate(-100%);position:absolute;opacity:0}.vs-switch__text i{font-size:1rem;opacity:.7}.vs-switch__circle{width:20px;height:20px;background:#fff;background:rgba(var(--vs-background),1);border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;position:absolute;z-index:10;left:4px;color:#2c3e50;color:rgba(var(--vs-text),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-switch__circle i{font-size:.8rem}.vs-switch__input{position:absolute;width:100%;opacity:0!important;height:100%;border-radius:inherit;z-index:100;top:0;left:0;margin:0;cursor:pointer}.vs-switch__input:active:checked~.vs-switch__circle{left:calc(100% - 30px)}.vs-switch__input:active~.vs-switch__circle{width:25px}.vs-switch__input:checked~.vs-switch__background{opacity:1;-webkit-transform:scale(1);transform:scale(1);width:100%;padding-bottom:100%;left:0;border-radius:50%;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-switch__input:checked~.vs-switch__text{padding-left:5px;padding-right:25px;color:#fff}.vs-switch__input:checked~.vs-switch__text i{opacity:1}.vs-switch__input:checked~.vs-switch__text.on{-webkit-transform:translate(0);transform:translate(0);position:relative;opacity:1}.vs-switch__input:checked~.vs-switch__text.off{-webkit-transform:translate(100%);transform:translate(100%);position:absolute;opacity:0}.vs-switch__input:checked~.vs-switch__circle{left:calc(100% - 24px);-webkit-box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);-webkit-box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);color:#111214;color:rgba(var(--vs-color),1)}.vs-select{--vs-color:var(--vs-primary)}.vs-select__options .vs-checkbox-content{--vs-color:inherit}.vs-select-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-enter{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-enter,.vs-select-enter:after{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-enter:after{opacity:0!important}.vs-select-leave-active,.vs-select-leave-to{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-leave-to{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-leave-to.top{-webkit-transform:translateY(10px)!important;transform:translateY(10px)!important}.vs-select-leave-to:after{opacity:0!important;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-content{width:100%;max-width:200px}.vs-select-content.block.block{max-width:100%}.vs-select{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:38px;width:100%}.vs-select--state-success .vs-select__input{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-success .vs-select__chips{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__chips:hover:after{opacity:0}.vs-select--state-success .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(70,201,58,.5);border:2px solid rgba(var(--vs-success),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-success .vs-select__icon,.vs-select--state-success .vs-select__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__icon{background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-select--state-success .vs-icon-arrow:after,.vs-select--state-success .vs-icon-arrow:before{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-select--state-danger .vs-select__input{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-danger .vs-select__chips{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__chips:hover:after{opacity:0}.vs-select--state-danger .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,71,87,.5);border:2px solid rgba(var(--vs-danger),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-danger .vs-select__icon,.vs-select--state-danger .vs-select__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__icon{background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-select--state-danger .vs-icon-arrow:after,.vs-select--state-danger .vs-icon-arrow:before{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select--state-warn .vs-select__input{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-warn .vs-select__chips{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__chips:hover:after{opacity:0}.vs-select--state-warn .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,186,0,.5);border:2px solid rgba(var(--vs-warn),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-warn .vs-select__icon,.vs-select--state-warn .vs-select__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__icon{background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-select--state-warn .vs-icon-arrow:after,.vs-select--state-warn .vs-icon-arrow:before{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-select--state-dark .vs-select__input{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-dark .vs-select__chips{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__chips:hover:after{opacity:0}.vs-select--state-dark .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(30,30,30,.5);border:2px solid rgba(var(--vs-dark),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-dark .vs-select__icon,.vs-select--state-dark .vs-select__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__icon{background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-select--state-dark .vs-icon-arrow:after,.vs-select--state-dark .vs-icon-arrow:before{background:#1e1e1e;background:rgba(var(--vs-dark),1)}.vs-select--state-primary .vs-select__input{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-primary .vs-select__chips{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__chips:hover:after{opacity:0}.vs-select--state-primary .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(25,91,255,.5);border:2px solid rgba(var(--vs-primary),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-primary .vs-select__icon,.vs-select--state-primary .vs-select__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__icon{background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-select--state-primary .vs-icon-arrow:after,.vs-select--state-primary .vs-icon-arrow:before{background:#195bff;background:rgba(var(--vs-primary),1)}.vs-select.loading{pointer-events:none}.vs-select.loading :not(.vs-select__loading):not(.vs-select__label){opacity:.6}.vs-select.loading .vs-select__label{pointer-events:none!important}.vs-select.top.activeOptions .vs-select__chips,.vs-select.top.activeOptions .vs-select__input{border-radius:0 0 12px 12px!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-select--disabled{opacity:.6;pointer-events:none}.vs-select--disabled label{pointer-events:none}.vs-select .vs-icon-arrow{z-index:600;position:absolute;right:15px;margin-top:-2px;-webkit-transition:all .25s ease;transition:all .25s ease;pointer-events:auto;cursor:pointer}.vs-select.activeOptions .vs-icon-arrow{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-top:-2px!important}.vs-select.activeOptions .vs-select__input{border-radius:12px 12px 0 0;border:2px solid transparent;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select.activeOptions .vs-select__chips,.vs-select.activeOptions .vs-select__input{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s}.vs-select.activeOptions .vs-select__chips{border-radius:12px 12px 0 0}.vs-select.activeOptions .vs-select__chips:after{opacity:0}.vs-select.activeOptions .vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select.activeOptions .vs-select__label{margin-top:-4px}.vs-select__input{opacity:1;background:transparent;border:2px solid transparent;border-radius:12px;cursor:pointer;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);min-height:38px;padding:7px 30px 7px 13px;width:100%}.vs-select__input.multiple{color:transparent;background:transparent;pointer-events:none}.vs-select__input.simple{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-select__input:focus{border-radius:12px 12px 0 0;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__input:focus~.vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__input:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px)}.vs-select__input:hover~.vs-select__label{margin-top:-4px}.vs-select__input:hover~.vs-icon-arrow{margin-top:-6px}.vs-select__chips{width:100%;height:auto;position:absolute;left:0;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);z-index:300;border-radius:12px;display:-webkit-box;display:-ms-flexbox;border:0;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:38px;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;padding:5px 26px 5px 5px}.vs-select__chips:focus{border-radius:12px 12px 0 0}.vs-select__chips:focus,.vs-select__chips:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips:hover~.vs-icon-arrow{margin-top:-6px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__input{width:auto;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:100%;position:relative;min-width:0;border:0 solid transparent;background:transparent;margin:2px 3px;min-width:30px}.vs-select__chips__input::-webkit-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-moz-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input:-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__chip{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;background:#fff;background:rgba(var(--vs-background),1);border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:2px 3px;padding:0 10px 0 6px;font-size:.84rem;border:2px solid #f4f7f8;border:2px solid rgba(var(--vs-gray-2),1);-webkit-box-sizing:border-box;box-sizing:border-box;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select__chips__chip.isCollapse{padding-right:6px!important}.vs-select__chips__chip__close{position:absolute;top:-4px;right:-4px;width:15px;height:15px;background:#e6e9ea;background:rgba(var(--vs-gray-4),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;font-size:.75rem;cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__chip__close:hover{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select__chips__chip__close:hover .vs-icon-close{--vs-color:var(--vs-background)}.vs-select__chips__chip__close:hover .vs-icon-close:after,.vs-select__chips__chip__close:hover .vs-icon-close:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-select__chips__chip__close .vs-icon-close{--vs-color:var(--vs-text);-webkit-transform:scale(.5);transform:scale(.5)}.vs-select__options{--vs-color:var(--vs-primary);position:absolute;z-index:99999;background:#fff;background:rgba(var(--vs-background),1);padding:5px;border-radius:0 0 12px 12px;overflow:hidden;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 20px -5px rgba(0,0,0,.05);box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top{border-radius:12px 12px 0 0;-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top:after{top:auto;bottom:-10px}.vs-select__options:after{content:\"\";position:absolute;top:-10px;width:80%;margin-left:10%;left:0;height:10px;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 20px 0 rgba(0,0,0,.05);box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));z-index:200;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;opacity:1}.vs-select__options__content{max-height:200px;overflow:auto;height:auto;z-index:100;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;scroll-behavior:smooth}.vs-select__options__content__not-data{font-size:.8rem;text-align:center;padding:6px 10px}.vs-select__options__content::-webkit-scrollbar{width:5px;height:5px;display:block;background:transparent}.vs-select__options__content::-webkit-scrollbar-thumb{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);border-radius:5px}.vs-select__label{position:absolute;left:14px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4;z-index:500}.vs-select__label--hidden{opacity:0;visibility:hidden}.vs-select__label--hidden.vs-select__label--placeholder,.vs-select__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default;z-index:600}.vs-select__loading:after{border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-select__loading:after,.vs-select__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-select__loading:before{border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-select__loading~.vs-icon-arrow{opacity:0!important}.vs-select__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-select__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-darken .vs-select__options.isColorDark{--vs-color:0,0,0!important}.vs-darken .vs-select__options.isColorDark .vs-select__option:hover{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2);color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-darken .vs-select__options.isColorDark .activeOption{color:#2c3e50;color:rgba(var(--vs-text),1);background:rgba(17,18,20,.6);background:rgba(var(--vs-color),.6)}.vs-select__option{border:0;width:100%;padding:6px 10px;text-align:left;background:transparent;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:5px;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));margin:2px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;opacity:1;visibility:visible;max-height:40px}.vs-select__option.hiddenOption{opacity:0;visibility:hidden;max-height:0;padding-top:0;padding-bottom:0;border:0;margin:0}.vs-select__option.isMultiple{padding:0 0 0 5px}.vs-select__option.isMultiple .vs-select__option-group{padding-left:0}.vs-select__option.isMultiple.isHover{background:#f4f7f8!important;background:rgba(var(--vs-gray-2),1)!important}.vs-select__option.isMultiple:disabled .vs-checkbox-content{pointer-events:none}.vs-select__option.isMultiple:hover{padding-left:5px!important}.vs-select__option.isMultiple .vs-checkbox-content{width:100%;pointer-events:none}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-con{-webkit-transform:scale(.85);transform:scale(.85)}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-label{width:calc(100% - 23px);text-align:left;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-select__option.isMultiple.activeOption{pointer-events:auto!important}.vs-select__option.isHover{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-select__option.activeOption{background:rgba(17,18,20,.05);background:rgba(var(--vs-color),.05);color:#111214;color:rgba(var(--vs-color),1);pointer-events:none}.vs-select__option:hover:not(:disabled){color:#111214;color:rgba(var(--vs-color),1);padding-left:14px}.vs-select__option-group{padding-left:10px;border-bottom:2px solid #f9fcfd;border-bottom:2px solid rgba(var(--vs-gray-1),1);position:relative;overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__option-group:last-child{border:0}.vs-select__option-group.hiddenOptionGroup{border-bottom:0 solid #f9fcfd;border-bottom:0 solid rgba(var(--vs-gray-1),1)}.vs-select__option-group.hiddenOptionGroup h5{padding:0;max-height:0}.vs-select__option-group h5{max-height:28px;-webkit-transition:all .25s ease;transition:all .25s ease;opacity:.5;margin:0;padding:7px 0;font-size:.7rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.vs-select__option-group h5 *{pointer-events:none}.vs-avatar-content{--vs-color:var(--vs-gray-2);--vs-badge:var(--vs-primary);border-radius:35%;z-index:1;width:44px;height:44px;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar-content.vs-change-color-badge .vs-avatar__badge .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar-content.vs-change-color:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1)}.vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04)}.vs-avatar-content:hover img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-avatar-content--size.history:after{top:-2px!important}.vs-avatar-content--hasIcons{margin-right:20px}.vs-avatar-content--hidden{display:none}.vs-avatar-content--circle{border-radius:50%!important}.vs-avatar-content--circle .vs-avatar__badge{right:-2px;bottom:-2px}.vs-avatar-content--circle .vs-avatar__badge.top-right{top:-2px;bottom:auto}.vs-avatar-content--circle .vs-avatar__badge.top-left{top:-2px;left:-2px;bottom:auto;right:auto}.vs-avatar-content--circle .vs-avatar__badge.bottom-left{left:-2px;right:auto}.vs-avatar-content--square{border-radius:0!important}.vs-avatar-content.history--gradient:after{background-image:linear-gradient(40deg,#f99b4a,#df376b 74%,#c52d91 0)!important}.vs-avatar-content.history .vs-avatar{width:calc(100% - 4px);height:calc(100% - 4px);border:2px solid #fff;border:2px solid rgba(var(--vs-background),1);margin:2px}.vs-avatar-content.history:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background-color:#ffe53b;z-index:-1;background:#111214;background:rgba(var(--vs-color),1)}.vs-avatar-content.vs-component--is-color .vs-avatar{color:#fff;color:rgba(var(--vs-background),1)}.vs-avatar-content.vs-component--is-color .vs-avatar__points .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;width:100%;height:100%;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.05);box-shadow:inset 0 0 0 0 rgba(0,0,0,.05)}.vs-avatar i{font-size:1.4rem}.vs-avatar img{width:100%;height:auto;display:block;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-avatar__loading{position:absolute;width:100%;top:0;left:0;background:rgba(0,0,0,.5);z-index:100;height:100%;border-radius:inherit}.vs-avatar__loading,.vs-avatar__loading__animate{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__loading__animate{height:60%;width:60%;border-radius:50%;position:relative}.vs-avatar__loading__animate:after{border-radius:inherit;border:2px solid transparent;border-bottom-color:#fff;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-avatar__loading__animate:after,.vs-avatar__loading__animate:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-avatar__loading__animate:before{border-radius:inherit;border:2px solid transparent;border-bottom:2px dashed #fff;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-avatar--letter--3{font-size:.9rem}.vs-avatar--letter--4{font-size:.8rem}.vs-avatar--letter--5{font-size:.7rem}.vs-avatar--letter--6{font-size:.6rem}.vs-avatar__badge{position:absolute;width:13px;height:13px;background:rgba(var(--vs-badge),1);border-radius:50%;border:2px solid #fff!important;border:2px solid rgba(var(--vs-background),1)!important;right:-4px;bottom:-4px;font-size:.6rem;font-weight:700;z-index:200;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-avatar__badge.isSlot,.vs-avatar__badge.writing{width:auto;height:auto;border-radius:7px;min-width:18px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;color:rgba(var(--vs-background),1);line-height:.9rem;padding:0 3px;min-height:18px}.vs-avatar__badge.top-right{top:-4px;bottom:auto}.vs-avatar__badge.top-left{top:-4px;left:-4px;bottom:auto;right:auto}.vs-avatar__badge.bottom-left{left:-4px;right:auto}.vs-avatar__points{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__points__point{width:5px;height:5px;background:#2c3e50;background:rgba(var(--vs-text),1);margin:0 2px;border-radius:50%}.vs-avatar__points__point:first-child{-webkit-animation:point 1.2s ease infinite;animation:point 1.2s ease infinite}.vs-avatar__points__point:nth-child(2){-webkit-animation:point 1.2s ease .4s infinite;animation:point 1.2s ease .4s infinite}.vs-avatar__points__point:nth-child(3){-webkit-animation:point 1.2s ease .8s infinite;animation:point 1.2s ease .8s infinite}.vs-avatar__latest{background:rgba(0,0,0,.5);top:0;left:0;width:100%;height:100%;z-index:300;border-radius:inherit;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar__icons,.vs-avatar__latest{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__icons{width:auto;height:auto;min-height:90%;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:-20px;padding:3px 3px 3px 5px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:-1;border-radius:5px 5px 5px 5px;font-size:1rem}.vs-avatar__icons i{cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-avatar__icons i:hover{opacity:.7}@-webkit-keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}@keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}.vs-avatar__group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:18px}.vs-avatar__group.float{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding-left:0}.vs-avatar__group.float .vs-avatar-content{position:relative;z-index:2;border:3px solid vs-color(\"background\");margin:0}.vs-avatar__group:not(.float) .vs-avatar-content{margin-left:-18px;position:relative;z-index:2}.vs-avatar__group:not(.float) .vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.1);box-shadow:inset 0 0 0 0 rgba(0,0,0,.1)}.vs-avatar__group:not(.float) .vs-avatar-content:hover img{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content .vs-avatar__latest{width:calc(100% - 6px);height:calc(100% - 6px);margin:3px}.vs-avatar__group:not(.float) .vs-avatar-content:not(.vs-change-color) .vs-avatar{background:vs-color(\"background\")}.vs-avatar__group:not(.float) .vs-avatar-content img{width:calc(100% - 6px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons){-webkit-transform:translate(-10px);transform:translate(-10px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons) .vs-avatar{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons{margin-right:0}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons:hover{-webkit-transform:translate(-34px)!important;transform:translate(-34px)!important}.vs-radio-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-radio-content.active .vs-radio__effect__icon{opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:scale(1.3);transform:scale(1.3)}.vs-radio-content.active .vs-radio__effect:after{border:7px solid #111214;border:7px solid rgba(var(--vs-color),1);-webkit-box-shadow:0 3px 12px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3);box-shadow:0 3px 12px 0 rgba(17,18,20,.3);box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3)}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect .vs-radio__effect__icon{opacity:.7}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect:after{border:2px solid rgba(44,62,80,.2);border:2px solid rgba(var(--vs-text),.2)}.vs-radio-content.loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-radio-content.loading .vs-radio__effect:after{opacity:.1}.vs-radio-content.loading .vs-radio__effect__loading{position:absolute;width:100%;height:100%;border-radius:inherit}.vs-radio-content.loading .vs-radio__effect__loading:after{border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right-color:rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right-color:rgba(var(--vs-text),.4);-webkit-animation:loadingRadio .6s ease infinite;animation:loadingRadio .6s ease infinite}.vs-radio-content.loading .vs-radio__effect__loading:after,.vs-radio-content.loading .vs-radio__effect__loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4)}.vs-radio-content.loading .vs-radio__effect__loading:before{border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right:2px dashed rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right:2px dashed rgba(var(--vs-text),.4);-webkit-animation:loadingRadio .6s linear infinite;animation:loadingRadio .6s linear infinite}.vs-radio-content label{cursor:pointer}.vs-radio-content.disabled{opacity:.5;pointer-events:none}.vs-radio-content.disabled .vs-radio__effect{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-radio-content.disabled label{pointer-events:none}.vs-radio{width:20px;height:20px;min-width:20px;min-height:20px;margin:0;padding:0;border-radius:50%;position:relative;z-index:10}.vs-radio__label{margin:0 6px}.vs-radio__effect{position:absolute;width:100%;height:100%;border-radius:inherit;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:10}.vs-radio__effect,.vs-radio__effect__icon{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-radio__effect__icon i{font-size:.75rem}.vs-radio__effect:after{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),.4);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4)}.vs-radio input{margin:0;padding:0;width:100%;height:100%;position:relative;z-index:100;opacity:0;cursor:pointer}.vs-radio input:active~.vs-radio__effect:after{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-tooltip{--vs-color:var(--vs-text)}.vs-tooltip-enter-active,.vs-tooltip-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-tooltip-enter,.vs-tooltip-leave-to{opacity:0}.vs-tooltip-enter.top,.vs-tooltip-leave-to.top{-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-tooltip-enter.bottom,.vs-tooltip-leave-to.bottom{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-tooltip-enter.left,.vs-tooltip-leave-to.left{-webkit-transform:translate(5px);transform:translate(5px)}.vs-tooltip-enter.right,.vs-tooltip-leave-to.right{-webkit-transform:translate(-5px);transform:translate(-5px)}.darken .vs-tooltip{--vs-color:var(--vs-gray-3);color:#fff}.darken .vs-tooltip:not(.vs-change-color){color:#fff!important}.vs-tooltip{background:#111214;background:rgba(var(--vs-color),1);color:#fff;color:rgba(var(--vs-background),1);position:absolute;z-index:1000000;text-align:center;padding:5px 10px;border-radius:12px;font-size:.85rem;max-width:350px;min-width:30px;min-height:30px}.vs-tooltip.loading{color:hsla(0,0%,100%,.2);color:rgba(var(--vs-background),.2)}.vs-tooltip.loading *{opacity:.5;pointer-events:none}.vs-tooltip__loading{width:22px;height:22px;position:absolute;display:block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%;opacity:1!important}.vs-tooltip__loading:after{border-radius:inherit;border:2px solid hsla(0,0%,100%,0);border-right-color:#fff;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-background),1);-webkit-animation:loadingTooltip .6s ease infinite;animation:loadingTooltip .6s ease infinite}.vs-tooltip__loading:after,.vs-tooltip__loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-tooltip__loading:before{border-radius:inherit;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #fff;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-background),1);-webkit-animation:loadingTooltip .6s linear infinite;animation:loadingTooltip .6s linear infinite}.vs-tooltip.borderThick{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.borderThick.top{border-bottom:4px solid #111214;border-bottom:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.top:after{bottom:-7px}.vs-tooltip.borderThick.left{border-right:4px solid #111214;border-right:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.left:after{right:-7px}.vs-tooltip.borderThick.right{border-left:4px solid #111214;border-left:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.right:after{left:-7px}.vs-tooltip.borderThick.bottom{border-top:4px solid #111214;border-top:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.bottom:after{top:-7px}.vs-tooltip.borderThick:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.borderThick:after{background:#111214!important;background:rgba(var(--vs-color),1)!important}.vs-tooltip.border{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-tooltip.border:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.border:after{border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);width:12px!important;height:12px!important}.vs-tooltip.circle{border-radius:20px}.vs-tooltip.square{border-radius:0}.vs-tooltip.notArrow:after{display:none}.vs-tooltip.shadow{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.shadow:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.shadow:after{-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.isDark{--vs-color:var(--vs-gray-3);color:#fff}.vs-tooltip.top:after{bottom:-3px;border-radius:0 0 2px 0}.vs-tooltip.bottom:after,.vs-tooltip.top:after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;left:50%;-webkit-transform:translate(-50%) rotate(45deg);transform:translate(-50%) rotate(45deg);z-index:-2}.vs-tooltip.bottom:after{top:-3px;border-radius:2px 0 0 0}.vs-tooltip.left:after{right:-3px;border-radius:0 2px 0 0}.vs-tooltip.left:after,.vs-tooltip.right:after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;top:50%;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);z-index:-2}.vs-tooltip.right:after{left:-3px;border-radius:0 0 0 2px}@-webkit-keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-dialog-content{--vs-color:var(--vs-primary)}.vs-dialog-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-dialog-enter-active .vs-dialog:not(.vs-dialog--fullScreen){-webkit-animation:rebound .4s;animation:rebound .4s}.vs-dialog-leave-active,.vs-dialog-leave-active .vs-dialog{-webkit-transition:all .15s ease;transition:all .15s ease}.vs-dialog-enter,.vs-dialog-leave-to{opacity:0}.vs-dialog-enter .vs-dialog,.vs-dialog-leave-to .vs-dialog{-webkit-transform:scale(.7);transform:scale(.7);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-dialog-enter .vs-dialog--fullScreen,.vs-dialog-leave-to .vs-dialog--fullScreen{-webkit-transform:translateY(8%)!important;transform:translateY(8%)!important}@-webkit-keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}.vs-dialog-content{background:rgba(0,0,0,.2);background:rgba(0,0,0,var(--vs-background-opacity));position:fixed;left:0;top:0;z-index:99000;z-index:var(--vs-zindex-2);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;max-height:100vh;overflow-y:auto;overflow-x:hidden;padding-top:80px;padding-bottom:80px}.vs-dialog-content.fullScreen{padding:0;overflow:hidden}.vs-dialog-content.blur{-webkit-backdrop-filter:saturate(180%) blur(15px);backdrop-filter:saturate(180%) blur(15px)}.vs-dialog{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);position:relative;min-width:400px;border-radius:20px;border-radius:var(--vs-radius);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 30px 0 rgba(0,0,0,.05);box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));max-width:800px;margin:auto}.vs-dialog--notCenter .vs-dialog__header{display:block}.vs-dialog__loading{width:100%;position:absolute;top:0;left:0;height:100%;border-radius:inherit;background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-dialog__loading:after{border-radius:inherit;border:2px solid rgba(17,18,20,0);border-right-color:#111214;border:2px solid rgba(var(--vs-color),0);border-right-color:rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s ease infinite;animation:loadingDialog .6s ease infinite}.vs-dialog__loading:after,.vs-dialog__loading:before{content:\"\";position:absolute;width:30px;height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-dialog__loading:before{border-radius:inherit;border:2px solid rgba(17,18,20,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-color),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s linear infinite;animation:loadingDialog .6s linear infinite}.vs-dialog--scroll .vs-dialog__content{max-height:calc(80vh - 200px);overflow:auto}.vs-dialog--autoWidth{width:auto!important;min-width:auto!important;max-width:auto!important}.vs-dialog--square,.vs-dialog--square .vs-dialog__close{border-radius:0}.vs-dialog--notPadding .vs-dialog__footer{padding:0}.vs-dialog--notPadding .vs-dialog__content{padding:0;margin-bottom:0!important}.vs-dialog--notPadding .vs-dialog__header{padding:0}.vs-dialog--rebound{-webkit-animation:reboundClick .3s!important;animation:reboundClick .3s!important}.vs-dialog--fullScreen{width:calc(100% - 30px)!important;height:calc(100% - 30px)!important;max-width:none!important;max-height:none!important}.vs-dialog__footer{padding:0 16px 10px}.vs-dialog__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px 16px}.vs-dialog__content{padding:10px 16px;width:100%;position:relative;border-radius:inherit}.vs-dialog__content.notFooter{margin-bottom:20px}.vs-dialog__close{--vs-color:var(--vs-text);position:absolute;top:-6px;right:-6px;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:inherit;border-radius:12px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200;border:0}.vs-dialog__close i{width:34px;height:34px;opacity:.7}.vs-dialog__close i:after,.vs-dialog__close i:before{width:14px}.vs-dialog__close:hover{-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 4px 0 rgba(0,0,0,.05);box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}.vs-dialog__close:hover i{opacity:1}@-webkit-keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@media (max-width:600px){.vs-dialog{min-width:calc(100vw - 20px);max-width:calc(100vw - 20px);margin:auto 10px}}.vs-pagination-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination-content.notMargin .vs-pagination__dotted{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0}.vs-pagination-content.notMargin .vs-pagination__arrow{margin:0!important;border-radius:0}.vs-pagination-content.notMargin .vs-pagination__arrow:first-of-type{border-radius:12px 0 0 12px}.vs-pagination-content.notMargin .vs-pagination__arrow:last-of-type{border-radius:0 12px 12px 0}.vs-pagination-content.notMargin .vs-pagination__button{border-radius:0;margin:0!important}.vs-pagination-content.disabled{opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination-content.square .vs-pagination__active,.vs-pagination-content.square .vs-pagination__arrow,.vs-pagination-content.square .vs-pagination__button{border-radius:0}.vs-pagination-content.circle .vs-pagination__active,.vs-pagination-content.circle .vs-pagination__arrow,.vs-pagination-content.circle .vs-pagination__button{border-radius:50%}.vs-pagination-content.buttonsDotted .vs-pagination__arrow{width:15px;height:12px;min-width:15px;padding:0;background:transparent}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i{width:6px;height:6px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:before{width:1px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:after{height:1px}.vs-pagination-content.buttonsDotted .vs-pagination__dotted{width:12px;height:12px;font-size:.9rem;letter-spacing:1px}.vs-pagination-content.buttonsDotted .vs-pagination__button{width:12px;height:12px}.vs-pagination-content.buttonsDotted .vs-pagination__button.active{-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active{width:12px;height:12px;-webkit-box-shadow:0 2px 10px 0 rgba(17,18,20,.4);-webkit-box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);box-shadow:0 2px 10px 0 rgba(17,18,20,.4);box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active.move{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative}.vs-pagination__progress{width:calc(100% - 16px);height:3px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);position:absolute;bottom:-8px;border-radius:10px}.vs-pagination__progress .progress{width:0;background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;max-width:100%}.vs-pagination__slot{min-height:36px;display:block;display:-webkit-box;display:-ms-flexbox;display:flex}.vs-pagination__arrow,.vs-pagination__slot{min-width:36px;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination__arrow{width:auto;height:36px;border-radius:12px;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 2px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease;border:0}.vs-pagination__arrow:disabled{opacity:.4;pointer-events:none}.vs-pagination__arrow:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__arrow i{width:10px;height:10px;position:relative;display:block;margin-left:4px;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__arrow i:before{width:2px}.vs-pagination__arrow i:after{height:2px}.vs-pagination__arrow.next i{margin-left:-4px;-webkit-transform:rotate(135deg) scale(.8);transform:rotate(135deg) scale(.8)}.vs-pagination__active{position:absolute;left:50%;top:0;width:36px;height:36px;background:#111214;background:rgba(var(--vs-color),1);border-radius:12px;z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#fff;-webkit-box-shadow:0 5px 20px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 20px 0 rgba(17,18,20,.3);box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);cursor:default}.vs-pagination__active.move{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-pagination__dotted{width:36px;height:36px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.4rem;letter-spacing:2px;margin:0 2px;cursor:pointer}.vs-pagination__dotted:hover span.dotted{opacity:0;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted:hover .con-arrows{opacity:1;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover span.dotted{opacity:0;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover .con-arrows{opacity:1;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted span.dotted{margin-right:-2px;text-align:center}.vs-pagination__dotted.next .con-arrows{-webkit-transform:rotate(180deg);transform:rotate(180deg);margin-left:-5px}.vs-pagination__dotted .con-arrows{width:10px;height:10px;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:5px;opacity:0;-webkit-transition:all .1s ease;transition:all .1s ease}.vs-pagination__dotted .con-arrows i{width:10px;height:10px;position:relative;display:block;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__dotted .con-arrows i:before{width:2px}.vs-pagination__dotted .con-arrows i:after{height:2px}.vs-pagination__dotted .con-arrows i:last-child{position:absolute;top:0;margin-left:6px}.vs-pagination__button{width:36px;height:36px;border-radius:12px;padding:0;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0 2px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);position:relative;border:0}.vs-pagination__button.loading{border-radius:50%;opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button.loading:after{border-radius:50%;border:2px solid hsla(0,0%,100%,0);border-right-color:#111214;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s ease infinite;animation:loadingPagination .6s ease infinite}.vs-pagination__button.loading:after,.vs-pagination__button.loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-pagination__button.loading:before{border-radius:50%;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s linear infinite;animation:loadingPagination .6s linear infinite}.vs-pagination__button.disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__button:active{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-table-content{--vs-color:var(--vs-primary);width:100%;border-radius:16px}.vs-table{width:100%;font-size:.9rem;margin:0;overflow:auto}.vs-table table{margin:0;border-collapse:collapse;width:100%;min-width:500px;border:0}.vs-table.striped .vs-table__tr:nth-child(2n){background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table_not-found{display:none;padding:20px;text-align:center;width:100%}.vs-table_not-found tr{text-align:center}.vs-table_not-found tr td{padding:20px;border:0}.vs-table__tbody:empty{display:none;background:#000}.vs-table__tbody:empty~.vs-table_not-found{display:table-row-group}.vs-table.isSelectedValue tr{cursor:pointer}.vs-table__footer{padding:8px 10px;border-radius:0 0 14px 14px}.vs-table__footer,.vs-table__header{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__header{width:100%;padding:10px;border-radius:14px 14px 0 0}.vs-table__header~.vs-table .vs-table__th:first-child,.vs-table__header~.vs-table .vs-table__th:last-child{border-radius:0}.vs-table__thead{width:100%}.vs-table__thead .vs-table__th{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__thead .vs-table__th:first-child{border-radius:14px 0 0 0}.vs-table__thead .vs-table__th:last-child{border-radius:0 14px 0 0}.isMultipleSelected .vs-table__tr .vs-table__td{border-radius:0!important}.vs-table__tr{padding:5px;border:0}.vs-table__tr.expand{cursor:pointer}.vs-table__tr.vs-change-color .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr.vs-change-color .vs-table__td:hover{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:first-of-type .vs-table__td:last-child{border-radius:0 0 15px 0}.vs-table__tr:first-of-type .vs-table__td:first-child{border-radius:0 0 0 15px}.vs-table__tr.isExpand:first-of-type .vs-table__td{border-radius:0}.vs-table__tr.isExpand:first-of-type .vs-table__td,.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td{background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:last-child{border-radius:0 15px 0 0}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:first-child{border-radius:15px 0 0 0}.vs-table__tr.isExpand:not(:first-of-type)+.vs-table__tr__expand td{border-radius:0 0 15px 15px!important}.vs-table__tr.selected .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr .vs-table__td{background:rgba(var(--vs-bg),.1);color:rgba(var(--vs-bg),1)}.vs-table__tr.vs-change-color:hover .vs-table__td{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:hover .vs-table__td{background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-table__tr__expand,.vs-table__tr__expand td{-webkit-transition:all .25s ease;transition:all .25s ease;border:0}.vs-table__tr__expand td{padding:0;background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr__expand td .vs-table__expand__td__content{overflow:hidden;display:block;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__tr__expand td .vs-table__expand__td__content__sub{padding:10px 15px;z-index:1;position:relative}.fade-expand-enter-active,.fade-expand-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.fade-expand-enter,.fade-expand-leave-to{opacity:0}.fade-expand-enter td .vs-table__expand__td__content,.fade-expand-leave-to td .vs-table__expand__td__content{height:0!important}.vs-table__th{padding:10px 12px;text-align:left;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem;border:0}.vs-table__th.sort .vs-table__th__content{pointer-events:none}.vs-table__th.sort:hover{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-table__th[data-sort-type=asc] .icon-sort-2{margin-top:-7px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=asc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=desc] .icon-sort-2{margin-top:-7px}.vs-table__th[data-sort-type=desc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important}.vs-table__th__content{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__th__content,.vs-table__th__content__icons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-table__th__content__icons{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:7px;-webkit-transform:scale(.8);transform:scale(.8)}.vs-table__th__content .vs-icon-arrow{position:relative;display:block}.vs-table__th__content .vs-icon-arrow.icon-sort-1{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vs-table__th__content .vs-icon-arrow.icon-sort-2{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.vs-table__td{padding:10px 12px;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem;border:0}.vs-table__td:last-child{border-radius:0 15px 15px 0}.vs-table__td:first-child{border-radius:15px 0 0 15px}.vs-table__td.isCheckbox{width:23px}.vs-table__td.isEdit{text-decoration:underline;cursor:pointer}.vs-navbar-content{--vs-color:var(--vs-background);position:absolute;z-index:9000;top:0;left:0;width:100%;border-radius:0 0 15px 15px;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-navbar-content.paddingScroll:not(.paddingScrollActive){padding-top:20px;padding-bottom:20px}.vs-navbar-content.paddingScroll:not(.paddingScrollActive) .vs-navbar__group__items{margin-bottom:-30px}.vs-navbar-content.vsNavbarSquare{border-radius:0}.vs-navbar-content.textWhite{color:#fff}.vs-navbar-content.textWhite .vs-navbar__item:before,.vs-navbar-content.textWhite .vs-navbar__line{background:#fff}.vs-navbar-content.fixed{position:fixed!important}.vs-navbar-content.shadow,.vs-navbar-content.shadowActive{-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px 0 rgba(0,0,0,.05);box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-navbar-content.hidden{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.vs-navbar{width:100%;position:relative;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:44px}.vs-navbar,.vs-navbar__left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-navbar__right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-navbar__center,.vs-navbar__right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-navbar__line{position:absolute;left:0;bottom:0;width:100px;background:#2c3e50;background:rgba(var(--vs-text),1);height:3px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__line.notTransition{-webkit-transition:none!important;transition:none!important}.vs-navbar__item{padding:10px 15px;margin:0;border:0;background:transparent;font-size:.85rem;opacity:.7;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;font-weight:700;color:inherit}.vs-navbar__item.active,.vs-navbar__item:hover{opacity:1}.vs-navbar__group{position:relative}.vs-navbar__group:hover .vs-navbar__group__item{opacity:1}.vs-navbar__group:hover .vs-navbar__group__items{opacity:1;visibility:visible;-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-navbar__group__item{padding:10px 15px;background:transparent;color:inherit;font-weight:700;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;opacity:.7;border:0}.vs-navbar__group__items{position:absolute;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:-12px;-webkit-transform:translateY(90%);transform:translateY(90%);background:#111214;background:rgba(var(--vs-color),1);border-radius:5px 18px 18px 18px;padding:10px;min-width:160px;opacity:0;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;color:inherit;visibility:hidden}.vs-navbar__group__items:after{content:\"\";left:0;top:-13px;background:transparent;width:100%;height:14px;position:absolute;z-index:-1}.vs-navbar__group__items .vs-navbar__item{text-align:left;width:100%;position:relative;padding:5px 10px}.vs-navbar__group__items .vs-navbar__item:before{content:\"\";left:0;top:0;width:4px;height:4px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;border-radius:50%;top:calc(50% - 2px);opacity:0;-webkit-transform:translate(-10px);transform:translate(-10px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__group__items .vs-navbar__item.active:before{opacity:1;-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content{--vs-color:var(--vs-primary)}@-webkit-keyframes delayOpacity{0%{opacity:0}to{opacity:1}}@keyframes delayOpacity{0%{opacity:0}to{opacity:1}}.vs-sidebar-content{position:fixed;left:0;top:0;width:calc(100% - 50px);max-width:260px;height:100vh;border-radius:0 30px 30px 0;color:#2c3e50;color:rgba(var(--vs-text),1);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 25px 0 rgba(0,0,0,.05);box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:21000;background:#fff;background:rgba(var(--vs-background),1);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-110%);transform:translate(-110%)}.vs-sidebar-content.right{left:auto;right:0;-webkit-transform:translate(110%);transform:translate(110%)}.vs-sidebar-content.right.open{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content.right.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip{opacity:1;left:auto!important;right:60px!important}.vs-sidebar-content.absolute{position:absolute!important;z-index:9001;height:100%}.vs-sidebar-content.relative{position:relative!important;z-index:9001;height:100%}.vs-sidebar-content.textWhite .vs-sidebar__group__content:after{background:hsla(0,0%,100%,.4)}.vs-sidebar-content.textWhite .vs-sidebar__item:after{background:#fff!important}.vs-sidebar-content.textWhite .vs-sidebar__item.active{color:#fff!important}.vs-sidebar-content.notShadow{-webkit-box-shadow:none!important;box-shadow:none!important}.vs-sidebar-content.square{border-radius:0}.vs-sidebar-content.notLineActive .vs-sidebar .vs-sidebar__item:after{display:none}.vs-sidebar-content.open{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content.reduce .vs-sidebar__footer{padding:10px 0}.vs-sidebar-content.reduce .vs-sidebar__header .vs-avatar-content{width:44px!important;height:44px!important}.vs-sidebar-content.reduce .vs-sidebar__logo img{width:80%}.vs-sidebar-content.reduce .vs-sidebar__item{padding-left:16px!important;min-height:47px}.vs-sidebar-content.reduce .vs-sidebar__item:not(.hasIcon) .vs-sidebar__item__text{font-size:.5rem}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon .vs-sidebar__item__text{-webkit-transform:translate(-10px);transform:translate(-10px);margin-left:-50px}.vs-sidebar-content.reduce .vs-sidebar__item__arrow{position:absolute;left:36px;top:10px;-webkit-animation:delayOpacity .6s ease;animation:delayOpacity .6s ease;width:5px;height:5px}.vs-sidebar-content.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip{opacity:1;left:60px}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon{padding:0!important}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon:after{left:-6px}.vs-sidebar-content .vs-sidebar__logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:25px 0;min-height:80px}.vs-sidebar-content .vs-sidebar__logo img{max-width:120px;max-height:35px}.vs-sidebar-content .vs-sidebar{overflow-x:hidden;width:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-sidebar-content .vs-sidebar::-webkit-scrollbar{width:0}.vs-sidebar-content .vs-sidebar__header{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar-content .vs-sidebar__footer,.vs-sidebar-content .vs-sidebar__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:10px}.vs-sidebar-content .vs-sidebar__footer{justify-self:flex-start}.vs-sidebar__item{width:100%;padding:15px 16px 14px;text-align:left;background:transparent;font-size:1rem;font-weight:700;opacity:.7;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;color:#2c3e50;color:rgba(var(--vs-text),1);border:0}.vs-sidebar__item.hasIcon{padding:0}.vs-sidebar__item.hasIcon.active{padding-left:8px}.vs-sidebar__item.hasIcon:hover{padding-left:8px;opacity:1}.vs-sidebar__item:after{content:\"\";position:absolute;left:-4px;top:0;width:10px;height:100%;background:#111214;background:rgba(var(--vs-color),1);border-radius:0 20px 20px 0;-webkit-transform:translate(-6px);transform:translate(-6px);-webkit-transition:all .25s ease;transition:all .25s ease;z-index:60}.vs-sidebar__item.active:not(.hasIcon){padding-left:25px}.vs-sidebar__item.active{opacity:1;color:#111214;color:rgba(var(--vs-color),1)}.vs-sidebar__item.active:after{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar__item__icon{min-width:50px;height:47px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.2rem;z-index:50;background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__item:hover:not(.hasIcon){opacity:1;padding-left:25px}.vs-sidebar__item__text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;z-index:10;font-size:.9rem}.vs-sidebar__item__arrow,.vs-sidebar__item__text{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-sidebar__item__arrow{width:7px;height:7px;position:relative;justify-self:flex-end;margin-left:auto;margin-right:15px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important;z-index:80}.vs-sidebar__item__arrow .vs-icon-arrow:before{width:2px}.vs-sidebar__item__arrow .vs-icon-arrow:after{height:2px}.vs-sidebar__item__text-tooltip{position:fixed;left:50px;opacity:0;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.85rem;white-space:nowrap}.vs-sidebar__group{padding:0;width:100%;min-width:260px;position:relative}.vs-sidebar__group.open .vs-sidebar__group__content:after{-webkit-transform:translate(0);transform:translate(0);opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item{opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item__arrow{-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-sidebar__group__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar__group__content{overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease;position:relative}.vs-sidebar__group__content:after{content:\"\";position:absolute;left:0;top:0;background:rgba(17,18,20,.3);background:rgba(var(--vs-color),.3);width:4px;height:100%;opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-100%);transform:translate(-100%);border-radius:0 10px 10px 0;z-index:60}.vs-sidebar__group__content .vs-sidebar__item{background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__group>.vs-sidebar__group__header .vs-sidebar__item:hover{padding-left:0}.vs-card-content{--vs-color:var(--vs-primary)}.vs-card-content.type-5 .vs-card{-webkit-box-shadow:none;box-shadow:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-card-content.type-5 .vs-card:hover .vs-card__interactions{bottom:50px}.vs-card-content.type-5 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 30px 0 rgba(0,0,0,.05);box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-card-content.type-5 .vs-card:hover .vs-card__img{border-radius:6px 40px 6px 40px}.vs-card-content.type-5 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-card-content.type-5 .vs-card__img{border-radius:6px 20px 6px 20px}.vs-card-content.type-5 .vs-card__interactions{bottom:6px;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:20}.vs-card-content.type-5 .vs-card__text{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:6px 20px 6px 20px;margin-top:-50px;z-index:10;position:relative;width:calc(100% - 30px);padding-top:10px;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translateY(25px);transform:translateY(25px);opacity:0}.vs-card-content.type-4 .vs-card{-webkit-box-shadow:none;box-shadow:none;max-width:300px}.vs-card-content.type-4 .vs-card:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-card-content.type-4 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1);transform:scale(1)}.vs-card-content.type-4 .vs-card:hover .vs-card__text{padding-top:15px;padding-bottom:25px}.vs-card-content.type-4 .vs-card__img{-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-height:600px}.vs-card-content.type-4 .vs-card__img img{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-card-content.type-4 .vs-card__interactions{top:0;bottom:auto}.vs-card-content.type-4 .vs-card__text{background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);position:absolute;bottom:0;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border-radius:0 0 20px 20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-4 .vs-card__text p{opacity:1}.vs-card-content.type-3 .vs-card{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:400px}.vs-card-content.type-3 .vs-card:hover{-webkit-transform:scale(1.04);transform:scale(1.04)}.vs-card-content.type-3 .vs-card__img img{min-width:200px}.vs-card-content.type-3 .vs-card__text{padding-top:15px}.vs-card-content.type-3 .vs-card__title h2,.vs-card-content.type-3 .vs-card__title h3,.vs-card-content.type-3 .vs-card__title h4,.vs-card-content.type-3 .vs-card__title h5,.vs-card-content.type-3 .vs-card__title h6{padding:0}.vs-card-content.type-2 .vs-card{-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.vs-card-content.type-2 .vs-card:hover{-webkit-transform:scale(.95);transform:scale(.95)}.vs-card-content.type-2 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card-content.type-2 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;color:#fff}.vs-card-content.type-2 .vs-card__interactions{right:0;top:0;left:auto;bottom:auto;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.vs-card-content.type-2 .vs-card__title{position:relative;color:inherit;padding:0}.vs-card-content.type-2 .vs-card__title h2,.vs-card-content.type-2 .vs-card__title h3,.vs-card-content.type-2 .vs-card__title h4,.vs-card-content.type-2 .vs-card__title h5,.vs-card-content.type-2 .vs-card__title h6{padding:0 0 5px}.vs-card-content.type-2 .vs-card__text{position:absolute;bottom:0;background:hsla(0,0%,100%,.9);background:rgba(var(--vs-background),.9);padding-top:30px;border-radiu:0 0 20px 20px;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5)));background:linear-gradient(180deg,transparent,rgba(0,0,0,.5));color:transparent;font-size:.9rem;-webkit-transform:translateY(45%);transform:translateY(45%);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-2 .vs-card__text p{opacity:1}.vs-card-content.type-1 .vs-card:hover{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-card-content.type-1 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);width:100%;max-width:350px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer;position:relative}.vs-card__text{font-size:.85rem;padding:0 15px 15px}.vs-card__text p{font-size:inherit;margin:0;opacity:.8}.vs-card__title{padding-top:10px;padding-bottom:5px}.vs-card__title h2,.vs-card__title h3,.vs-card__title h4,.vs-card__title h5,.vs-card__title h6{padding:0;margin:0;font-size:1.1rem}.vs-card__interactions{position:absolute;bottom:0;padding:5px 10px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;left:0}.vs-card__img,.vs-card__interactions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__img{position:relative;max-height:250px;overflow:hidden;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-card__img,.vs-card__img img{border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card__img img{width:100%;display:block}.vs-card__group{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__group-space{min-width:20px;position:relative;height:20px}.vs-card__group .vs-card__group-cards{position:relative;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;overflow-x:auto;scroll-behavior:smooth;padding-top:20px;padding-bottom:20px;border-radius:20px}.vs-card__group .vs-card__group-cards .vs-card-content{min-width:350px;margin-left:20px}.vs-card__group .vs-card__group-prev{z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent;border:0}.vs-card__group .vs-card__group-prev .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vs-card__group .vs-card__group-prev .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-prev .vs-icon-arrow:after{height:2px}.vs-card__group .vs-card__group-next{border:0;z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent}.vs-card__group .vs-card__group-next .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.vs-card__group .vs-card__group-next .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-next .vs-icon-arrow:after{height:2px}.loading-enter-active,.loading-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.loading-enter,.loading-leave-to{opacity:0}.vs-loading{--vs-color:var(--vs-primary);--vs-background:255,255,255;--vs-opacity:.6;position:fixed;top:0;left:0;width:100%;height:100%;z-index:100000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(255,255,255,var(--vs-opacity));background:rgba(var(--vs-background),var(--vs-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;padding:20px;border-radius:inherit}.vs-loading--target{position:absolute}.vs-loading__load{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-loading__load__text{font-size:.75em;margin:7px}.vs-loading__load__percent,.vs-loading__load__text{font-weight:700;color:#111214;color:rgba(var(--vs-color),1)}.vs-loading__load__percent{position:relative;font-size:.65rem;margin-top:1px;z-index:200}.vs-loading__load__animation{width:40px;height:40px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading__progress{width:100%;position:absolute;top:0;left:0;height:4px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading__progress__bar{background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:0 10px 10px 0}.vs-loading--default .vs-loading__load__animation{border-radius:50%}.vs-loading--default .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s ease infinite;animation:rotate .8s ease infinite;top:0}.vs-loading--default .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s linear infinite;animation:rotate .8s linear infinite;opacity:.2}.vs-loading--default .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-loading--waves .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--waves .vs-loading__load__animation__1{-webkit-animation:waves .7s ease infinite;animation:waves .7s ease infinite}.vs-loading--waves .vs-loading__load__animation__1,.vs-loading--waves .vs-loading__load__animation__2{width:0;background:transparent;height:0;position:absolute;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}.vs-loading--waves .vs-loading__load__animation__2{-webkit-animation:waves 1.4s linear infinite;animation:waves 1.4s linear infinite}.vs-loading--waves .vs-loading__load__animation__3{width:0;background:transparent;height:0;position:absolute;-webkit-animation:waves 1.75s ease infinite;animation:waves 1.75s ease infinite;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}@-webkit-keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}@keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}.vs-loading--corners .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--corners .vs-loading__load__animation__1{width:100%;background:transparent;height:100%;position:absolute;-webkit-animation:corners 1s ease infinite;animation:corners 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-loading--corners .vs-loading__load__animation__2,.vs-loading--corners .vs-loading__load__animation__3{display:none}@-webkit-keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}@keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}.vs-loading--border .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.vs-loading--border .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0}.vs-loading--border .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear .2s infinite;animation:rotate 1s linear .2s infinite}.vs-loading--border .vs-loading__load__animation__3{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;-webkit-animation:rotate 1s linear .4s infinite;animation:rotate 1s linear .4s infinite;opacity:.2}.vs-loading--points .vs-loading__load__percent{position:absolute;top:-10px}.vs-loading--points .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto}.vs-loading--points .vs-loading__load__animation__1{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease infinite;animation:points .75s ease infinite}.vs-loading--points .vs-loading__load__animation__2{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .25s infinite;animation:points .75s ease .25s infinite}.vs-loading--points .vs-loading__load__animation__3{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .5s infinite;animation:points .75s ease .5s infinite}@-webkit-keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}.vs-loading--square .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--square .vs-loading__load__animation__1{-webkit-animation:rotateSquare 4s ease infinite;animation:rotateSquare 4s ease infinite}.vs-loading--square .vs-loading__load__animation__1,.vs-loading--square .vs-loading__load__animation__2{position:absolute;width:100%;height:100%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-radius:inherit;top:0}.vs-loading--square .vs-loading__load__animation__2{animation:rotateSquare 4s ease infinite reverse;background:#fff;background:rgba(var(--vs-background),1)}.vs-loading--square .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.vs-loading--gradient .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--gradient .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:0;border-radius:inherit;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0;background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,hsla(0,0%,100%,0)),to(#111214));background:linear-gradient(0deg,hsla(0,0%,100%,0) 33%,#111214);background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,rgba(var(--vs-background),0)),to(rgba(var(--vs-color),1)));background:linear-gradient(0deg,rgba(var(--vs-background),0) 33%,rgba(var(--vs-color),1));border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__2{top:2px;position:absolute;width:calc(100% - 4px);height:calc(100% - 4px);border:0;border-radius:inherit;background:#fff;background:rgba(var(--vs-background),1);border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__3{display:none}.vs-loading--rectangle .vs-loading__load__percent{position:absolute;bottom:-2px}.vs-loading--rectangle .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--rectangle .vs-loading__load__animation__1{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease infinite;animation:rectangle 1s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--rectangle .vs-loading__load__animation__2{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease-out infinite;animation:rectangle 1s ease-out infinite;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading--rectangle .vs-loading__load__animation__3{display:none}@-webkit-keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}@keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}.vs-loading--circles .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--circles .vs-loading__load__animation__1{position:absolute;width:40px;height:40px;-webkit-animation:rotate 1s ease infinite;animation:rotate 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__2{position:absolute;width:50px;height:50px;-webkit-animation:rotate 1s ease-in-out infinite;animation:rotate 1s ease-in-out infinite;border-radius:50%;border:2px dashed #111214;border:2px dashed rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__3{position:absolute;width:60px;height:60px;animation:rotate 1s linear infinite reverse;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--square-rotate .vs-loading__load__percent{position:absolute;bottom:30px}.vs-loading--square-rotate .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--square-rotate .vs-loading__load__animation__1{position:absolute;width:25px;height:25px;-webkit-animation:squareRotate 3s ease infinite;animation:squareRotate 3s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--square-rotate .vs-loading__load__animation__2,.vs-loading--square-rotate .vs-loading__load__animation__3{display:none}@-webkit-keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}.vs-loading--scale .vs-loading__load__percent{position:absolute;bottom:40px}.vs-loading--scale .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px;height:40px}.vs-loading--scale .vs-loading__load__animation__1{-webkit-animation:scale .8s ease infinite;animation:scale .8s ease infinite}.vs-loading--scale .vs-loading__load__animation__1,.vs-loading--scale .vs-loading__load__animation__2{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;border-radius:5px}.vs-loading--scale .vs-loading__load__animation__2{-webkit-animation:scale .8s ease .2s infinite;animation:scale .8s ease .2s infinite}.vs-loading--scale .vs-loading__load__animation__3{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;-webkit-animation:scale .8s ease .4s infinite;animation:scale .8s ease .4s infinite;border-radius:5px}@-webkit-keyframes scale{50%{height:25px}0%{height:5px}}@keyframes scale{50%{height:25px}0%{height:5px}}.notification-enter-active{-webkit-transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s}.notification-leave-to{max-height:0!important;padding-top:0!important;padding-bottom:0!important;margin-top:0!important;margin-bottom:0!important;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;opacity:0!important}.notification-enter,.notification-leave-to{-webkit-clip-path:circle(0 at 80% 35%)!important;clip-path:circle(0 at 80% 35%)!important}.notification-enter{-webkit-transform:translate(25%);transform:translate(25%)}.notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(10%);transform:translate(10%)}.vs-notification-parent{position:fixed;right:0;bottom:0;z-index:200000;-webkit-transition:all 25s ease;transition:all 25s ease;padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-center,.vs-notification-parent--top-right{bottom:auto;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.vs-notification-parent--top-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--top-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--top-center .vs-notification--sticky:last-child{border-radius:0 0 20px 20px;margin-top:-10px}.vs-notification-parent--top-center .vs-notification{-webkit-clip-path:circle(120% at 50% 0);clip-path:circle(120% at 50% 0);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--top-center .vs-notification.vs-notification--border{border:3px solid transparent;border-top:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-center .notification-enter{-webkit-transform:translateY(-25%);transform:translateY(-25%);-webkit-clip-path:circle(0 at 50% 0)!important;clip-path:circle(0 at 50% 0)!important}.vs-notification-parent--top-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}.vs-notification-parent--bottom-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--bottom-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--bottom-center .vs-notification--sticky:last-child{border-radius:20px 20px 0 0;margin-bottom:-10px}.vs-notification-parent--bottom-center .vs-notification{-webkit-clip-path:circle(120% at 50% 100%);clip-path:circle(120% at 50% 100%);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--bottom-center .vs-notification.vs-notification--border{border:3px solid transparent;border-bottom:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-center .notification-enter{-webkit-transform:translateY(25%);transform:translateY(25%);-webkit-clip-path:circle(0 at 50% 100%)!important;clip-path:circle(0 at 50% 100%)!important}.vs-notification-parent--bottom-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(10%);transform:translateY(10%)}.vs-notification-parent--top-left{bottom:auto;top:0;left:0;right:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--top-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--top-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--top-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification-parent--bottom-left{left:0;right:auto}.vs-notification-parent--bottom-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--bottom-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--bottom-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--bottom-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification{--vs-color:var(--vs-background);--vs-border:var(--vs-background);--vs-opacity:.6;position:relative;max-width:340px;width:100%;height:auto;border-radius:20px;-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 30px -5px rgba(0,0,0,.05);box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));overflow:hidden;-webkit-clip-path:circle(145% at 100% 50%);clip-path:circle(145% at 100% 50%);background:#111214;background:rgba(var(--vs-color),1);color:#2c3e50;color:rgba(var(--vs-text),1);margin:3px 10px;-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s}.vs-notification:hover:not(.vs-notification--flat){-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-notification--notPadding{padding:0!important}.vs-notification.vs-notification--icon{padding-left:50px!important}.vs-notification.vs-notification--loading{width:100px!important;max-height:100px!important;min-height:100px!important;padding:0!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification--width-auto{width:auto;max-width:none}.vs-notification--width-all{max-width:calc(100vw - 50px);width:calc(100vw - 50px)}.vs-notification--square{border-radius:0!important}.vs-notification--sticky{margin-right:0;margin-bottom:0;border-radius:20px 0 0 20px}.vs-notification--flat{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));background:#fff;background:rgba(var(--vs-background),1);color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat:hover:after{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-notification--flat .vs-notification__progress{background:#111214;background:rgba(var(--vs-color),1)}.vs-notification--flat .vs-notification__close{--vs-color:inherit}.vs-notification--flat .vs-notification__content{color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat.vs-notification--border{border:0 solid transparent!important;border-right:3px solid rgba(var(--vs-border),1)!important}.vs-notification--flat:after{content:\"\";background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);width:100%;height:100%;border-radius:inherit;position:absolute;top:0;left:0;z-index:-1;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification.vs-notification--onClick{cursor:pointer}.vs-notification.vs-notification--color:not(.vs-notification--flat){color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__progress{background:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__close{--vs-color:255,255,255}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:after{border:2px solid transparent;border-bottom-color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:before{border:2px solid transparent;border-bottom:2px dashed #fff}.vs-notification.vs-notification--border{border:3px solid transparent;border-right:3px solid rgba(var(--vs-border),1)}.vs-notification__progress{width:0;height:3px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;bottom:0;left:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification__loading{width:50px;height:50px;border-radius:50%;position:absolute}.vs-notification__loading:after{border:2px solid #2c3e50;border:2px solid rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s ease infinite;animation:loadingNoti .8s ease infinite}.vs-notification__loading:after,.vs-notification__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-notification__loading:before{border:2px dashed #2c3e50;border:2px dashed rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s linear infinite;animation:loadingNoti .8s linear infinite;opacity:.2}.vs-notification__close{--vs-color:var(--vs-text);position:absolute;border:0;background:transparent;top:2px;right:2px;-webkit-transform:scale(.75);transform:scale(.75);padding:0}.vs-notification__icon{position:absolute;top:calc(50% - 22px);background:transparent;width:45px;height:45px;left:2px;border-radius:0 35% 35% 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification__icon i{font-size:1.2rem}.vs-notification__content{position:relative;width:auto;height:auto;-webkit-transition:all .25s ease .2s;transition:all .25s ease .2s;opacity:1}.vs-notification__content__text{width:100%}.vs-notification__content__text p{margin:0;padding:0;font-size:.75rem;line-height:1rem}.vs-notification__content__header{width:100%;margin:0;padding:0 0 6px}.vs-notification__content__header h4{width:100%;margin:0;padding:0;font-size:.9rem}.darken .vs-notification--dark{color:#fff!important}.darken .vs-notification--dark .vs-notification__close{--vs-color:255,255,255!important}.darken .vs-notification--dark h4,.darken .vs-notification--dark p{color:#fff!important}@-webkit-keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes progressNoti{0%{width:0}to{width:100%}}@keyframes progressNoti{0%{width:0}to{width:100%}}@media (max-width:600px){.vs-notification{margin:3px 0!important;border-radius:0!important;width:100%!important;max-width:100%!important;min-width:100%!important}.vs-notification:hover{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-notification:last-child{margin-bottom:0!important}.vs-notification-parent{padding:0;width:100%!important;max-width:100%!important}.vs-notification-parent .vs-notification--sticky{margin-bottom:0!important}.vs-notification-parent.vs-notification-parent--top-center .vs-notification:last-child{margin-bottom:3px;margin-top:0!important}}.vs-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.vs-col,.vs-row{width:100%;position:relative}.vs-col--w-1{width:8.33%}.vs-col--w-2{width:16.66%}.vs-col--w-3{width:25%}.vs-col--w-4{width:33.33%}.vs-col--w-5{width:41.66%}.vs-col--w-6{width:50%}.vs-col--w-7{width:58.33%}.vs-col--w-8{width:66.66%}.vs-col--w-9{width:75%}.vs-col--w-10{width:83.33%}.vs-col--w-11{width:91.66%}.vs-col--w-12{width:100%}.vs-col--offset-1{margin-left:8.33%}.vs-col--offset-2{margin-left:16.66%}.vs-col--offset-3{margin-left:25%}.vs-col--offset-4{margin-left:33.33%}.vs-col--offset-5{margin-left:41.66%}.vs-col--offset-6{margin-left:50%}.vs-col--offset-7{margin-left:58.33%}.vs-col--offset-8{margin-left:66.66%}.vs-col--offset-9{margin-left:75%}.vs-col--offset-10{margin-left:83.33%}.vs-col--offset-11{margin-left:91.66%}.vs-col--offset-12{margin-left:100%}.vs-col--lg-1{width:8.33%}.vs-col--lg-2{width:16.66%}.vs-col--lg-3{width:25%}.vs-col--lg-4{width:33.33%}.vs-col--lg-5{width:41.66%}.vs-col--lg-6{width:50%}.vs-col--lg-7{width:58.33%}.vs-col--lg-8{width:66.66%}.vs-col--lg-9{width:75%}.vs-col--lg-10{width:83.33%}.vs-col--lg-11{width:91.66%}.vs-col--lg-12{width:100%}@media (max-width:900px){.vs-col--sm-1{width:8.33%}.vs-col--sm-2{width:16.66%}.vs-col--sm-3{width:25%}.vs-col--sm-4{width:33.33%}.vs-col--sm-5{width:41.66%}.vs-col--sm-6{width:50%}.vs-col--sm-7{width:58.33%}.vs-col--sm-8{width:66.66%}.vs-col--sm-9{width:75%}.vs-col--sm-10{width:83.33%}.vs-col--sm-11{width:91.66%}.vs-col--sm-12{width:100%}}@media (max-width:600px){.vs-col--xs-1{width:8.33%}.vs-col--xs-2{width:16.66%}.vs-col--xs-3{width:25%}.vs-col--xs-4{width:33.33%}.vs-col--xs-5{width:41.66%}.vs-col--xs-6{width:50%}.vs-col--xs-7{width:58.33%}.vs-col--xs-8{width:66.66%}.vs-col--xs-9{width:75%}.vs-col--xs-10{width:83.33%}.vs-col--xs-11{width:91.66%}.vs-col--xs-12{width:100%}}:root{--vs-primary:25,91,255;--vs-warn:255,186,0;--vs-danger:255,71,87;--vs-success:70,201,58;--vs-dark:30,30,30;--vs-light:244,247,248;--vs-color:17,18,20;--vs-facebook:59,89,153;--vs-twitter:29,161,242;--vs-youtube:255,0,0;--vs-pinterest:189,8,28;--vs-linkedin:0,119,181;--vs-snapchat:255,252,0;--vs-whatsapp:37,211,102;--vs-tumblr:54,70,93;--vs-reddit:255,69,0;--vs-spotify:30,215,96;--vs-amazon:255,153,0;--vs-medium:2,184,117;--vs-vimeo:26,183,234;--vs-skype:0,175,240;--vs-dribbble:234,76,137;--vs-slack:74,21,75;--vs-yahoo:67,2,151;--vs-twitch:100,65,164;--vs-discord:114,137,218;--vs-telegram:0,136,204;--vs-google-plus:219,68,55;--vs-messenger:0,132,255;--vs-background:255,255,255;--vs-text:44,62,80;--vs-gray-1:249,252,253;--vs-gray-2:244,247,248;--vs-gray-3:240,243,244;--vs-gray-4:230,233,234}[class*=\"--default\"],[class*=\"--primary\"]{--vs-color:var(--vs-primary)}[class*=\"--danger\"]{--vs-color:var(--vs-danger)}[class*=\"--success\"]{--vs-color:var(--vs-success)}[class*=\"--dark\"]{--vs-color:var(--vs-dark)}[class*=\"--warn\"]{--vs-color:var(--vs-warn)}:root{--vs-shadow-opacity:.05;--vs-radius:20px;--vs-zindex-1:100000;--vs-zindex-2:99000;--vs-zindex-3:98000;--vs-zindex-4:97000;--vs-background-opacity:.2}[vs-theme=dark]{--vs-background:30,32,35;--vs-text:255,255,255;--vs-gray-1:24,25,28;--vs-gray-2:20,20,23;--vs-gray-3:15,16,19;--vs-gray-4:10,11,14;--vs-shadow-opacity:.3;--vs-dark:0,0,0;--vs-background-opacity:.6}[vs-theme=dark] .vs-pagination-content.vs-component-dark .vs-pagination__active{--vs-color:255,255,255;color:#f0f3f4;color:rgba(var(--vs-gray-3),1)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent:hover:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),var(--vs-background-opacity))}[vs-theme=dark] .vs-ripple,[vs-theme=dark] .vs-ripple-content,[vs-theme=dark] .vs-ripple-invert{--vs-color:0,0,0}[vs-theme=dark] .vs-loading{--vs-background:0,0,0}[vs-theme=dark] .vs-input-parent--state-dark{--vs-dark:255,255,255!important}[vs-theme=dark] .vs-input-parent--state-dark .vs-input{background:#000!important}[vs-theme=dark] .vs-component-dark{--vs-color:0,0,0!important}[vs-theme=dark] .vs-component-dark .vs-avatar{color:#fff!important}[vs-theme=dark] .vs-component-dark.vs-alert{--vs-color:0,0,0!important;background:#111214!important;background:rgba(var(--vs-color),1)!important;color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}button{cursor:pointer;outline:none}[disabled]{opacity:.6}input{outline:none}a,button,input,select,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}[class*=vs-]{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;list-style:none}.vs-ripple-content{--vs-color:inherit;width:100px;height:100px;position:absolute;width:100%;pointer-events:none;overflow:hidden;height:100%;top:0;right:0;border-radius:inherit;z-index:-1}.vs-ripple-content .vs-ripple{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background:radial-gradient(circle,rgba(17,18,20,.05),rgba(17,18,20,.6));background:radial-gradient(circle,rgba(var(--vs-color),.05),rgba(var(--vs-color),.6))}.vs-ripple-content .vs-ripple--solid{background:#111214;background:rgba(var(--vs-color),1);opacity:1}.vs-ripple-content .vs-ripple-invert{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background-image:radial-gradient(circle,rgba(17,18,20,.5),rgba(17,18,20,0));background-image:radial-gradient(circle,rgba(var(--vs-color),.5),rgba(var(--vs-color),0))}.vs-ripple-content .vs-ripple-cut-1{-webkit-transform:translate(-100%,-50%) skew(20deg);transform:translate(-100%,-50%) skew(20deg);background-image:-webkit-gradient(linear,right top,left top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(270deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-ripple-content .vs-ripple-cut-1,.vs-ripple-content .vs-ripple-cut-2{width:0;height:0;opacity:0;position:absolute;-webkit-transition:all .6s ease;transition:all .6s ease}.vs-ripple-content .vs-ripple-cut-2{-webkit-transform:translateY(-50%) skew(20deg);transform:translateY(-50%) skew(20deg);background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-remove-transition *,.vs-remove-transition :after,.vs-remove-transition :before{-webkit-transition:all 0s!important;transition:all 0s!important}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(23);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(24);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['admin-only'] = __webpack_require__(32);
middleware['admin-only'] = middleware['admin-only'].default || middleware['admin-only'];
middleware['guest'] = __webpack_require__(33);
middleware['guest'] = middleware['guest'].default || middleware['guest'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "SANCTUM_URL": "http://api.onlinegifting.shop",
        "HTTPS_BOOL": "false",
        "LARAVEL_URL": "http://api.onlinegifting.shop/api/"
      }
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(25);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(12);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(11);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _879eb46a = () => interopDefault(__webpack_require__.e(/* import() | pages/about-us */ 3).then(__webpack_require__.bind(null, 106)));

const _a37781e0 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/index */ 8).then(__webpack_require__.bind(null, 107)));

const _6d0700a4 = () => interopDefault(__webpack_require__.e(/* import() | pages/bundles/index */ 17).then(__webpack_require__.bind(null, 108)));

const _02991d16 = () => interopDefault(__webpack_require__.e(/* import() | pages/Carts */ 1).then(__webpack_require__.bind(null, 109)));

const _1122fcce = () => interopDefault(__webpack_require__.e(/* import() | pages/categories/index */ 19).then(__webpack_require__.bind(null, 110)));

const _29cdaac3 = () => interopDefault(__webpack_require__.e(/* import() | pages/liked-items */ 21).then(__webpack_require__.bind(null, 111)));

const _16ef084c = () => interopDefault(__webpack_require__.e(/* import() | pages/login */ 22).then(__webpack_require__.bind(null, 112)));

const _1d27b011 = () => interopDefault(__webpack_require__.e(/* import() | pages/products/index */ 26).then(__webpack_require__.bind(null, 113)));

const _75e4a3ac = () => interopDefault(__webpack_require__.e(/* import() | pages/Profile */ 2).then(__webpack_require__.bind(null, 114)));

const _de70c5e0 = () => interopDefault(__webpack_require__.e(/* import() | pages/register */ 27).then(__webpack_require__.bind(null, 115)));

const _01b115ff = () => interopDefault(__webpack_require__.e(/* import() | pages/test */ 28).then(__webpack_require__.bind(null, 116)));

const _317cefe4 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/admin-list */ 4).then(__webpack_require__.bind(null, 117)));

const _41442aa9 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/dashboard-tutorial */ 5).then(__webpack_require__.bind(null, 118)));

const _27a8cae7 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/profile */ 9).then(__webpack_require__.bind(null, 119)));

const _6cf61ee8 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/search/index */ 10).then(__webpack_require__.bind(null, 120)));

const _103c6eca = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/transactions/index */ 15).then(__webpack_require__.bind(null, 121)));

const _31dd5c44 = () => interopDefault(__webpack_require__.e(/* import() | pages/password/email */ 23).then(__webpack_require__.bind(null, 122)));

const _28704843 = () => interopDefault(__webpack_require__.e(/* import() | pages/verification/resend */ 29).then(__webpack_require__.bind(null, 123)));

const _14135c22 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/forms/bundle */ 6).then(__webpack_require__.bind(null, 124)));

const _fdb42a5c = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/forms/product */ 7).then(__webpack_require__.bind(null, 125)));

const _17361798 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/tables/bundles/index */ 11).then(__webpack_require__.bind(null, 126)));

const _f2bdd532 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/tables/products/index */ 12).then(__webpack_require__.bind(null, 127)));

const _c846fdbe = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/tables/users/index */ 13).then(__webpack_require__.bind(null, 128)));

const _7221947a = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/transactions/_id */ 14).then(__webpack_require__.bind(null, 129)));

const _16ce88f1 = () => interopDefault(__webpack_require__.e(/* import() | pages/password/reset/_token */ 24).then(__webpack_require__.bind(null, 130)));

const _7f72e289 = () => interopDefault(__webpack_require__.e(/* import() | pages/verification/verify/_id */ 30).then(__webpack_require__.bind(null, 131)));

const _07e29596 = () => interopDefault(__webpack_require__.e(/* import() | pages/bundles/_id */ 16).then(__webpack_require__.bind(null, 132)));

const _289bd37e = () => interopDefault(__webpack_require__.e(/* import() | pages/categories/_id */ 18).then(__webpack_require__.bind(null, 133)));

const _9f56fa8e = () => interopDefault(__webpack_require__.e(/* import() | pages/products/_id */ 25).then(__webpack_require__.bind(null, 134)));

const _4d476535 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 20).then(__webpack_require__.bind(null, 135))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about-us",
    component: _879eb46a,
    name: "about-us"
  }, {
    path: "/admin",
    component: _a37781e0,
    name: "admin"
  }, {
    path: "/bundles",
    component: _6d0700a4,
    name: "bundles"
  }, {
    path: "/Carts",
    component: _02991d16,
    name: "Carts"
  }, {
    path: "/categories",
    component: _1122fcce,
    name: "categories"
  }, {
    path: "/liked-items",
    component: _29cdaac3,
    name: "liked-items"
  }, {
    path: "/login",
    component: _16ef084c,
    name: "login"
  }, {
    path: "/products",
    component: _1d27b011,
    name: "products"
  }, {
    path: "/Profile",
    component: _75e4a3ac,
    name: "Profile"
  }, {
    path: "/register",
    component: _de70c5e0,
    name: "register"
  }, {
    path: "/test",
    component: _01b115ff,
    name: "test"
  }, {
    path: "/admin/admin-list",
    component: _317cefe4,
    name: "admin-admin-list"
  }, {
    path: "/admin/dashboard-tutorial",
    component: _41442aa9,
    name: "admin-dashboard-tutorial"
  }, {
    path: "/admin/profile",
    component: _27a8cae7,
    name: "admin-profile"
  }, {
    path: "/admin/search",
    component: _6cf61ee8,
    name: "admin-search"
  }, {
    path: "/admin/transactions",
    component: _103c6eca,
    name: "admin-transactions"
  }, {
    path: "/password/email",
    component: _31dd5c44,
    name: "password-email"
  }, {
    path: "/verification/resend",
    component: _28704843,
    name: "verification-resend"
  }, {
    path: "/admin/forms/bundle",
    component: _14135c22,
    name: "admin-forms-bundle"
  }, {
    path: "/admin/forms/product",
    component: _fdb42a5c,
    name: "admin-forms-product"
  }, {
    path: "/admin/tables/bundles",
    component: _17361798,
    name: "admin-tables-bundles"
  }, {
    path: "/admin/tables/products",
    component: _f2bdd532,
    name: "admin-tables-products"
  }, {
    path: "/admin/tables/users",
    component: _c846fdbe,
    name: "admin-tables-users"
  }, {
    path: "/admin/transactions/:id",
    component: _7221947a,
    name: "admin-transactions-id"
  }, {
    path: "/password/reset/:token?",
    component: _16ce88f1,
    name: "password-reset-token"
  }, {
    path: "/verification/verify/:id?",
    component: _7f72e289,
    name: "verification-verify-id"
  }, {
    path: "/bundles/:id",
    component: _07e29596,
    name: "bundles-id"
  }, {
    path: "/categories/:id",
    component: _289bd37e,
    name: "categories-id"
  }, {
    path: "/products/:id",
    component: _9f56fa8e,
    name: "products-id"
  }, {
    path: "/",
    component: _4d476535,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7baec08c"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "50d6966e"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/admin.vue?vue&type=template&id=7688cfaf&
var adminvue_type_template_id_7688cfaf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AdminSideNav'),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"panel\" class=\"main-content\">","</div>",[_c('AdminTopNav'),_vm._ssrNode(" "),_c('AdminHeader'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_c('Nuxt'),_vm._ssrNode(" "),_c('AdminFooter')],2)],2)],2)}
var adminvue_type_template_id_7688cfaf_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/admin.vue?vue&type=template&id=7688cfaf&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/admin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
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
  name: 'Admin',

  data() {
    return {
      isJQueryLoaded: false
    };
  },

  head() {
    return {
      meta: [{
        title: 'testing'
      }],
      link: [{
        rel: 'icon',
        type: 'image/png',
        href: '/assets/img/brand/favicon.png'
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'
      }, {
        rel: 'stylesheet',
        href: '/assets/vendor/nucleo/css/nucleo.css'
      }, {
        rel: 'stylesheet',
        href: '/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css'
      }, {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/assets/css/argon.min.css'
      }],
      script: [// {
      //   src:
      //     'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
      //   integrity:
      //     'sha512-bnIvzh6FU75ZKxp0GXLH9bewza/OIw6dLVh9ICg0gogclmYGguQJWl8U30WpbsGTqbIiAwxTsbe76DErLq5EDQ==',
      //   crossorigin: 'anonymous',
      //   body: true,
      // },
      {
        src: '/assets/vendor/js-cookie/js.cookie.js',
        body: true
      }, {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js',
        integrity: 'sha512-TqmAh0/sSbwSuVBODEagAoiUIeGRo8u95a41zykGfq5iPkO9oie8IKCgx7yAr1bfiBjZeuapjLgMdp9UMpCVYQ==',
        crossorigin: 'anonymous',
        body: true
      }, // Argon Js
      {
        src: '/assets/js/argon.js',
        body: true
      }]
    };
  }

});
// CONCATENATED MODULE: ./layouts/admin.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/admin.vue



function admin_injectStyles (context) {
  
  
}

/* normalize component */

var admin_component = Object(componentNormalizer["a" /* default */])(
  layouts_adminvue_type_script_lang_js_,
  adminvue_type_template_id_7688cfaf_render,
  adminvue_type_template_id_7688cfaf_staticRenderFns,
  false,
  admin_injectStyles,
  null,
  "15bc005d"
  
)

/* harmony default export */ var admin = (admin_component.exports);

/* nuxt-component-imports */
installComponents(admin_component, {AdminSideNav: __webpack_require__(57).default,AdminTopNav: __webpack_require__(58).default,AdminHeader: __webpack_require__(59).default,AdminFooter: __webpack_require__(60).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=0d780816&
var defaultvue_type_template_id_0d780816_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pt-5\">","</div>",[_c('Nuxt')],1),_vm._ssrNode(" "),_c('LoginRegisterFooter')],2)}
var defaultvue_type_template_id_0d780816_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=0d780816&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  name: 'Default',

  head() {
    return {
      link: [{
        rel: 'stylesheet',
        type: 'text/css',
        href: '/style/bootstrap.min.css'
      }],
      script: [{
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
        integrity: 'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN',
        crossorigin: 'anonymous',
        body: true
      }, {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
        integrity: 'sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV',
        crossorigin: 'anonymous',
        body: true
      }, {
        src: '/js/navbar.js',
        body: true
      }]
    };
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_0d780816_render,
  defaultvue_type_template_id_0d780816_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "4eaf3662"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Navbar: __webpack_require__(61).default,LoginRegisterFooter: __webpack_require__(22).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/login-register.vue?vue&type=template&id=378a3353&
var login_registervue_type_template_id_378a3353_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('LoginRegisterHeader'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('LoginRegisterFooter',{class:_vm.classFooter})],2)}
var login_registervue_type_template_id_378a3353_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/login-register.vue?vue&type=template&id=378a3353&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/login-register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var login_registervue_type_script_lang_js_ = ({
  computed: {
    classFooter() {
      if (this.$route.path === '/login') {
        return 'footer-lg';
      } else if (this.$route.path === '/register') {
        return 'footer-rg';
      }

      return '';
    }

  },

  head() {
    return {
      link: [{
        rel: 'stylesheet',
        type: 'text/css',
        href: '/style/bootstrap.min.css'
      }],
      script: [{
        src: '/js/navbar.js',
        body: true
      }, {
        src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
        crossorigin: 'anonymous',
        body: true
      }, {
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
        integrity: 'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN',
        crossorigin: 'anonymous',
        body: true
      }, {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
        integrity: 'sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV',
        crossorigin: 'anonymous',
        body: true
      }]
    };
  }

});
// CONCATENATED MODULE: ./layouts/login-register.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_login_registervue_type_script_lang_js_ = (login_registervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/login-register.vue



function login_register_injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var login_register_component = Object(componentNormalizer["a" /* default */])(
  layouts_login_registervue_type_script_lang_js_,
  login_registervue_type_template_id_378a3353_render,
  login_registervue_type_template_id_378a3353_staticRenderFns,
  false,
  login_register_injectStyles,
  null,
  "a24f2b2e"
  
)

/* harmony default export */ var login_register = (login_register_component.exports);

/* nuxt-component-imports */
installComponents(login_register_component, {LoginRegisterHeader: __webpack_require__(62).default,LoginRegisterFooter: __webpack_require__(22).default})

// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_admin": sanitizeComponent(admin),
  "_default": sanitizeComponent(layouts_default),
  "_login-register": sanitizeComponent(login_register)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(46), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(47), 'bundles.js');
  resolveStoreModules(__webpack_require__(48), 'categories.js');
  resolveStoreModules(__webpack_require__(49), 'discussions.js');
  resolveStoreModules(__webpack_require__(50), 'products.js');
  resolveStoreModules(__webpack_require__(51), 'search.js');
  resolveStoreModules(__webpack_require__(52), 'transactions.js');
  resolveStoreModules(__webpack_require__(53), 'users.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(26);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(7);

// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(27);

// EXTERNAL MODULE: ./.nuxt/pwa/meta.merge.js
var meta_merge = __webpack_require__(28);
var meta_merge_default = /*#__PURE__*/__webpack_require__.n(meta_merge);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.js


/* harmony default export */ var pwa_meta = (function ({
  app
}) {
  meta_merge_default()(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icons.js
/* harmony default export */ var icons = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.81e192.png",
    "120x120": "/_nuxt/icons/icon_120x120.81e192.png",
    "144x144": "/_nuxt/icons/icon_144x144.81e192.png",
    "152x152": "/_nuxt/icons/icon_152x152.81e192.png",
    "192x192": "/_nuxt/icons/icon_192x192.81e192.png",
    "384x384": "/_nuxt/icons/icon_384x384.81e192.png",
    "512x512": "/_nuxt/icons/icon_512x512.81e192.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.81e192.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.81e192.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.81e192.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.81e192.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.81e192.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.81e192.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.81e192.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.81e192.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.81e192.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.81e192.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(10);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (let scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (let method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (let key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupCredentialsInterceptor(axios);
  setupProgress(axios);
  return axios;
};

const setupCredentialsInterceptor = axios => {
  // Send credentials only to relative and API Backend requests
  axios.onRequest(config => {
    if (config.withCredentials === undefined) {
      if (!/^https?:\/\//i.test(config.url) || config.url.indexOf(config.baseURL) === 0) {
        config.withCredentials = true;
      }
    }
  });
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'http://api.onlinegifting.shop/api/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "vform"
var external_vform_ = __webpack_require__(3);

// CONCATENATED MODULE: ./plugins/vform.js


external_vue_default.a.component(external_vform_["HasError"].name, external_vform_["HasError"]);
external_vue_default.a.component(external_vform_["AlertSuccess"].name, external_vform_["AlertSuccess"]);
external_vue_default.a.component(external_vform_["AlertError"].name, external_vform_["AlertError"]);
/* harmony default export */ var vform = (({
  app
}, inject) => {
  external_vform_["Form"].prototype.submit = function submit(method, url, config = {}) {
    this.startProcessing();
    const data = method === 'get' ? {
      params: this.data()
    } : this.data();
    return new Promise((resolve, reject) => {
      app.$axios.request({
        url: this.route(url),
        method,
        data,
        ...config
      }).then(response => {
        this.finishProcessing();
        resolve(response);
      }).catch(error => {
        this.busy = false;

        if (error.response) {
          this.errors.set(this.extractErrors(error.response));
        }

        reject(error);
      });
    });
  };

  app.$vform = (...params) => new external_vform_["Form"](...params);

  inject('vform', (...params) => new external_vform_["Form"](...params));
});
// EXTERNAL MODULE: external "vuesax"
var external_vuesax_ = __webpack_require__(29);
var external_vuesax_default = /*#__PURE__*/__webpack_require__.n(external_vuesax_);

// EXTERNAL MODULE: ./node_modules/vuesax/dist/vuesax.css
var vuesax = __webpack_require__(54);

// CONCATENATED MODULE: ./plugins/vuesax.js



external_vue_default.a.use(external_vuesax_default.a);
// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/utils/index.js
const isUnset = o => typeof o === 'undefined' || o === null;
const isSet = o => !isUnset(o);
function isSameURL(a, b) {
    return a.split('?')[0].replace(/\/+$/, '') === b.split('?')[0].replace(/\/+$/, '');
}
function isRelativeURL(u) {
    return u && u.length && /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u);
}
function parseQuery(queryString) {
    const query = {};
    const pairs = queryString.split('&');
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}
function encodeQuery(queryObject) {
    return Object.entries(queryObject)
        .filter(([_key, value]) => typeof value !== 'undefined')
        .map(([key, value]) => encodeURIComponent(key) + (value != null ? '=' + encodeURIComponent(value) : ''))
        .join('&');
}
function routeOption(route, key, value) {
    return route.matched.some((m) => {
        if (false) {}
        else {
            // SSR
            return Object.values(m.components).some(component => Object.values(component._Ctor).some(ctor => ctor.options && ctor.options[key] === value));
        }
    });
}
function utils_getMatchedComponents(route, matches = []) {
    return [].concat.apply([], route.matched.map(function (m, index) {
        return Object.keys(m.components).map(function (key) {
            matches.push(index);
            return m.components[key];
        });
    }));
}
function normalizePath(path = '') {
    // Remove query string
    let result = path.split('?')[0];
    // Remove redundant / from the end of path
    if (result.charAt(result.length - 1) === '/') {
        result = result.slice(0, -1);
    }
    return result;
}
function encodeValue(val) {
    if (typeof val === 'string') {
        return val;
    }
    return JSON.stringify(val);
}
function decodeValue(val) {
    // Try to parse as json
    if (typeof val === 'string') {
        try {
            return JSON.parse(val);
        }
        catch (_) {
        }
    }
    // Return as is
    return val;
}
/**
 * Get property defined by dot notation in string.
 * Based on  https://github.com/dy/dotprop (MIT)
 *
 * @param  {Object} holder   Target object where to look property up
 * @param  {string} propName Dot notation, like 'this.a.b.c'
 * @return {*}          A property value
 */
function getProp(holder, propName) {
    if (!propName || !holder) {
        return holder;
    }
    if (propName in holder) {
        return holder[propName];
    }
    const propParts = Array.isArray(propName) ? propName : (propName + '').split('.');
    let result = holder;
    while (propParts.length && result) {
        result = result[propParts.shift()];
    }
    return result;
}
function getResponseProp(response, prop) {
    if (prop[0] === '.') {
        return getProp(response, prop.substring(1));
    }
    else {
        return getProp(response.data, prop);
    }
}
// Ie "Bearer " + token
function addTokenPrefix(token, tokenType) {
    if (!token || !tokenType || token.startsWith(tokenType)) {
        return token;
    }
    return tokenType + ' ' + token;
}
function removeTokenPrefix(token, tokenType) {
    if (!token || !tokenType) {
        return token;
    }
    return token.replace(tokenType + ' ', '');
}
function utils_urlJoin(...args) {
    return args.join('/')
        .replace(/[/]+/g, '/')
        .replace(/^(.+):\//, '$1://')
        .replace(/^file:/, 'file:/')
        .replace(/\/(\?|&|#[^!])/g, '$1')
        .replace(/\?/g, '&')
        .replace('&', '?');
}
function cleanObj(obj) {
    for (const key in obj) {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/core/middleware.js

async function authMiddleware(ctx) {
    // Disable middleware if options: { auth: false } is set on the route
    if (routeOption(ctx.route, 'auth', false)) {
        return;
    }
    // Disable middleware if no route was matched to allow 404/error page
    const matches = [];
    const Components = utils_getMatchedComponents(ctx.route, matches);
    if (!Components.length) {
        return;
    }
    const { login, callback } = ctx.$auth.options.redirect;
    const pageIsInGuestMode = routeOption(ctx.route, 'auth', 'guest');
    const insidePage = page => normalizePath(ctx.route.path) === normalizePath(page);
    if (ctx.$auth.$state.loggedIn) {
        // -- Authorized --
        if (!login || insidePage(login) || pageIsInGuestMode) {
            ctx.$auth.redirect('home');
        }
        // Perform scheme checks.
        const { tokenExpired, refreshTokenExpired, isRefreshable } = ctx.$auth.check(true);
        // Refresh token has expired. There is no way to refresh. Force reset.
        if (refreshTokenExpired) {
            ctx.$auth.reset();
        }
        else if (tokenExpired) {
            // Token has expired. Check if refresh token is available.
            if (isRefreshable) {
                // Refresh token is available. Attempt refresh.
                await ctx.$auth.refreshTokens();
            }
            else {
                // Refresh token is not available. Force reset.
                ctx.$auth.reset();
            }
        }
        // -- Guest --
        // (Those passing `callback` at runtime need to mark their callback component
        // with `auth: false` to avoid an unnecessary redirect from callback to login)
    }
    else if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
        ctx.$auth.redirect('login');
    }
}

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/core/storage.js



class storage_Storage {
    constructor(ctx, options) {
        this.ctx = ctx;
        this.options = options;
        this._initState();
    }
    // ------------------------------------
    // Universal
    // ------------------------------------
    setUniversal(key, value) {
        // Unset null, undefined
        if (isUnset(value)) {
            return this.removeUniversal(key);
        }
        // Cookies
        this.setCookie(key, value);
        // Local Storage
        this.setLocalStorage(key, value);
        // Local state
        this.setState(key, value);
        return value;
    }
    getUniversal(key) {
        let value;
        // Local state
        if (true) {
            value = this.getState(key);
        }
        // Cookies
        if (isUnset(value)) {
            value = this.getCookie(key);
        }
        // Local Storage
        if (isUnset(value)) {
            value = this.getLocalStorage(key);
        }
        // Local state
        if (isUnset(value)) {
            value = this.getState(key);
        }
        return value;
    }
    syncUniversal(key, defaultValue) {
        let value = this.getUniversal(key);
        if (isUnset(value) && isSet(defaultValue)) {
            value = defaultValue;
        }
        if (isSet(value)) {
            this.setUniversal(key, value);
        }
        return value;
    }
    removeUniversal(key) {
        this.removeState(key);
        this.removeLocalStorage(key);
        this.removeCookie(key);
    }
    // ------------------------------------
    // Local state (reactive)
    // ------------------------------------
    _initState() {
        // Private state is suitable to keep information not being exposed to Vuex store
        // This helps prevent stealing token from SSR response HTML
        external_vue_default.a.set(this, '_state', {});
        // Use vuex for local state's if possible
        this._useVuex = this.options.vuex && this.ctx.store;
        if (this._useVuex) {
            const storeModule = {
                namespaced: true,
                state: () => this.options.initialState,
                mutations: {
                    SET(state, payload) {
                        external_vue_default.a.set(state, payload.key, payload.value);
                    }
                }
            };
            this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
                preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
            });
            this.state = this.ctx.store.state[this.options.vuex.namespace];
        }
        else {
            external_vue_default.a.set(this, 'state', {});
        }
    }
    setState(key, value) {
        if (key[0] === '_') {
            external_vue_default.a.set(this._state, key, value);
        }
        else if (this._useVuex) {
            this.ctx.store.commit(this.options.vuex.namespace + '/SET', {
                key,
                value
            });
        }
        else {
            external_vue_default.a.set(this.state, key, value);
        }
        return value;
    }
    getState(key) {
        if (key[0] !== '_') {
            return this.state[key];
        }
        else {
            return this._state[key];
        }
    }
    watchState(key, fn) {
        if (this._useVuex) {
            return this.ctx.store.watch(state => getProp(state[this.options.vuex.namespace], key), fn);
        }
    }
    removeState(key) {
        this.setState(key, undefined);
    }
    // ------------------------------------
    // Local storage
    // ------------------------------------
    setLocalStorage(key, value) {
        // Unset null, undefined
        if (isUnset(value)) {
            return this.removeLocalStorage(key);
        }
        if (typeof localStorage === 'undefined' || !this.options.localStorage) {
            return;
        }
        const _key = this.options.localStorage.prefix + key;
        try {
            localStorage.setItem(_key, encodeValue(value));
        }
        catch (e) {
            if (!this.options.ignoreExceptions) {
                throw e;
            }
        }
        return value;
    }
    getLocalStorage(key) {
        if (typeof localStorage === 'undefined' || !this.options.localStorage) {
            return;
        }
        const _key = this.options.localStorage.prefix + key;
        const value = localStorage.getItem(_key);
        return decodeValue(value);
    }
    removeLocalStorage(key) {
        if (typeof localStorage === 'undefined' || !this.options.localStorage) {
            return;
        }
        const _key = this.options.localStorage.prefix + key;
        localStorage.removeItem(_key);
    }
    // ------------------------------------
    // Cookies
    // ------------------------------------
    getCookies() {
        const cookieStr =  false
            ? undefined
            : this.ctx.req.headers.cookie;
        return Object(external_cookie_["parse"])(cookieStr || '') || {};
    }
    setCookie(key, value, options = {}) {
        if (!this.options.cookie || ( true && !this.ctx.res)) {
            return;
        }
        const _prefix = options.prefix !== undefined ? options.prefix : this.options.cookie.prefix;
        const _key = _prefix + key;
        const _options = Object.assign({}, this.options.cookie.options, options);
        const _value = encodeValue(value);
        // Unset null, undefined
        if (isUnset(value)) {
            _options.maxAge = -1;
        }
        // Accept expires as a number for js-cookie compatiblity
        if (typeof _options.expires === 'number') {
            _options.expires = new Date(Date.now() + (_options.expires * 864e+5));
        }
        const serializedCookie = Object(external_cookie_["serialize"])(_key, _value, _options);
        if (false) {}
        else if ( true && this.ctx.res) {
            // Send Set-Cookie header from server side
            const cookies = this.ctx.res.getHeader('Set-Cookie') || [];
            cookies.unshift(serializedCookie);
            this.ctx.res.setHeader('Set-Cookie', cookies
                .filter((v, i, arr) => arr.findIndex(val => val.startsWith(v.substr(0, v.indexOf('=')))) === i));
        }
        return value;
    }
    getCookie(key) {
        if (!this.options.cookie || ( true && !this.ctx.req)) {
            return;
        }
        const _key = this.options.cookie.prefix + key;
        const cookies = this.getCookies();
        const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : undefined;
        return decodeValue(value);
    }
    removeCookie(key, options) {
        this.setCookie(key, undefined, options);
    }
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/core/auth.js


class auth_Auth {
    constructor(ctx, options) {
        this.strategies = {};
        this._errorListeners = [];
        this._redirectListeners = [];
        this.ctx = ctx;
        this.options = options;
        // Storage & State
        options.initialState = { user: null, loggedIn: false };
        const storage = new storage_Storage(ctx, options);
        this.$storage = storage;
        this.$state = storage.state;
    }
    async init() {
        // Reset on error
        if (this.options.resetOnError) {
            this.onError((...args) => {
                if (typeof (this.options.resetOnError) !== 'function' || this.options.resetOnError(...args)) {
                    this.reset();
                }
            });
        }
        // Restore strategy
        this.$storage.syncUniversal('strategy', this.options.defaultStrategy);
        // Set default strategy if current one is invalid
        if (!this.strategy) {
            this.$storage.setUniversal('strategy', this.options.defaultStrategy);
            // Give up if still invalid
            if (!this.strategy) {
                return Promise.resolve();
            }
        }
        try {
            // Call mounted for active strategy on initial load
            await this.mounted();
        }
        catch (error) {
            this.callOnError(error);
        }
        finally {
            // Watch for loggedIn changes only in client side
            if (false) {}
        }
    }
    // Backward compatibility
    get state() {
        if (!this._stateWarnShown) {
            this._stateWarnShown = true;
            // eslint-disable-next-line no-console
            console.warn('[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn');
        }
        return this.$state;
    }
    getState(key) {
        if (!this._getStateWarnShown) {
            this._getStateWarnShown = true;
            // eslint-disable-next-line no-console
            console.warn('[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn');
        }
        return this.$storage.getState(key);
    }
    // ---------------------------------------------------------------
    // Strategy and Scheme
    // ---------------------------------------------------------------
    get strategy() {
        return this.strategies[this.$state.strategy];
    }
    registerStrategy(name, strategy) {
        this.strategies[name] = strategy;
    }
    setStrategy(name) {
        if (name === this.$storage.getUniversal('strategy')) {
            return Promise.resolve();
        }
        if (!this.strategies[name]) {
            throw new Error(`Strategy ${name} is not defined!`);
        }
        // Reset current strategy
        this.reset();
        // Set new strategy
        this.$storage.setUniversal('strategy', name);
        // Call mounted hook on active strategy
        return this.mounted();
    }
    mounted() {
        if (!this.strategy.mounted) {
            return this.fetchUserOnce();
        }
        return Promise.resolve(this.strategy.mounted(...arguments)).catch((error) => {
            this.callOnError(error, { method: 'mounted' });
            return Promise.reject(error);
        });
    }
    loginWith(name, ...args) {
        return this.setStrategy(name).then(() => this.login(...args));
    }
    login(...args) {
        if (!this.strategy.login) {
            return Promise.resolve();
        }
        return this.wrapLogin(this.strategy.login(...args))
            .catch((error) => {
            this.callOnError(error, { method: 'login' });
            return Promise.reject(error);
        });
    }
    fetchUser(...args) {
        if (!this.strategy.fetchUser) {
            return Promise.resolve();
        }
        return Promise.resolve(this.strategy.fetchUser(...args)).catch((error) => {
            this.callOnError(error, { method: 'fetchUser' });
            return Promise.reject(error);
        });
    }
    logout() {
        if (!this.strategy.logout) {
            this.reset();
            return Promise.resolve();
        }
        return Promise.resolve(this.strategy.logout(...arguments)).catch((error) => {
            this.callOnError(error, { method: 'logout' });
            return Promise.reject(error);
        });
    }
    setUserToken(token, refreshToken) {
        if (!this.strategy.setUserToken) {
            this.strategy.token.set(token);
            return Promise.resolve();
        }
        return Promise.resolve(this.strategy.setUserToken(token, refreshToken)).catch((error) => {
            this.callOnError(error, { method: 'setUserToken' });
            return Promise.reject(error);
        });
    }
    reset(...args) {
        if (!this.strategy.reset) {
            this.setUser(false);
            this.strategy.token.reset();
            this.strategy.refreshToken.reset();
        }
        return this.strategy.reset(...args);
    }
    refreshTokens() {
        if (!this.strategy.refreshController) {
            return Promise.resolve();
        }
        return Promise.resolve(this.strategy.refreshController.handleRefresh()).catch((error) => {
            this.callOnError(error, { method: 'refreshTokens' });
            return Promise.reject(error);
        });
    }
    // ---------------------------------------------------------------
    // User helpers
    // ---------------------------------------------------------------
    get user() {
        return this.$state.user;
    }
    get loggedIn() {
        return this.$state.loggedIn;
    }
    check(...args) {
        if (!this.strategy.check) {
            return { valid: true };
        }
        return this.strategy.check(...args);
    }
    fetchUserOnce(...args) {
        if (!this.$state.user) {
            return this.fetchUser(...args);
        }
        return Promise.resolve();
    }
    setUser(user) {
        this.$storage.setState('user', user);
        let check = { valid: Boolean(user) };
        // If user is defined, perform scheme checks.
        if (check.valid) {
            check = this.check();
        }
        // Update `loggedIn` state
        this.$storage.setState('loggedIn', check.valid);
    }
    // ---------------------------------------------------------------
    // Utils
    // ---------------------------------------------------------------
    get busy() {
        return this.$storage.getState('busy');
    }
    request(endpoint, defaults = {}) {
        const _endpoint = typeof defaults === 'object'
            ? Object.assign({}, defaults, endpoint)
            : endpoint;
        if (!this.ctx.app.$axios) {
            // eslint-disable-next-line no-console
            console.error('[AUTH] add the @nuxtjs/axios module to nuxt.config file');
            return;
        }
        return this.ctx.app.$axios
            .request(_endpoint)
            .catch((error) => {
            // Call all error handlers
            this.callOnError(error, { method: 'request' });
            // Throw error
            return Promise.reject(error);
        });
    }
    requestWith(strategy, endpoint, defaults) {
        const token = this.strategy.token.get();
        const _endpoint = Object.assign({}, defaults, endpoint);
        const tokenName = this.strategies[strategy].options.tokenName || 'Authorization';
        if (!_endpoint.headers) {
            _endpoint.headers = {};
        }
        if (!_endpoint.headers[tokenName] && isSet(token) && token) {
            _endpoint.headers[tokenName] = token;
        }
        return this.request(_endpoint);
    }
    wrapLogin(promise) {
        this.$storage.setState('busy', true);
        this.error = null;
        return Promise.resolve(promise)
            .then((response) => {
            this.$storage.setState('busy', false);
            return response;
        })
            .catch((error) => {
            this.$storage.setState('busy', false);
            return Promise.reject(error);
        });
    }
    onError(listener) {
        this._errorListeners.push(listener);
    }
    callOnError(error, payload = {}) {
        this.error = error;
        for (const fn of this._errorListeners) {
            fn(error, payload);
        }
    }
    redirect(name, noRouter = false) {
        if (!this.options.redirect) {
            return;
        }
        const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
        let to = this.options.redirect[name];
        if (!to) {
            return;
        }
        // Apply rewrites
        if (this.options.rewriteRedirects) {
            if (name === 'login' && isRelativeURL(from) && !isSameURL(to, from)) {
                this.$storage.setUniversal('redirect', from);
            }
            if (name === 'home') {
                const redirect = this.$storage.getUniversal('redirect');
                this.$storage.setUniversal('redirect', null);
                if (isRelativeURL(redirect)) {
                    to = redirect;
                }
            }
        }
        // Call onRedirect hook
        to = this.callOnRedirect(to, from) || to;
        // Prevent infinity redirects
        if (isSameURL(to, from)) {
            return;
        }
        if (false) {}
        else {
            this.ctx.redirect(to, this.ctx.query);
        }
    }
    onRedirect(listener) {
        this._redirectListeners.push(listener);
    }
    callOnRedirect(to, from) {
        for (const fn of this._redirectListeners) {
            to = fn(to, from) || to;
        }
        return to;
    }
    hasScope(scope) {
        const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);
        if (!userScopes) {
            return false;
        }
        if (Array.isArray(userScopes)) {
            return userScopes.includes(scope);
        }
        return Boolean(getProp(userScopes, scope));
    }
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/inc/expired-auth-session-error.js
class ExpiredAuthSessionError extends Error {
    constructor() {
        super('Both token and refresh token have expired. Your request was aborted.');
        this.name = 'ExpiredAuthSessionError';
    }
}

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(14);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/inc/token-status.js
var TokenStatusEnum;
(function (TokenStatusEnum) {
    TokenStatusEnum["UNKNOWN"] = "UNKNOWN";
    TokenStatusEnum["VALID"] = "VALID";
    TokenStatusEnum["EXPIRED"] = "EXPIRED";
})(TokenStatusEnum || (TokenStatusEnum = {}));
class TokenStatus {
    constructor(token, tokenExpiresAt) {
        this._status = this._calculate(token, tokenExpiresAt);
    }
    _calculate(token, tokenExpiresAt) {
        const now = Date.now();
        try {
            if (!token || !tokenExpiresAt) {
                return TokenStatusEnum.UNKNOWN;
            }
        }
        catch (error) {
            return TokenStatusEnum.UNKNOWN;
        }
        // Give us some slack to help the token from expiring between validation and usage
        const timeSlackMillis = 500;
        tokenExpiresAt -= timeSlackMillis;
        // Token is still valid
        if (now < tokenExpiresAt) {
            return TokenStatusEnum.VALID;
        }
        return TokenStatusEnum.EXPIRED;
    }
    unknown() {
        return TokenStatusEnum.UNKNOWN === this._status;
    }
    valid() {
        return TokenStatusEnum.VALID === this._status;
    }
    expired() {
        return TokenStatusEnum.EXPIRED === this._status;
    }
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/inc/token.js



class token_Token {
    constructor(scheme, storage) {
        this.scheme = scheme;
        this.$storage = storage;
    }
    _getExpiration() {
        const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
        return this.$storage.getUniversal(_key);
    }
    _setExpiration(expiration) {
        const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
        return this.$storage.setUniversal(_key, expiration);
    }
    _syncExpiration() {
        const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
        return this.$storage.syncUniversal(_key);
    }
    _updateExpiration(token) {
        let tokenExpiration;
        const _tokenIssuedAtMillis = Date.now();
        const _tokenTTLMillis = this.scheme.options.token.maxAge * 1000;
        const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
        try {
            tokenExpiration = external_jwt_decode_default()(token).exp * 1000 || _tokenExpiresAtMillis;
        }
        catch (error) {
            // If the token is not jwt, we can't decode and refresh it, use _tokenExpiresAt value
            tokenExpiration = _tokenExpiresAtMillis;
            if (!(error instanceof external_jwt_decode_["InvalidTokenError"])) {
                throw error;
            }
        }
        // Set token expiration
        return this._setExpiration(tokenExpiration || false);
    }
    _setToken(token) {
        const _key = this.scheme.options.token.prefix + this.scheme.name;
        return this.$storage.setUniversal(_key, token);
    }
    _syncToken() {
        const _key = this.scheme.options.token.prefix + this.scheme.name;
        return this.$storage.syncUniversal(_key);
    }
    get() {
        const _key = this.scheme.options.token.prefix + this.scheme.name;
        return this.$storage.getUniversal(_key);
    }
    set(tokenValue) {
        const token = addTokenPrefix(tokenValue, this.scheme.options.token.type);
        this._setToken(token);
        this.scheme.requestHandler.setHeader(token);
        this._updateExpiration(token);
        return token;
    }
    sync() {
        const token = this._syncToken();
        this._syncExpiration();
        this.scheme.requestHandler.setHeader(token);
        return token;
    }
    reset() {
        this.scheme.requestHandler.clearHeader();
        this._setToken(false);
        this._setExpiration(false);
    }
    status() {
        return new TokenStatus(this.get(), this._getExpiration());
    }
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/inc/request-handler.js

class request_handler_RequestHandler {
    constructor(scheme, axios) {
        this.scheme = scheme;
        this.axios = axios;
        this.interceptor = null;
    }
    _needToken(config) {
        const options = this.scheme.options;
        return options.token.global || Object.values(options.endpoints)
            .some((endpoint) => typeof endpoint === 'object' ? endpoint.url === config.url : endpoint === config.url);
    }
    _getUpdatedRequestConfig(config, token) {
        config.headers[this.scheme.options.token.name] = token;
        return config;
    }
    _requestHasAuthorizationHeader(config) {
        return !!config.headers.common[this.scheme.options.token.name];
    }
    setHeader(token) {
        if (this.scheme.options.token.global) {
            // Set Authorization token for all axios requests
            this.axios.setHeader(this.scheme.options.token.name, token);
        }
    }
    clearHeader() {
        if (this.scheme.options.token.global) {
            // Clear Authorization token for all axios requests
            this.axios.setHeader(this.scheme.options.token.name, false);
        }
    }
    // ---------------------------------------------------------------
    // Watch requests for token expiration
    // Refresh tokens if token has expired
    // ---------------------------------------------------------------
    initializeRequestInterceptor(refreshEndpoint) {
        this.interceptor = this.axios.interceptors.request.use(async (config) => {
            // Don't intercept refresh token requests
            if (!this._needToken(config) || config.url === refreshEndpoint) {
                return config;
            }
            // Perform scheme checks.
            const { valid, tokenExpired, refreshTokenExpired, isRefreshable } = this.scheme.check(true);
            let isValid = valid;
            // Refresh token has expired. There is no way to refresh. Force reset.
            if (refreshTokenExpired) {
                this.scheme.reset();
                throw new ExpiredAuthSessionError();
            }
            // Token has expired.
            if (tokenExpired) {
                // Refresh token is not available. Force reset.
                if (!isRefreshable) {
                    this.scheme.reset();
                    throw new ExpiredAuthSessionError();
                }
                // Refresh token is available. Attempt refresh.
                isValid = await this.scheme.refreshTokens().then(() => true).catch(() => {
                    // Tokens couldn't be refreshed. Force reset.
                    this.scheme.reset();
                    throw new ExpiredAuthSessionError();
                });
            }
            // Sync token
            const token = this.scheme.token.get();
            // Scheme checks were performed, but returned that is not valid.
            if (!isValid) {
                // The authorization header in the current request is expired.
                // Token was deleted right before this request
                if (!token && this._requestHasAuthorizationHeader(config)) {
                    throw new ExpiredAuthSessionError();
                }
                return config;
            }
            // Token is valid, let the request pass
            // Fetch updated token and add to current request
            return this._getUpdatedRequestConfig(config, token);
        });
    }
    reset() {
        // Eject request interceptor
        this.axios.interceptors.request.eject(this.interceptor);
        this.interceptor = null;
    }
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/schemes/_scheme.js

class _scheme_BaseScheme {
    constructor($auth, ...options) {
        this.$auth = $auth;
        this.options = options.reduce((p, c) => external_defu_default()(p, c), {});
    }
    get name() {
        return this.options.name;
    }
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/schemes/local.js




const DEFAULTS = {
    name: 'local',
    endpoints: {
        login: {
            url: '/api/auth/login',
            method: 'post'
        },
        logout: {
            url: '/api/auth/logout',
            method: 'post'
        },
        user: {
            url: '/api/auth/user',
            method: 'get'
        }
    },
    token: {
        property: 'token',
        type: 'Bearer',
        name: 'Authorization',
        maxAge: 1800,
        global: true,
        required: true,
        prefix: '_token.',
        expirationPrefix: '_token_expiration.'
    },
    user: {
        property: 'user',
        autoFetch: true
    },
    clientId: false,
    grantType: false,
    scope: false
};
class local_LocalScheme extends _scheme_BaseScheme {
    constructor($auth, options, ...defaults) {
        super($auth, options, ...defaults, DEFAULTS);
        // Initialize Token instance
        this.token = new token_Token(this, this.$auth.$storage);
        // Initialize Request Interceptor
        this.requestHandler = new request_handler_RequestHandler(this, this.$auth.ctx.$axios);
    }
    _updateTokens(response) {
        if (this.options.token.required) {
            const token = getResponseProp(response, this.options.token.property);
            this.token.set(token);
        }
    }
    _initializeRequestInterceptor() {
        this.requestHandler.initializeRequestInterceptor();
    }
    check(checkStatus = false) {
        const response = {
            valid: false,
            tokenExpired: false
        };
        // Sync token
        const token = this.token.sync();
        // Token is required but not available
        if (this.options.token.required && !token) {
            return response;
        }
        // Check status wasn't enabled, let it pass
        if (!checkStatus) {
            response.valid = true;
            return response;
        }
        // Get status
        const tokenStatus = this.token.status();
        // Token has expired. Attempt `tokenCallback`
        if (tokenStatus.expired()) {
            response.tokenExpired = true;
            return response;
        }
        response.valid = true;
        return response;
    }
    mounted({ tokenCallback = () => this.$auth.reset(), refreshTokenCallback = undefined } = {}) {
        const { tokenExpired, refreshTokenExpired } = this.check(true);
        if (refreshTokenExpired && typeof refreshTokenCallback === 'function') {
            refreshTokenCallback();
        }
        else if (tokenExpired && typeof tokenCallback === 'function') {
            tokenCallback();
        }
        // Initialize request interceptor
        this._initializeRequestInterceptor();
        // Fetch user once
        return this.$auth.fetchUserOnce();
    }
    async login(endpoint, { reset = true } = {}) {
        if (!this.options.endpoints.login) {
            return;
        }
        // Ditch any leftover local tokens before attempting to log in
        if (reset) {
            this.$auth.reset({ resetInterceptor: false });
        }
        // Add client id to payload if defined
        if (this.options.clientId) {
            endpoint.data.client_id = this.options.clientId;
        }
        // Add grant type to payload if defined
        if (this.options.grantType) {
            endpoint.data.grant_type = this.options.grantType;
        }
        // Add scope to payload if defined
        if (this.options.scope) {
            endpoint.data.scope = this.options.scope;
        }
        // Make login request
        const response = await this.$auth.request(endpoint, this.options.endpoints.login);
        // Update tokens
        this._updateTokens(response);
        // Initialize request interceptor if not initialized
        if (!this.requestHandler.interceptor) {
            this._initializeRequestInterceptor();
        }
        // Fetch user if `autoFetch` is enabled
        if (this.options.user.autoFetch) {
            await this.fetchUser();
        }
        return response;
    }
    async setUserToken(token) {
        this.token.set(token);
        // Fetch user
        return this.fetchUser();
    }
    async fetchUser(endpoint) {
        // Token is required but not available
        if (!this.check().valid) {
            return;
        }
        // User endpoint is disabled
        if (!this.options.endpoints.user) {
            this.$auth.setUser({});
            return;
        }
        // Try to fetch user and then set
        return this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user).then((response) => {
            this.$auth.setUser(getResponseProp(response, this.options.user.property));
            return response;
        }).catch((error) => {
            this.$auth.callOnError(error, { method: 'fetchUser' });
        });
    }
    async logout(endpoint = {}) {
        // Only connect to logout endpoint if it's configured
        if (this.options.endpoints.logout) {
            await this.$auth
                .requestWith(this.name, endpoint, this.options.endpoints.logout)
                .catch(() => {
            });
        }
        // But reset regardless
        return this.$auth.reset();
    }
    reset({ resetInterceptor = true } = {}) {
        this.$auth.setUser(false);
        this.token.reset();
        if (resetInterceptor) {
            this.requestHandler.reset();
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/schemes/cookie.js

const cookie_DEFAULTS = {
    name: 'cookie',
    cookie: {
        name: null
    },
    token: {
        type: '',
        property: '.status',
        maxAge: false,
        global: false
    },
    endpoints: {
        csrf: null
    }
};
class cookie_CookieScheme extends local_LocalScheme {
    constructor($auth, options) {
        super($auth, options, cookie_DEFAULTS);
    }
    mounted() {
        if (true) {
            this.$auth.ctx.$axios.setHeader('referer', this.$auth.ctx.req.headers.host);
        }
        return super.mounted();
    }
    check() {
        const response = { valid: false };
        if (!super.check().valid) {
            return response;
        }
        if (this.options.cookie.name) {
            const cookies = this.$auth.$storage.getCookies();
            response.valid = Boolean(cookies[this.options.cookie.name]);
            return response;
        }
        response.valid = true;
        return response;
    }
    async login(endpoint) {
        // Ditch any leftover local tokens before attempting to log in
        this.$auth.reset();
        // Make CSRF request if required
        if (this.options.endpoints.csrf) {
            await this.$auth.request(this.options.endpoints.csrf, {
                maxRedirects: 0
            });
        }
        return super.login(endpoint, { reset: false });
    }
    reset() {
        if (this.options.cookie.name) {
            this.$auth.$storage.setCookie(this.options.cookie.name, null, { prefix: '' });
        }
        return super.reset();
    }
}

// CONCATENATED MODULE: ./.nuxt/auth.js



 // Active schemes


_nuxt_middleware.auth = authMiddleware;
/* harmony default export */ var auth = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": false,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": {
      "login": "/login",
      "logout": "/login",
      "home": "/",
      "callback": "/login"
    },
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/"
      }
    },
    "localStorage": {
      "prefix": "auth."
    },
    "defaultStrategy": "laravelSanctum"
  }; // Create a new Auth instance

  const $auth = new auth_Auth(ctx, options); // Register strategies
  // laravelSanctum

  $auth.registerStrategy('laravelSanctum', new cookie_CookieScheme($auth, {
    "url": "http://api.onlinegifting.shop",
    "user": {
      "property": "data"
    },
    "endpoints": {
      "csrf": {
        "withCredentials": true,
        "headers": {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        "url": "http://api.onlinegifting.shop/sanctum/csrf-cookie"
      },
      "login": {
        "withCredentials": true,
        "headers": {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        "url": "http://api.onlinegifting.shop/login"
      },
      "logout": {
        "withCredentials": true,
        "headers": {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        "url": "http://api.onlinegifting.shop/logout",
        "method": "post"
      },
      "user": {
        "withCredentials": true,
        "headers": {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        "url": "http://api.onlinegifting.shop/api/user"
      }
    },
    "name": "laravelSanctum",
    "cookie": {
      "name": "XSRF-TOKEN"
    }
  })); // Inject it to nuxt context as $auth

  inject('auth', $auth);
  ctx.$auth = $auth; // Initialize auth

  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\cookie-universal-nuxt.js (mode: 'all')

 // Source: .\\workbox.js (mode: 'client')

 // Source: .\\pwa\\meta.js (mode: 'all')

 // Source: .\\pwa\\icons.js (mode: 'all')

 // Source: .\\vue-sweetalert2.js (mode: 'client')

 // Source: .\\axios.js (mode: 'all')

 // Source: ..\\plugins\\vue-carousel-3d.js (mode: 'client')

 // Source: ..\\plugins\\vform (mode: 'all')

 // Source: ..\\plugins\\vue-skeleton.js (mode: 'client')

 // Source: ..\\plugins\\vue-select.js (mode: 'client')

 // Source: ..\\plugins\\vue-picture-input.js (mode: 'client')

 // Source: ..\\plugins\\tiptap.js (mode: 'client')

 // Source: ..\\plugins\\vuesax.js (mode: 'all')

 // Source: .\\auth.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "online-gifting-client",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "## Build Setup"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "as": "style",
        "rel": "stylesheet preload prefetch",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Open+Sans:300,400,600,700"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fboxicons@2.0.5\u002Fcss\u002Fboxicons.min.css",
        "integrity": "sha256-imWjOiEEAcjWdL1+inhBu1dWYFyXuiO9vpJVEQd3y\u002Fc=",
        "crossorigin": "anonymous",
        "defer": true
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.7.1\u002Fcss\u002Fall.css",
        "integrity": "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
        "crossorigin": "anonymous",
        "defer": true
      }],
      "script": [{
        "src": "https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.5.1.slim.min.js",
        "integrity": "sha384-DfXdz2htPH0lsSSs5nCTpuj\u002Fzy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
        "crossorigin": "anonymous",
        "body": true
      }, {
        "src": "https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjquery.scrollbar\u002F0.2.11\u002Fjquery.scrollbar.min.js",
        "integrity": "sha512-5AcaBUUUU\u002FlxSEeEcruOIghqABnXF8TWqdIDXBZ2SNEtrTGvD408W\u002FShtKZf0JNjQUfOiRBJP+yHk6Ab2eFw3Q==",
        "crossorigin": "anonymous",
        "body": true
      }, {
        "src": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fjquery-scroll-lock@3.1.3\u002Fjquery-scrollLock.min.js",
        "integrity": "sha256-OGBqkSG4kYQ0UbrT7juDZpE\u002FVqIjMPuu6CVKQ1KaTEA=",
        "crossorigin": "anonymous",
        "body": true
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (false) {}

  if (typeof pwa_meta === 'function') {
    await pwa_meta(app.context, inject);
  }

  if (typeof icons === 'function') {
    await icons(app.context, inject);
  }

  if (false) {}

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if (typeof vform === 'function') {
    await vform(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (false) {}

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./plugins/vuesax.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vuesax.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof auth === 'function') {
    await auth(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminSideNav.vue?vue&type=template&id=21bd0a9f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white",attrs:{"id":"sidenav-main"}},[_vm._ssrNode("<div class=\"scrollbar-inner\" data-v-21bd0a9f>","</div>",[_vm._ssrNode("<div class=\"sidenav-header d-flex align-items-center\" data-v-21bd0a9f>","</div>",[_c('nuxt-link',{staticClass:"navbar-brand",staticStyle:{"background-color":"transparent"},attrs:{"tag":"a","to":"/admin"}},[_c('img',{staticClass:"navbar-brand-img",attrs:{"src":"/image/OnlineGiftingTextEdited.png","alt":"..."}})]),_vm._ssrNode(" <div class=\"ml-auto\" data-v-21bd0a9f><div data-action=\"sidenav-unpin\" data-target=\"#sidenav-main\" class=\"sidenav-toggler d-none d-xl-block\" data-v-21bd0a9f><div class=\"sidenav-toggler-inner\" data-v-21bd0a9f><i class=\"sidenav-toggler-line\" data-v-21bd0a9f></i> <i class=\"sidenav-toggler-line\" data-v-21bd0a9f></i> <i class=\"sidenav-toggler-line\" data-v-21bd0a9f></i></div></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"navbar-inner\" data-v-21bd0a9f>","</div>",[_vm._ssrNode("<div id=\"sidenav-collapse-main\" class=\"collapse navbar-collapse\" data-v-21bd0a9f>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav\" data-v-21bd0a9f>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"tag":"a","to":"/admin"}},[_c('i',{staticClass:"ni ni-shop text-primary"}),_vm._v(" "),_c('span',{staticClass:"nav-link-text"},[_vm._v("Dashboards")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_vm._ssrNode("<a href=\"#navbar-forms\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"navbar-forms\" class=\"nav-link\" data-v-21bd0a9f><i class=\"ni ni-single-copy-04 text-pink\" data-v-21bd0a9f></i> <span class=\"nav-link-text\" data-v-21bd0a9f>Forms</span></a> "),_vm._ssrNode("<div id=\"navbar-forms\" class=\"collapse\" data-v-21bd0a9f>","</div>",[_vm._ssrNode("<ul class=\"nav nav-sm flex-column\" data-v-21bd0a9f>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"tag":"a","to":"/admin/forms/product"}},[_vm._v("Product")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"tag":"a","to":"/admin/forms/bundle"}},[_vm._v("Bundle")])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"tag":"a","to":"/admin/transactions","href":""}},[_c('i',{staticClass:"ni ni-credit-card text-primary"}),_vm._v(" "),_c('span',{staticClass:"nav-link-text"},[_vm._v("Transactions")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_vm._ssrNode("<a href=\"#navbar-tables\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"navbar-tables\" class=\"nav-link\" data-v-21bd0a9f><i class=\"ni ni-align-left-2 text-default\" data-v-21bd0a9f></i> <span class=\"nav-link-text\" data-v-21bd0a9f>Tables</span></a> "),_vm._ssrNode("<div id=\"navbar-tables\" class=\"collapse\" data-v-21bd0a9f>","</div>",[_vm._ssrNode("<ul class=\"nav nav-sm flex-column\" data-v-21bd0a9f>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"tag":"a","to":"/admin/tables/users"}},[_vm._v("Users")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"tag":"a","to":"/admin/tables/products"}},[_vm._v("Products")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"tag":"a","to":"/admin/tables/bundles"}},[_vm._v("Bundles")])],1)],2)])],2)],2),_vm._ssrNode(" <hr class=\"my-3\" data-v-21bd0a9f> <h6 class=\"navbar-heading p-0 text-muted\" data-v-21bd0a9f>Informations</h6> "),_vm._ssrNode("<ul class=\"navbar-nav mb-md-3\" data-v-21bd0a9f>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/admin/dashboard-tutorial"}},[_c('i',{staticClass:"ni ni-spaceship"}),_vm._v(" "),_c('span',{staticClass:"nav-link-text"},[_vm._v("Tutorial")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-21bd0a9f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/admin/admin-list"}},[_c('i',{staticClass:"ni ni-bullet-list-67"}),_vm._v(" "),_c('span',{staticClass:"nav-link-text"},[_vm._v("List of Admins")])])],1)],2)],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Admin/AdminSideNav.vue?vue&type=template&id=21bd0a9f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminSideNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AdminSideNavvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Admin/AdminSideNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_AdminSideNavvue_type_script_lang_js_ = (AdminSideNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Admin/AdminSideNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Admin_AdminSideNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "21bd0a9f",
  "2c69ac51"
  
)

/* harmony default export */ var AdminSideNav = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminTopNav.vue?vue&type=template&id=31843bca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-31843bca>","</div>",[_vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-31843bca>","</div>",[_vm._ssrNode("<form id=\"navbar-search-main\" class=\"navbar-search navbar-search-light form-inline mr-sm-3\" data-v-31843bca><div class=\"form-group mb-0\" data-v-31843bca><div class=\"input-group input-group-alternative input-group-merge\" data-v-31843bca><div class=\"input-group-prepend\" data-v-31843bca><span class=\"input-group-text\" data-v-31843bca><i class=\"fas fa-search\" data-v-31843bca></i></span></div> <input placeholder=\"Search\" type=\"text\""+(_vm._ssrAttr("value",(_vm.search)))+" class=\"form-control\" data-v-31843bca></div></div> <button type=\"button\" data-action=\"search-close\" data-target=\"#navbar-search-main\" aria-label=\"Close\" class=\"close\" data-v-31843bca><span aria-hidden=\"true\" data-v-31843bca>×</span></button></form> "),_vm._ssrNode("<ul class=\"navbar-nav align-items-center ml-md-auto\" data-v-31843bca>","</ul>",[_vm._ssrNode("<li class=\"nav-item d-xl-none\" data-v-31843bca><div data-action=\"sidenav-pin\" data-target=\"#sidenav-main\" class=\"pr-3 sidenav-toggler sidenav-toggler-dark\" data-v-31843bca><div class=\"sidenav-toggler-inner\" data-v-31843bca><i class=\"sidenav-toggler-line\" data-v-31843bca></i> <i class=\"sidenav-toggler-line\" data-v-31843bca></i> <i class=\"sidenav-toggler-line\" data-v-31843bca></i></div></div></li> <li class=\"nav-item d-sm-none\" data-v-31843bca><a href=\"#\" data-action=\"search-show\" data-target=\"#navbar-search-main\" class=\"nav-link\" data-v-31843bca><i class=\"ni ni-zoom-split-in\" data-v-31843bca></i></a></li> <li class=\"nav-item dropdown\" data-v-31843bca><a href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link\" data-v-31843bca><i class=\"ni ni-bell-55\" data-v-31843bca></i></a> <div class=\"dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden\" data-v-31843bca><div class=\"px-3 py-3\" data-v-31843bca><h6 class=\"text-sm text-muted m-0\" data-v-31843bca>\n                You have\n                <strong class=\"text-primary\" data-v-31843bca>13</strong> notifications.\n              </h6></div> <div class=\"list-group list-group-flush\" data-v-31843bca><a href=\"#!\" class=\"list-group-item list-group-item-action\" data-v-31843bca><div class=\"row align-items-center\" data-v-31843bca><div class=\"col-auto\" data-v-31843bca><img alt=\"Image placeholder\" src=\"/assets/img/theme/team-1.jpg\" class=\"avatar rounded-circle\" data-v-31843bca></div> <div class=\"col ml--2\" data-v-31843bca><div class=\"d-flex justify-content-between align-items-center\" data-v-31843bca><div data-v-31843bca><h4 class=\"mb-0 text-sm\" data-v-31843bca>John Snow</h4></div> <div class=\"text-right text-muted\" data-v-31843bca><small data-v-31843bca>2 hrs ago</small></div></div> <p class=\"text-sm mb-0\" data-v-31843bca>\n                      Let's meet at Starbucks at 11:30. Wdyt?\n                    </p></div></div></a> <a href=\"#!\" class=\"list-group-item list-group-item-action\" data-v-31843bca><div class=\"row align-items-center\" data-v-31843bca><div class=\"col-auto\" data-v-31843bca><img alt=\"Image placeholder\" src=\"/assets/img/theme/team-5.jpg\" class=\"avatar rounded-circle\" data-v-31843bca></div> <div class=\"col ml--2\" data-v-31843bca><div class=\"d-flex justify-content-between align-items-center\" data-v-31843bca><div data-v-31843bca><h4 class=\"mb-0 text-sm\" data-v-31843bca>John Snow</h4></div> <div class=\"text-right text-muted\" data-v-31843bca><small data-v-31843bca>3 hrs ago</small></div></div> <p class=\"text-sm mb-0\" data-v-31843bca>\n                      A new issue has been reported for Argon.\n                    </p></div></div></a></div> <a href=\"#!\" class=\"dropdown-item text-center text-primary font-weight-bold py-3\" data-v-31843bca>View all</a></div></li> "),_vm._ssrNode("<li class=\"nav-item dropdown\" data-v-31843bca>","</li>",[_vm._ssrNode("<a href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link\" data-v-31843bca><i class=\"ni ni-air-baloon\" data-v-31843bca></i></a> "),_vm._ssrNode("<div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right\" data-v-31843bca>","</div>",[_vm._ssrNode("<div class=\"row shortcuts px-4\" data-v-31843bca>","</div>",[_c('nuxt-link',{staticClass:"col-4 shortcut-item",attrs:{"to":"/"}},[_c('span',{staticClass:"shortcut-media avatar rounded-circle bg-gradient-red"},[_c('i',{staticClass:"fas fa-home"})]),_vm._v(" "),_c('small',[_vm._v("Home")])]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"col-4 shortcut-item",attrs:{"to":"/products"}},[_c('span',{staticClass:"shortcut-media avatar rounded-circle bg-gradient-orange"},[_c('i',{staticClass:"fas fa-boxes"})]),_vm._v(" "),_c('small',[_vm._v("Products")])]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"col-4 shortcut-item",attrs:{"to":"/bundles"}},[_c('span',{staticClass:"shortcut-media avatar rounded-circle bg-gradient-info"},[_c('i',{staticClass:"ni ni-credit-card"})]),_vm._v(" "),_c('small',[_vm._v("Bundles")])]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"col-4 shortcut-item",attrs:{"to":"/categories"}},[_c('span',{staticClass:"shortcut-media avatar rounded-circle bg-gradient-green"},[_c('i',{staticClass:"ni ni-books"})]),_vm._v(" "),_c('small',[_vm._v("Categories")])])],2)])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"navbar-nav align-items-center ml-auto ml-md-0\" data-v-31843bca>","</ul>",[_vm._ssrNode("<li class=\"nav-item dropdown\" data-v-31843bca>","</li>",[_vm._ssrNode("<a href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link pr-0\" data-v-31843bca><div class=\"media align-items-center\" data-v-31843bca><span class=\"avatar avatar-sm rounded-circle\" data-v-31843bca><img alt=\"Image placeholder\" src=\"/assets/img/theme/team-4.jpg\" data-v-31843bca></span> <div class=\"media-body ml-2 d-none d-lg-block\" data-v-31843bca><span class=\"mb-0 text-sm font-weight-bold\" data-v-31843bca>"+_vm._ssrEscape(_vm._s(_vm.$auth.user.name))+"</span></div></div></a> "),_vm._ssrNode("<div class=\"dropdown-menu dropdown-menu-right\" data-v-31843bca>","</div>",[_vm._ssrNode("<div class=\"dropdown-header noti-title\" data-v-31843bca><h6 class=\"text-overflow m-0\" data-v-31843bca>Welcome!</h6></div> "),_c('nuxt-link',{staticClass:"dropdown-item",attrs:{"to":"/admin/profile"}},[_c('i',{staticClass:"ni ni-single-02"}),_vm._v(" "),_c('span',[_vm._v("My profile")])]),_vm._ssrNode(" <div class=\"dropdown-divider\" data-v-31843bca></div> <span class=\"dropdown-item logout-cursor\" data-v-31843bca><i class=\"ni ni-user-run\" data-v-31843bca></i> <span data-v-31843bca>Logout</span></span>")],2)],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Admin/AdminTopNav.vue?vue&type=template&id=31843bca&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminTopNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AdminTopNavvue_type_script_lang_js_ = ({
  data() {
    return {
      search: ''
    };
  },

  methods: { ...Object(external_vuex_["mapMutations"])({
      SET_SEARCH_QUERY: 'search/SET_SEARCH_QUERY'
    }),
    ...Object(external_vuex_["mapActions"])({
      GET_SEARCH_RESULTS: 'search/GET_SEARCH_RESULTS'
    }),

    submitSearch() {
      if (this.$route.name === 'admin-search') {
        this.SET_SEARCH_QUERY(this.search);
        this.GET_SEARCH_RESULTS();
      }

      this.$router.push(`/admin/search?q=${this.search}`);
    },

    async logout() {
      try {
        await this.$auth.logout();
      } catch (err) {
        alert(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Admin/AdminTopNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_AdminTopNavvue_type_script_lang_js_ = (AdminTopNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Admin/AdminTopNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Admin_AdminTopNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "31843bca",
  "3f9b63ce"
  
)

/* harmony default export */ var AdminTopNav = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Form: __webpack_require__(15).default})


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminHeader.vue?vue&type=template&id=7f5ed018&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header bg-primary pb-6"},[_vm._ssrNode("<div class=\"container-fluid\"><div class=\"header-body\"><div class=\"row align-items-center py-4\"><div class=\"col-lg-6 col-7\"><h6 class=\"h2 text-white d-inline-block mb-0 text-capitalize\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.getPageName)+" Page\n          ")+"</h6></div></div> "+((_vm.$route.path === '/admin')?("<div class=\"row\">"+(_vm._ssrList((_vm.cards),function(card){return ("<div class=\"col-xl-3 col-md-6\"><div class=\"card card-stats\"><div class=\"card-body\"><div class=\"row\"><div class=\"col\"><h5 class=\"card-title text-uppercase text-muted mb-0\">"+_vm._ssrEscape("\n                      "+_vm._s(card.title)+"\n                    ")+"</h5> <span class=\"h2 font-weight-bold mb-0\">"+_vm._ssrEscape(_vm._s(card.amount))+"</span></div> <div class=\"col-auto\"><div"+(_vm._ssrClass("icon icon-shape text-white rounded-circle shadow",card.background))+"><i"+(_vm._ssrClass(null,card.icon))+"></i></div></div></div> <p class=\"mt-3 mb-0 text-sm\">"+((card.percentage > 0)?("<span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i>"+_vm._ssrEscape("\n                      "+_vm._s(card.percentage)+"%")+"</span>"):"<!---->")+" "+((card.percentage < 0)?("<span class=\"text-danger mr-2\"><i class=\"fa fa-arrow-down\"></i>"+_vm._ssrEscape("\n                      "+_vm._s(card.percentage)+"%")+"</span>"):"<!---->")+" "+((card.percentage == 0)?("<span class=\"text-grey mr-2\"><i></i>"+_vm._ssrEscape(" "+_vm._s(card.percentage)+"%")+"</span>"):"<!---->")+" <span class=\"text-nowrap\">Since last month</span></p></div></div></div>")}))+"</div>"):"<!---->")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Admin/AdminHeader.vue?vue&type=template&id=7f5ed018&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AdminHeadervue_type_script_lang_js_ = ({
  data() {
    return {
      page_title: '',
      cards: {
        total_transaction: {
          title: 'Total transaction',
          amount: 1234,
          percentage: 3.14,
          icon: 'ni ni-credit-card',
          background: 'bg-gradient-red'
        },
        transaction_amount: {
          title: 'Transaction amount',
          amount: 1234,
          percentage: 3.14,
          icon: 'ni ni-money-coins',
          background: 'bg-gradient-green'
        },
        new_users: {
          title: 'New users',
          amount: 1234,
          percentage: 3.14,
          icon: 'ni ni-single-02',
          background: 'bg-gradient-orange'
        },
        new_products: {
          title: 'New products',
          amount: 1234,
          percentage: 3.14,
          icon: 'fas fa-boxes',
          background: 'bg-gradient-info'
        }
      },
      breadcrumb: {
        title: 'Home',
        crumbs: {}
      }
    };
  },

  computed: {
    getPageName() {
      const fullname = this.$route.name;
      return fullname.substr(fullname.lastIndexOf('-') + 1);
    }

  },

  async mounted() {
    const res = await this.$axios.$get('get-widgets');
    this.cards.total_transaction.amount = res.transaction.current_month_count;
    this.cards.new_users.amount = res.user.current_month_count;
    this.cards.new_products.amount = res.product.current_month_count;
    this.cards.transaction_amount.amount = res.transaction_amount.current_month_sum;
    this.cards.total_transaction.percentage = res.transaction.percentage;
    this.cards.new_users.percentage = res.user.percentage;
    this.cards.new_products.percentage = res.product.percentage;
    this.cards.transaction_amount.percentage = res.transaction_amount.percentage;
  }

});
// CONCATENATED MODULE: ./components/Admin/AdminHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_AdminHeadervue_type_script_lang_js_ = (AdminHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Admin/AdminHeader.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Admin_AdminHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1e472598"
  
)

/* harmony default export */ var AdminHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminFooter.vue?vue&type=template&id=077f84dd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<footer class=\"footer pt-0\"><div class=\"row align-items-center justify-content-lg-between\"><div class=\"col-lg-6\"><div class=\"copyright text-center text-lg-left text-muted\">\n          © 2020\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\" class=\"font-weight-bold ml-1\">Online Gifting</a></div></div> <div class=\"col-lg-6\"><ul class=\"nav nav-footer justify-content-center justify-content-lg-end\"><li class=\"nav-item\"><a href=\"https://www.creative-tim.com\" target=\"_blank\" class=\"nav-link\">Online Gifting</a></li> <li class=\"nav-item\"><a href=\"https://www.creative-tim.com/presentation\" target=\"_blank\" class=\"nav-link\">About Us</a></li> <li class=\"nav-item\"><a href=\"http://blog.creative-tim.com\" target=\"_blank\" class=\"nav-link\">Blog</a></li></ul></div></div></footer>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Admin/AdminFooter.vue?vue&type=template&id=077f84dd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/AdminFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AdminFootervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Admin/AdminFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_AdminFootervue_type_script_lang_js_ = (AdminFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Admin/AdminFooter.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Admin_AdminFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "05d67cb4"
  
)

/* harmony default export */ var AdminFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=af11bea6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hidden pb-5"},[_c('vs-navbar',{attrs:{"fixed":"","center-collapsed":""},scopedSlots:_vm._u([{key:"left",fn:function(){return [_c('vs-button',{attrs:{"flat":"","icon":""},on:{"click":function($event){_vm.activeSidebar = !_vm.activeSidebar}}},[_c('i',{staticClass:"bx bx-menu"})])]},proxy:true},{key:"right",fn:function(){return [(!_vm.$auth.loggedIn)?[_c('vs-button',{attrs:{"flat":"","color":"#336699","to":"/login"}},[_vm._v(" Login ")]),_vm._v(" "),_c('vs-button',{attrs:{"color":"#336699","to":"/register"}},[_vm._v("Get Started")])]:[_c('vs-avatar',{attrs:{"circle":"","pointer":"","writing":_vm.$auth.user.detail === null,"badge":_vm.$auth.user.detail === null},on:{"click":function($event){return _vm.goToProfile()}},scopedSlots:_vm._u([{key:"text",fn:function(){return [_vm._v("\n            "+_vm._s(_vm.$auth.user.name)+"\n          ")]},proxy:true}])}),_vm._v(" "),_c('vs-button',{attrs:{"color":"#336699","transparent":""},on:{"click":function($event){return _vm.logout()}},scopedSlots:_vm._u([{key:"animate",fn:function(){return [_c('i',{staticClass:"bx bx-run"})]},proxy:true}])},[_vm._v("\n          Logout\n          ")])]]},proxy:true}]),model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_vm._v(" "),_c('vs-navbar-item',{staticClass:"w-100"},[_c('vs-input',{staticClass:"w-100",attrs:{"color":"primary","type":"search"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-search-alt"})]},proxy:true}]),model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"position-sticky\" style=\"z-index: 9999\">","</div>",[_c('vs-sidebar',{attrs:{"open":_vm.activeSidebar},on:{"update:open":function($event){_vm.activeSidebar=$event}},scopedSlots:_vm._u([{key:"logo",fn:function(){return [_c('img',{attrs:{"src":"/image/OnlineGiftingTextEdited.svg","alt":""}})]},proxy:true},{key:"footer",fn:function(){return [(_vm.$auth.user)?_c('vs-row',{attrs:{"justify":"space-between"}},[_c('vs-avatar',{attrs:{"writing":_vm.$auth.user.detail.phone_num == null,"badge":_vm.$auth.user.detail.phone_num == null}},[_c('img',{attrs:{"src":"/image/profile-pic.jfif","alt":""}})]),_vm._v(" "),_c('vs-avatar',{attrs:{"to":"/cart","badge-color":"primary","badge-position":"top-right"},on:{"click":function($event){return _vm.goToCart()}},scopedSlots:_vm._u([{key:"badge",fn:function(){return [_vm._v(" "+_vm._s(_vm.$auth.user.cart)+" ")]},proxy:true}],null,false,201391692)},[_c('i',{staticClass:"bx bx-cart"})])],1):_vm._e()]},proxy:true}]),model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"home","to":"/"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-home"})]},proxy:true}])},[_vm._v("\n        Home\n      ")]),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"market","to":"/products"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-grid-alt"})]},proxy:true}])},[_vm._v("\n        Products\n      ")]),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"Music","to":"/bundles"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-box"})]},proxy:true}])},[_vm._v("\n        Bundles\n      ")]),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"donate","to":"/categories"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-book-content"})]},proxy:true}])},[_vm._v("\n        Categories\n      ")]),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"likes","to":"/liked-items"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-happy-heart-eyes"})]},proxy:true}])},[_vm._v("\n        Liked Items\n      ")]),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"profile","to":"/profile"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bxs-user-detail"})]},proxy:true}])},[_vm._v("\n        Profile\n      ")]),_vm._v(" "),_c('vs-sidebar-group',{scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('vs-sidebar-item',{attrs:{"arrow":""},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-help-circle"})]},proxy:true}])},[_vm._v("\n            Need Help?\n          ")])]},proxy:true}])},[_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"Instagram","href":"https://www.instagram.com/jrussellchan/"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bxl-instagram"})]},proxy:true}])},[_vm._v("\n          Instagram\n        ")]),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"Facebook","href":"https://www.facebook.com/russell.chan.338/"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bxl-facebook"})]},proxy:true}])},[_vm._v("\n          Facebook\n        ")]),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"Line"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"fab fa-line"})]},proxy:true}])},[_vm._v("\n          Line\n        ")]),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"tutorial"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"fas fa-info"})]},proxy:true}])},[_vm._v("\n          Tutorial\n        ")]),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":"chat"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-chat"})]},proxy:true}])},[_vm._v("\n          Chat\n        ")])],1),_vm._v(" "),_c('vs-row',{attrs:{"justify":"center"}},[_c('vs-col',{attrs:{"w":"11"}},[_c('vs-input',{staticClass:"w-100",attrs:{"color":"primary","type":"search"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-search-alt"})]},proxy:true}]),model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}})],1)],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=af11bea6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  data: () => ({
    active: 'home',
    activeSidebar: false,
    search: '',
    cart_qty: 0
  }),
  methods: {
    goToCart() {
      this.$router.push('/carts');
    },

    goToProfile() {
      this.$router.push('/profile');
    },

    async logout() {
      try {
        await this.$auth.logout();
      } catch (err) {
        alert(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "244cd352"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginRegister/LoginRegisterHeader.vue?vue&type=template&id=442361e5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_vm._ssrNode("<div class=\"row justify-content-center my-3 pb-2\"><img src=\"/image/OnlineGiftingTextEdited.svg\" alt class=\"w-25\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LoginRegister/LoginRegisterHeader.vue?vue&type=template&id=442361e5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginRegister/LoginRegisterHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var LoginRegisterHeadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/LoginRegister/LoginRegisterHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var LoginRegister_LoginRegisterHeadervue_type_script_lang_js_ = (LoginRegisterHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/LoginRegister/LoginRegisterHeader.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LoginRegister_LoginRegisterHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e5dc95dc"
  
)

/* harmony default export */ var LoginRegisterHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("tiptap");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("tiptap-extensions");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("vue-chartjs");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map