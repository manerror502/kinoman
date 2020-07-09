<template>
  <div
    class="infofilm"
  >
    <div
      class="infofilm__img"
    >
      <div class="infofilm__img-wrap">
        <div
          class="infofilm__img-bg"
          :style="{backgroundImage: 'url(' + infoFilm.images.backdrops[0].url + ')'}"
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
    </div>

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

      <p>
        {{ infoFilm.data.description }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InfoFilm',
  data: () => ({
    infoFilm: null
  }),
  created () {
    this.getIntroFilm()
  },
  methods: {
    getIntroFilm () {
      this.infoFilm = this.$store.state.infoFilm.infoFilm
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
  margin: 0 30px;
  margin-top: 80px;
  padding-bottom: 10px;
  border-bottom: @border-width solid fade(@colors__grays, 30%);

  h3 {
    font-size: @font-size--normal + 5;
    // line-height: @line-height--normal;
    font-family: "Product Sans Medium";
    font-weight: 500;
    color: @colors__grays--lighter;
    margin-bottom: 10px;
  }

  button {
    display: inline-block;
    background-color: @colors__grays;
    max-width: 300px;
    margin: 0 auto;
    font-size: @font-size--normal;
    font-family: @font-family__sans;
    font-weight: 400;
    border-radius: @buttons__border-radius;
    padding: 5px 30px;
    transition: @transition-duration @transition-timing-function;
    box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
      fade(@colors__black, 10%);

    span {
      color: @colors__red;
      transition: @transition-duration @transition-timing-function;
    }

    &:hover,
    &:focus,
    &:active {
      color: @colors__white;
      background-color: @colors__red;

      span {
        color: @colors__green;
      }
    }
  }
}

.infofilm__descr {
  padding: 10px;
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
    max-width: 100%;
    font-size: @font-size__coefficient--small;
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
    padding-top: 10px;
    font-size: @font-size__coefficient--normal + 20px;
    font-family: @font-family__sans;
    font-weight: 400;
    line-height: @line-height--small;
  }
}
</style>
