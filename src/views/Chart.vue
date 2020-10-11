<template>
  <section
    class="chart"
  >
    <Loader v-if="loading" />
    <div
      v-else
      class="container-fluid"
    >
      <div
        class="chart__img"
        :style="{backgroundImage: 'url(' + charts.films[0].posterUrl + ')'}"
      />

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
          <ul
            class="row justify-content-arround"
          >
            <FilmItemInfo
              class="col-xl-4 col-md-6"
              v-for="chart in charts.films"
              :key="chart.filmId"
              :item-info="chart"
            />
          </ul>
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
    loading: false
  }),
  computed: {},
  created () {
    this.getChartFilms()
  },
  methods: {
    async getChartFilms () {
      this.charts = await this.$store.dispatch('getChartFilms')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.chart {
  padding-top: 100px;
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

.chart__img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(50px);
  width: 100%;
  height: 500px;

  &::after {
    content: '';
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(15, 15, 15, 1) 0%,
      rgba(15, 15, 15, 0.6) 90%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}
</style>
