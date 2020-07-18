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
    meta: { layout: 'Main', title: 'Новые релизы 🎉' },
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
