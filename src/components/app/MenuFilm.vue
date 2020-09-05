<template>
  <div
    class="menu"
    ref="menu"
  >
    <!-- <div class="menu__header">
      <a class="menu__title">
        <h5>Вверх</h5>
      </a>
    </div> -->
    <div class="menu__button">
      <button
        class="btn"
        @click.prevent="like"
        :class="{like: filmLike}"
      >
        <span>
          <svg viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                C512,93.417,453.532,30,376,30z"
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
        @click.prevent="bookmark"
      >
        <span>
          <svg viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M327.68,0H96.256c-22.528,0-40.96,18.432-40.96,40.96v357.376c0,9.728,5.632,18.944,14.336,23.04
              c9.216,4.096,19.456,3.072,27.136-3.072l0.512-0.512l114.688-96.768l114.688,96.768l0.512,0.512
              c4.608,3.584,10.24,5.632,15.872,5.632c3.584,0,7.68-1.024,11.264-3.072c8.704-4.096,14.336-13.312,14.336-23.04V40.96
              C368.64,18.432,350.208,0,327.68,0z"
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
</template>
<script>
export default {
  name: 'Menu',
  props: {
    menuInfo: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    filmsLike: [],
    filmsBookmarks: [],
    filters: null,
    counter: 0
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
      this.filmsLike = await this.$store.dispatch('fetchLikeFilm')
      this.filmsBookmarks = await this.$store.dispatch('fetchBookmarkFilm')
    } catch (e) {}
  },
  methods: {
    async like () {
      if (!(await this.$store.dispatch('getUid'))) {
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
      if (!(await this.$store.dispatch('getUid'))) {
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
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.menu {
  display: flex;
  flex-direction: column;
  width: 300px;
  position: absolute;
  right: 100%;
  top: 0;
  z-index: 4;
  border-radius: $border-radius__small - 3;
  padding: 5px;
  @include adaptiv-image(300, 240);
}

.menu__header {
  display: flex;
  align-items: center;
}

.menu__title {
  width: 100%;
  padding-bottom: 5px;

  h5 {
    font-size: $font-size--normal + 10;
    font-family: $font-family__sans;
    font-weight: 700;
    line-height: $line-height--normal + 7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.menu__button {
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  button {
    display: inline-flex;
    padding: 0 10px;
    align-items: center;
    text-align: left;

    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: $transition-duration $transition-timing-function;
    border-radius: $border-radius__small - 4;

    p {
      font-size: $font-size--normal;
      line-height: $line-height--normal + 7;
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
  }
}
</style>
