import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Detail from '@/views/Detail'
import Login from '@/views/Login'

Vue.use(Router)
const auth = {
  isLogin () {
    return false
  }
}
const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: 'nowplaying',
          component: Nowplaying
        },
        {
          path: 'comingsoon',
          component: Comingsoon
        },
        {
          path: '',
          redirect: '/film/nowplaying'
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      alias: '/my',
      component: Center
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/detail/:id', // 动态路由
      name: 'ss',
      component: Detail,
      props: true
    },
    {
      path: '*',
      redirect: '/film'
    }
  ]
})

// // 全局守卫
// router.beforeEach((to, from, next) => {
//   //center页面
//   if(to.path==='/center'){
//     console.log('cha')

//     if(auth.isLogin){
//       next();
//     }else{
//       next("/login");
//     }
//   }else{
//     next()
//   }
// })

export default router
