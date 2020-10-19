<template>
  <section
    class="menu"
  >
    <Loader v-if="loading" />

    <div
      v-else
      class="menu__content"
    >
      <div class="menu__header row justify-content-between no-gutters">
        <div class="menu__info">
          <div class="menu__poster">
            <img
              :src="menuInfo.posterUrl"
              class="img"
              alt=""
            >
          </div>

          <div class="menu__text">
            <h5 class="menu__title">
              {{ menuInfo.nameRu || menuInfo.nameEn }}
            </h5>
          </div>
        </div>

        <div class="menu__close">
          <button
            class="btn"
            @click="menuClose"
          >
            <svg viewBox="0 0 413.348 413.348">
              <path
                fill="currentColor"
                d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="menu__button">
        <button
          class="btn"
          @click.prevent="like"
          :class="{like: filmLike}"
        >
          <span>
            <svg viewBox="0 0 471.701 471.701">
              <path
                fill="currentColor"
                d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"
              />
            </svg>
          </span>
          <p v-if="!filmLike">
            Нравиться
          </p>

          <p v-else>
            Не нравиться
          </p>
        </button>

        <button
          class="btn"
          @click.prevent="goToFilm"
        >
          <span>
            <svg viewBox="0 0 490.009 490.009">
              <path
                fill="currentColor"
                d="M253.354,342.609c4.3,2,9.4,1.4,13-1.6l193.2-160c2.8-2.3,4.4-5.8,4.4-9.4c0-3.7-1.6-7.1-4.5-9.4l-193.1-159.4
                c-3.7-3-8.7-3.7-13-1.6c-4.3,2-7,6.3-7,11.1v83.7c-221.5,8-220.6,176-220.2,257.4v9.7c0,5.6,3.7,10.4,9.1,11.8
                c1,0.3,2.1,0.4,3.1,0.4c4.3,0,8.4-2.3,10.7-6.2c65.4-115.2,119.2-120.8,197.3-121.1v83.5
                C246.354,336.209,249.055,340.509,253.354,342.609z M50.855,319.909c1.1-35.5,5.8-77.8,25.2-113.6c30.8-57,90.5-85.2,182.6-86.1
                c6.7-0.1,12.1-5.5,12.1-12.2v-69.8l161.7,133.4l-161.6,133.8v-69.7c0-3.2-1.3-6.4-3.6-8.7s-5.4-3.6-8.7-3.6
                C172.855,223.509,113.755,228.609,50.855,319.909z"
              />
              <path
                fill="currentColor"
                d="M461.555,477.809v-226c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v213.7h-386.3v-41.6c0-6.8-5.5-12.3-12.3-12.3
               s-12.3,5.5-12.3,12.3v53.8c0,6.8,5.5,12.3,12.3,12.3h410.9C456.055,490.009,461.555,484.509,461.555,477.809z"
              />
            </svg>
          </span>
          <p>
            Открыть информацию о кино
          </p>
        </button>

        <button
          class="btn"
          @click.prevent="share"
        >
          <span>
            <svg viewBox="0 0 512.001 512.001">
              <path
                fill="currentColor"
                d="M404.99,344.077c-26.743,0-50.588,12.583-65.974,32.124l-154.093-88.964c3.888-9.662,6.049-20.198,6.049-31.236
                c0-11.037-2.162-21.573-6.049-31.236l154.093-88.964c15.387,19.54,39.231,32.124,65.974,32.124
                c46.297,0,83.962-37.666,83.962-83.962C488.952,37.666,451.288,0,404.99,0s-83.962,37.665-83.962,83.961
                c0,11.038,2.163,21.576,6.052,31.24l-154.091,88.964c-15.387-19.542-39.233-32.127-65.978-32.127
                c-46.297,0-83.962,37.666-83.962,83.962c0,46.296,37.665,83.962,83.962,83.962c26.745,0,50.591-12.585,65.978-32.127L327.08,396.8
                c-3.889,9.664-6.052,20.201-6.052,31.24c0,46.297,37.665,83.961,83.962,83.961s83.962-37.665,83.962-83.961
                C488.952,381.744,451.288,344.077,404.99,344.077z M404.99,23.808c33.169,0,60.155,26.985,60.155,60.153
                c0,33.169-26.985,60.155-60.155,60.155c-33.169,0-60.155-26.986-60.155-60.155C344.836,50.792,371.822,23.808,404.99,23.808z
                M107.011,316.155c-33.169,0-60.155-26.986-60.155-60.155c0-33.169,26.985-60.155,60.155-60.155
                c33.169,0,60.155,26.986,60.155,60.155C167.166,289.169,140.18,316.155,107.011,316.155z M404.99,488.192
                c-33.169,0-60.155-26.985-60.155-60.153c0-33.169,26.985-60.155,60.155-60.155c33.169,0,60.155,26.986,60.155,60.155
                C465.145,461.208,438.159,488.192,404.99,488.192z"
              />
              <path
                fill="currentColor"
                d="M107.011,220.606c-19.516,0-35.394,15.877-35.394,35.394c0,6.573,5.329,11.904,11.904,11.904s11.904-5.331,11.904-11.904
                c0-6.389,5.197-11.586,11.586-11.586c6.574,0,11.904-5.331,11.904-11.904C118.915,225.936,113.585,220.606,107.011,220.606z"
              />
            </svg>
          </span>
          <p>
            Поделиться
          </p>
        </button>

        <button
          class="btn"
          @click.prevent="bookmark"
        >
          <span>
            <svg viewBox="0 0 471.701 471.701">
              <path
                fill="currentColor"
                d="M486.554,186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6l-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5l0,0c-5.1,0-9.8,2.9-12.1,7.6   l-67.5,137.9l-152,22.6c-5.1,0.8-9.3,4.3-10.9,9.2s-0.2,10.3,3.5,13.8l110.3,106.9l-25.5,151.4c-0.9,5.1,1.2,10.2,5.4,13.2   c2.3,1.7,5.1,2.6,7.9,2.6c2.2,0,4.3-0.5,6.3-1.6l135.7-71.9l136.1,71.1c2,1,4.1,1.5,6.2,1.5l0,0c7.4,0,13.5-6.1,13.5-13.5   c0-1.1-0.1-2.1-0.4-3.1l-26.3-150.5l109.6-107.5C486.854,197.111,488.154,191.711,486.554,186.811z M349.554,293.911   c-3.2,3.1-4.6,7.6-3.8,12l22.9,131.3l-118.2-61.7c-3.9-2.1-8.6-2-12.6,0l-117.8,62.4l22.1-131.5c0.7-4.4-0.7-8.8-3.9-11.9   l-95.6-92.8l131.9-19.6c4.4-0.7,8.2-3.4,10.1-7.4l58.6-119.7l59.4,119.4c2,4,5.8,6.7,10.2,7.4l132,18.8L349.554,293.911z"
              />
            </svg>
          </span>
          <p v-if="!filmBookmark">
            В закладки
          </p>

          <p v-else>
            Удалить из закладок
          </p>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'MenuFilm',
  data: () => ({
    menuInfo: {},
    filmsLike: [],
    filmsBookmarks: [],
    filters: null,
    counter: 0,

    loading: true
  }),
  computed: {
    filmLike () {
      if (this.filmsLike.length) {
        const filmId = this.menuInfo.filmId
        this.filmsLike.includes(String(filmId))
        return this.filmsLike.includes(String(filmId))
      } else {
        return false
      }
    },
    filmBookmark () {
      if (this.filmsBookmarks.length) {
        const filmId = this.menuInfo.filmId
        return this.filmsBookmarks.includes(String(filmId))
      } else {
        return false
      }
    }
  },
  async mounted () {
    try {
      this.menuInfo = await this.$store.getters.menuFilmInfo
    } catch (e) {
      this.$toast.error('Ошибка')
    }

    try {
      if (Object.keys(this.$store.getters.info).length) {
        this.filmsLike = await this.$store.dispatch('fetchLikeFilm')
        this.filmsBookmarks = await this.$store.dispatch('fetchBookmarkFilm')
      }
    } catch (e) {}

    this.loading = false
  },
  methods: {
    async like () {
      if (!await this.$store.dispatch('getUid')) {
        // Если не авторизован
        this.$router.push('/login')
        this.$toast.error('Вы не авторизованны')
      } else {
        const filmId = this.menuInfo.filmId

        const filmInfo = {
          title: this.menuInfo.nameRu,
          filmId
        }

        const filmReccomendInfo = {
          genres: this.menuInfo.genres,
          countries: this.menuInfo.countries,
          year: this.menuInfo.year,
          type: this.menuInfo.type
        }

        // Проверяем есть ли в массиве понравившихся такой id
        if (!this.filmsLike.includes(String(filmId))) {
          try {
            // Если нет
            this.filters = this.$store.state.filters.filters

            this.genresRecommendSet(filmReccomendInfo)
            this.countriesRecommendSet(filmReccomendInfo)

            if (filmReccomendInfo.type === 'FILM') {
              this.yearRecommendSetFilm(filmReccomendInfo)
            } else {
              this.yearRecommendSetTvShow('2010')
            }

            this.typeRecommendSet(filmReccomendInfo)

            this.addedInLikes(filmInfo)

            // Перерисовка компонента
            this.counter++
          } catch (e) {}
        } else {
          // Если есть
          const film = await this.$store.dispatch('notLike', filmInfo)
          // await this.$store.dispatch('deleteRecommend', filmInfo)
          // Удаляем элементd
          this.filmsLike = this.filmsLike.filter(filmLike => !film.filmId)

          // Перерисовка компонента
          this.counter++

          this.$toast.error(`"${film.title}" удалён из понравившегося`)
        }
      }
    },
    async bookmark () {
      if (!await this.$store.dispatch('getUid')) {
        // Если не авторизован

        this.$router.push('/login')
        this.$toast.error('Вы не авторизованны')
      } else {
        const filmId = this.menuInfo.filmId

        const filmInfo = {
          title: this.menuInfo.nameRu,
          filmId
        }

        // Проверяем есть ли в массиве понравившихся такой id
        if (!this.filmsBookmarks.includes(String(filmId))) {
          try {
            // Если нет
            this.addedInBookmark(filmInfo)

            // Перерисовка компонента
            this.counter++
          } catch (e) {}
        } else {
          // Если есть
          const film = await this.$store.dispatch('notBookmarks', filmInfo)
          // await this.$store.dispatch('deleteRecommend', filmInfo)
          // Удаляем элементd
          this.filmsBookmarks = this.filmsBookmarks.filter(
            filmBookmark => !film.filmId
          )

          // Перерисовка компонента
          this.counter++

          this.$toast.error(`"${film.title}" удалён из закладок`)
        }
      }
    },
    goToFilm () {
      const filmId = this.menuInfo.filmId
      this.$router.push(`/film/${filmId}`)
      this.menuClose()
    },

    async share () {
      const filmId = this.menuInfo.filmId
      const url = `${process.env.VUE_APP_URL}film/${filmId}`

      if (navigator.clipboard) {
        await navigator.clipboard
          .writeText(url)
          .then(() => {
            this.$toast.success('Ссылка скопированна в буфер обмена')
          })
          .catch(e => {
            console.log(e)
          })
      } else {
        this.$toast.error('Ошибка')
      }
    },

    genresRecommendSet (filmReccomendInfo) {
      // Добавляем в рекоммендации жанры
      filmReccomendInfo.genres.forEach(element => {
        const genreName = element.genre

        // Ищем жанр фильма в массиве всех жаноров
        const findGenre = this.filters.genres.find(
          genre => genre.genre === genreName
        )
        this.$store.dispatch('addedRecommendGenres', findGenre.id)
      })
    },
    countriesRecommendSet (filmReccomendInfo) {
      // Добавляем в рекоммендации страны
      filmReccomendInfo.countries.forEach(element => {
        const countryName = element.country

        // Ищем страны фильма в массиве всех стран
        const findCountry = this.filters.countries.find(
          country => country.country === countryName
        )

        this.$store.dispatch('addedRecommendCountries', findCountry.id)
      })
    },
    yearRecommendSetFilm (filmReccomendInfo) {
      // Добавляем в рекоммендации год
      this.$store.dispatch('addedRecommendYear', filmReccomendInfo.year)
    },
    yearRecommendSetTvShow (year) {
      // Добавляем в рекоммендации год
      this.$store.dispatch('addedRecommendYear', year)
    },
    typeRecommendSet (filmReccomendInfo) {
      // Добавляем в рекоммендации тип
      this.$store.dispatch('addedRecommendType', filmReccomendInfo.type)
    },
    async addedInLikes (filmInfo) {
      // Добавляем в понравившиеся
      const film = await this.$store.dispatch('like', filmInfo)
      this.filmsLike.push(String(film.filmId))
      this.$toast.success(`"${film.title}" добавлен в понравившиеся`)
    },
    async addedInBookmark (filmInfo) {
      // Добавляем в понравившиеся
      const film = await this.$store.dispatch('bookmarks', filmInfo)
      this.filmsBookmarks.push(String(film.filmId))
      this.$toast.success(`"${film.title}" добавлен в закладки`)
    },

    async menuClose () {
      await this.$store.dispatch('targetMenuFilm')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.menu {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  min-height: 300px;
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 3;
  padding: 5px;
  transform: translateX(-50%);
  border-radius: $border-radius__small $border-radius__small 0 0;
  transition: $transition-duration $transition-timing-function;

  @media (max-width: $breackpoints__md) {
    max-width: 100%;
  }
}

.menu__header {
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  padding: 10px 0;
}

.menu__info {
  display: flex;
  align-items: center;
  margin-left: 10px;
  max-width: 450px;
  width: 80%;
}

.menu__poster {
  max-width: 70px;
  width: 100%;
  height: 100%;
  border-radius: $border-radius__small - 4;
  overflow: hidden;
  margin-right: 20px;
}

.menu__text {
  max-width: 79%;
}

.menu__title {
  font-size: $font-size--normal + 10;
  @include adaptiv-font($size--normal, $size--small + 5);
  font-family: $font-family__sans;
  font-weight: $font-weight__sans__bold;
  line-height: $line-height--normal;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
}

.menu__button {
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  button {
    display: inline-flex;
    padding: 5px 10px;
    align-items: center;
    text-align: left;
    font-weight: $font-weight__sans__regular;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: $transition-duration $transition-timing-function;
    border-radius: $border-radius__small - 4;

    p {
      @include adaptiv-font($size--normal, $size--small + 5);
      line-height: $line-height--normal + 10;
      font-family: $font-family__sans;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      display: inline-flex;
      height: 100%;
      margin-right: 10px;
      transition: $transition-duration $transition-timing-function;

      svg {
        width: 30px;
      }
    }

    &:active {
      transform: scale(0.9);
    }
  }
}

.menu__close {
  button {
    width: 30px;
    height: 30px;
    transition: $transition-duration $transition-timing-function;

    &:active {
      transform: scale(1.2);
    }
  }
}
</style>
