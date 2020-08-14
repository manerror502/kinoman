import axios from 'axios'
import randomIdArr from '@/utils/randomIdArr'

export default {
  actions: {
    getReleasesArr ({ commit }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?order=YEAR&ratingFrom=${
        payload.rating.from
      }&ratingTo=${payload.rating.to}&yearFrom=${payload.year.from}&yearTo=${
        payload.year.to
      }&page=${randomIdArr(payload.page)}`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
        }
      })
        .then(films => {
          return films.data.films
          // dispatch('getInfoFilm', film)
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getInfoFilm ({ dispatch }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/${payload}?append_to_response=RATING&append_to_response=POSTERS&append_to_response=REVIEW`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
        }
      })
        .then(film => {
          return film.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getTrailerFilm ({ dispatch }, payload) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/${payload}/videos`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
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
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
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
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
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
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
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
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
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
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
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
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
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
    getRecommendFilm ({ dispatch }, { country, genre, minYear, page }) {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?country=${country}&genre=${genre}&order=RATING&ratingTo=10&yearFrom=${minYear}&yearTo=2020&page=${randomIdArr(
        page
      )}`

      return axios(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': '0c5711e4-5890-4625-863f-08e2cffe91a3'
        }
      })
        .then(recommedFilm => {
          return recommedFilm.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    }
  }
}