<template>
  <div class="sign">
    <div class="sign__row">
      <div class="container-fluid">
        <div class="row justify-content-end align-items-center">
          <div class="col-lg-6">
            <router-link
              tag="a"
              to="/"
              class="sign__logo"
            >
              <img
                src="@/assets/img/logo/logo.png"
                alt=""
                draggable="false"
              >
            </router-link>
            <div class="sign__text">
              <p>Минимум информации, максимум интереса!</p>
            </div>

            <div class="sign__film">
              <FilmItemInfo
                class="sing__item col-6"
                v-for="release in newRelease"
                :key="release.filmId"
                :item-info="release"
              />
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
  </div>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'

// import messages from '@/utils/messages'

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
    // error () {
    //   return this.$store.getters.error
    // }
  },
  watch: {
    // error (fbError) {
    //   this.$toast.error(messages[fbError.code] || 'Что-то пошло не так')
    //   console.log(fbError)
    // }
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
  width: 100%;
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
  width: 500px;
  padding: 40px;
  background-color: rgba(54, 53, 77, 0.88);
  border-radius: 30px;
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

.sign__film {
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
  overflow: hidden;
  user-select: none;
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
</style>
