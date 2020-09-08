import firebase from 'firebase/app'

export default {
  actions: {
    async like ({ commit, dispatch }, { title, filmId }) {
      try {
        const uid = await dispatch('getUid')
        const film = await firebase
          .database()
          .ref(`/users/${uid}/films/like/${filmId}`)
          .push({ title, filmId })

        return { title, filmId, id: film.key }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async notLike ({ commit, dispatch }, { title, filmId }) {
      try {
        const uid = await dispatch('getUid')
        await firebase
          .database()
          .ref(`/users/${uid}/films/like/${filmId}`)
          .remove()

        return { title, filmId }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchLikeFilm ({ commit, dispatch }) {
      try {
        const uid = await dispatch('getUid')
        const filmsLike =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/films/like/`)
              .once('value')
          ).val() || {}

        return Object.keys(filmsLike)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },

    async bookmarks ({ commit, dispatch }, { title, filmId }) {
      try {
        const uid = await dispatch('getUid')
        const film = await firebase
          .database()
          .ref(`/users/${uid}/films/bookmarks/${filmId}`)
          .push({ title, filmId })

        return { title, filmId, id: film.key }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async notBookmarks ({ commit, dispatch }, { title, filmId }) {
      try {
        const uid = await dispatch('getUid')
        await firebase
          .database()
          .ref(`/users/${uid}/films/bookmarks/${filmId}`)
          .remove()

        return { title, filmId }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchBookmarkFilm ({ commit, dispatch }) {
      try {
        const uid = await dispatch('getUid')
        const filmsLike =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/films/bookmarks/`)
              .once('value')
          ).val() || {}

        return Object.keys(filmsLike)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
