import firebase from 'firebase/app'

export default {
  actions: {
    async playlistDaySet ({ commit, dispatch }, { namePlaylist, films, date }) {
      try {
        const uid = await dispatch('getUid')

        films.forEach(async film => {
          const filmId = film.filmId

          await firebase
            .database()
            .ref(`/users/${uid}/playlist/${namePlaylist}/${filmId}`)
            .push({ filmId })
        })

        await firebase
          .database()
          .ref(`/users/${uid}/playlist/${namePlaylist}/${date}`)
          .push({ date })

        return true
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchPlaylistDay ({ commit, dispatch }, namePlaylist) {
      try {
        const uid = await dispatch('getUid')
        const playlistFilms =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/playlist/${namePlaylist}`)
              .once('value')
          ).val() || {}

        return playlistFilms
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
