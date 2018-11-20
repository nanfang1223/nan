import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import City from '../components/city/city'
import Login from '../components/login/login'
import Reset from '../components/reset/reset'
import WaiFirst from '../components/waimai/wai-first'
import Daohang from '../components/daohang/daohang'
import Search from '../components/secach/search'
import Order from '../components/order/order'
import Mymessage from '../components/mymessage/mymessage'
import GouFoot from '../components/waimai/goufoot'
import WaiSecond from '../components/waimai/wai-second'
import Pinjia  from '../components/pinjia/pinjia'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/city',
      name: 'city',
      component:City
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/reset',
      name:'reset',
      component:Reset
    },

    {
      path:'/daohang',
      name:'daohang',
      component:Daohang,
      redirect:'/daohang/waimai',
      children:[
        {
      path:'waimai',
      name:'waimai',
      component:WaiFirst
        },
        {
          path:'search',
          name:'search',
          component:Search
           },
         {
           path:'order',
           name:'order',
           component:Order
          },
           {
             path:'mymessage',
             name:'mymessage',
             component:Mymessage
           }
      ]
    },
    {
      path:'/waisecond',
      name: 'waisecond',
      component:WaiSecond,
      // redirect:'/waisecond/goufoot',
      children:[
        {
          path:'goufoot',
          name: 'goufoot',
          component:GouFoot
        },
        {
          path:'pinjia',
          name:'pinjia',
          component:Pinjia
        }
      ]
    }
  ]
})
