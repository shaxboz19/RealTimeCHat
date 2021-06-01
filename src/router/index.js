import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      auth : true,
      layout : 'main'
    }
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    meta : {
      layout : 'empty'
    }
  },
  {
    path: '/chat',
    name: 'chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/chat.vue'),
    meta : {
      auth : true,
      layout : 'main'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  const requiredAuth = to.meta.auth;
    if(requiredAuth && store.getters.isAutheticated) {
    next();
  } else if (requiredAuth && !store.getters.isAutheticated) { 
    next('/login?message=auth');
  } else {
    next();
  }
})

export default router
