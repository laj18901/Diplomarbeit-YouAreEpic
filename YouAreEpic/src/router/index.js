import Vue from 'vue'
import Router from 'vue-router'
import CategorySelection from '../pages/CategorySelection'
import NGOList from '../pages/NGOList'
import Payment from '../pages/Payment'
import Login from '../pages/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  /* base: '/YouAreEpic', */
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/selection',
      name: 'CategorySelection',
      component: CategorySelection,
      meta: {
        auth: true // A protected route
      }
    },
    {
      path: '/ngolist',
      name: 'NGOList',
      component: NGOList
    },
    {
      path: '/payment/:ngoid',
      name: 'Payment',
      component: Payment,
      params: true
    }
  ]

})

export default router
