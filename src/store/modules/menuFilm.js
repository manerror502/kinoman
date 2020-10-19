export default {
  state: {
    menuFilm: {
      open: false,
      infoFilm: null
    }
  },
  actions: {
    targetMenuFilm ({ commit }) {
      commit('targetMenuFilm')
    },
    setMenuFilm ({ commit }, payload) {
      commit('setMenuFilm', payload)
    }
  },
  mutations: {
    targetMenuFilm: state => {
      state.menuFilm.open = !state.menuFilm.open
    },
    setMenuFilm: (state, payload) => {
      state.menuFilm.infoFilm = payload
    }
  },
  getters: {
    menuFilmInfo: s => s.menuFilm.infoFilm,
    menuFilmOpen: s => s.menuFilm.open
  }
}
