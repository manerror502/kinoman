import firebase from 'firebase/app'

export default {
  actions: {
    async addedRecommendGenres ({ commit, dispatch }, payload) {
      try {
        const uid = await dispatch('getUid')
        await firebase
          .database()
          .ref(`/users/${uid}/reccomend/genres/${payload}`)
          .push({ payload })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async addedRecommendCountries ({ commit, dispatch }, payload) {
      try {
        const uid = await dispatch('getUid')
        await firebase
          .database()
          .ref(`/users/${uid}/reccomend/countries/${payload}`)
          .push({ payload })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async addedRecommendYear ({ commit, dispatch }, payload) {
      try {
        const uid = await dispatch('getUid')

        await firebase
          .database()
          .ref(`/users/${uid}/reccomend/year/${payload}`)
          .push({ payload })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async addedRecommendType ({ commit, dispatch }, payload) {
      try {
        const uid = await dispatch('getUid')

        await firebase
          .database()
          .ref(`/users/${uid}/reccomend/type/${payload}`)
          .push({ payload })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async deleteRecommend ({ commit, dispatch }, { genres, countries, year }) {
      try {
        const uid = await dispatch('getUid')
        await firebase
          .database()
          .ref(`/users/${uid}/reccomend/genres/${genres}`)
          .remove()

        await firebase
          .database()
          .ref(`/users/${uid}/reccomend/countries/${countries}`)
          .remove()

        await firebase
          .database()
          .ref(`/users/${uid}/reccomend/year/${year}`)
          .remove()
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchRecomend ({ commit, dispatch, getters }) {
      try {
        if (getters.info) {
          const uid = await dispatch('getUid')
          const filmsLike =
            (
              await firebase
                .database()
                .ref(`/users/${uid}/reccomend`)
                .once('value')
            ).val() || {}

          return filmsLike
        } else {
          return {}
        }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
