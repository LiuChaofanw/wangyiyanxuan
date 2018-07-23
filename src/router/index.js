import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Knowledge from '../pages/Knowledge/Knowledge.vue'
import Classify from '../pages/Classify/Classify.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import FirstShow from '../pages/FirstShow/FirstShow.vue'
import Goods from '../pages/Goods/Goods.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        isHomeHeader: true,
        isFooter: true
      }
    },
    {
      path: '/knowledge',
      component: Knowledge,
      meta: {
        isFooter: true,
        isHeader: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        isFooter: true,
      }
    },
    {
      path: '/shoppingCart',
      component: ShoppingCart,
      meta: {
        isFooter: true,
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        isHomeHeader: false,
        isHeader: true
      }
    },
    {
      path: '/firstShow',
      component: FirstShow,
      meta: {
        isHomeHeader: false,
        isFooter: false
      }
    },
    {
      path: '/',
      redirect: '/firstShow'
    },
    {
      path: '/goods',
      component: Goods,
      meta: {
        isHomeHeader: true,
      }
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isHeader: true
      }
    }

  ]
})
