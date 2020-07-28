import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '@/views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'Main', title: 'Главная' },
    component: Home
  },
  {
    path: '/new-release',
    name: 'NewRelease',
    meta: { layout: 'Main', title: 'Новые релизы' },
    component: () => import('@/views/NewRelease.vue')
  },
  {
    path: '/film/:id',
    name: 'InfoFilm',
    meta: { layout: 'Main', title: 'Информация о фильме' },
    component: Details
  },
  {
    path: '/kinolenta/:name',
    name: 'InfoPlaylist',
    meta: { layout: 'Main', title: 'Плейлист' },
    component: Details
  },
  {
    path: '/collection/:colId',
    name: 'InfoCollection',
    meta: { layout: 'Main', title: 'Коллеция' },
    component: Details
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'Empty'
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registered',
    name: 'Registered',
    meta: {
      layout: 'Empty'
    },
    component: () => import('../views/Registered.vue')
  },
  {
    path: '*',
    name: '404',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
