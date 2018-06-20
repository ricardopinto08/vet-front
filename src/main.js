// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { routes } from './router/index'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueA11yDialog from 'vue-a11y-dialog'
import Dropdown from 'bp-vuejs-dropdown';

Vue.use(Dropdown)
Vue.use(VueA11yDialog)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
Vue.config.productionTip = false

export const eventBus = new Vue();

const router = new VueRouter({
  routes,
  mode: 'history'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
