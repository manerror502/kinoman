import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '@/views/Details.vue'
import ReccomendsForYou from '@/views/RecommendsForYou.vue'
import HeartMovie from '@/views/Profile/HeartMovie.vue'
import BookmarksMovie from '@/views/Profile/BookmarksMovie.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', title: 'Главная' },
    component: Home
  },
  {
    path: '/releases',
    name: 'Releases',
    meta: { layout: 'main', title: 'Новые релизы' },
    component: () => import('@/views/Releases.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    meta: { layout: 'main', title: 'Чарт' },
    component: () => import('@/views/Chart.vue')
  },
  {
    path: '/film/:id',
    name: 'InfoFilm',
    meta: { layout: 'main', title: 'Информация о кино' },
    component: Details
  },
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
    meta: { layout: 'main', title: 'Рекоммендации' },
    component: ReccomendsForYou
  },
  {
    path: '/search',
    name: 'Search',
    meta: { layout: 'main', title: 'Поиск' },
    component: () => import('../views/SearchPage.vue')
  },
  {
    path: '/profile/heartMovie',
    name: 'Your Movie',
    meta: { layout: 'main', title: 'Любимое кино', auth: true },
    component: HeartMovie
  },
  {
    path: '/profile/bookmarksMovie',
    name: 'Bookmarks Movie',
    meta: { layout: 'main', title: 'Закладки', auth: true },
    component: BookmarksMovie
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main', title: 'Профиль', auth: true },
    component: () => import('../views/Profile/Profile.vue')
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    return { x: 0, y: 0 }
  }
})

// Защита роута
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
