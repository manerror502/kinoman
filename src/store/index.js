import Vue from 'vue'
import Vuex from 'vuex'
import theme from './modules/theme'
import getFilms from './modules/getFilms'
import intro from './modules/intro'
// import infoFilm from './infoFilm'
// import collections from './collections'
import auth from './modules/auth'
import info from './modules/info'
import filmAction from './modules/filmAction'
import recommend from './modules/recommend'
import filters from './modules/filters'
import playlist from './modules/playlist'
import settings from './modules/settings'
import newReleaseFilms from './modules/newReleaseFilms'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    app: {
      modalTheme: false,
      loading: true
    }
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {},
  modules: {
    theme,
    getFilms,
    intro,
    // infoFilm,
    // collections,
    auth,
    info,
    filmAction,
    recommend,
    filters,
    playlist,
    settings,
    newReleaseFilms
  }
})
