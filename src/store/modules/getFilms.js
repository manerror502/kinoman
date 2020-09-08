import axios from 'axios'
import randomIdArr from '@/utils/randomIdArr'

// Да я знаю что axios можно настроить и не повторяться, мне лень
export default {
  actions: {
    getReleasesArrIntro ({ commit }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?order=RATING&ratingFrom=${
        payload.rating.from
      }&ratingTo=${payload.rating.to}&yearFrom=${payload.year.from}&yearTo=${
        payload.year.to
      }&page=${randomIdArr(payload.page)}`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(films => {
          return films.data.films
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getReleasesArr ({ commit }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?order=YEAR&ratingFrom=${
        payload.rating.from
      }&ratingTo=${payload.rating.to}&yearFrom=${payload.year.from}&yearTo=${
        payload.year.to
      }&page=${randomIdArr(payload.page)}`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(films => {
          return films.data.films
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getInfoFilm ({ dispatch, commit }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/${payload}?append_to_response=RATING&append_to_response=POSTERS&append_to_response=REVIEW`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(film => {
          return film.data
        })
        .catch(e => {
          commit('setError', e)
          throw e
        })
    },
    getTrailerFilm ({ dispatch }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/${payload}/videos`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(trailer => {
          return trailer.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getReviewsFilm ({ dispatch }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v1/reviews?filmId=${payload}&page=1`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(reviews => {
          return reviews.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getStaffFilm ({ dispatch }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${payload}`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(staff => {
          return staff.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getCollections ({ dispatch }, payload) {
      const url =
        'https://kinopoiskapiunofficial.tech/api/v1/collections/films?listType=BEST_FILMS_LIST&listId=1'

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(collections => {
          return collections.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getNewRelease ({ dispatch }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?order=YEAR&ratingFrom=${payload.rating.from}&ratingTo=${payload.rating.to}&yearFrom=${payload.year.from}&yearTo=${payload.year.to}&page=${payload.page}`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(releaseFilms => {
          return releaseFilms.data
          // dispatch('getInfoFilm', film)
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getCollection ({ dispatch }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/top?listId=${payload}`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(collection => {
          return collection.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getFiltersJSON ({ dispatch }) {
      const url = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/filters'

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(filters => {
          return filters.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getRecommendFilm ({ dispatch, commit }, { genre, country, page }) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?country=${country}&genre=${genre}&order=${randomIdArr(
        ['RATING', 'YEAR', 'NUM_VOTE']
      )}&ratingTo=10&yearFrom=&yearTo=2020&page=${page}`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(recommedFilm => {
          return recommedFilm.data
        })
        .catch(e => {
          commit('setError', e)
          throw e
        })
    },
    searchFilms ({ dispatch, commit }, keyword) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.VUE_APP_KINOPOISK
        }
      })
        .then(searchFilms => {
          return searchFilms.data
        })
        .catch(e => {
          commit('setError', e)
          throw e
        })
    }
  }
}
