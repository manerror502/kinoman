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
                  Умные плейлисты 🔮
                </h3>
              </div>
            </div>

            <div class="row">
              <div class="col-9">
                <SmartPlaylists />
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
import SmartPlaylists from '@/components/Main/SmartPlaylists.vue'
// import InfoFilm from '@/components/app/InfoFilm.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Intro,
    NavBarFilms,
    SmartPlaylists
    // InfoFilm
  },
  data: () => ({
    loading: true
  }),
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

<style lang="less">
@import "@/assets/style/vars/vars.module";

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(300px);
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
