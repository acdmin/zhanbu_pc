import Vue from 'vue'
import App from './App'
import store from 'store/index.js'
import { $http } from './api/api.js'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$http = $http

const app = new Vue({
	store,
    ...App
})
app.$mount()
