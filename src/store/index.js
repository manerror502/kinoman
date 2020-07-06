import Vue from 'vue'
import Vuex from 'vuex'
import getFilms from './getFilms'
import intro from './intro'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    getFilms,
    intro
  }
})
