<template>
  <section class="recommends">
    <Loader v-if="loading" />

    <div
      class="row"
      v-else-if="userInfo"
    >
      <div class="col-lg-12 d-flex justify-content-center">
        <div class="recommends__no">
          <div class="recommends__text">
            <p>Авторизуйтесь чтобы наслаждаться рекомендациями</p>
          </div>

          <div class="recommends__animation">
            <ul class="recommends__film row">
              <FilmItemInfo
                class="recommends__film-item col-6"
                v-for="release in newRelease"
                :key="release.filmId"
                :item-info="release"
              />
            </ul>
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
      v-else-if="recommendsInfoLength"
    >
      <div class="col d-flex justify-content-center">
        <div class="recommends__no">
          <div class="recommends__no-img">
            <img
              src="../../assets/img/alien/spaceship.svg"
              alt="Alien"
            >
          </div>
          <div class="recommends__text">
            <p>Нам пока нечего вам рекомендовать</p>
          </div>

          <Search />
        </div>
      </div>
    </div>

    <div
      class="recommends__item"
      v-else
    >
      <div
        class=" blur__img"
        :style="{backgroundImage: 'url(' + recommends.films[0].posterUrl + ')'}"
      />

      <div class="row">
        <FilmItemInfo
          class="col-xl-4 col-md-6"
          v-for="recommends in recommends.films"
          :key="recommends.filmId"
          :item-info="recommends"
        />
      </div>

      <div
        class="col-12"
        v-if="!($route.fullPath === '/')"
      >
        <Loader v-if="lazyLoading" />
      </div>
    </div>

    <span
      v-if="!($route.fullPath === '/')"
      class="more"
      ref="more"
    />
  </section>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'
import Search from '@/components/app/Search'

import randomIdArr from '@/utils/randomIdArr'

export default {
  name: 'Recommends',
  components: {
    FilmItemInfo,
    Search
  },
  data: () => ({
    recommends: null,
    recommendsInfo: {},
    genresArr: [],
    countriesArr: [],
    yearArr: [],

    page: 1,

    loading: true,
    lazyLoading: false
  }),

  computed: {
    userInfo () {
      return !Object.keys(this.$store.getters.info).length
    },
    recommendsInfoLength () {
      return !Object.keys(this.recommendsInfo).length
    },

    checkingItemsRecommeds () {
      const pagesCount = this.recommends.pagesCount
      const page = this.page

      return pagesCount >= page
    }
  },
  async created () {
    if (Object.keys(this.$store.getters.info).length) {
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
  mounted () {
    if (!this.userInfo && !(this.$route.fullPath === '/')) {
      this.lazyLoad()
    }
  },
  methods: {
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
      const genresCropped = this.genresArr.slice(0, 3)
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
      const countriesCropped = this.countriesArr.slice(0, 3)
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
      const yearCropped = this.yearArr.slice(0, 3)
      this.yearArr = yearCropped
    },

    async getRecommendsFilms () {
      const recommendsInfo = {
        country: randomIdArr(this.countriesArr).countryId,
        genre: randomIdArr(this.genresArr).genreId,
        minYear: randomIdArr(this.yearArr).year,
        page: this.page
      }

      this.recommends = await this.$store.dispatch(
        'getRecommendFilm',
        recommendsInfo
      )

      // await this.filterReccomends()
    },
    async filterReccomends (reccomends) {
      const filmsLike = await this.$store.dispatch('fetchLikeFilm')
      await this.recommends.films.filter(film =>
        filmsLike.includes(film.filmId)
      )
    },

    async loadMore () {
      this.lazyLoading = true

      await this.getMoreRecommends()

      this.lazyLoading = false
    },
    async getMoreRecommends () {
      this.page++

      const recommendsInfo = {
        country: randomIdArr(this.countriesArr).countryId,
        genre: randomIdArr(this.genresArr).genreId,
        minYear: randomIdArr(this.yearArr).year,
        page: this.page
      }
      try {
        const recommends = await this.$store.dispatch(
          'getRecommendFilm',
          recommendsInfo
        )

        recommends.films.forEach(film => {
          this.recommends.films.push(film)
        })
      } catch (e) {
        console.log(e)
      }
    },
    async lazyLoad () {
      const options = {
        root: null,
        threshold: 0
      }

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (
              !this.loading &&
              this.checkingItemsRecommeds &&
              !this.lazyLoading
            ) {
              this.loadMore()
            }
            observer.unobserve()
          }
        })
      }, options)

      const el = this.$refs.more
      observer.observe(el)
    },

    async getNewReleaseFilm () {
      const releasesSettings = {
        rating: {
          from: '6',
          to: '10'
        },
        year: {
          from: '2019',
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

<style lang="scss">
@import '@/assets/style/vars/_vars';

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

.recommends__no-img {
  width: 100%;
  display: flex;
  margin: 0 auto;

  img {
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
  }
}

.recommends__text {
  max-width: 100%;
  padding: 14px 10px;
  border-radius: $border-radius__large - 6;
  margin-bottom: 10px;

  p {
    font-size: $font-size--normal + 15;
    @include adaptiv-font($size--normal + 15, $size--normal);
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__bold;
    text-align: center;
  }
}

.recommends__btn {
  margin: 10px auto;
  opacity: 1;
  line-height: $line-height--normal;
  font-size: $font-size--normal;
  padding: 10px 50px;
  border-radius: $border-radius__small;
  transition: $transition-duration $transition-timing-function;
  @include adaptiv-font($size--normal, $size--small);

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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
}

.recommends__film {
  flex-wrap: nowrap;
  overflow: hidden;
  user-select: none;
  padding: 0 10px;
  position: relative;

  @media (max-width: $breackpoints__md) {
    display: none;
  }
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
