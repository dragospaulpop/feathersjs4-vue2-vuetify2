import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/Index.vue'
import LoginView from '../views/Login.vue'

import store from '@/store/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView,
    meta: { auth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  const auth = to.meta.auth || false
  const isAllowed = !!store.getters.user

  if (auth) {
    if (isAllowed) next()
    else {
      const loggedIn = await store.dispatch('reAuth')
      if (loggedIn) next()
      else next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
