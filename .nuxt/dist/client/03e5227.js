/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{287:function(e,t,n){"use strict";n.d(t,"a",(function(){return z})),n.d(t,"b",(function(){return P})),n.d(t,"c",(function(){return Z})),n.d(t,"d",(function(){return $})),n.d(t,"e",(function(){return U})),n.d(t,"f",(function(){return B})),n.d(t,"g",(function(){return H})),n.d(t,"h",(function(){return G})),n.d(t,"i",(function(){return K}));var r=n(74),o=n(149),l=(n(440),n(34),n(68),n(0),n(1)),c=n(170),h=n(24),d=n(5);new l.PluginKey("collab");var f=function(){};f.prototype.append=function(e){return e.length?(e=f.from(e),!this.length&&e||e.length<200&&this.leafAppend(e)||this.length<200&&e.leafPrepend(this)||this.appendInner(e)):this},f.prototype.prepend=function(e){return e.length?f.from(e).append(this):this},f.prototype.appendInner=function(e){return new v(this,e)},f.prototype.slice=function(e,t){return void 0===e&&(e=0),void 0===t&&(t=this.length),e>=t?f.empty:this.sliceInner(Math.max(0,e),Math.min(this.length,t))},f.prototype.get=function(i){if(!(i<0||i>=this.length))return this.getInner(i)},f.prototype.forEach=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=this.length),t<=n?this.forEachInner(e,t,n,0):this.forEachInvertedInner(e,t,n,0)},f.prototype.map=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=this.length);var r=[];return this.forEach((function(t,i){return r.push(e(t,i))}),t,n),r},f.from=function(e){return e instanceof f?e:e&&e.length?new m(e):f.empty};var m=function(e){function t(t){e.call(this),this.values=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={length:{configurable:!0},depth:{configurable:!0}};return t.prototype.flatten=function(){return this.values},t.prototype.sliceInner=function(e,n){return 0==e&&n==this.length?this:new t(this.values.slice(e,n))},t.prototype.getInner=function(i){return this.values[i]},t.prototype.forEachInner=function(e,t,n,r){for(var i=t;i<n;i++)if(!1===e(this.values[i],r+i))return!1},t.prototype.forEachInvertedInner=function(e,t,n,r){for(var i=t-1;i>=n;i--)if(!1===e(this.values[i],r+i))return!1},t.prototype.leafAppend=function(e){if(this.length+e.length<=200)return new t(this.values.concat(e.flatten()))},t.prototype.leafPrepend=function(e){if(this.length+e.length<=200)return new t(e.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(t.prototype,n),t}(f);f.empty=new m([]);var v=function(e){function t(t,n){e.call(this),this.left=t,this.right=n,this.length=t.length+n.length,this.depth=Math.max(t.depth,n.depth)+1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},t.prototype.getInner=function(i){return i<this.left.length?this.left.get(i):this.right.get(i-this.left.length)},t.prototype.forEachInner=function(e,t,n,r){var o=this.left.length;return!(t<o&&!1===this.left.forEachInner(e,t,Math.min(n,o),r))&&(!(n>o&&!1===this.right.forEachInner(e,Math.max(t-o,0),Math.min(this.length,n)-o,r+o))&&void 0)},t.prototype.forEachInvertedInner=function(e,t,n,r){var o=this.left.length;return!(t>o&&!1===this.right.forEachInvertedInner(e,t-o,Math.max(n,o)-o,r+o))&&(!(n<o&&!1===this.left.forEachInvertedInner(e,Math.min(t,o),n,r))&&void 0)},t.prototype.sliceInner=function(e,t){if(0==e&&t==this.length)return this;var n=this.left.length;return t<=n?this.left.slice(e,t):e>=n?this.right.slice(e-n,t-n):this.left.slice(e,n).append(this.right.slice(0,t-n))},t.prototype.leafAppend=function(e){var n=this.right.leafAppend(e);if(n)return new t(this.left,n)},t.prototype.leafPrepend=function(e){var n=this.left.leafPrepend(e);if(n)return new t(n,this.right)},t.prototype.appendInner=function(e){return this.left.depth>=Math.max(this.right.depth,e.depth)+1?new t(this.left,new t(this.right,e)):new t(this,e)},t}(f),y=f,w=function(e,t){this.items=e,this.eventCount=t};w.prototype.popEvent=function(e,t){var n=this;if(0==this.eventCount)return null;for(var r,o,l=this.items.length;;l--){if(this.items.get(l-1).selection){--l;break}}t&&(r=this.remapping(l,this.items.length),o=r.maps.length);var c,h,d=e.tr,f=[],m=[];return this.items.forEach((function(e,i){if(!e.step)return r||(r=n.remapping(l,i+1),o=r.maps.length),o--,void m.push(e);if(r){m.push(new x(e.map));var map,t=e.step.map(r.slice(o));t&&d.maybeStep(t).doc&&(map=d.mapping.maps[d.mapping.maps.length-1],f.push(new x(map,null,null,f.length+m.length))),o--,map&&r.appendMap(map,o)}else d.maybeStep(e.step);return e.selection?(c=r?e.selection.map(r.slice(o)):e.selection,h=new w(n.items.slice(0,l).append(m.reverse().concat(f)),n.eventCount-1),!1):void 0}),this.items.length,0),{remaining:h,transform:d,selection:c}},w.prototype.addTransform=function(e,t,n,r){for(var o=[],l=this.eventCount,c=this.items,h=!r&&c.length?c.get(c.length-1):null,i=0;i<e.steps.length;i++){var d,f=e.steps[i].invert(e.docs[i]),m=new x(e.mapping.maps[i],f,t);(d=h&&h.merge(m))&&(m=d,i?o.pop():c=c.slice(0,c.length-1)),o.push(m),t&&(l++,t=null),r||(h=m)}var v,y,_,O=l-n.depth;return O>E&&(y=O,(v=c).forEach((function(e,i){if(e.selection&&0==y--)return _=i,!1})),c=v.slice(_),l-=O),new w(c.append(o),l)},w.prototype.remapping=function(e,t){var n=new d.a;return this.items.forEach((function(t,i){var r=null!=t.mirrorOffset&&i-t.mirrorOffset>=e?n.maps.length-t.mirrorOffset:null;n.appendMap(t.map,r)}),e,t),n},w.prototype.addMaps=function(e){return 0==this.eventCount?this:new w(this.items.append(e.map((function(map){return new x(map)}))),this.eventCount)},w.prototype.rebased=function(e,t){if(!this.eventCount)return this;var n=[],r=Math.max(0,this.items.length-t),o=e.mapping,l=e.steps.length,c=this.eventCount;this.items.forEach((function(e){e.selection&&c--}),r);var h=t;this.items.forEach((function(t){var r=o.getMirror(--h);if(null!=r){l=Math.min(l,r);var map=o.maps[r];if(t.step){var d=e.steps[r].invert(e.docs[r]),f=t.selection&&t.selection.map(o.slice(h+1,r));f&&c++,n.push(new x(map,d,f))}else n.push(new x(map))}}),r);for(var d=[],i=t;i<l;i++)d.push(new x(o.maps[i]));var f=this.items.slice(0,r).append(d).append(n),m=new w(f,c);return m.emptyItemCount()>500&&(m=m.compress(this.items.length-n.length)),m},w.prototype.emptyItemCount=function(){var e=0;return this.items.forEach((function(t){t.step||e++})),e},w.prototype.compress=function(e){void 0===e&&(e=this.items.length);var t=this.remapping(0,e),n=t.maps.length,r=[],o=0;return this.items.forEach((function(l,i){if(i>=e)r.push(l),l.selection&&o++;else if(l.step){var c=l.step.map(t.slice(n)),map=c&&c.getMap();if(n--,map&&t.appendMap(map,n),c){var h=l.selection&&l.selection.map(t.slice(n));h&&o++;var d,f=new x(map.invert(),c,h),m=r.length-1;(d=r.length&&r[m].merge(f))?r[m]=d:r.push(f)}}else l.map&&n--}),this.items.length,0),new w(y.from(r.reverse()),o)},w.empty=new w(y.empty,0);var x=function(map,e,t,n){this.map=map,this.step=e,this.selection=t,this.mirrorOffset=n};x.prototype.merge=function(e){if(this.step&&e.step&&!e.selection){var t=e.step.merge(this.step);if(t)return new x(t.getMap().invert(),t,this.selection)}};var _=function(e,t,n,r){this.done=e,this.undone=t,this.prevRanges=n,this.prevTime=r},E=20;function O(map){var e=[];return map.forEach((function(t,n,r,o){return e.push(r,o)})),e}function M(e,t){if(!e)return null;for(var n=[],i=0;i<e.length;i+=2){var r=t.map(e[i],1),o=t.map(e[i+1],-1);r<=o&&n.push(r,o)}return n}function k(e,t,n,r){var o=I(t),l=j.get(t).spec.config,c=(r?e.undone:e.done).popEvent(t,o);if(c){var h=c.selection.resolve(c.transform.doc),d=(r?e.done:e.undone).addTransform(c.transform,t.selection.getBookmark(),l,o),f=new _(r?d:c.remaining,r?c.remaining:d,null,0);n(c.transform.setSelection(h).setMeta(j,{redo:r,historyState:f}).scrollIntoView())}}var N=!1,R=null;function I(e){var t=e.plugins;if(R!=t){N=!1,R=t;for(var i=0;i<t.length;i++)if(t[i].spec.historyPreserveItems){N=!0;break}}return N}var j=new l.PluginKey("history"),A=new l.PluginKey("closeHistory");function S(e){return e={depth:e&&e.depth||100,newGroupDelay:e&&e.newGroupDelay||500},new l.Plugin({key:j,state:{init:function(){return new _(w.empty,w.empty,null,0)},apply:function(tr,t,n){return function(e,t,tr,n){var r,o=tr.getMeta(j);if(o)return o.historyState;tr.getMeta(A)&&(e=new _(e.done,e.undone,null,0));var l=tr.getMeta("appendedTransaction");if(0==tr.steps.length)return e;if(l&&l.getMeta(j))return l.getMeta(j).redo?new _(e.done.addTransform(tr,null,n,I(t)),e.undone,O(tr.mapping.maps[tr.steps.length-1]),e.prevTime):new _(e.done,e.undone.addTransform(tr,null,n,I(t)),null,e.prevTime);if(!1===tr.getMeta("addToHistory")||l&&!1===l.getMeta("addToHistory"))return(r=tr.getMeta("rebased"))?new _(e.done.rebased(tr,r),e.undone.rebased(tr,r),M(e.prevRanges,tr.mapping),e.prevTime):new _(e.done.addMaps(tr.mapping.maps),e.undone.addMaps(tr.mapping.maps),M(e.prevRanges,tr.mapping),e.prevTime);var c=0==e.prevTime||!l&&(e.prevTime<(tr.time||0)-n.newGroupDelay||!function(e,t){if(!t)return!1;if(!e.docChanged)return!0;var n=!1;return e.mapping.maps[0].forEach((function(e,r){for(var i=0;i<t.length;i+=2)e<=t[i+1]&&r>=t[i]&&(n=!0)})),n}(tr,e.prevRanges)),h=l?M(e.prevRanges,tr.mapping):O(tr.mapping.maps[tr.steps.length-1]);return new _(e.done.addTransform(tr,c?t.selection.getBookmark():null,n,I(t)),w.empty,h,tr.time)}(t,n,tr,e)}},config:e})}function T(e,t){var n=j.getState(e);return!(!n||0==n.done.eventCount)&&(t&&k(n,e,t,!1),!0)}function D(e,t){var n=j.getState(e);return!(!n||0==n.undone.eventCount)&&(t&&k(n,e,t,!0),!0)}function L(e){var t=j.getState(e);return t?t.done.eventCount:0}function C(e){var t=j.getState(e);return t?t.undone.eventCount:0}r.f;class P extends r.f{get name(){return"bullet_list"}get schema(){return{content:"list_item+",group:"block",parseDOM:[{tag:"ul"}],toDOM:()=>["ul",0]}}commands({type:e,schema:t}){return()=>Object(o.q)(e,t.nodes.list_item)}keys({type:e,schema:t}){return{"Shift-Ctrl-8":Object(o.q)(e,t.nodes.list_item)}}inputRules({type:e}){return[Object(o.u)(/^\s*([-+*])\s$/,e)]}}r.f;r.f;r.f;r.f;r.f;r.f;class B extends r.f{get name(){return"list_item"}get schema(){return{content:"paragraph block*",defining:!0,draggable:!1,parseDOM:[{tag:"li"}],toDOM:()=>["li",0]}}keys({type:e}){return{Enter:Object(o.m)(e),Tab:Object(o.l)(e),"Shift-Tab":Object(o.d)(e)}}}r.f;class H extends r.f{get name(){return"ordered_list"}get schema(){return{attrs:{order:{default:1}},content:"list_item+",group:"block",parseDOM:[{tag:"ol",getAttrs:e=>({order:e.hasAttribute("start")?+e.getAttribute("start"):1})}],toDOM:e=>1===e.attrs.order?["ol",0]:["ol",{start:e.attrs.order},0]}}commands({type:e,schema:t}){return()=>Object(o.q)(e,t.nodes.list_item)}keys({type:e,schema:t}){return{"Shift-Ctrl-9":Object(o.q)(e,t.nodes.list_item)}}inputRules({type:e}){return[Object(o.u)(/^(\d+)\.\s$/,e,e=>({order:+e[1]}),(e,t)=>t.childCount+t.attrs.order===+e[1])]}}Object(c.tableNodes)({tableGroup:"block",cellContent:"block+",cellAttributes:{background:{default:null,getFromDOM:e=>e.style.backgroundColor||null,setDOMAttr(e,t){if(e){const style={style:"".concat(t.style||"","background-color: ").concat(e,";")};Object.assign(t,style)}}}}});r.f;r.f;r.f;r.f;r.f;r.f;class z extends r.e{get name(){return"bold"}get schema(){return{parseDOM:[{tag:"strong"},{tag:"b",getAttrs:e=>"normal"!==e.style.fontWeight&&null},{style:"font-weight",getAttrs:e=>/^(bold(er)?|[5-9]\d{2,})$/.test(e)&&null}],toDOM:()=>["strong",0]}}keys({type:e}){return{"Mod-b":Object(o.r)(e)}}commands({type:e}){return()=>Object(o.r)(e)}inputRules({type:e}){return[Object(o.e)(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/,e)]}pasteRules({type:e}){return[Object(o.f)(/(?:\*\*|__)([^*_]+)(?:\*\*|__)/g,e)]}}r.e;class $ extends r.e{get name(){return"italic"}get schema(){return{parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style=italic"}],toDOM:()=>["em",0]}}keys({type:e}){return{"Mod-i":Object(o.r)(e)}}commands({type:e}){return()=>Object(o.r)(e)}inputRules({type:e}){return[Object(o.e)(/(?:^|[^_])(_([^_]+)_)$/,e),Object(o.e)(/(?:^|[^*])(\*([^*]+)\*)$/,e)]}pasteRules({type:e}){return[Object(o.f)(/_([^_]+)_/g,e),Object(o.f)(/\*([^*]+)\*/g,e)]}}class U extends r.e{get name(){return"link"}get defaultOptions(){return{openOnClick:!0,target:null}}get schema(){return{attrs:{href:{default:null},target:{default:null}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:e=>({href:e.getAttribute("href"),target:e.getAttribute("target")})}],toDOM:e=>["a",{...e.attrs,rel:"noopener noreferrer nofollow",target:this.options.target},0]}}commands({type:e}){return t=>t.href?Object(o.t)(e,t):Object(o.i)(e)}pasteRules({type:e}){return[Object(o.h)(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b([-a-zA-Z0-9@:%_+.~#?&//=,]*)/gi,e,e=>({href:e}))]}get plugins(){return this.options.openOnClick?[new r.g({props:{handleClick:(view,e,t)=>{const{schema:n}=view.state,r=Object(h.a)(view.state,n.marks.link);r.href&&t.target instanceof HTMLAnchorElement&&(t.stopPropagation(),window.open(r.href,r.target))}}})]:[]}}class G extends r.e{get name(){return"strike"}get schema(){return{parseDOM:[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",getAttrs:e=>"line-through"===e}],toDOM:()=>["s",0]}}keys({type:e}){return{"Mod-d":Object(o.r)(e)}}commands({type:e}){return()=>Object(o.r)(e)}inputRules({type:e}){return[Object(o.e)(/~([^~]+)~$/,e)]}pasteRules({type:e}){return[Object(o.f)(/~([^~]+)~/g,e)]}}class K extends r.e{get name(){return"underline"}get schema(){return{parseDOM:[{tag:"u"},{style:"text-decoration",getAttrs:e=>"underline"===e}],toDOM:()=>["u",0]}}keys({type:e}){return{"Mod-u":Object(o.r)(e)}}commands({type:e}){return()=>Object(o.r)(e)}}r.d;r.d;class Z extends r.d{get name(){return"history"}get defaultOptions(){return{depth:"",newGroupDelay:""}}keys(){return{"Mod-z":T,"Mod-y":D,"Shift-Mod-z":D,"Mod-я":T,"Shift-Mod-я":D}}get plugins(){return[S({depth:this.options.depth,newGroupDelay:this.options.newGroupDelay})]}commands(){return{undo:()=>T,redo:()=>D,undoDepth:()=>L,redoDepth:()=>C}}}r.d;r.d;r.d},440:function(e,t,n){"use strict";var r=n(441),o=n(442);t.highlight=l,t.highlightAuto=function(e,t){var n,c,h,d,f=t||{},m=f.subset||r.listLanguages(),v=f.prefix,y=m.length,w=-1;null==v&&(v="hljs-");if("string"!=typeof e)throw o("Expected `string` for value, got `%s`",e);c={relevance:0,language:null,value:[]},n={relevance:0,language:null,value:[]};for(;++w<y;)d=m[w],r.getLanguage(d)&&((h=l(d,e,t)).language=d,h.relevance>c.relevance&&(c=h),h.relevance>n.relevance&&(c=n,n=h));c.language&&(n.secondBest=c);return n},t.registerLanguage=function(e,t){r.registerLanguage(e,t)},t.listLanguages=function(){return r.listLanguages()},t.registerAlias=function(e,t){var n,map=e;t&&((map={})[e]=t);for(n in map)r.registerAliases(map[n],{languageName:n})},c.prototype.addText=function(e){var t,n,r=this.stack;if(""===e)return;t=r[r.length-1],(n=t.children[t.children.length-1])&&"text"===n.type?n.value+=e:t.children.push({type:"text",value:e})},c.prototype.addKeyword=function(e,t){this.openNode(t),this.addText(e),this.closeNode()},c.prototype.addSublanguage=function(e,t){var n=this.stack,r=n[n.length-1],o=e.rootNode.children,l=t?{type:"element",tagName:"span",properties:{className:[t]},children:o}:o;r.children=r.children.concat(l)},c.prototype.openNode=function(e){var t=this.stack,n=this.options.classPrefix+e,r=t[t.length-1],o={type:"element",tagName:"span",properties:{className:[n]},children:[]};r.children.push(o),t.push(o)},c.prototype.closeNode=function(){this.stack.pop()},c.prototype.closeAllNodes=h,c.prototype.finalize=h,c.prototype.toHTML=function(){return""};function l(e,t,n){var l,h=r.configure({}),d=(n||{}).prefix;if("string"!=typeof e)throw o("Expected `string` for name, got `%s`",e);if(!r.getLanguage(e))throw o("Unknown language: `%s` is not registered",e);if("string"!=typeof t)throw o("Expected `string` for value, got `%s`",t);if(null==d&&(d="hljs-"),r.configure({__emitter:c,classPrefix:d}),l=r.highlight(e,t,!0),r.configure(h||{}),l.errorRaised)throw l.errorRaised;return{relevance:l.relevance,language:l.language,value:l.emitter.rootNode.children}}function c(e){this.options=e,this.rootNode={children:[]},this.stack=[this.rootNode]}function h(){}},441:function(e,t){function n(e){Object.freeze(e);var t="function"==typeof e;return Object.getOwnPropertyNames(e).forEach((function(r){!Object.hasOwnProperty.call(e,r)||null===e[r]||"object"!=typeof e[r]&&"function"!=typeof e[r]||t&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(e[r])||n(e[r])})),e}class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function l(e,...t){var n={};for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}function c(e){return e.nodeName.toLowerCase()}var h=Object.freeze({__proto__:null,escapeHTML:o,inherit:l,nodeStream:function(e){var t=[];return function e(n,r){for(var o=n.firstChild;o;o=o.nextSibling)3===o.nodeType?r+=o.nodeValue.length:1===o.nodeType&&(t.push({event:"start",offset:r,node:o}),r=e(o,r),c(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:o}));return r}(e,0),t},mergeStreams:function(e,t,n){var r=0,l="",h=[];function d(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function f(e){l+="<"+c(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+o(e.value)+'"'})).join("")+">"}function m(e){l+="</"+c(e)+">"}function v(e){("start"===e.event?f:m)(e.node)}for(;e.length||t.length;){var y=d();if(l+=o(n.substring(r,y[0].offset)),r=y[0].offset,y===e){h.reverse().forEach(m);do{v(y.splice(0,1)[0]),y=d()}while(y===e&&y.length&&y[0].offset===r);h.reverse().forEach(f)}else"start"===y[0].event?h.push(y[0].node):h.pop(),v(y.splice(0,1)[0])}return l+o(n.substr(r))}});const d=e=>!!e.kind;class f{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(text){this.buffer+=o(text)}openNode(e){if(!d(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){d(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class m{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{m._collapse(e)}))}}class v extends m{constructor(e){super(),this.options=e}addKeyword(text,e){""!==text&&(this.openNode(e),this.addText(text),this.closeNode())}addText(text){""!==text&&this.add(text)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new f(this,this.options).value()}finalize(){return!0}}function source(e){return e?"string"==typeof e?e:e.source:null}const y="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w={begin:"\\\\[\\s\\S]",relevance:0},x={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[w]},_={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[w]},E={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},O=function(e,t,n={}){var r=l({className:"comment",begin:e,end:t,contains:[]},n);return r.contains.push(E),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},M=O("//","$"),k=O("/\\*","\\*/"),N=O("#","$"),R={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},I={className:"number",begin:y,relevance:0},j={className:"number",begin:"\\b(0b[01]+)",relevance:0},A={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},S={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[w,{begin:/\[/,end:/\]/,relevance:0,contains:[w]}]}]},T={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},D={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},L={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var C=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:y,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>source(e)).join("")}(t,/.*\b/,e.binary,/\b.*/)),l({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:w,APOS_STRING_MODE:x,QUOTE_STRING_MODE:_,PHRASAL_WORDS_MODE:E,COMMENT:O,C_LINE_COMMENT_MODE:M,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:N,NUMBER_MODE:R,C_NUMBER_MODE:I,BINARY_NUMBER_MODE:j,CSS_NUMBER_MODE:A,REGEXP_MODE:S,TITLE_MODE:T,UNDERSCORE_TITLE_MODE:D,METHOD_GUARD:L,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}}),P="of and for in not or if then".split(" ");function B(e){function t(t,n){return new RegExp(source(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=t(function(e,t="|"){for(var n=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,o="",i=0;i<e.length;i++){var l=r+=1,c=source(e[i]);for(i>0&&(o+=t),o+="(";c.length>0;){var h=n.exec(c);if(null==h){o+=c;break}o+=c.substring(0,h.index),c=c.substring(h.index+h[0].length),"\\"===h[0][0]&&h[1]?o+="\\"+String(Number(h[1])+l):(o+=h[0],"("===h[0]&&r++)}o+=")"}return o}(e),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const e=this.matcherRe.exec(s);if(!e)return null;const i=e.findIndex((e,i)=>i>0&&void 0!==e),t=this.matchIndexes[i];return e.splice(0,i),Object.assign(e,t)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(s){const e=this.getMatcher(this.regexIndex);e.lastIndex=this.lastIndex;let t=e.exec(s);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const e=this.getMatcher(0);e.lastIndex=this.lastIndex+1,t=e.exec(s)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function o(e,t){const n=e.input[e.index-1],r=e.input[e.index+e[0].length];"."!==n&&"."!==r||t.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function n(c,h){const d=c;if(c.compiled)return d;c.compiled=!0,c.__beforeBegin=null,c.keywords=c.keywords||c.beginKeywords;let f=null;if("object"==typeof c.keywords&&(f=c.keywords.$pattern,delete c.keywords.$pattern),c.keywords&&(c.keywords=function(e,t){var n={};"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(t){r(t,e[t])}));return n;function r(e,r){t&&(r=r.toLowerCase()),r.split(" ").forEach((function(t){var r=t.split("|");n[r[0]]=[e,H(r[0],r[1])]}))}}(c.keywords,e.case_insensitive)),c.lexemes&&f)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return d.keywordPatternRe=t(c.lexemes||f||/\w+/,!0),h&&(c.beginKeywords&&(c.begin="\\b("+c.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",c.__beforeBegin=o),c.begin||(c.begin=/\B|\b/),d.beginRe=t(c.begin),c.endSameAsBegin&&(c.end=c.begin),c.end||c.endsWithParent||(c.end=/\B|\b/),c.end&&(d.endRe=t(c.end)),d.terminator_end=source(c.end)||"",c.endsWithParent&&h.terminator_end&&(d.terminator_end+=(c.end?"|":"")+h.terminator_end)),c.illegal&&(d.illegalRe=t(c.illegal)),void 0===c.relevance&&(c.relevance=1),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map((function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(t){return l(e,{variants:null},t)})));if(e.cached_variants)return e.cached_variants;if(function e(t){return!!t&&(t.endsWithParent||e(t.starts))}(e))return l(e,{starts:e.starts?l(e.starts):null});if(Object.isFrozen(e))return l(e);return e}("self"===e?c:e)}))),c.contains.forEach((function(e){n(e,d)})),c.starts&&n(c.starts,h),d.matcher=function(e){const t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:"begin"})),e.terminator_end&&t.addRule(e.terminator_end,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(d),d}(e)}function H(e,t){return t?Number(t):function(e){return P.includes(e.toLowerCase())}(e)?0:1}const z={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,o(this.code);let e;return this.autoDetect?(e=hljs.highlightAuto(this.code),this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),this.detectectLanguage=this.language),e.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},$={install(e){e.component("highlightjs",z)}},U=o,G=l,{nodeStream:K,mergeStreams:Z}=h,F=Symbol("nomatch");var X=function(e){var t=[],o=Object.create(null),l=Object.create(null),c=[],h=!0,d=/(^(<[^>]+>|\t|)+|\n)/gm,f="Could not find the language '{}', did you forget to load/include a language module?";const m={disableAutodetect:!0,name:"Plain text",contains:[]};var y={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:v};function w(e){return y.noHighlightRe.test(e)}function x(e,code,t,n){var r={code:code,language:e};j("before:highlight",r);var o=r.result?r.result:_(r.language,r.code,t,n);return o.code=r.code,j("after:highlight",o),o}function _(e,code,t,n){var l=code;function c(e,t){var n=k.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function d(){null!=j.subLanguage?function(){if(""!==T){var e=null;if("string"==typeof j.subLanguage){if(!o[j.subLanguage])return void S.addText(T);e=_(j.subLanguage,T,!0,A[j.subLanguage]),A[j.subLanguage]=e.top}else e=E(T,j.subLanguage.length?j.subLanguage:null);j.relevance>0&&(D+=e.relevance),S.addSublanguage(e.emitter,e.language)}}():function(){if(!j.keywords)return void S.addText(T);let e=0;j.keywordPatternRe.lastIndex=0;let t=j.keywordPatternRe.exec(T),n="";for(;t;){n+=T.substring(e,t.index);const data=c(j,t);if(data){const[e,r]=data;S.addText(n),n="",D+=r,S.addKeyword(t[0],e)}else n+=t[0];e=j.keywordPatternRe.lastIndex,t=j.keywordPatternRe.exec(T)}n+=T.substr(e),S.addText(n)}(),T=""}function m(e){return e.className&&S.openNode(e.className),j=Object.create(e,{parent:{value:j}})}function v(e){return 0===j.matcher.regexIndex?(T+=e[0],1):(P=!0,0)}function w(e){var t=e[0],n=e.rule;const o=new r(n),l=[n.__beforeBegin,n["on:begin"]];for(const n of l)if(n&&(n(e,o),o.ignore))return v(t);return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?T+=t:(n.excludeBegin&&(T+=t),d(),n.returnBegin||n.excludeBegin||(T=t)),m(n),n.returnBegin?0:t.length}function x(e){var t=e[0],n=l.substr(e.index),o=function e(t,n,o){let l=function(e,t){var n=e&&e.exec(t);return n&&0===n.index}(t.endRe,o);if(l){if(t["on:end"]){const e=new r(t);t["on:end"](n,e),e.ignore&&(l=!1)}if(l){for(;t.endsParent&&t.parent;)t=t.parent;return t}}if(t.endsWithParent)return e(t.parent,n,o)}(j,e,n);if(!o)return F;var c=j;c.skip?T+=t:(c.returnEnd||c.excludeEnd||(T+=t),d(),c.excludeEnd&&(T=t));do{j.className&&S.closeNode(),j.skip||j.subLanguage||(D+=j.relevance),j=j.parent}while(j!==o.parent);return o.starts&&(o.endSameAsBegin&&(o.starts.endRe=o.endRe),m(o.starts)),c.returnEnd?0:t.length}var O={};function M(n,r){var o=r&&r[0];if(T+=n,null==o)return d(),0;if("begin"===O.type&&"end"===r.type&&O.index===r.index&&""===o){if(T+=l.slice(r.index,r.index+1),!h){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=O.rule,t}return 1}if(O=r,"begin"===r.type)return w(r);if("illegal"===r.type&&!t){const e=new Error('Illegal lexeme "'+o+'" for mode "'+(j.className||"<unnamed>")+'"');throw e.mode=j,e}if("end"===r.type){var c=x(r);if(c!==F)return c}if("illegal"===r.type&&""===o)return 1;if(C>1e5&&C>3*r.index){throw new Error("potential infinite loop, way more iterations than matches")}return T+=o,o.length}var k=N(e);if(!k)throw console.error(f.replace("{}",e)),new Error('Unknown language: "'+e+'"');var R=B(k),I="",j=n||R,A={},S=new y.__emitter(y);!function(){for(var e=[],t=j;t!==k;t=t.parent)t.className&&e.unshift(t.className);e.forEach(e=>S.openNode(e))}();var T="",D=0,L=0,C=0,P=!1;try{for(j.matcher.considerAll();;){C++,P?P=!1:j.matcher.considerAll(),j.matcher.lastIndex=L;const e=j.matcher.exec(l);if(!e)break;const t=M(l.substring(L,e.index),e);L=e.index+t}return M(l.substr(L)),S.closeAllNodes(),S.finalize(),I=S.toHTML(),{relevance:D,value:I,language:e,illegal:!1,emitter:S,top:j}}catch(t){if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:t.message,context:l.slice(L-100,L+100),mode:t.mode},sofar:I,relevance:0,value:U(l),emitter:S};if(h)return{illegal:!1,relevance:0,value:U(l),emitter:S,language:e,top:j,errorRaised:t};throw t}}function E(code,e){e=e||y.languages||Object.keys(o);var t=function(code){const e={relevance:0,emitter:new y.__emitter(y),value:U(code),illegal:!1,top:m};return e.emitter.addText(code),e}(code),n=t;return e.filter(N).filter(I).forEach((function(e){var r=_(e,code,!1);r.language=e,r.relevance>n.relevance&&(n=r),r.relevance>t.relevance&&(n=t,t=r)})),n.language&&(t.second_best=n),t}function O(html){return y.tabReplace||y.useBR?html.replace(d,e=>"\n"===e?y.useBR?"<br>":e:y.tabReplace?e.replace(/\t/g,y.tabReplace):e):html}function M(element){let e=null;const t=function(e){var t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=y.languageDetectRe.exec(t);if(n){var r=N(n[1]);return r||(console.warn(f.replace("{}",n[1])),console.warn("Falling back to no-highlight mode for this block.",e)),r?n[1]:"no-highlight"}return t.split(/\s+/).find(e=>w(e)||N(e))}(element);if(w(t))return;j("before:highlightBlock",{block:element,language:t}),y.useBR?(e=document.createElement("div"),e.innerHTML=element.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):e=element;const text=e.textContent,n=t?x(t,text,!0):E(text),r=K(e);if(r.length){const e=document.createElement("div");e.innerHTML=n.value,n.value=Z(r,K(e),text)}n.value=O(n.value),j("after:highlightBlock",{block:element,result:n}),element.innerHTML=n.value,element.className=function(e,t,n){var r=t?l[t]:n,o=[e.trim()];return e.match(/\bhljs\b/)||o.push("hljs"),e.includes(r)||o.push(r),o.join(" ").trim()}(element.className,t,n.language),element.result={language:n.language,re:n.relevance,relavance:n.relevance},n.second_best&&(element.second_best={language:n.second_best.language,re:n.second_best.relevance,relavance:n.second_best.relevance})}const k=()=>{if(!k.called){k.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,M)}};function N(e){return e=(e||"").toLowerCase(),o[e]||o[l[e]]}function R(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach(e=>{l[e]=t})}function I(e){var t=N(e);return t&&!t.disableAutodetect}function j(e,t){var n=e;c.forEach((function(e){e[n]&&e[n](t)}))}Object.assign(e,{highlight:x,highlightAuto:E,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),O(e)},highlightBlock:M,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),y=G(y,e)},initHighlighting:k,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",k,!1)},registerLanguage:function(t,n){var r=null;try{r=n(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",t)),!h)throw e;console.error(e),r=m}r.name||(r.name=t),o[t]=r,r.rawDefinition=n.bind(null,e),r.aliases&&R(r.aliases,{languageName:t})},listLanguages:function(){return Object.keys(o)},getLanguage:N,registerAliases:R,requireLanguage:function(e){var t=N(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:I,inherit:G,addPlugin:function(e){c.push(e)},vuePlugin:$}),e.debugMode=function(){h=!1},e.safeMode=function(){h=!0},e.versionString="10.3.2";for(const e in C)"object"==typeof C[e]&&n(C[e]);return Object.assign(e,C),e}({});e.exports=X},442:function(e,t,n){"use strict";var r=n(443),o=l(Error);function l(e){return t.displayName=e.displayName||e.name,t;function t(t){return t&&(t=r.apply(null,arguments)),new e(t)}}e.exports=o,o.eval=l(EvalError),o.range=l(RangeError),o.reference=l(ReferenceError),o.syntax=l(SyntaxError),o.type=l(TypeError),o.uri=l(URIError),o.create=l},443:function(e,t,n){!function(){var t;function n(e){for(var t,n,r,o,l=1,c=[].slice.call(arguments),i=0,h=e.length,d="",f=!1,m=!1,v=function(){return c[l++]},y=function(){for(var n="";/\d/.test(e[i]);)n+=e[i++],t=e[i];return n.length>0?parseInt(n):null};i<h;++i)if(t=e[i],f)switch(f=!1,"."==t?(m=!1,t=e[++i]):"0"==t&&"."==e[i+1]?(m=!0,t=e[i+=2]):m=!0,o=y(),t){case"b":d+=parseInt(v(),10).toString(2);break;case"c":d+="string"==typeof(n=v())||n instanceof String?n:String.fromCharCode(parseInt(n,10));break;case"d":d+=parseInt(v(),10);break;case"f":r=String(parseFloat(v()).toFixed(o||6)),d+=m?r:r.replace(/^0/,"");break;case"j":d+=JSON.stringify(v());break;case"o":d+="0"+parseInt(v(),10).toString(8);break;case"s":d+=v();break;case"x":d+="0x"+parseInt(v(),10).toString(16);break;case"X":d+="0x"+parseInt(v(),10).toString(16).toUpperCase();break;default:d+=t}else"%"===t?f=!0:d+=t;return d}(t=e.exports=n).format=n,t.vsprintf=function(e,t){return n.apply(null,[e].concat(t))},"undefined"!=typeof console&&"function"==typeof console.log&&(t.printf=function(){console.log(n.apply(null,arguments))})}()}}]);