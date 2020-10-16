export default {
  state: {
    newReleaseFilms: {}
  },
  actions: {
    setNewReleaseFilms: ({ commit }, payload) => {
      commit('setNewReleaseFilms', payload)
    }
  },
  mutations: {
    setNewReleaseFilms: (state, payload) => {
      state.newReleaseFilms = payload
    }
  },
  getters: {
    newReleaseFilms: state => {
      return state.newReleaseFilms
    }
  }
}
