export default {
  actions: {
    setCollections: ({ commit }, payload) => {
      commit('setCollections', payload)
    }
  },
  mutations: {
    setCollections: (state, payload) => {
      state.collections = payload
    }
  },
  getters: {
    collections: state => {
      return state.collections
    }
  }
}
