import Vue from 'vue'
import Vuex from 'vuex'
import getFilms from './modules/getFilms'
import intro from './modules/intro'
// import infoFilm from './infoFilm'
// import collections from './collections'
import auth from './modules/auth'
import info from './modules/info'
import filmAction from './modules/filmAction'
import recommend from './modules/recommend'
import filters from './modules/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    app: {
      modalInfoFilmOpen: false
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
    getFilms,
    intro,
    // infoFilm,
    // collections,
    auth,
    info,
    filmAction,
    recommend,
    filters
  }
})
