import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Homepage from '@/components/homepage/homepage'
import Twoleve from '@/components/twolevel/twolevel'
import LevelDetail from '@/components/level-detail/level-detail'
import LevelReply from '@/components/level-reply/level-reply'
import Userinformation from '@/components/user-information/userinformation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/twoleve',
      name: 'twoleve',
      component: Twoleve
    },
    {
      path: '/levelDetail',
      name: 'levelDetail',
      component: LevelDetail
    },
    {
      path: '/levelReply',
      name: 'LevelReply',
      component: LevelReply
    },
    {
      path: '/userinformation',
      name: 'Userinformation',
      component: Userinformation
    }
  ]
})
