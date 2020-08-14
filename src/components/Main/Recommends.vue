<template>
  <section class="recommends">
    <Loader v-if="loading" />

    <div
      class="row"
      v-else-if="!$store.getters.info"
    >
      <div class="col-lg-12 d-flex justify-content-center">
        <div class="recommends__no">
          <div class="recommends__text">
            <p>Авторизуйтесь чтобы наслаждаться рекомендациями</p>
          </div>

          <div class="recommends__animation">
            <div class="recommends__film row">
              <FilmItemInfo
                class="recommends__film-item col-6"
                v-for="release in newRelease"
                :key="release.filmId"
                :item-info="release"
              />
            </div>
          </div>

          <router-link
            to="/login"
            tag="button"
            class="recommends__btn"
          >
            Войти
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="row"
      v-else-if="!Object.keys(this.recommendsInfo).length"
    >
      <div class="col d-flex justify-content-center">
        <div class="recommends__no">
          <div class="recommends__text">
            <p>Нам пока нечего вам рекомендовать</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="recommends__item"
      v-else
    >
      <div class="row">
        <FilmItemInfo
          class="col-xl-4 col-lg-6"
          v-for="recommends in recommends.films"
          :key="recommends.filmId"
          :item-info="recommends"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'

import randomIdArr from '@/utils/randomIdArr'

export default {
  name: 'Recommends',
  components: {
    FilmItemInfo
  },
  data: () => ({
    recommends: null,
    recommendsInfo: {},
    genresArr: [],
    countriesArr: [],
    yearArr: [],

    loading: true
  }),
  async mounted () {
    if (this.$store.getters.info) {
      // Получения информации о рекомендациях
      this.recommendsInfo = await this.$store.dispatch('fetchRecomend')

      // Проверка на истину
      if (Object.keys(this.recommendsInfo).length) {
        // Сортируем рекоммендации
        await this.sortRecommends()

        // На основе рекоммендаций получем фильмы
        await this.getRecommendsFilms()
      }
    } else {
      await this.getNewReleaseFilm()
    }

    this.loading = false
  },
  methods: {
    async sortRecommends () {
      this.genresSort()
      this.countriesSort()
      this.yearSort()
    },
    genresSort () {
      const genres = Object.entries(this.recommendsInfo.genres)

      // перебор массива в новый
      genres.forEach(genre => {
        const genreLength = Object.keys(genre[1]).length
        const genreId = genre[0]

        this.genresArr.push({ genreId: genreId, genreLength: genreLength })
      })

      // сортировка массива по наибольшой численности
      this.genresArr.sort((a, b) => (a.genreLength > b.genreLength ? -1 : 1))
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
    },

    async getRecommendsFilms () {
      // Для выбора одной из наиболее частых стран просмотра
      const countryRandom = [this.countriesArr[0], this.countriesArr[1]]
      // Для выбора одной из наиболее частых жаноров просмотра
      const genreRandom = [this.genresArr[0], this.genresArr[1]]

      const recommendsInfo = {
        country: randomIdArr(countryRandom).countryId,
        genre: randomIdArr(genreRandom).genreId,
        minYear: this.yearArr[0].year,
        page: ['1', '2', '3', '4', '5']
      }

      this.recommends = await this.$store.dispatch(
        'getRecommendFilm',
        recommendsInfo
      )
    },

    async getNewReleaseFilm () {
      const releasesSettings = {
        rating: {
          from: '6',
          to: '10'
        },
        year: {
          from: '2000',
          to: '2020'
        },
        page: ['1', '2', '3', '4', '5']
      }
      try {
        this.newRelease = await this.$store.dispatch(
          'getReleasesArr',
          releasesSettings
        )
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.recommends {
  max-width: 100%;
}

.recommends__no {
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 10px;
  user-select: none;
  display: flex;
  flex-direction: column;
}

.recommends__text {
  max-width: 100%;

  p {
    font-size: @font-size--normal + 15;
    font-family: @font-family__sans;
    color: @colors__grays;
    font-weight: @font-weight__sans__bold;
    text-align: center;
    margin-bottom: 20px;
  }
}

.recommends__btn {
  margin: 10px auto;
  opacity: 1;
  background-image: @gradient__blue;
  color: @colors__white;
  line-height: @line-height--normal;
  font-size: @font-size--normal;
  padding: 10px 50px;
  border-radius: @border-radius__small;
  box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
    fade(#000, 20%);
  transition: @transition-duration @transition-timing-function;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }
}

.recommends__animation {
  position: relative;
  overflow: hidden;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1000px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(24, 24, 24, 1) 0%,
      rgba(24, 24, 24, 0) 31%,
      rgba(24, 24, 24, 0) 51%,
      rgba(24, 24, 24, 0) 70%,
      rgba(24, 24, 24, 1) 100%
    );
  }
}

.recommends__film {
  flex-wrap: nowrap;
  overflow: hidden;
  user-select: none;
  padding: 0 10px;
  position: relative;
}

.recommends__film-item {
  animation: translate 100s linear infinite alternate;
}

@keyframes translate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-5000px);
  }
}
</style>
