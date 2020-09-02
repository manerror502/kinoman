<template>
  <div class="recommends__no-input search ">
    <input
      type="text"
      role="search"
      v-model="inputSearch"
      placeholder="Найдите свои любимые фильмы"
      @keyup="searchFilms"
    >

    <div class="search__info">
      <FilmItemInfo
        style="width: 100%"
        v-for="film in search.films"
        :key="film.filmId"
        :item-info="film"
      />
    </div>
  </div>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'

export default {
  name: 'Search',
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

.recommends__no-input {
  width: 100%;
  padding: 0 10px;
  margin-bottom: 500px;
  position: relative;

  input {
    font-family: $font-family__sans;
    @include adaptiv-font($size--normal + 10, $size--normal);
    width: 100%;
    border: 0;
    display: block;
    margin: 20px 0;
    text-align: left;
    padding: 14px 10px;
    outline: none;
    border-radius: $border-radius__large;
    transition: $transition-duration $transition-timing-function;
    animation: color 5s linear infinite alternate;
  }
}

.search__info {
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0px 30px;
  border-radius: $border-radius__large;

  &::-webkit-scrollbar {
    width: 0;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
