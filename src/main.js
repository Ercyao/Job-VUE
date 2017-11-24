import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router/index'

import axios from 'axios'

import 'jquery'

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import './assets/less/less.less'

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

Vue.prototype.$http = axios;