<template>
  <div
    class="infofilm"
  >
    <div
      class="infofilm__img"
    >
      <div class="hidden">
        <div
          class="infofilm__img-bg"
          :style="{backgroundImage: 'url(' + introFilm.images.backdrops[0].url + ')'}"
        />
      </div>
      <img
        class="img"
        :src="introFilm.data.posterUrl"
        alt=""
      >
    </div>

    <div class="infofilm__title">
      <h3>{{ introFilm.data.nameRu }}</h3>

      <button><span>❤</span>  Нравиться </button>
    </div>

    <div class="infofilm__descr">
      <ul>
        <li>
          Страна:
          <span
            v-for="countries in introFilm.data.countries"
            :key="countries.country"
          >/ {{ countries.country }}
          </span>
        </li>
        <li>
          Год:
          <span>{{ introFilm.data.year }}</span>
        </li>
        <li v-if="introFilm.data.premiereWorld !== null">
          Премьера в мире: <span>{{ introFilm.data.premiereWorld }}</span>
          (год / месяц / день)
        </li>
        <li>
          Жанр:
          <span
            v-for="genre in introFilm.data.genres"
            :key="genre.genre"
          >/ {{ genre.genre }}
          </span>
        </li>
        <li v-if="introFilm.data.slogan !== null">
          Слоган:
          <span>{{ introFilm.data.slogan }}</span>
        </li>
        <li v-if="introFilm.data.filmLength !== null">
          Длина:
          <span>{{ introFilm.data.filmLength }}</span>
        </li>
        <li v-if="introFilm.data.ratingAgeLimits !== null">
          Возрастное ограничение:
          <span>{{ introFilm.data.ratingAgeLimits }}+</span>
        </li>
        <li>
          Рейтинг:
          <span class="green">{{ introFilm.rating.rating }}</span>
        </li>
      </ul>

      <p>
        {{ introFilm.data.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoFilm',
  data: () => ({}),
  computed: {
    ...mapGetters(['introFilm'])
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.hidden {
  overflow: hidden;
  height: 100%;
}

.infofilm {
  position: fixed;
  top: 0;
  z-index: 4;
  height: 100vh;
  background-color: rgb(48, 62, 79);
  border-left: @border-width + 1 solid fade(@colors__grays, 20%);
  transition: 0.2s ease;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;

    &-track {
      background: #1f1f1f00;
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

  img {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate3d(-50%, 0%, 0);
    z-index: 3;
    width: 150px;
    height: 200px;
    box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size + 6
      fade(@colors__black, 35%);
  }
}

.infofilm__img-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(10px);
  overflow: hidden;
}

.infofilm__title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 10px;
  margin-top: 70px;
  padding-bottom: 10px;
  border-bottom: @border-width solid fade(@colors__grays, 30%);

  h3 {
    font-size: @font-size--normal + 5;
    // line-height: @line-height--normal;
    font-family: "Product Sans Medium";
    font-weight: 500;
    color: @colors__grays--lighter;
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
