export default {
  actions: {
    setIntroFilm: ({ commit }, payload) => {
      commit('setIntroFilm', payload)
    }
  },
  mutations: {
    setIntroFilm: (state, payload) => {
      state.introFilm = payload
    }
  },
  getters: {
    introFilm: s => s.introFilm
  }
}
