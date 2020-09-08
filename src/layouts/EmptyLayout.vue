<template>
  <section class="sign">
    <Loader
      style="width: 100%"
      v-if="loading"
    />

    <div
      v-else
      class="sign__row"
    >
      <div class="row justify-content-end align-items-center">
        <div class="col-lg-6 sign__right">
          <router-link
            tag="a"
            to="/"
            class="sign__logo"
          >
            <img
              class="img"
              src="@/assets/img/logo/logo.png"
              alt=""
              draggable="false"
            >
          </router-link>
          <div class="sign__text">
            <p>Минимум информации, максимум интереса!</p>
          </div>

          <div class="sign__animation">
            <div class="sign__film">
              <FilmItemInfo
                class="sing__item col-6"
                v-for="release in newRelease"
                :key="release.filmId"
                :item-info="release"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-flex">
          <div class="sign__dialog">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'

import messages from '@/utils/messages'

export default {
  name: 'EmptyLayout',
  data: () => ({
    newRelease: [],
    loading: true
  }),
  components: {
    FilmItemInfo
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    error (fbError) {
      this.$toast.error(messages[fbError.code] || 'Что-то пошло не так')
      console.log(fbError)
    }
  },
  async created () {
    // Получение новых релизов
    await this.getNewReleaseFilm()
    this.loading = false
  },
  methods: {
    async getNewReleaseFilm () {
      const releasesSettings = {
        rating: {
          from: '6',
          to: '10'
        },
        year: {
          from: '2010',
          to: '2020'
        },
        page: ['1', '2', '3', '4', '5']
      }
      try {
        this.newRelease = await this.$store.dispatch(
          'getReleasesArr',
          releasesSettings
        )
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.sign {
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.sign__row {
  width: 100%;
}

.sign__dialog {
  margin: auto;
  max-width: 600px;
  width: 100%;
  border-radius: $border-radius__small;
  padding-bottom: 20px;
}

.sign__right {
  @media (max-width: $breackpoints__md) {
    display: none;
  }
}

.sign__logo {
  display: flex;
  max-height: 300px;
  overflow: hidden;

  img {
    user-select: none;
    margin: auto;
    max-height: 300px;

    &:hover,
    &:focus,
    &:active {
      filter: contrast(80%);
    }
  }
}

.sign__text {
  text-align: center;
  user-select: none;

  p {
    font-family: $font-family__sans;
    line-height: $line-height--large;
    @include adaptiv-font($size--normal + 5, $size--normal);
  }
}

.sign__animation {
  position: relative;
  overflow: hidden;
  padding: 0 10px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
}

.sign__film {
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
  overflow: hidden;
  user-select: none;
  padding: 0 10px;
  position: relative;
}

.sing__item {
  animation: translate 100s linear infinite alternate;
}

@keyframes translate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-5000px);
  }
}

// стили компонентов

.sign__login {
  text-align: center;
  position: relative;

  h2 {
    padding: 0 10px;
    font-family: $font-family__sans;
    line-height: $line-height--large;
    text-align: center;
    margin-bottom: 20px;
    @include adaptiv-font($size--normal + 5, $size--small);
  }

  small {
    display: block;
    margin-top: 10px;
    font-size: $font-size--normal;
    transition: $transition-duration $transition-timing-function;
  }

  input {
    font-family: $font-family__sans;
    width: 90%;
    border: 0;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    padding: 14px 10px;
    outline: none;
    border-radius: $border-radius__large;
    transition: $transition-duration $transition-timing-function;
    @include adaptiv-font($size--normal, $size--small);

    &:focus {
      width: 95%;
    }
  }

  a {
    transition: $transition-duration $transition-timing-function;
    font-size: $font-size--normal - 5;
    text-align: center;
    text-decoration: underline;
    @include adaptiv-font($size--normal - 5, $size--small);

    &:hover,
    &:focus {
      outline: none;
    }
  }
}

.btn--login {
  font-family: $font-family__sans;
  font-size: $font-size--normal - 5;
  display: block;
  width: 100%;
  margin: 20px 0;
  text-align: center;
  padding: 14px 70px;
  outline: none;
  border-radius: $border-radius__large;
  transition: $transition-duration $transition-timing-function;
  @media (max-width: $breackpoints__sm) {
    padding: 14px 50px;
  }
}

.sign__wrap {
  margin: 20px;
}
</style>
