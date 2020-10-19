<template>
  <section
    class="chart"
  >
    <Loader v-if="loading" />
    <div
      v-else
      class="container-fluid"
    >
      <div class="row">
        <div class="col">
          <h3 class="chart__title">
            Топ 1 в чарте
          </h3>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div
            class="chart__top"
          >
            <div class="chart__top-film film">
              <FilmItemInfo
                class="col-12"
                :key="charts.films[0].filmId"
                :item-info="charts.films[0]"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h3 class="chart__title">
            Остальное
          </h3>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <transition-group
            class="row justify-content-arround "
            tag="ul"
            name="transform-fade"
          >
            <FilmItemInfo
              class="col-xl-4 col-md-6"
              v-for="chart in charts.films"
              :key="chart.filmId"
              :item-info="chart"
            />
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Chart',
  data: () => ({
    charts: {},
    loading: true
  }),
  computed: {
    chartsLS () {
      return JSON.parse(localStorage.getItem('charts'))
    }
  },
  async created () {
    this.$store.state.app.loading = true
    if (this.chartsLS) {
      this.getChartFilmsLS()
      this.loading = false
    }

    await this.getChartFilms()
    this.$store.state.app.loading = false
    this.loading = false
  },
  methods: {
    getChartFilmsLS () {
      // Получение фильмов из LS
      if (!this.chartsLS) {
        return
      }

      this.charts = this.chartsLS
    },
    setChartFilmssLS () {
      // Отправляем информацию о фильмах в LS
      const charts = JSON.stringify(this.charts)
      localStorage.setItem('charts', charts)
    },

    async getChartFilms () {
      try {
        this.charts = await this.$store.dispatch('getChartFilms')
        this.setChartFilmssLS()
      } catch (e) {
        this.getChartFilmsLS()
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.chart {
  padding-top: $padding__views;
  width: 100%;
}

.chart__title {
  @include adaptiv-font($size--large, $size--normal + 10);
  font-family: $font-family__sans;
  user-select: none;
  margin-bottom: 23px;
}

.chart__top {
  position: relative;
}
</style>
