import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _15c7bc42 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages_contacts" */))
const _e2002916 = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages_history" */))
const _18c0421a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/contacts",
      component: _15c7bc42,
      name: "contacts"
    }, {
      path: "/history",
      component: _e2002916,
      name: "history"
    }, {
      path: "/",
      component: _18c0421a,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
