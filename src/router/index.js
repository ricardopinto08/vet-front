import Vue from 'vue'
import Home from '@/components/Home'
import Login from '@/components/Login'
import medicalHistory from '@/components/medicalHistory'

import registerClient from '@/components/client/registerClient'
import myProfileClient from '@/components/client/myProfileClient'
import myHorsesClient from '@/components/client/myHorsesClient'
import changeVet from '@/components/client/changeVet'
import sellHorse from '@/components/client/sellHorse'
import myVets from '@/components/client/myVets'
import horseProfileClient from '@/components/client/horseProfileClient'
import historyOfVets from '@/components/client/historyOfVets'


import registerVet from '@/components/vet/registerVet'
import myProfileVet from '@/components/vet/myProfileVet'
import myHorsesVet from '@/components/vet/myHorsesVet'
import createHorse from '@/components/vet/createHorse'
import horseProfileVet from '@/components/vet/horseProfileVet'
import historyOfOwners from '@/components/vet/historyOfOwners'
import createExamination from '@/components/vet/createExamination'


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
    },
    {
      path: '/sellHorse',
      name: 'sellHorse',
      component: sellHorse
    },
    {
      path: '/createHorse',
      name: 'createHorse',
      component: createHorse
    },
    {
      path: '/myVets',
      name: 'myVets',
      component: myVets
    },
    {
      path: '/horseProfileClient:id',
      name: 'horseProfileClient',
      component: horseProfileClient
    },
    {
      path: '/horseProfileVet:id',
      name: 'horseProfileVet',
      component: horseProfileVet
    },
    {
      path: '/historyOfOwners:id',
      name: 'historyOfOwners',
      component: historyOfOwners
    },
    {
      path: '/historyOfVets:id',
      name: 'historyOfVets',
      component: historyOfVets
    },
    {
      path: '/createExamination',
      name: 'createExamination',
      component: createExamination
    },
    {
      path: '/medicalHistory:id',
      name: 'medicalHistory',
      component: medicalHistory
    }


  ];
