<template>
  <section class="w-100">
    <Loader
      v-if="loading"
      class="w-100"
      style="min-height: 100vh"
    />
    <div
      v-else
      class="row no-gutters w-100"
    >
      <Intro />

      <div
        class=" blur__img"
        :style="{backgroundImage: 'url(' + $store.state.intro.introFilm.data.posterUrl + ')'}"
      />

      <section
        class="items"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <h3 class="items__title time">
                {{ time }}<span v-if="userName">, {{ userName }}</span>
              </h3>
            </div>
          </div>

          <!-- <div class="row">
          <div class="col-lg-12">
            <Playlists />
          </div>
        </div> -->

          <div class="row">
            <div class="col">
              <h3 class="items__title">
                Новые релизы
              </h3>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <NewRelease />
            </div>
          </div>
        </div>
      </section>

      <section class="items">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <h3 class="items__title">
                Специально для вас
              </h3>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <Recommends />
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import NewRelease from '@/components/Main/NewRelease'
// import Playlists from '@/components/Main/Playlists'
import Intro from '@/components/Main/Intro'
import Recommends from '@/components/app/Recommends'
// import Modal from '@/components/app/Modal.vue'

import randomIdArr from '@/utils/randomIdArr'

export default {
  name: 'Home',
  data: () => ({
    loading: true
  }),
  components: {
    NewRelease,
    Intro,
    // Modal,
    Recommends
    // Playlists
  },
  computed: {
    time () {
      const currentDate = new Date().getHours()

      if (currentDate <= 6) {
        return 'Доброй ночи'
      } else if (currentDate <= 11) {
        return 'Доброй утро'
      } else if (currentDate <= 16) {
        return 'Добрый день'
      } else {
        return 'Добрый вечер'
      }
    },
    userName () {
      return this.$store.getters.info.name
    }
  },

  async created () {
    // Получение фильма в интро
    if (this.$store.state.intro.introFilm === undefined) {
      await this.getIntroFilm()
    }
    this.loading = false
  },
  methods: {
    async getIntroFilm () {
      const releasesSettings = {
        rating: {
          from: '6',
          to: '10'
        },
        year: {
          from: '2018',
          to: '2020'
        },
        page: ['1', '2', '3', '4', '5']
      }
      try {
        const filmsArr = await this.$store.dispatch(
          'getReleasesArrIntro',
          releasesSettings
        )

        const filmId = await randomIdArr(filmsArr).filmId
        const film = await this.$store.dispatch('getInfoFilm', filmId)

        if (film.images.backdrops.length) {
          await this.$store.dispatch('setIntroFilm', film)
        } else {
          await this.getIntroFilm()
        }
      } catch (e) {}
    },
    modalClose () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.modal__dialog {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  border-radius: $border-radius__small;
  margin: auto;
}

.modal__header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.modal__img {
  max-width: 140px;
  width: 100%;
}

.modal__text {
  p {
    text-align: center;
    font-family: $font-family__sans;
    font-size: $font-size--normal + 5;
    @include adaptiv-font($size--normal + 5, $size--small + 5);
  }
}

.modal__button {
  display: flex;
  margin-top: 20px;
  button {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    border-radius: $buttons__border-radius;
    padding: 10px 50px;
    margin: 0 auto;
    transition: $transition-duration $transition-timing-function;
    text-align: center;
    font-family: $font-family__sans;
    @include adaptiv-font($size--normal + 5, $size--small + 5);
  }
}

.modal__advice {
  font-family: $font-family__sans;
  line-height: $line-height--small;
  @include adaptiv-font($size--normal, $size--small);
  font-weight: $font-weight__sans__light;
}
</style>
