<template>
  <section
    class="infofilm"
  >
    <Loader
      v-if="loading"
    />

    <div v-else>
      <FilmBanner :banner-info="infoFilm" />

      <div class="infofilm__content">
        <div class="row">
          <div
            class="col-6"
            v-if="trailerFilm.trailers"
          >
            <div

              class="infofilm__trailer"
            >
              <youtube
                player-width="100%"
                player-height="450"
                :video-id="videoId"
              />
            </div>
          </div>

          <div class="col-6">
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
                Рейтинг:
                <span :class="rating">{{ infoFilm.rating.rating || 'Нет информации' }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="infofilm__wrap">
          <div class="infofilm__descr">
            <div class="infofilm__heading">
              <h2>Описание</h2>
            </div>

            <p>
              {{ infoFilm.data.description }}
            </p>
          </div>

          <div class="row infofilm__staff">
            <div class="infofilm__heading">
              <h2>Актёры</h2>
            </div>

            <div
              class="col-2"
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
    loading: true
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
        // получаем id для ютуба
        this.videoId = this.$youtube.getIdFromURL(
          this.trailerFilm.trailers[0].url
        )
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

<style lang="less" >
@import "@/assets/style/vars/vars.module";

.infofilm {
  position: relative;
  z-index: 10;
  padding-bottom: 20px;
  width: 100%;
  min-height: 100vh;
  // border: @border-width + 1 solid fade(@colors__grays, 20%);
  border-radius: @border-radius__small;
  transition: 0.2s ease;
}

.infofilm__content {
  position: relative;
  top: -30px;
  z-index: 2;
  padding: 30px 20px;
  background-color: @colors__body;
  border-radius: @border-radius__big + 20;
}

.infofilm__trailer {
  border-bottom: @border-width solid fade(@colors__grays, 30%);
  padding-bottom: 20px;
}

.infofilm__attributes {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  max-width: 100%;
  height: 100%;
  font-size: @font-size--normal;
  border-bottom: @border-width solid fade(@colors__grays, 30%);

  li {
    font-family: "Product Sans Light";
    font-weight: 300;
    color: @colors__grays;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      font-family: @font-family__sans;
      font-weight: 400;
      color: @colors__grays--lighter;
    }

    &:last-child {
      font-size: @font-size--normal + 10;
      font-weight: 600;
      color: #f60;

      span {
        &.green {
          color: @colors__green;
        }

        &.yellow {
          color: @colors__yellow;
        }

        &.red {
          color: @colors__red;
        }
      }
    }
  }
}

.infofilm__wrap {
  padding-top: 0;
}

.infofilm__descr {
  p {
    padding: 10px 0;
    font-size: @font-size--normal;
    font-family: @font-family__sans;
    font-weight: 400;
    line-height: @line-height--small + 5;
    border-bottom: @border-width solid fade(@colors__grays, 30%);
  }
}

.infofilm__heading {
  width: 100%;
  padding-bottom: 10px;

  h2 {
    color: @colors__grays;
    font-size: @font-size--normal + 10;
    font-family: @font-family__sans__black;
  }
}

.infofilm__staff {
  margin: 0 auto;
}

.infofilm__staff-item {
  display: flex;
  max-height: 265px;
  height: 100%;
  flex-direction: column;
  border: @border-width solid fade(@colors__grays, 10%);
  border-radius: @border-radius__small;
  overflow: hidden;
  margin: 10px;
  margin-left: 0;
  padding: 10px;
  background-color: fade(#fff, 10%);
  box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
    fade(@colors__black, 5%);
}

.infofilm__staff-img {
  max-width: 120px;
  max-height: 190px;
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 120px;
    height: 100%;
  }
}

.infofilm__staff-title {
  text-align: center;
  margin-top: 10px;

  h4,
  h5 {
    font-size: @font-size--normal;
    font-family: @font-family__sans;
    font-weight: @font-weight__sans__bold;
    // border-bottom: @border-width + 1 solid fade(@colors__grays, 40%);
  }

  h5 {
    font-weight: @font-weight__sans__regular;
    border-bottom: 0;
  }
}
</style>
