import Vue from 'vue'
import Home from '@/components/Home'
import Login from '@/components/Login'

import registerClient from '@/components/client/registerClient'
import myProfileClient from '@/components/client/myProfileClient'
import myHorsesClient from '@/components/client/myHorsesClient'
import changeVet from '@/components/client/changeVet'

import registerVet from '@/components/vet/registerVet'
import myProfileVet from '@/components/vet/myProfileVet'
import myHorsesVet from '@/components/vet/myHorsesVet'

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
    },
    {
      path: '/myProfileClient',
      name: 'myProfileClient',
      component: myProfileClient
    },
    {
      path: '/myProfileVet',
      name: 'myProfileVet',
      component: myProfileVet
    },
    {
      path: '/myHorsesClient',
      name: 'myHorsesClient',
      component: myHorsesClient
    },
    {
      path: '/myHorsesVet',
      name: 'myHorsesVet',
      component: myHorsesVet
    },
    {
      path: '/changeVet',
      name: 'changeVet',
      component: changeVet
    }
  ];
