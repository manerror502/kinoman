<template>
  <li>
    <div
      class="filmitem__link"
    >
      <router-link
        tag="a"
        :to="'/film/' + itemInfo.filmId"
        class="filmitem"
        :style="{backgroundImage: 'url(' + itemInfo.posterUrl + ')'}"
      >
        <div
          class="filmitem__content"
          @mousemove="closeMenu"
        >
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

          <div
            class="filmitem__rating"
            :class="rating"
          >
            <h5>
              {{ itemInfo.rating }}
            </h5>
          </div>
        </div>
      </router-link>

      <div class="filmitem__menu">
        <button
          @click="targetMenu"
          class="filmitem__menu-button"
          tabindex="-1"
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

        <transition name="slide-fade">
          <MenuFilm
            v-if="menu"
            @closeMenu="closeMenu"
            :menu-info="itemInfo"
          />
        </transition>
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
  mounted () {},

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
      this.menu = false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.filmitem__link {
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  border-radius: $border-radius__small;
  overflow: hidden;
  transition: $transition-duration $transition-timing-function;
  padding: 0 1px;
  box-shadow: $shadows__coords-x $shadows__coords-y $shadows__size + 3
    fade-out(#000, 0.7%);

  &::after {
    content: '';
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.8) 30%,
      rgba(9, 9, 9, 0) 100%
    );
  }

  &:hover {
    box-shadow: $shadows__coords-x $shadows__coords-y $shadows__size + 5
      fade-out(#000, 0.5%);
  }
}

.filmitem {
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
  user-select: none;
  border-radius: $border-radius__small - 5;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  transition: $transition-duration $transition-timing-function;

  &:hover,
  &:focus,
  &:active {
    background-color: fade-out(#fff, 0.9%);
    cursor: pointer;
  }
}

.filmitem__img {
  max-width: 150px;
  max-height: 230px;
  margin-right: 10px;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
}

.filmitem__content {
  width: 100%;
  padding: 30px 10px;
  overflow: hidden;
  z-index: 3;
  padding-right: 20%;

  @media (max-width: $breackpoints__xs) {
    padding: 10px;
  }
}

.filmitem__title {
  margin-bottom: 20px;
  display: flex;

  h3 {
    @include adaptiv-font($size--normal + 5, $size--small + 5);
    font-family: $font-family__sans__black;
    font-weight: 900;
    line-height: $line-height--small + 7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @media (max-width: $breackpoints__xs) {
      line-height: $line-height--small;
    }
  }

  @media (max-width: $breackpoints__xs) {
    max-width: 300px;
  }
}

.filmitem__ul {
  li {
    @include adaptiv-font($size--normal, $size--small);
    line-height: $line-height--normal;
    font-weight: 400;
    margin-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:first-child {
      font-weight: 300;
      font-family: $font-family__sans__light;
    }

    @media (max-width: $breackpoints__xs) {
      line-height: $line-height--small;
    }
  }
}

.filmitem__rating {
  position: absolute;
  right: 10px;
  bottom: 20px;

  h5 {
    @include adaptiv-font($size--large - 10, $size--normal);
    line-height: $line-height--normal;
    font-weight: 400;
  }
}

.filmitem__menu-button {
  padding: 5px 0;
  @include adaptiv-image(60, 40);
  border-radius: $border-radius__small;
  transition: $transition-duration $transition-timing-function;

  &:hover,
  &:focus,
  &:active {
    background-color: fade-out(#fff, 0.9%);
  }
}

.filmitem__menu {
  position: absolute;
  right: 5px;
  top: 10px;
  z-index: 4;
}
</style>
