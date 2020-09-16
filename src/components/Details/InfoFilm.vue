<template>
  <section
    class="infofilm"
  >
    <Loader
      v-if="loading"
    />

    <div v-else>
      <FilmBanner :banner-info="infoFilm" />

      <div
        class="infofilm__content"
      >
        <div class="row">
          <div
            class="col-lg-6"
            v-if="trailerFilm.trailers"
          >
            <div

              class="infofilm__trailer"
            >
              <youtube
                ref="youtube"
                :video-id="videoId"
              />
            </div>
          </div>

          <div class="col-lg-6">
            <ul class="infofilm__attributes">
              <li>
                Страна:
                <span> {{ filterCountries || 'Нет информации' }}
                </span>
              </li>
              <li>
                Год:
                <span>{{ infoFilm.data.year || 'Нет информации' }}</span>
              </li>
              <li>
                Премьера в мире: <span>{{ infoFilm.data.premiereWorld ||infoFilm.data.premiereRu || 'Нет информации' }} </span> (год-месяц-день)
              </li>
              <li>
                Жанр:
                <span> {{ filterGenres || 'Нет информации' }}
                </span>
              </li>

              <li>
                Слоган:
                <span>{{ infoFilm.data.slogan || 'Нет информации' }}</span>
              </li>
              <li>
                Длина:
                <span>{{ infoFilm.data.filmLength || 'Нет информации' }}</span>
              </li>
              <li>
                Возрастное ограничение:
                <span>{{ infoFilm.data.ratingAgeLimits || 'Нет информации' }}</span>
              </li>
              <li>
                КиноПоиск:
                <span :class="rating">{{ infoFilm.rating.rating || 'Нет информации' }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="infofilm__wrap">
          <div class="row infofilm__mah">
            <div
              class="col"
              v-if="infoFilm.data.description"
            >
              <div
                class="infofilm__descr"
              >
                <div class="infofilm__heading">
                  <h2>Описание</h2>
                </div>

                <p>
                  {{ infoFilm.data.description || "Нет описания" }}
                </p>
              </div>
            </div>

            <div
              class="col-lg"
              v-if="(infoFilm.data.seasons).length"
            >
              <div class="infofilm__episodes">
                <div class="infofilm__heading">
                  <h2>
                    Эпизоды ({{ sumEpisodes }})
                  </h2>
                </div>

                <div class="infofilm__episodes-scroll">
                  <div
                    v-for="seasons in infoFilm.data.seasons"
                    :key="seasons.number"
                  >
                    <h4 class="infofilm__episodes-seasons">
                      Сезон {{ seasons.number }}
                    </h4>

                    <div
                      class="infofilm__episodes-films"
                      v-for="episode in seasons.episodes "
                      :key="episode.episodeNumber"
                    >
                      <div class="d-flex">
                        {{ episode.episodeNumber }}.
                        <p>
                          {{ episode.nameRu || episode.nameEn || "Нет инофрмации о названии" }}
                        </p>
                      </div>
                      <time>
                        {{ episode.releaseDate || "Неизвестна дата выхода" }}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="row infofilm__staff"
          >
            <div class="infofilm__heading">
              <h2>Команда</h2>
            </div>

            <div
              class="col-xl-2 col-lg-4 col-md-4"
              v-for="staff in staffFilm"
              :key="staff.staffId"
            >
              <div
                class="infofilm__staff-item"
              >
                <div class="infofilm__staff-img">
                  <img
                    :src="staff.posterUrl"
                    alt=""
                    class="img"
                  >
                </div>

                <div class="infofilm__staff-title">
                  <h4>{{ staff.nameRu || staff.nameEn }}</h4>

                  <!-- <h5>{{ staff.professionText }}</h5> -->
                </div>
              </div>
            </div>

            <div
              class="infofilm__staff-bg"
              :style="{backgroundImage: 'url(' + infoFilm.data.posterUrl + ')'}"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FilmBanner from '@/components/Details/FilmBanner'

import filterCountriesArr from '@/utils/filterCountries.js'
import filterGenresArr from '@/utils/filterGenres.js'

export default {
  name: 'InfoFilm',
  data: () => ({
    infoFilm: {},
    trailerFilm: {},
    staffFilm: [],
    videoId: 'videoId',
    loading: true,

    // Для скролла
    fade: false,
    scrollPrev: 0
  }),
  components: {
    FilmBanner
  },
  computed: {
    rating () {
      if (this.infoFilm.rating.rating >= 6.5) {
        return 'green'
      } else if (this.infoFilm.rating.rating >= 4.1) {
        return 'yellow'
      } else {
        return 'red'
      }
    },
    filterGenres () {
      const genres = this.infoFilm.data.genres
      return filterGenresArr(genres)
    },
    filterCountries () {
      const countries = this.infoFilm.data.countries
      return filterCountriesArr(countries)
    },

    sumEpisodes () {
      const lengthArr = []

      // Добавляем в массив число эпизодов
      this.infoFilm.data.seasons.forEach(season => {
        lengthArr.push(season.episodes.length)
      })

      // Складываем все сезоны
      let sum = 0
      lengthArr.forEach(length => {
        sum = sum + length
      })

      return sum
    }
  },

  async created () {
    // Получаем всю информацию о фильме
    await this.getInfoFilm()
    this.loading = false
  },
  methods: {
    async getInfoFilm () {
      const filmId = this.$route.params.id

      // Получаем основную информацию массивы
      await this.getBasicInfo(filmId)
      // Получаем трейлер фильма
      this.getTrailer(filmId)
      // Получаем персонал фильма
      this.getStaff(filmId)
    },

    async getBasicInfo (filmId) {
      try {
        this.infoFilm = await this.$store.dispatch('getInfoFilm', filmId)
      } catch (e) {
        console.log(e)
      }
    },

    filterStaff (arr) {
      arr.forEach(element => {
        if (element.professionKey === 'ACTOR' && this.staffFilm.length < 8) {
          this.staffFilm.push(element)
        }
      })
    },

    async getTrailer (filmId) {
      try {
        this.trailerFilm = await this.$store.dispatch('getTrailerFilm', filmId)
      } catch (e) {
        console.log(e)
      }

      if (this.trailerFilm.trailers) {
        const url = this.trailerFilm.trailers[0].url
        // получаем id для ютуба
        this.videoId = this.$youtube.getIdFromUrl(url)
      }
    },
    async getStaff (filmId) {
      try {
        const staff = await this.$store.dispatch('getStaffFilm', filmId)

        // фильтруем только актёров
        this.filterStaff(staff)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" >
@import '@/assets/style/vars/_vars';

.infofilm__mah {
  // max-height: 500px;
}

.infofilm {
  position: relative;
  z-index: 10;
  padding-bottom: 20px;
  width: 100%;
  min-height: 100vh;
  // border: $border-width + 1 solid fade($colors__grays, 20%);
  border-radius: $border-radius__small;
  transition: 0.2s ease;
}

.infofilm__content {
  position: relative;
  top: -30px;
  z-index: 2;
  padding: 30px 20px;
  border-radius: $border-radius__big + 20;
  transition: $transition-duration $transition-timing-function;
  // box-shadow: 0 0 20px fade-out(#000, 0.7%);

  @media (max-width: $breackpoints__md) {
    border-radius: $border-radius__big;
  }
}

.infofilm__trailer {
  padding-bottom: 20px;
  height: 100%;
}

.infofilm__attributes {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  max-width: 100%;
  height: 100%;
  font-size: $font-size--normal;

  li {
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__light;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      font-family: $font-family__sans;
      font-weight: $font-weight__sans__regular;
    }

    &:last-child {
      font-size: $font-size--normal + 10;
      font-family: $font-family__sans;
      font-weight: $font-weight__sans__bold;
      color: #f60;
    }

    @media (max-width: $breackpoints__md) {
      text-align: center;
    }
  }
}

.infofilm__wrap {
  padding-top: 0;
}

.infofilm__descr {
  min-height: 200px;
  height: 100%;
  p {
    padding: 10px 0;
    font-size: $font-size--normal;
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__regular;
    line-height: $line-height--small + 5;

    @media (max-width: $breackpoints__md) {
      text-align: center;
    }
  }
}

.infofilm__episodes {
  height: 100%;
  overflow: hidden;
}

.infofilm__episodes-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 300px;
}

.infofilm__episodes-seasons {
  font-size: $font-size--normal;
  font-family: $font-family__sans;
  font-weight: $font-weight__sans__light;
  line-height: $line-height--small + 5;
  padding-bottom: 10px;
  margin-bottom: 10px;

  @media (max-width: $breackpoints__md) {
    text-align: center;
  }
}

.infofilm__episodes-films {
  font-size: $font-size--small + 5;
  font-family: $font-family__sans;
  font-weight: $font-weight__sans__regular;
  line-height: $line-height--small;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    margin-right: 10px;
  }

  time {
    margin-right: 30px;
  }
}

.infofilm__heading {
  width: 100%;
  padding-bottom: 10px;

  h2 {
    font-size: $font-size--normal + 10;
    font-family: $font-family__sans;

    @media (max-width: $breackpoints__md) {
      text-align: center;
    }
  }
}

.infofilm__staff {
  margin: 0 auto;
  position: relative;
}

.infofilm__staff-bg {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(100px);
  overflow: hidden;
  width: 100%;
  height: 60%;
}

.infofilm__staff-item {
  position: relative;
  z-index: 2;
  display: flex;
  max-height: 350px;
  height: 100%;
  flex-direction: column;
  // border: $border-width solid fade($colors__grays, 10%);
  border-radius: $border-radius__small;
  overflow: hidden;
  margin: 10px;
  margin-left: 0;
  padding: 10px;
  // background-color: fade(#fff, 10%);
}

.infofilm__staff-img {
  max-width: 120px;
  max-height: 190px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: $border-radius__small;

  img {
    width: 120px;
    height: 190px;
  }
}

.infofilm__staff-title {
  text-align: center;
  margin-top: 10px;

  h4 {
    font-size: $font-size--normal;
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__regular;
    // border-bottom: $border-width + 1 solid fade($colors__grays, 40%);
  }
}

iframe {
  width: 100%;
  height: 450;
}
</style>
