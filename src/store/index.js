import Vue from 'vue'
import Vuex from 'vuex'
import getFilms from './getFilms'
import intro from './intro'
import infoFilm from './infoFilm'
import collections from './collections'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      modalInfoFilmOpen: false
    }
  },
  mutations: {},
  actions: {},
  modules: {
    getFilms,
    intro,
    infoFilm,
    collections
  }
})
