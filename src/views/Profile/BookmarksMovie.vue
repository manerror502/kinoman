<template>
  <div class="row no-gutters your__movie">
    <section class="items">
      <Loader v-if="loading" />

      <div
        class="container-fluid"
        v-else
      >
        <div class="row">
          <div class="col">
            <section>
              <div>
                <transition-group
                  class="row justify-content-arround"
                  tag="ul"
                  name="transform-fade"
                  v-if="films.length"
                >
                  <FilmItemInfo
                    class="col-xl-4 col-md-6"
                    v-for="bookmark in films"
                    :key="bookmark.filmId"
                    :item-info="bookmark"
                  />
                </transition-group>

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

                <Loader v-if="lazyLoading" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <span
      class="more"
      ref="more"
    />
  </div>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'
import Search from '@/components/app/Search'

export default {
  name: 'YourMovie',
  data: () => ({
    loading: true,
    bookmarkFilms: [],
    films: [],

    arrIndex: 19,
    lazyLoading: false
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
  mounted () {
    this.lazyLoad()
  },
  methods: {
    async getFilmsInfo () {
      // Добавляем в массив
      // Для того чтобы не перегружать сервер запросами
      const films = this.bookmarkFilms.splice(0, this.arrIndex)

      // Получаем информацию для всех фтльмов
      for (const filmsId of films) {
        try {
          const film = await this.$store.dispatch('getInfoFilm', filmsId)
          this.films.push(film.data)
        } catch (e) {}
      }
    },
    async loadMore () {
      this.lazyLoading = true

      await this.getFilmsInfo()

      this.lazyLoading = false
    },
    async lazyLoad () {
      const options = {
        root: null,
        threshold: 0
      }

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (this.films.length > this.arrIndex - 1 && !this.lazyLoading) {
              this.loadMore()
            }

            observer.unobserve()
          }
        })
      }, options)

      const el = this.$refs.more
      observer.observe(el)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

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
