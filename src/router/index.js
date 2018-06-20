import Vue from 'vue'
import Home from '@/components/Home'
import Login from '@/components/Login'
import registerClient from '@/components/client/registerClient'
import registerVet from '@/components/vet/registerVet'
import changePassword from '@/components/changePassword'
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
    },
    {
      path: '/registerClient',
      name: 'registerClient',
      component: registerClient
    },
    {
      path: '/registerVet',
      name: 'registerVet',
      component: registerVet
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword
    }
  ];
