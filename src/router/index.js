import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '@/views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', title: 'Главная' },
    component: Home
  },
  {
    path: '/new-release',
    name: 'NewRelease',
    meta: { layout: 'main', title: 'Новые релизы' },
    component: () => import('@/views/NewRelease.vue')
  },
  {
    path: '/film/:id',
    name: 'InfoFilm',
    meta: { layout: 'main', title: 'Информация о фильме' },
    component: Details
  },
  {
    path: '/kinolenta/:name',
    name: 'InfoPlaylist',
    meta: { layout: 'main', title: 'Плейлист' },
    component: Details
  },
  {
    path: '/collection/:colId',
    name: 'InfoCollection',
    meta: { layout: 'main', title: 'Коллеция' },
    component: Details
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registered',
    name: 'Registered',
    meta: { layout: 'empty' },
    component: () => import('../views/Registered.vue')
  },
  {
    path: '*',
    name: '404',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
