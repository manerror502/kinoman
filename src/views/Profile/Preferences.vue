<template>
  <section class="perfences">
    <Loader v-if="loading" />
    <div
      class="container-fluid"
      v-else
    >
      <div class="row">
        <div class="col-lg-6">
          <h3 class="items__title">
            Жанры
          </h3>

          <div class="items__schedule">
            <Canvas />
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="items__title">
            Страны
          </h3>
          <Canvas />
        </div>
        <div class="col-lg-6">
          <h3 class="items__title">
            Годы
          </h3>
        </div>
        <div class="col-lg-6">
          <h3 class="items__title">
            Типы
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Canvas from '@/components/Preferences/Canvas'

export default {
  name: 'Preferences',
  data: () => ({
    recommends: null,
    recommendsInfo: {},
    genresArr: [],
    countriesArr: [],
    yearArr: [],

    loading: true
  }),
  components: {
    Canvas
  },
  async created () {
    await this.setup()

    this.loading = false
  },
  methods: {
    async setup () {
      // Получения информации о рекомендациях
      this.recommendsInfo = await this.$store.dispatch('fetchRecomend')

      // Проверка на истину
      if (Object.keys(this.recommendsInfo).length) {
        // Сортируем рекоммендации
        await this.sortRecommends()
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
    }
  }
}
</script>

<style lang="less">
.perfences {
  padding-top: 100px;
  width: 100%;
}
</style>
