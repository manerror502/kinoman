import firebase from 'firebase/app'

export default {
  state: {},
  actions: {
    async uppdateSettings ({ dispatch, commit, getters }, toUppdate) {
      try {
        const uid = await dispatch('getUid')
        const uppdateData = { ...getters.info.settings, ...toUppdate }
        await firebase
          .database()
          .ref(`/users/${uid}/info/settings`)
          .update(uppdateData)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  mutations: {},
  getters: {}
}
