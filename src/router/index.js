import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'Main', title: 'Умные плейлисты 🔮' },
    component: Home
  },
  {
    path: '/new-release',
    name: 'NewRelease',
    meta: { layout: 'Main', title: 'Новые релизы 🎉' },
    component: () => import('@/views/NewRelease.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
