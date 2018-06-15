import Vue from 'vue'
import Home from '@/components/Home'
import Login from '@/components/Login'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)


export const routes =[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ];
