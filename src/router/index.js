import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
<<<<<<< Updated upstream
=======
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
    meta: { layout: 'main', title: 'Информация о кино' },
    component: Details
  },
  // {
  //   path: '/kinolenta/:name',
  //   name: 'InfoPlaylist',
  //   meta: { layout: 'main', title: 'Плейлист' },
  //   component: Details
  // },
  // {
  //   path: '/collection/:colId',
  //   name: 'InfoCollection',
  //   meta: { layout: 'main', title: 'Коллеция' },
  //   component: Details
  // },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty', title: 'Войти' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registered',
    name: 'Registered',
    meta: { layout: 'empty', title: 'Зарегистрироваться' },
    component: () => import('../views/Registered.vue')
  },
  {
    path: '/foryou',
    name: 'RecommendsForYou',
    meta: { layout: 'main', title: 'Рекоммендации для вас' },
    component: ReccomendsForYou
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
    meta: { layout: 'main', title: 'Ваше любимое кино', auth: true },
    component: () => import('../views/YourMovie.vue')
  },
  {
    path: '/yourBookmarks',
    name: 'Your Bookmark',
    meta: { layout: 'main', title: 'Ваши закладки', auth: true },
    component: () => import('../views/YourBookmark.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main', title: 'Профиль', auth: true },
    component: () => import('../views/Profile/Profile.vue')
  },
  // {
  //   path: '/profile/preferences',
  //   name: 'Preferences',
  //   meta: { layout: 'main', title: 'Ваши предпочтения', auth: true },
  //   component: () => import('../views/Profile/Preferences.vue')
  // },

  {
    path: '*',
    name: '404',
    meta: { layout: 'main', title: 'Страница не найдена' },
    component: () => import('../views/404/404.vue')
>>>>>>> Stashed changes
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
