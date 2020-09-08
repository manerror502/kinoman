<template>
  <div
    class="infofilm__banner banner"
    :class="{playlist: !param}"
  >
    <div class="banner__wrap">
      <div
        class="banner__bg"
        :style="{backgroundImage: 'url(' + bannerInfo.data.posterUrl + ')'}"
      />
    </div>

    <div class="banner__content">
      <div
        class="banner__preview"
      >
        <img
          :src="bannerInfo.data.posterUrl"
          alt=""
        >
      </div>

      <div class="banner__title">
        <h3>{{ bannerInfo.data.nameRu }}</h3>

        <div
          class="banner__buttoon-wrap"
          :key="counter"
          v-if="param"
        >
          <button
            @click.prevent="like"
            :class="{active: filmLike}"
          >
            <svg
              viewBox="0 -28 512.001 512"
              v-if="!filmLike"
            >
              <path
                fill="currentColor"
                d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"
              />
            </svg>

            <svg
              viewBox="0 0 512 512"
              v-else
            >
              <path
                fill="currentColor"
                d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                C512,93.417,453.532,30,376,30z"
              />
            </svg>
          </button>
          <button
            class="banner__button"
            @click.prevent="bookmark"
            :class="{bookmark: filmBookmark}"
          >
            <svg
              viewBox="0 0 512 512"
              v-if="!filmBookmark"
            >
              <path
                fill="currentColor"
                d="M416.667,0H95.333c-8.284,0-15,6.716-15,15v482c0,6.067,3.655,11.536,9.26,13.858c1.856,0.769,3.805,1.142,5.737,1.142
                c3.904,0,7.74-1.523,10.61-4.394l150.063-150.061L406.06,507.606c4.29,4.29,10.742,5.573,16.347,3.252
                c5.605-2.322,9.26-7.791,9.26-13.858V15C431.667,6.716,424.951,0,416.667,0z M256.002,321.332c-3.978,0-7.793,1.58-10.606,4.394
                L110.333,460.787V30h291.333v430.785L266.609,325.726C263.796,322.912,259.981,321.332,256.002,321.332z"
              />
            </svg>

            <svg
              viewBox="-58 0 404 404.54135"
              v-else
            >
              <path
                fill="currentColor"
                d="m277.527344 0h-267.257813c-5.523437 0-10 4.476562-10 10v374.527344c-.011719 7.503906 4.183594 14.378906 10.855469 17.804687 6.675781 3.429688 14.707031 2.832031 20.796875-1.550781l111.976563-80.265625 111.976562 80.269531c6.097656 4.367188 14.121094 4.960938 20.792969 1.535156 6.667969-3.425781 10.863281-10.292968 10.863281-17.792968v-374.527344c0-5.523438-4.480469-10-10.003906-10zm0 0"
              />
            </svg>
          </button>
        </div>

        <!-- <a
          target="_blank"
          v-if="trailerFilm.trailers"
          :href="trailerFilm.trailers[0].url"
          class="btn--trailer"
        > Смотерть трейлер </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBanner',
  props: {
    bannerInfo: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    filmsLike: [],
    filmsBookmarks: [],
    filters: null,
    counter: 0,

    fade: false,
    scrollPrev: 0
  }),
  computed: {
    filmLike () {
      if (this.filmsLike.length) {
        const filmId = this.bannerInfo.data.filmId
        return this.filmsLike.includes(String(filmId))
      } else {
        return false
      }
    },
    filmBookmark () {
      if (this.filmsBookmarks.length) {
        const filmId = this.bannerInfo.data.filmId
        return this.filmsBookmarks.includes(String(filmId))
      } else {
        return false
      }
    },
    param () {
      if (this.$route.params.id) {
        return true
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
      if (!await this.$store.dispatch('getUid')) {
        // Если не авторизован

        this.$router.push('/login')
        this.$toast.error('Вы не авторизованны')
      } else {
        const filmId = this.bannerInfo.data.filmId

        const filmInfo = {
          title: this.bannerInfo.data.nameRu,
          filmId
        }

        const filmReccomendInfo = {
          genres: this.bannerInfo.data.genres,
          countries: this.bannerInfo.data.countries,
          year: this.bannerInfo.data.year,
          type: this.bannerInfo.data.type
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
        const filmId = this.bannerInfo.data.filmId

        const filmInfo = {
          title: this.bannerInfo.data.nameRu,
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
@import '@/assets/style/vars/_vars';

.banner__wrap {
  overflow: hidden;
  height: 100%;
}

.banner {
  height: 400px;
  position: relative;
  z-index: 2;
  transition: $transition-duration $transition-timing-function;

  &.playlist {
    .banner__preview {
      max-width: 200px;
      max-height: 215px;
    }
  }

  @media (max-width: $breackpoints__sm) {
    height: 600px;

    &.playlist {
      height: 450px;

      .banner__title {
        top: 70%;
      }
    }
  }
}

.banner__content {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.banner__preview {
  max-width: 185px;
  max-height: 250px;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 40px;
  left: 90px;
  z-index: 5;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: $breackpoints__sm) {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.banner__bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(100px);
  overflow: hidden;
}

.banner__title {
  text-align: left;
  margin: auto 20px;
  padding-left: 310px;
  padding-top: 70px;

  h3 {
    font-size: $font-size--large + 5;
    font-family: $font-family__sans__black;
    @include adaptiv-font($size--large + 5, $size--normal + 5);
    font-weight: 500;
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (max-width: $breackpoints__sm) {
    padding: 0;
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    // white-space: nowrap;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    line-height: $line-height--normal;
    padding: 0 10px;

    h3 {
      margin-bottom: 10px;
      line-height: $line-height--normal + 10;
    }
  }
}

.banner__buttoon-wrap {
  position: absolute;
  bottom: 50px;

  button {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;
    padding: 10px;
    border-radius: $buttons__border-radius;
    max-width: 300px;
    font-size: $font-size--normal;
    font-family: $font-family__sans;
    font-weight: 400;
    transition: $transition-duration $transition-timing-function;
    // box-shadow: $shadows__coords-x $shadows__coords-y $shadows__size
    //   fade($colors__black, 20%);

    svg {
      width: $font-size--normal + 20;
    }
  }

  @media (max-width: $breackpoints__sm) {
    position: relative;
    padding-top: 50px;
    text-align: center;

    button {
      margin: 0;
    }
  }
}
</style>
