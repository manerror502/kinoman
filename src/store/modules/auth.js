import firebase from 'firebase/app'

export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async registr ({ dispatch, commit }, { email, password, userName }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            name: userName,
            settings: {
              notifications: true,
              inTheBeginning: true
            }
          })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getUid () {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async logout ({ commit }) {
      commit('clearError')
      commit('clearInfo')
      await firebase.auth().signOut()
    }
  }
}
