import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mark from '@/components/Mark'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mark',
      name: 'Mark',
      component: Mark
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
