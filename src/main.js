// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { routes } from './router/index'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueA11yDialog from 'vue-a11y-dialog'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Navbar } from 'bootstrap-vue/es/components';
import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';



Vue.use(bNavbarToggle);
Vue.use(Navbar);
Vue.use(BootstrapVue);
Vue.use(VueA11yDialog)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.mixin({
  methods:{
    goBack(){
      window.history.back();
    },format (data){
      if(data != null){
        return data.substring(8, 10)+"·"+data.substring(5, 7)+"·"+data.substring(0, 4);
      }else{
        return ""
      }
    },
    todayDate(){
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!

      var yyyy = today.getFullYear();
      if(dd<10){
          dd='0'+dd;
      }
      if(mm<10){
          mm='0'+mm;
      }
      var today = dd+'-'+mm+'-'+yyyy;
      return today;
    },
    redirect(route) {
      this.$router.push(route);
    }
  }
})

//Vue.http.options.root = "http://localhost:3000/v1/"
Vue.http.options.root = "http://ec2-54-185-207-45.us-west-2.compute.amazonaws.com:8080/v1/"

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
