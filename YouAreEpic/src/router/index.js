import Vue from 'vue'
import Router from 'vue-router'
import CategorySelection from "../pages/CategorySelection";
import NGOList from "../pages/NGOList";
import Payment from "../pages/Payment";
import Login from "../pages/Login";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  /*base: '/YouAreEpic',*/
  routes: [
    {
      path: '/',
      redirect: '/selection',
    },
    {
      path: '/login',
      component: Login
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




router.beforeEach((to, from, next) => {
  let response =  fetch('/.auth/me');
  let responseJson = response.json();
  let loggedIn = (responseJson !== null);
  if (!loggedIn) next( {name :'Login' })
  else next()
})


export default router
