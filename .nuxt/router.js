import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _879eb46a = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _a37781e0 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _e5910f34 = () => interopDefault(import('..\\pages\\boxes\\index.vue' /* webpackChunkName: "pages/boxes/index" */))
const _6d0700a4 = () => interopDefault(import('..\\pages\\bundles\\index.vue' /* webpackChunkName: "pages/bundles/index" */))
const _02991d16 = () => interopDefault(import('..\\pages\\Carts.vue' /* webpackChunkName: "pages/Carts" */))
const _1122fcce = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _29cdaac3 = () => interopDefault(import('..\\pages\\liked-items.vue' /* webpackChunkName: "pages/liked-items" */))
const _16ef084c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1d27b011 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _75e4a3ac = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _de70c5e0 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _01b115ff = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _317cefe4 = () => interopDefault(import('..\\pages\\admin\\admin-list.vue' /* webpackChunkName: "pages/admin/admin-list" */))
const _41442aa9 = () => interopDefault(import('..\\pages\\admin\\dashboard-tutorial.vue' /* webpackChunkName: "pages/admin/dashboard-tutorial" */))
const _27a8cae7 = () => interopDefault(import('..\\pages\\admin\\profile.vue' /* webpackChunkName: "pages/admin/profile" */))
const _6cf61ee8 = () => interopDefault(import('..\\pages\\admin\\search\\index.vue' /* webpackChunkName: "pages/admin/search/index" */))
const _103c6eca = () => interopDefault(import('..\\pages\\admin\\transactions\\index.vue' /* webpackChunkName: "pages/admin/transactions/index" */))
const _31dd5c44 = () => interopDefault(import('..\\pages\\password\\email.vue' /* webpackChunkName: "pages/password/email" */))
const _28704843 = () => interopDefault(import('..\\pages\\verification\\resend.vue' /* webpackChunkName: "pages/verification/resend" */))
const _14135c22 = () => interopDefault(import('..\\pages\\admin\\forms\\bundle.vue' /* webpackChunkName: "pages/admin/forms/bundle" */))
const _fdb42a5c = () => interopDefault(import('..\\pages\\admin\\forms\\product.vue' /* webpackChunkName: "pages/admin/forms/product" */))
const _17361798 = () => interopDefault(import('..\\pages\\admin\\tables\\bundles\\index.vue' /* webpackChunkName: "pages/admin/tables/bundles/index" */))
const _f2bdd532 = () => interopDefault(import('..\\pages\\admin\\tables\\products\\index.vue' /* webpackChunkName: "pages/admin/tables/products/index" */))
const _c846fdbe = () => interopDefault(import('..\\pages\\admin\\tables\\users\\index.vue' /* webpackChunkName: "pages/admin/tables/users/index" */))
const _7221947a = () => interopDefault(import('..\\pages\\admin\\transactions\\_id.vue' /* webpackChunkName: "pages/admin/transactions/_id" */))
const _16ce88f1 = () => interopDefault(import('..\\pages\\password\\reset\\_token.vue' /* webpackChunkName: "pages/password/reset/_token" */))
const _7f72e289 = () => interopDefault(import('..\\pages\\verification\\verify\\_id.vue' /* webpackChunkName: "pages/verification/verify/_id" */))
const _07e29596 = () => interopDefault(import('..\\pages\\bundles\\_id.vue' /* webpackChunkName: "pages/bundles/_id" */))
const _289bd37e = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _9f56fa8e = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _4d476535 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _879eb46a,
    name: "about-us"
  }, {
    path: "/admin",
    component: _a37781e0,
    name: "admin"
  }, {
    path: "/boxes",
    component: _e5910f34,
    name: "boxes"
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
}

export function createRouter () {
  return new Router(routerOptions)
}
