import Vue from 'vue'
import Router from 'vue-router'
import Card from "../components/Card";
import MainButton from "../components/MainButton";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Card, MainButton
    }
  ]
})
