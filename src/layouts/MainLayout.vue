<template>
  <div
    class="page"
  >
    <Header />

    <Loader
      v-if="loading"
      style="min-height: 100vh"
    />

    <div v-else>
      <main
        class="row no-gutters"
      >
        <Intro />

        <section class="playlists">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <h3 class="playlists__title">
                  {{ pageTitle }}
                </h3>
              </div>
            </div>

            <div class="row">
              <div class="col-9">
                <router-view />
              </div>

              <aside class="col-3">
                <NavBarFilms />
              </aside>
            </div>
          </div>
        </section>
      </main>

      <transition name="modal-fade">
        <Modal
          v-if="modal"
          v-scroll-lock="modal"
        >
          <InfoFilm />
        </Modal>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from '@/components/app/Header.vue'
import Intro from '@/components/Main/Intro.vue'
import NavBarFilms from '@/components/Main/NavBarFilms.vue'
import InfoFilm from '@/components/app/InfoFilm.vue'

import randomIdArr from '@/utils/arrOperations'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Intro,
    NavBarFilms,
    Modal: () => import('@/components/app/Modal.vue'),
    InfoFilm
  },
  data: () => ({
    loading: true
  }),
  computed: {
    pageTitle () {
      return this.$route.meta.title || 'Ваше Кино'
    },
    modal () {
      const modalOpen = this.$store.state.app.modalInfoFilmOpen
      return modalOpen
    }
  },

  async created () {
    // Получение фильма в интро
    await this.getIntroFilm()
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
          'getReleasesArr',
          releasesSettings
        )

        const filmId = await randomIdArr(filmsArr.data.films).filmId
        const film = await this.$store.dispatch('getInfoFilm', filmId)

        if (film.images.backdrops.length) {
          await this.$store.dispatch('setIntroFilm', film)
          this.loading = false
        } else {
          await this.getIntroFilm()
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.2s ease;
}

.playlists {
  width: 100%;
  margin-top: 44px;
  animation: opacity-animate 0.2s 3s ease-in-out 1 forwards;
  opacity: 0;
}

.playlists__title {
  font-size: @font-size--large;
  font-family: @font-family__sans__black;
  color: @colors__grays--lighter;
  user-select: none;
  margin-bottom: 23px;
  border-bottom: @border-width solid fade(@colors__border, 40%);
}
</style>
