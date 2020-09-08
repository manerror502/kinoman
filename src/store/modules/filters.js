export default {
  actions: {
    setFilters: ({ commit }, payload) => {
      commit('stateFilters', payload)
    }
  },
  mutations: {
    stateFilters: (state, payload) => {
      state.filters = payload
    }
  },
  getters: {
    filters: s => s.filters
  }
}
