import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VScrollLock from 'v-scroll-lock'
import Loader from './components/app/Loader'
import VueYouTubeEmbed from 'vue-youtube-embed'

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
Vue.component('Loader', Loader)
Vue.use(VueYouTubeEmbed)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
