import firebase from 'firebase/app'

export default {
  state: {},
  actions: {
    async uppdateNotifications ({ dispatch, commit }, { notifications }) {
      try {
        const uid = await dispatch('getUid')

        await firebase
          .database()
          .ref(`/users/${uid}/info/settings/`)
          .update({ notifications })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async uppdateReverse ({ dispatch, commit }, { inTheBeginning }) {
      try {
        const uid = await dispatch('getUid')

        await firebase
          .database()
          .ref(`/users/${uid}/info/settings/`)
          .update({ inTheBeginning })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  mutations: {},
  getters: {}
}
