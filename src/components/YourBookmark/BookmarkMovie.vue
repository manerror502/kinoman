<template>
  <section class="playlists">
    <Loader v-if="loading" />
    <div
      v-else
    >
      <ul
        class="row justify-content-arround"
        v-if="films.length"
      >
        <FilmItemInfo
          class="col-xl-4 col-lg-6"
          v-for="bookmark in films"
          :key="bookmark.filmId"
          :item-info="bookmark"
        />
      </ul>

      <div
        class="row"
        v-else
      >
        <div class="col d-flex justify-content-center">
          <div class="films__no">
            <div class="films__text">
              <p>У вас пока нет фильмов</p>
            </div>

            <Search />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'
import Search from '@/components/app/Search'

export default {
  name: 'HeartMovie',
  data: () => ({
    loading: true,
    bookmarkFilms: [],
    films: []
  }),
  components: {
    FilmItemInfo,
    Search
  },
  async created () {
    this.bookmarkFilms = await this.$store.dispatch('fetchBookmarkFilm')

    // Если включен параметр revers в настройках
    if (!this.$store.getters.info.settings.inTheBeginning) {
      this.bookmarkFilms.reverse()
    }
    await this.getFilmsInfo()

    this.loading = false
  },
  methods: {
    async getFilmsInfo () {
      // Добавляем в массив
      await this.bookmarkFilms.forEach(async filmId => {
        const film = await this.$store.dispatch('getInfoFilm', filmId)
        this.films.push(film.data)
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.films__no {
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 10px;
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.films__text {
  max-width: 100%;
  padding: 14px 10px;
  border-radius: $border-radius__large - 6;
  margin-bottom: 10px;

  p {
    font-size: $font-size--normal + 15;
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__bold;
    text-align: center;
  }
}
</style>
