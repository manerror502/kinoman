import firebase from 'firebase/app'

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
    },
    clearInfo (state) {
      state.info = {}
      localStorage.infoUser = null
    }
  },
  actions: {
    async fetchInfo ({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        const info = (
          await firebase
            .database()
            .ref(`/users/${uid}/info`)
            .once('value')
        ).val()

        commit('setInfo', info)
      } catch (e) {}
    },
    async uppdateInfo ({ dispatch, commit, getters }, toUppdate) {
      try {
        const uid = await dispatch('getUid')
        const uppdateData = { ...getters.info, ...toUppdate }
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .update(uppdateData)
        commit('setInfo', uppdateData)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  getters: {
    info: s => s.info
  }
}
