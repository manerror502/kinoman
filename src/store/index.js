import Vue from 'vue'
import Vuex from 'vuex'
import getFilms from './getFilms'
import intro from './intro'
import infoFilm from './infoFilm'
import collections from './collections'
import auth from './auth'
import info from './info'

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
    infoFilm,
    collections,
    auth,
    info
  }
})
