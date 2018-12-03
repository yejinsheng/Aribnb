import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
//ES6引入模块    相当于const axios=require("axios"),这是自带的模块
import axios from 'axios'

Vue.config.productionTip = false
axios.default.withCredentials=true  //axios默认不带cookie，导致无法使用服务器端session，需配置axios
Vue.prototype.axios=axios;

new Vue({
  router,//store,
  render: h => h(App)
}).$mount('#app')