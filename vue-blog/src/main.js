import Vue from 'vue'

import Element from 'element-ui'

import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'element-ui/lib/theme-chalk/index.css';
import './icons' // icon

import Home from './components/home'
import Login from './components/login'
import Details from './components/details'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Element)

Vue.use(VueAxios, axios)

const routes = [
  { path: '*', redirect: '/login' },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/details/:id', component: Details },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
