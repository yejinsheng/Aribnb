import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/home.vue"
import Index from "./components/base/index.vue"
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"
import Details from "./components/base/aby_houseDetails.vue"
import Travel from "./components/base/travel.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/details',component:Details},
    {path:'/Index',component:Index},
    {path:"/header",component:Header},
    {path:"/footer",component:Footer},
    {path:"/travel",component:Travel}
  ]
})
