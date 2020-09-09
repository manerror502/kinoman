<template>
  <div
    class="page"
  >
    <transition name="fade">
      <Loader
        v-if="loading"
        style="min-height: 100vh"
      />

      <div
        v-else
        class="row no-gutters justify-content-end"
      >
        <aside
          class="navbar__container col-lg-2 "
        >
          <Navbar />
        </aside>

        <div class="col-lg-10 no-padding">
          <div class="row no-gutters">
            <div
              class="header__container col-lg-10 no-padding"
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
              <transition
                name="fade"
              >
                <router-view />
              </transition>
            </main>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/app/Header.vue'
import Navbar from '@/components/app/NavBar.vue'

import randomIdArr from '@/utils/randomIdArr'
// import messages from '@/utils/messages'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Navbar
  },
  data: () => ({
    loading: true
  }),
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  async mounted () {
    // Получение информации о пользователе
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
    // Получение фильма в интро
    await this.getIntroFilm()
    await this.getFilters()
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
      } catch (e) {
        console.log(e)
      }
    },
    async getFilters () {
      const filters = await this.$store.dispatch('getFiltersJSON')
      await this.$store.dispatch('setFilters', filters)
    }
    // async getCollections () {
    //   try {
    //     const collections = await this.$store.dispatch('getCollections')
    //     await this.$store.dispatch('setCollections', collections)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  },
  watch: {
    error (fbError) {
      // this.$toast.error(messages[fbError.code] || 'Что-то пошло не так')
      console.log(fbError)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.page {
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.w-100 {
  width: 100%;
}

.items {
  max-width: 100%;
  width: 100%;
  margin-top: 44px;
}

.items__title {
  @include adaptiv-font($size--large, $size--normal + 10);
  font-family: $font-family__sans;
  user-select: none;
  margin-bottom: 23px;
}

// lazyload
.more {
  display: block;
  height: 5px;
  opacity: 0;
}
</style>
