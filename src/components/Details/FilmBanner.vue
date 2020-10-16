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

    <div class="container-fluid">
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
                  d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"
                />
              </svg>

              <svg
                viewBox="0 -28 512.001 512"
                v-else
              >
                <path
                  fill="currentColor"
                  d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"
                />
              </svg>
            </button>
            <button
              class="banner__button"
              @click.prevent="bookmark"
              :class="{bookmark: filmBookmark}"
            >
              <svg
                viewBox="0 0 487.222 487.222"
                v-if="!filmBookmark"
              >
                <path
                  fill="currentColor"
                  d="M486.554,186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6l-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5l0,0c-5.1,0-9.8,2.9-12.1,7.6   l-67.5,137.9l-152,22.6c-5.1,0.8-9.3,4.3-10.9,9.2s-0.2,10.3,3.5,13.8l110.3,106.9l-25.5,151.4c-0.9,5.1,1.2,10.2,5.4,13.2   c2.3,1.7,5.1,2.6,7.9,2.6c2.2,0,4.3-0.5,6.3-1.6l135.7-71.9l136.1,71.1c2,1,4.1,1.5,6.2,1.5l0,0c7.4,0,13.5-6.1,13.5-13.5   c0-1.1-0.1-2.1-0.4-3.1l-26.3-150.5l109.6-107.5C486.854,197.111,488.154,191.711,486.554,186.811z M349.554,293.911   c-3.2,3.1-4.6,7.6-3.8,12l22.9,131.3l-118.2-61.7c-3.9-2.1-8.6-2-12.6,0l-117.8,62.4l22.1-131.5c0.7-4.4-0.7-8.8-3.9-11.9   l-95.6-92.8l131.9-19.6c4.4-0.7,8.2-3.4,10.1-7.4l58.6-119.7l59.4,119.4c2,4,5.8,6.7,10.2,7.4l132,18.8L349.554,293.911z"
                />
              </svg>

              <svg
                viewBox="0 0 487.222 487.222"
                v-else
              >
                <path
                  fill="currentColor"
                  d="M486.554,186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6l-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5l0,0c-5.1,0-9.8,2.9-12.1,7.6   l-67.5,137.9l-152,22.6c-5.1,0.8-9.3,4.3-10.9,9.2s-0.2,10.3,3.5,13.8l110.3,106.9l-25.5,151.4c-0.9,5.1,1.2,10.2,5.4,13.2   c2.3,1.7,5.1,2.6,7.9,2.6c2.2,0,4.3-0.5,6.3-1.6l135.7-71.9l136.1,71.1c2,1,4.1,1.5,6.2,1.5l0,0c7.4,0,13.5-6.1,13.5-13.5   c0-1.1-0.1-2.1-0.4-3.1l-26.3-150.5l109.6-107.5C486.854,197.111,488.154,191.711,486.554,186.811z M349.554,293.911   c-3.2,3.1-4.6,7.6-3.8,12l22.9,131.3l-118.2-61.7c-3.9-2.1-8.6-2-12.6,0l-117.8,62.4l22.1-131.5c0.7-4.4-0.7-8.8-3.9-11.9   l-95.6-92.8l131.9-19.6c4.4-0.7,8.2-3.4,10.1-7.4l58.6-119.7l59.4,119.4c2,4,5.8,6.7,10.2,7.4l132,18.8L349.554,293.911z"
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
      if (Object.keys(this.$store.getters.info).length) {
        this.filmsLike = await this.$store.dispatch('fetchLikeFilm')
        this.filmsBookmarks = await this.$store.dispatch('fetchBookmarkFilm')
      }
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
  right: 0;
  width: calc(100% - 100px);
  height: 100%;
  margin-left: auto;

  @media (max-width: $breackpoints__md) {
    width: 100%;
  }
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
    font-family: $font-family__sans;
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
    font-weight: $font-weight__sans__medium;
    transition: $transition-duration $transition-timing-function;
    // box-shadow: $shadows__coords-x $shadows__coords-y $shadows__size
    //   fade($colors__black, 20%);

    svg {
      width: $font-size--normal + 20;
    }

    &:active {
      transform: scale(1.2);
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
