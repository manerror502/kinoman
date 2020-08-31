<template>
  <section class="searchpage">
    <div class="container-fluid">
      <div class="row">
        <input
          type="text"
          role="search"
          v-model="inputSearch"
          placeholder="Найдите свои любимые фильмы"
          @keyup="searchFilms"
          autofocus
          tabindex="0"
          class="searchpage__input"
        >

        <ul class="searchpage__info row justify-content-arround">
          <FilmItemInfo
            class="col-xl-4 col-lg-6"
            style="width: 100%;"
            v-for="film in search.films"
            :key="film.filmId"
            :item-info="film"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'

export default {
  name: 'SearchPage',
  data: () => ({
    inputSearch: '',
    search: {}
  }),
  components: { FilmItemInfo },
  methods: {
    async searchFilms () {
      this.search = await this.$store.dispatch('searchFilms', this.inputSearch)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.searchpage {
  margin-top: 70px;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  position: relative;
}

.searchpage__input {
  font-family: $font-family__sans;
  font-size: $font-size--normal + 10;
  width: 100%;
  border: 0;
  display: block;
  margin: 20px 0;
  text-align: left;
  padding: 14px 10px;
  outline: none;
  border-radius: $border-radius__large;
  transition: $transition-duration $transition-timing-function;
}

.searchpage__info {
  width: 100%;
  border-radius: $border-radius__large;

  &::-webkit-scrollbar {
    width: 0;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
