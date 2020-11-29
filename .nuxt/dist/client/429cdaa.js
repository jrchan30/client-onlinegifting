(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{278:function(t,e,r){"use strict";r.r(e);var n={props:{id:{type:String,default:""},name:{type:String,default:""},icon:{type:String,default:"fas fa-question"},placeholder:{type:String,default:"..."},inputType:{type:String,default:"text"},keyValue:{type:String,default:""},errors:{type:Object,default:function(){}}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"input-group"},[r("div",{staticClass:"input-group-prepend"},[r("div",{staticClass:"input-group-text text-primary bg-transparent border-right-0"},[r("i",{class:t.icon})])]),t._v(" "),r("input",{staticClass:"form-control border-left-0",class:{"is-invalid":t.errors.hasOwnProperty(""+t.name)},attrs:{id:t.id,name:t.name,type:t.inputType,placeholder:t.placeholder,required:""},domProps:{value:t.keyValue},on:{input:function(e){return t.$emit("new-input",e.target.value)}}})]),t._v(" "),t.errors.hasOwnProperty(t.name)?r("span",{staticClass:"m-0 text-danger"},[t._v(t._s(t.errors[t.name][0]))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,r){"use strict";r.r(e);var n={props:{loading:{type:Boolean,default:!1},alertClass:{type:String,default:"alert-danger"},alertShow:{type:Boolean,default:!1}},methods:{formSubmit:function(){this.$emit("formSubmitted")}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card border text-center shadow border-0"},[r("img",{staticClass:"card-image-top w-25 m-auto pt-3",attrs:{src:"/image/SVG-OnlineGifting-LogoCrop-ColorChanged.svg",alt:""}}),t._v(" "),t.alertShow?r("div",{staticClass:"alert mt-4 mb-0",class:t.alertClass,staticStyle:{"border-radius":"0"},attrs:{role:"alert"}},[t._t("alert")],2):t._e(),t._v(" "),r("div",{staticClass:"card-body"},[r("h2",{staticClass:"card-title text-uppercase"},[t._t("title")],2),t._v(" "),r("div",[r("form",{on:{submit:function(e){return e.preventDefault(),t.formSubmit(e)},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}},[t._t("fields"),t._v(" "),t._t("reset-password"),t._v(" "),r("div",{staticClass:"grid"},[r("vs-row",{attrs:{align:"center",justify:"space-around"}},[r("vs-col",{attrs:{w:"3",justify:"center"}},[r("vs-button",{attrs:{loading:t.loading,color:"rgb(51, 102, 153)",relief:""},scopedSlots:t._u([{key:"animate",fn:function(){return[r("i",{staticClass:"bx bx-send"})]},proxy:!0}])},[t._t("btnSubmit")],2)],1)],1)],1)],2)])]),t._v(" "),r("div",{staticClass:"card-footer border-0 shadow"},[t._t("footer")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Form:r(105).default})},431:function(t,e,r){var content=r(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("76d1cbbf",content,!0,{sourceMap:!1})},448:function(t,e,r){"use strict";r(431)},449:function(t,e,r){(e=r(23)(!1)).push([t.i,".register-bg[data-v-d050e74e]{background-image:url(/image/Background-2.svg);background-size:cover;background-position:bottom;background-repeat:no-repeat}",""]),t.exports=e},478:function(t,e,r){"use strict";r.r(e);r(16),r(12);var n=r(4),o={layout:"login-register",middleware:["guest"],data:function(){return{loading:!1,form:{username:{type:"text",val:"",placeholder:"Username...",icon:"fas fa-user",id:"registerUsername"},name:{type:"text",val:"",placeholder:"Name...",icon:"fas fa-address-card",id:"registerName"},email:{type:"text",val:"",placeholder:"Email...",icon:"fas fa-envelope",id:"registerEmail"},password:{type:"password",val:"",placeholder:"Password...",icon:"fas fa-user-lock",id:"registerPassword"},password_confirmation:{type:"password",val:"",placeholder:"Password Confirmation...",icon:"fas fa-user-lock",id:"registerPasswordConfirmation"}},errors:{},alert:{class:"",show:!1,text:""}}},methods:{formSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.errors={},t.alert={},t.loading=!0,e.prev=3,e.next=6,t.$axios.$post("/register",{username:t.form.username.val,name:t.form.name.val,password:t.form.password.val,password_confirmation:t.form.password_confirmation.val,email:t.form.email.val});case 6:t.alert.class="alert-success",t.alert.show=!0,t.alert.text="Success! Please verify your email <strong>".concat(t.form.email.val,"</strong>"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),t.errors=e.t0.response.data.errors;case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})))()},clear:function(){Object.assign(this.$data,this.$options.data())}}},l=(r(448),r(8)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"register-bg w-100"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-11 col-md-6 col-lg-3 my-3 p-0"},[r("CardForm",{attrs:{loading:t.loading,"alert-class":t.alert.class,"alert-show":t.alert.show},on:{formSubmitted:t.formSubmit},scopedSlots:t._u([{key:"alert",fn:function(){return[r("span",{domProps:{innerHTML:t._s(t.alert.text)}})]},proxy:!0},{key:"title",fn:function(){return[t._v(" Register ")]},proxy:!0},{key:"fields",fn:function(){return t._l(t.form,(function(e,n,o){return r("div",{key:o,staticClass:"px-2"},[r("label",{staticClass:"text-capitalize text-primary float-left mb-0",attrs:{for:e.id}},[t._v(t._s(n))]),t._v(" "),r("InputField",{staticClass:"pb-3",attrs:{id:e.id,errors:t.errors,name:n,"key-value":e.val,icon:e.icon,placeholder:e.placeholder,"input-type":e.type},on:{"new-input":function(t){e.val=t}}})],1)}))},proxy:!0},{key:"btnSubmit",fn:function(){return[t._v(" Register ")]},proxy:!0},{key:"footer",fn:function(){return[r("p",{},[t._v("\n              Already Have an Account?\n              "),r("nuxt-link",{attrs:{to:"login"}},[t._v("Login")])],1)]},proxy:!0}])})],1)])])])}),[],!1,null,"d050e74e",null);e.default=component.exports;installComponents(component,{InputField:r(278).default,CardForm:r(279).default})}}]);