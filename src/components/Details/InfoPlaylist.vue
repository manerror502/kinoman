<template>
  <section
    class="infofilm"
  >
    <Loader
      v-if="loading"
    />

    <div v-else>
      <FilmBanner :banner-info="playlistsCurrent" />

      <div class="infofilm__content">
        <ul class="row">
          <FilmItemInfo
            class="col-xl-4 col-lg-6"
            v-for="film in playlistsCurrent.data.films"
            :key="film.filmId"
            :item-info="film"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'
import FilmBanner from '@/components/Details/FilmBanner'

export default {
  name: 'InfoPlaylist',
  data: () => ({
    playlistsArr: [],
    playlistsCurrent: {
      data: {}
    },

    recommendsInfo: {},
    genresArr: [],
    countriesArr: [],
    yearArr: [],

    loading: true
  }),
  components: {
    FilmItemInfo,
    FilmBanner
  },
  async created () {
    await this.playlistSearch()
    await this.getFilmsPlaylist()

    this.loading = false
  },
  methods: {
    playlistSearch () {
      const playlists = [
        {
          id: 'day',
          nameRu: 'Кинолента Дня',
          posterUrl:
            'https://firebasestorage.googleapis.com/v0/b/kinoman-1cc31.appspot.com/o/app%2FplaylistImg%2F1.jpg?alt=media&token=35db6ac1-3cf5-4e88-b808-c017ed043ea9',
          films: []
        }
      ]

      this.playlistsArr = playlists.filter(
        playlist => playlist.id === this.$route.params.name
      )

      this.playlistsArr.forEach(playlists => {
        this.playlistsCurrent.data = playlists
      })
    },
    async getFilmsPlaylist () {
      if (this.playlistsCurrent.data.id === 'day') {
        // получем информацию по плейлисту
        const playlistFilms = Object.keys(
          await this.$store.dispatch(
            'fetchPlaylistDay',
            this.$route.params.name
          )
        )

        // Извлекаем дату
        const date = new Date()
        const currentDate = this.filterDate(date)

        if (
          !playlistFilms.length &&
          currentDate !== playlistFilms[playlistFilms.length - 1]
        ) {
          // Получем информацию по рекомендациям для каждого плейлиста
          await this.getRecommendInfo()
          // На основе рекоммендаций получем фильмы
          let recommendsInfo = {
            country: this.countriesArr[0].countryId,
            genre: this.genresArr[0].genreId,
            minYear: this.yearArr[0].year || '2000',
            page: 1
          }

          const films1 = (await this.$store.dispatch(
            'getRecommendFilm',
            recommendsInfo
          )).films

          const films1Cropped = films1.slice(0, films1.length / 2)

          // На основе рекоммендаций получем фильмы
          recommendsInfo = {
            country: this.countriesArr[1].countryId,
            genre: this.genresArr[1].genreId,
            minYear: this.yearArr[1].year || '2000',
            page: 1
          }

          const films2 = (await this.$store.dispatch(
            'getRecommendFilm',
            recommendsInfo
          )).films

          const films2Cropped = films1.slice(films2.length / 2)

          // Соеденяем 2 разных массива для разнообразности рекомендаций
          films1Cropped.forEach(film => films2Cropped.push(film))

          this.playlistsCurrent.data.films = films2Cropped

          // Оправляем фильмы плейлиста в базу данных
          const info = {
            namePlaylist: this.$route.params.name,
            films: this.playlistsCurrent.data.films,
            date: currentDate
          }

          await this.$store.dispatch('playlistDaySet', info)
        } else {
          // Добавляем в массив пришедшие данные
          playlistFilms.forEach(async filmId => {
            const film = await this.$store.dispatch('getInfoFilm', filmId)
            this.playlistsCurrent.data.films.push(film.data)
          })
        }
      }
    },

    async getRecommendInfo () {
      if (Object.keys(this.$store.getters.info).length) {
        // Получения информации о рекомендациях
        this.recommendsInfo = await this.$store.dispatch('fetchRecomend')

        // Проверка на истину
        if (Object.keys(this.recommendsInfo).length) {
          // Сортируем рекоммендации
          await this.sortRecommends()
        }
      } else {
        return false
      }
    },
    async sortRecommends () {
      this.genresSort()
      this.countriesSort()
      this.yearSort()
    },
    async genresSort () {
      const genres = Object.entries(this.recommendsInfo.genres)

      // перебор массива в новый
      genres.forEach(genre => {
        const genreLength = Object.keys(genre[1]).length
        const genreId = genre[0]

        this.genresArr.push({ genreId: genreId, genreLength: genreLength })
      })

      // сортировка массива по наибольшой численности
      await this.genresArr.sort(
        (a, b) => (a.genreLength > b.genreLength ? -1 : 1)
      )
      // Удаляем не нужные эелементы, чтобы в дальнейшем не было ошибок
      const genresCropped = this.genresArr.slice(0, 2)
      this.genresArr = genresCropped
    },
    countriesSort () {
      const countries = Object.entries(this.recommendsInfo.countries)
      // перебор массива в новый
      countries.forEach(country => {
        const countryLength = Object.keys(country[1]).length
        const countryId = country[0]

        this.countriesArr.push({
          countryId: countryId,
          countryLength: countryLength
        })
      })

      // сортировка массива по наибольшой численности
      this.countriesArr.sort(
        (a, b) => (a.countryLength > b.countryLength ? -1 : 1)
      )

      // Удаляем не нужные эелементы, чтобы в дальнейшем не было ошибок
      const countriesCropped = this.countriesArr.slice(0, 2)
      this.countriesArr = countriesCropped
    },
    yearSort () {
      const years = Object.entries(this.recommendsInfo.year)

      // перебор массива в новый
      years.forEach(year => {
        const yearLength = Object.keys(year[1]).length
        year = year[0]

        this.yearArr.push({
          year: year,
          yearLength: yearLength
        })
      })

      // сортировка массива по наибольшой численности
      this.yearArr.sort((a, b) => (a.yearLength > b.yearLength ? -1 : 1))

      // Удаляем не нужные эелементы, чтобы в дальнейшем не было ошибок
      const yearCropped = this.yearArr.slice(0, 2)
      this.yearArr = yearCropped
    },

    filterDate (date) {
      const options = {
        weekday: 'long',
        month: 'long'
      }
      return new Intl.DateTimeFormat('en-EN', options).format(date)
    }
  }
}
</script>

<style lang="scss">
</style>
