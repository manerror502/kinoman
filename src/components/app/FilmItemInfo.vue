<template>
  <li class="">
    <div
      class="filmitem"
    >
      <router-link
        tag="a"
        :to="'/film/' + itemInfo.filmId"
        class="filmitem__link"
        :style="{backgroundImage: 'url(' + itemInfo.posterUrl + ')'}"
      >
        <div
          class="filmitem__content"
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
      </div>
    </div>
  </li>
</template>

<script>
import filterCountriesArr from '@/utils/filterCountries.js'
import filterGenresArr from '@/utils/filterGenres.js'

export default {
  name: 'FilmItemInfo',
  data: () => ({}),
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

  methods: {
    async targetMenu () {
      const filmInfo = this.itemInfo
      await this.$store.dispatch('setMenuFilm', filmInfo)
      await this.$store.dispatch('targetMenuFilm')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.filmitem {
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

.filmitem__link {
  width: 100%;
  overflow: hidden;
  display: flex;
  user-select: none;
  background-size: cover;
  background-position: 0px -50px;
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
    object-fit: contain;
    object-position: top;
  }
}

.filmitem__content {
  width: 100%;
  padding: 30px 10px;
  overflow: hidden;
  z-index: 3;
  padding-right: 20%;

  @media (max-width: $breackpoints__xs) {
    padding: 20px 10px;
  }
}

.filmitem__title {
  margin-bottom: 20px;
  display: flex;

  h3 {
    @include adaptiv-font($size--normal + 5, $size--small + 7);
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__black;
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
    font-weight: $font-weight__sans__regular;
    margin-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:first-child {
      font-weight: $font-weight__sans__light;
      font-family: $font-family__sans;
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
    font-weight: $font-weight__sans__regular;
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
