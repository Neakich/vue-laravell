require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import RegistrationForm from './components/RegistrationForm.vue';
import UsersList from './components/UsersList.vue';

const routes = [
  {
      name: 'registration',
      path: '/registration',
      component: RegistrationForm
  },
  {
      name: 'usersList',
      path: '/users',
      component: UsersList
  },
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');