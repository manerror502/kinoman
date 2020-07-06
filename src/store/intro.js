export default {
  actions: {
    setIntroFilm: ({ commit }, payload) => {
      commit('setIntroFilm', payload)
    }
  },
  mutations: {
    setIntroFilm: (state, payload) => {
      state.IntroFilm = payload
    }
  },
  getters: {
    introFilm: state => {
      return state.IntroFilm
    }
  }
}
