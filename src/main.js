import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// https://github.com/nuxt/vue-meta
import VueMeta from 'vue-meta'
import VScrollLock from 'v-scroll-lock'
import VueYouTubeEmbed from 'vue-youtube-embed'
// https://vuelidate.js.org/
import Vuelidate from 'vuelidate'
// https://vuejsexamples.com/yet-another-toast-notification-plugin-for-vue-js/
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
// https://console.firebase.google.com/project/kinoman-1cc31/overview?hl=ru
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import titlePlugin from '@/utils/plugins/title.plugin'

import Loader from './components/app/Loader'

import './registerServiceWorker'

Vue.config.productionTip = false

// Для отслеживания скролла
Vue.directive('scroll', {
  inserted: function (el, binding) {
    const f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll load', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.use(VScrollLock)
Vue.use(VueYouTubeEmbed)
Vue.use(Vuelidate)
Vue.use(VueToast)
Vue.use(VueMeta)
Vue.use(titlePlugin)

Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyC8DQK49dJ8Fqfj3oI06pYTjgXRDOsfKPg',
  authDomain: 'kinoman-1cc31.firebaseapp.com',
  databaseURL: 'https://kinoman-1cc31.firebaseio.com',
  projectId: 'kinoman-1cc31',
  storageBucket: 'kinoman-1cc31.appspot.com',
  messagingSenderId: '623697848998',
  appId: '1:623697848998:web:02f8a2bdd10fdf70296267',
  measurementId: 'G-G7LXD0WSM1'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
