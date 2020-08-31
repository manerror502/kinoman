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
    path: '/foryou',
    name: 'RecommendsForYou',
    meta: { layout: 'main', title: 'Рекоммендации для вас' },
    component: () => import('../views/RecommendsForYou.vue')
  },
  {
    path: '/search',
    name: 'Search',
    meta: { layout: 'main', title: 'Поиск' },
    component: () => import('../views/SearchPage.vue')
  },
  {
    path: '/yourMovie',
    name: 'Your Movie',
    meta: { layout: 'main', title: 'Ваше любимое кино' },
    component: () => import('../views/YourMovie.vue')
  },
  {
    path: '/yourBookmarks',
    name: 'Your Bookmark',
    meta: { layout: 'main', title: 'Ваши закладки' },
    component: () => import('../views/YourBookmark.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main', title: 'Профиль' },
    component: () => import('../views/Profile.vue')
  },

  {
    path: '*',
    name: '404',
    meta: { layout: 'main', title: 'Страница не найдена' },
    component: () => import('../views/404/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
