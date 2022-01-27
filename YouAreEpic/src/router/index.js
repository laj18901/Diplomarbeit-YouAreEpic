import Vue from 'vue'
import Router from 'vue-router'
import CategorySelection from "../pages/CategorySelection";
import NGOList from "../pages/NGOList";
import Payment from "../pages/Payment";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/YouAreEpic',
  routes: [
    {
      path: '/',
      redirect: '/selection'
    },
    {
      path: '/selection',
      name: 'CategorySelection',
      component: CategorySelection
    },
    {
      path: '/ngolist',
      name: 'NGOList',
      component: NGOList
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    }
  ],


})


export default router
