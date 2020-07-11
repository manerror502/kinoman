<template>
  <section
    class="infofilm"
  >
    <div
      class="infofilm__img"
    >
      <div class="infofilm__img-wrap">
        <div
          class="infofilm__img-bg"
          :style="{backgroundImage: 'url(' + infoFilm.data.posterUrl + ')'}"
        />
      </div>
      <div class="infofilm__img-preview">
        <img
          class="img"
          :src="infoFilm.data.posterUrl"
          alt=""
        >
      </div>
    </div>

    <div class="infofilm__title">
      <h3>{{ infoFilm.data.nameRu }}</h3>

      <button><span>❤</span>  Нравиться </button>

      <a
        target="_blank"
        v-if="trailerFilm.trailers"
        :href="trailerFilm.trailers[0].url"
        class="btn--trailer"
      > Смотерть трейлер </a>
    </div>

    <div class="infofilm__wrap">
      <div class="infofilm__descr">
        <ul>
          <li>
            Страна:
            <span
              v-for="countries in infoFilm.data.countries"
              :key="countries.country"
            >/ {{ countries.country }}
            </span>
          </li>
          <li>
            Год:
            <span>{{ infoFilm.data.year }}</span>
          </li>
          <li v-if="infoFilm.data.premiereWorld !== null">
            Премьера в мире: <span>{{ infoFilm.data.premiereWorld }}</span>
            (год / месяц / день)
          </li>
          <li>
            Жанр:
            <span
              v-for="genre in infoFilm.data.genres"
              :key="genre.genre"
            >/ {{ genre.genre }}
            </span>
          </li>

          <li v-if="infoFilm.data.slogan !== null">
            Слоган:
            <span>{{ infoFilm.data.slogan }}</span>
          </li>
          <li v-if="infoFilm.data.filmLength !== null">
            Длина:
            <span>{{ infoFilm.data.filmLength }}</span>
          </li>
          <li v-if="infoFilm.data.ratingAgeLimits !== null">
            Возрастное ограничение:
            <span>{{ infoFilm.data.ratingAgeLimits }}+</span>
          </li>
          <li>
            Рейтинг:
            <span class="green">{{ infoFilm.rating.rating }}</span>
          </li>
        </ul>

        <div class="infofilm__heading">
          <h2>Описание</h2>
        </div>

        <p>
          {{ infoFilm.data.description }}
        </p>
      </div>

      <div class="row infofilm__staff">
        <div class="col-12">
          <div class="infofilm__heading">
            <h2>Актёры</h2>
          </div>
        </div>

        <div
          class="col-4"
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
  </section>
</template>

<script>
export default {
  name: 'InfoFilm',
  data: () => ({
    infoFilm: {},
    trailerFilm: {},
    staffFilm: [],
    loading: true
  }),
  created () {
    // Получем фильм
    this.getInfoFilm()
  },
  methods: {
    async getInfoFilm () {
      try {
        this.infoFilm = await this.$store.state.infoFilm.infoFilm
      } catch (e) {
        console.log(e)
      }
      const filmId = this.infoFilm.data.filmId

      // Получаем трейлер фильма
      await this.getTrailerFilm(filmId)

      // Получаем персонал фильма
      await this.getStaffFilm(filmId)

      this.loading = false
    },

    async getTrailerFilm (filmId) {
      this.trailerFilm = await this.$store.dispatch('getTrailerFilm', filmId)
    },
    async getStaffFilm (filmId) {
      const staff = await this.$store.dispatch('getStaffFilm', filmId)
      await this.filterStaff(staff)
    },
    filterStaff (arr) {
      arr.forEach(element => {
        if (element.professionKey === 'ACTOR' && this.staffFilm.length < 6) {
          this.staffFilm.push(element)
        }
      })
    }
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.infofilm__img-wrap {
  overflow: hidden;
  height: 100%;
}

.infofilm {
  position: relative;
  z-index: 10;
  margin: auto;
  padding-bottom: 20px;
  max-width: 700px;
  width: 100%;
  height: 100%;
  background-color: rgb(48, 62, 79);
  // border: @border-width + 1 solid fade(@colors__grays, 20%);
  border-radius: @border-radius__small;
  transition: 0.2s ease;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;

    &-track {
      background: rgb(68, 88, 112);
    }

    &-thumb {
      background: rgb(31, 31, 31);
      border-radius: @border-radius__large;
    }
  }
}

.infofilm__img {
  height: 20%;
  position: relative;
  z-index: 2;
}

.infofilm__img-preview {
  width: 150px;
  height: 200px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate3d(-50%, 0%, 0);
  z-index: 3;
  overflow: hidden;
  box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size + 6
    fade(@colors__black, 35%);
}

.infofilm__img-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(50px);
  overflow: hidden;
}

.infofilm__title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 10px;
  margin-top: 80px;
  padding-bottom: 10px;
  border-bottom: @border-width solid fade(@colors__grays, 30%);

  h3 {
    font-size: @font-size--normal + 5;
    // line-height: @line-height--normal;
    font-family: "Product Sans Medium";
    font-weight: 500;
    color: @colors__grays--lighter;
    margin: 0 30px;
    margin-bottom: 10px;
  }

  button,
  .btn--trailer {
    background-color: fade(@colors__primary, 80%);
    max-width: 300px;
    margin: 10px auto;
    color: fade(@colors__grays--lighter, 70%);
    font-size: @font-size--normal;
    font-family: @font-family__sans;
    font-weight: 400;
    border-radius: @buttons__border-radius + 30px;
    padding: 5px 30px;
    transition: @transition-duration @transition-timing-function;
    box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
      fade(@colors__black, 10%);

    &:hover,
    &:focus,
    &:active {
      color: @colors__white;
      background-color: fade(@colors__primary, 100%);
    }
  }

  .btn--trailer {
    border-radius: @buttons__border-radius;
    background-color: fade(@colors__primary2, 60%);

    &:hover,
    &:focus,
    &:active {
      background-color: fade(@colors__primary2, 100%);
    }
  }
}

.infofilm__wrap {
  padding: 10px;
}

.infofilm__descr {
  ul {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
    max-width: 100%;
    font-size: @font-size--normal;
    border-bottom: @border-width solid fade(@colors__grays, 30%);
  }

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
      font-size: @font-size--normal;
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

  p {
    padding: 10px 0;
    font-size: @font-size--normal;
    font-family: @font-family__sans;
    font-weight: 400;
    line-height: @line-height--small;
    border-bottom: @border-width solid fade(@colors__grays, 30%);
  }
}

.infofilm__heading {
  border-bottom: @border-width solid fade(@colors__grays, 30%);

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
  max-height: 294px;
  height: 100%;
  flex-direction: column;
  border: @border-width solid fade(@colors__grays, 10%);
  border-radius: @border-radius__small;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  background-color: fade(#fff, 10%);
  box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
    fade(@colors__black, 20%);
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
