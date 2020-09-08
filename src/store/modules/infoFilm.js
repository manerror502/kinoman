export default {
  actions: {
    setInfoFilm: ({ commit }, payload) => {
      commit('setInfoFilm', payload)
    }
  },
  mutations: {
    setInfoFilm: (state, payload) => {
      state.infoFilm = payload
    }
  },
  getters: {
    infoFilm: state => {
      return state.infoFilm
    }
  }
}
