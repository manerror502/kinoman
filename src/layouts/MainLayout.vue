<template>
  <div
    class="page"
  >
    <Loader
      v-if="loading"
      style="min-height: 100vh"
    />

    <div
      v-else
      class="row no-gutters justify-content-end"
    >
      <aside
        style="position: fixed"
        class="navbar__container col-2 "
      >
        <Navbar />
      </aside>

      <div class="col-10 no-padding">
        <div class="row no-gutters">
          <div
            style="position: fixed"
            class="header__container col-10 no-padding"
          >
            <Header />
          </div>
        </div>

        <div
          class="row no-gutters"
        >
          <main
            class="row no-gutters w-100"
          >
            <router-view />
          </main>
        </div>
      </div>
    </div>

    <Modal v-if="modal" />
  </div>
</template>

<script>
import Header from '@/components/app/Header.vue'
import Navbar from '@/components/app/NavBar.vue'
import Modal from '@/components/app/Modal.vue'

import randomIdArr from '@/utils/randomIdArr'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Navbar,
    Modal
  },
  data: () => ({
    loading: true
  }),
  computed: {
    modal () {
      const modalOpen = this.$store.state.app.modalInfoFilmOpen
      return modalOpen
    }
  },
  async mounted () {
    // Получение информации о пользователе
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
    // Получение фильма в интро
    await this.getIntroFilm()
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
          'getReleasesArr',
          releasesSettings
        )

        const filmId = await randomIdArr(filmsArr).filmId
        const film = await this.$store.dispatch('getInfoFilm', filmId)

        if (film.images.backdrops.length) {
          await this.$store.dispatch('setIntroFilm', film)
        } else {
          await this.getIntroFilm()
        }
      } catch (e) {
        console.log(e)
      }
    }
    // async getCollections () {
    //   try {
    //     const collections = await this.$store.dispatch('getCollections')
    //     await this.$store.dispatch('setCollections', collections)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease;
}

.w-100 {
  width: 100%;
}

.playlists {
  width: 100%;
  margin-top: 44px;
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
