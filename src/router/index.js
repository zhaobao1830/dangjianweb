import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/login'
import Homepage from '@/components/homepage/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // }
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
