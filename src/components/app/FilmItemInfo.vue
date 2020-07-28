<template>
  <li>
    <div class="filmitem__link">
      <router-link
        tag="a"
        :to="'/film/' + itemInfo.filmId"
        class="filmitem"
        :style="{backgroundImage: 'url(' + itemInfo.posterUrl + ')'}"
      >
        <div class="filmitem__content">
          <div class="filmitem__text">
            <div class="filmitem__title">
              <h3>{{ itemInfo.nameRu }}</h3>
            </div>
            <ul class="filmitem__ul">
              <li>
                {{ itemInfo.releaseDate || itemInfo.year }}
              </li>
              <li v-if="itemInfo.countries">
                {{ filterGenres }}
              </li>
              <li v-if="itemInfo.genres">
                {{ filterCountries }}
              </li>
              <li v-if="itemInfo.duration">
                {{ itemInfo.duration }} минут
              </li>
            </ul>
          </div>

          <div class="filmitem__rating">
            <h5 :class="rating">
              {{ itemInfo.rating }}
            </h5>
          </div>
        </div>
      </router-link>

      <div class="filmitem__menu">
        <button
          @click="targetMenu"
          class="filmitem__menu-button"
        >
          <svg viewBox="0 0 515.555 515.555">
            <path
              fill="currentColor"
              d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
            /><path
              fill="currentColor"
              d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
            /><path
              fill="currentColor"
              d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
            />
          </svg>
        </button>

        <MenuFilm
          v-if="menu"
          @closeMenu="closeMenu"
        />
      </div>
    </div>
  </li>
</template>

<script>
import MenuFilm from '@/components/app/MenuFilm.vue'

import filterCountriesArr from '@/utils/filterCountries.js'
import filterGenresArr from '@/utils/filterGenres.js'

export default {
  name: 'FilmItemInfo',
  data: () => ({
    menu: false
  }),
  components: {
    MenuFilm
  },
  props: {
    itemInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    rating () {
      if (this.itemInfo.rating >= 6.5) {
        return 'green'
      } else if (this.itemInfo.rating >= 4.1) {
        return 'yellow'
      } else {
        return 'red'
      }
    },
    filterGenres () {
      const genres = this.itemInfo.genres
      return filterGenresArr(genres)
    },
    filterCountries () {
      const countries = this.itemInfo.countries
      return filterCountriesArr(countries)
    }
  },
  created () {
    this.getFilmInfo()
  },

  methods: {
    getFilmInfo () {
      try {
      } catch (e) {
        console.log(e)
      }
    },
    targetMenu () {
      this.menu = !this.menu
    },
    closeMenu () {
      console.log('dddd')
      this.menu = false
    }
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.filmitem__link {
  position: relative;
  border: @border-width solid fade(@colors__green, 0);
  margin-bottom: 20px;
  border-radius: @border-radius__small;
  overflow: hidden;
  transition: @transition-duration @transition-timing-function;

  &:hover,
  &:focus,
  &:active {
    border: @border-width solid @colors__green;
  }
}

.filmitem {
  width: 100%;
  background-color: @colors__blackPrimary;
  overflow: hidden;
  display: flex;
  position: relative;
  user-select: none;
  border-radius: @border-radius__small - 5;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  transition: @transition-duration @transition-timing-function;

  &::after {
    content: "";
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(9, 9, 9, 0) 100%
    );
  }

  &:hover,
  &:focus,
  &:active {
    background-color: fade(#fff, 10%);
    color: @colors__green;
    cursor: pointer;
  }
}

.filmitem__img {
  max-width: 150px;
  max-height: 230px;
  margin-right: 10px;

  img {
    object-fit: cover;
    object-position: center;
  }
}

.filmitem__content {
  width: 100%;
  padding: 10px;
  overflow: hidden;
  z-index: 3;
  padding-right: 20%;
}

.filmitem__title {
  margin-bottom: 20px;
  display: flex;

  h3 {
    font-size: @font-size--normal + 5;
    font-family: @font-family__sans__black;
    font-weight: 900;
    line-height: @line-height--small + 7;
    color: @colors__grays--lighter;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.filmitem__ul {
  li {
    font-size: @font-size--normal;
    line-height: @line-height--normal;
    font-weight: 400;
    color: @colors__grays;
    margin-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:first-child {
      font-weight: 300;
      font-family: @font-family__sans__light;
    }
  }
}

.filmitem__rating {
  position: absolute;
  right: 10px;
  bottom: 20px;

  h5 {
    font-size: @font-size--large - 10;
    line-height: @line-height--normal;
    font-weight: 400;
    color: @colors__green;

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

.filmitem__menu-button {
  padding: 5px 0;
  width: 60px;
  color: @colors__grays;
  border-radius: @border-radius__small;
  transition: @transition-duration @transition-timing-function;

  &:hover,
  &:focus,
  &:active {
    background-color: fade(#fff, 10%);
    color: @colors__green;
  }
}

.filmitem__menu {
  position: absolute;
  right: 0px;
  top: 10px;
  z-index: 4;
}
</style>
