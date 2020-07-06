<template>
  <div>
    <Header />

    <div v-if="loading" />

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
    </div>
  </div>
</template>

<script>
import Header from '@/components/app/Header.vue'
import Intro from '@/components/Main/Intro.vue'
import NavBarFilms from '@/components/Main/NavBarFilms.vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Intro,
    NavBarFilms
  },
  data: () => ({
    loading: true
  }),
  computed: {
    pageTitle () {
      return this.$route.meta.title || 'Ваше Кино'
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
        const filmId = await this.$store.dispatch(
          'getReleasesArr',
          releasesSettings
        )
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
