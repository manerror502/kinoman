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
      <div class="container-fluid">
        <div class="row justify-content-end align-items-center">
          <div class="col-lg-6">
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
          from: '2019',
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

<style lang="less">
@import "@/assets/style/vars/vars.module";

.sign {
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.sign__row {
  width: 100%;
}

.sign__dialog {
  margin: auto;
  max-width: 600px;
  width: 100%;
  background-color: @colors__blackGrays;
  border-radius: @border-radius__large;
  box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
    fade(@colors__black, 20%);
  padding-bottom: 20px;
}

.sign__logo {
  display: flex;

  img {
    user-select: none;
    margin: auto;

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
    font-family: @font-family__sans;
    color: @colors__grays;
    font-size: @font-size--normal + 5;
    line-height: @line-height--large;
  }
}

.sign__animation {
  position: relative;
  overflow: hidden;
  padding: 0 10px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(24, 24, 24, 1) 0%,
      rgba(24, 24, 24, 0) 31%,
      rgba(24, 24, 24, 0) 51%,
      rgba(24, 24, 24, 0) 70%,
      rgba(24, 24, 24, 1) 100%
    );
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
  text-align: left;
  position: relative;

  h2 {
    padding: 0 10px;
    font-family: @font-family__sans;
    color: @colors__grays;
    font-size: @font-size--normal + 5;
    line-height: @line-height--large;
    color: @colors__grays--lighter;
    text-align: left;
    margin-bottom: 20px;
    box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
      fade(@colors__black, 20%);
  }

  small {
    display: block;
    margin-top: 10px;
    color: @colors__red;
    font-size: @font-size--normal;
    transition: @transition-duration @transition-timing-function;
  }

  input {
    font-family: @font-family__sans;
    font-size: @font-size--normal;
    width: 90%;
    border: 0;
    background: @colors__blackPrimary;
    display: block;
    margin-top: 20px;
    text-align: left;
    border: @border-width + 1 solid @colors__primary;
    padding: 14px 10px;
    outline: none;
    color: @colors__white;
    border-radius: @border-radius__large;
    transition: @transition-duration @transition-timing-function;

    &:focus {
      width: 95%;
      border-color: @colors__green;
    }

    &.invalid {
      border: @border-width + 1 solid @colors__red;
    }
  }

  a {
    transition: @transition-duration @transition-timing-function;
    color: @colors__grays;
    font-size: @font-size--normal - 5;
    text-align: left;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: @colors__green;
      outline: none;
    }
  }
}

.sign__wrap {
  margin: 20px;
}
</style>
