// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue/dist/vue.esm-bundler'
import './assets/css/main.scss'
import {createRouter, createWebHistory} from "vue-router";
import Seperator from './components/Seperator.vue'
import Stepper from "./components/Stepper.vue";



/* eslint-disable no-new */
const app = createApp({
  components: {
    Seperator,
    Stepper
  }
});

const router = createRouter({
  history: createWebHistory(),
  /* base: '/YouAreEpic', */
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('./pages/Login.vue')
    },
    {
      path: '/selection',
      name: 'CategorySelection',
      component: () => import('./pages/CategorySelection.vue'),
      meta: {
        text: 'Wählen Sie Ihre Interessen',
        step: 1
      }
    },
    {
      path: '/ngolist',
      name: 'NGOList',
      component: () => import('./pages/NGOList.vue'),
      meta: {
        text: 'Wählen Sie eine NGO',
        step: 2,
      }
    },
    {
      path: '/payment/:ngoid',
      name: 'Payment',
      component: () => import('./pages/Payment.vue'),
      meta: {
        text: 'Wählen Sie einen Betrag',
        step: 3
      }
    },
    {
      path: '/payment/error',
      name: 'PaymentFailed',
      component: () => import('./pages/PaymentFailed.vue'),
      meta: {
        text: 'Fehlgeschlagen'
      }
    },
    {
      path: '/payment/success',
      name: 'PaymentSuccess',
      component: () => import('./pages/PaymentSuccesfull.vue'),
      meta: {
        text: 'Erfolgreich'
      }
    },
    {
      path: '/Post/',
      name: 'Post',
      component: () => import('./pages/Post.vue'),
      meta: {
        text: 'Post erstellen'
      }
    }
  ],
})
app.use(router);
app.mount('#app');
