import axios from 'axios'
import randomIdArr from '@/utils/arrOperations'

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
          return films
          // dispatch('getInfoFilm', film)
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
    getInfoFilm ({ dispatch }, payload) {
      console.log(payload)

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
    }
  }
}
