import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/login'
// import Homepage from '@/components/homepage/homepage'
// import Twoleve from '@/components/twolevel/twolevel'
// import LevelDetail from '@/components/level-detail/level-detail'
import LevelReply from '@/components/level-reply/level-reply'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/',
    //   name: 'Homepage',
    //   component: Homepage
    // },
    // {
    //   path: '/',
    //   name: 'Twoleve',
    //   component: Twoleve
    // },
    // {
    //   path: '/',
    //   name: 'LevelDetail',
    //   component: LevelDetail
    // },
    {
      path: '/',
      name: 'LevelReply',
      component: LevelReply
    }
  ]
})
