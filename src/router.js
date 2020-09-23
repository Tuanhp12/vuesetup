import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Web from '@/views/web'
import AdminLogin from './views/admin/AdminLogin.vue'
import Secure from './components/Secure.vue'
import Register from './components/Register.vue'
import AdminLayout from './views/admin/AdminLayout.vue'

Vue.use(Router)

let routes = [
    {
      path: '/web',
      name: 'web',
      component: Web
    },
    {
      path: '/admin/login',
      name: 'login',
      component: AdminLogin
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      meta: { 
        requiredAuth: true,
        adminAuth: true,
        userAuth: false
      }
    },
    {
      path: '/admin/layout',
      component: AdminLayout,
      meta: {
        requiredAuth: true,
        adminAuth: true,
        userAuth: false
      }
    }
]

const router = new Router({
  routes,
  mode:'history'
})  
// router.replace({ path: '', redirect: '/' })

router.beforeEach((to, from, next) => {
  if(to.meta.requiredAuth){
    const authUser = store.state.auth.user
    if(!authUser || !authUser.token){
      next({name: '/'})
    }
    if(to.meta.adminAuth){
      const authUser = store.state.auth.user
      if(authUser.role === 'ADMIN'){
        next()
      }else{
        next('/web')
      }
    }
    else if(to.meta.userAuth){
      const authUser = store.state.auth.user
      if(authUser.role === 'USER'){
        next('/web')
      }else{
        console.log("This is admin")  
        next('/admin/layout')
      }
    }
  }
  else{
    next()
  }
})

export default router