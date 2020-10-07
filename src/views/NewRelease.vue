<template>
  <section class="items collection">
    <Loader v-if="loading" />
    <div
      v-else
      class="container-fluid"
    >
      <ul
        class="row justify-content-arround"
      >
        <FilmItemInfo
          class="col-xl-4 col-md-6"
          v-for="release in newRelease.releases"
          :key="release.filmId"
          :item-info="release"
        />
      </ul>

      <Loader v-if="lazyLoading" />

      <button
        v-if="!checkingItemsRelease"
        @click.prevent="loadMore"
        class="lazyload"
      >
        Загрузить больше
      </button>
    </div>

    <span
      class="more"
      ref="more"
    />
  </section>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'

export default {
  name: 'NewRelease',
  data: () => ({
    newRelease: {},
    page: 1,
    totalMovies: 60,

    loading: true,
    lazyLoading: false
  }),
  computed: {
    checkingItemsRelease () {
      const filmsArr = Object.keys(this.newRelease.releases)
      const totalMovies = this.newRelease.total

      return filmsArr.length >= totalMovies + this.totalMovies
    }
  },
  async created () {
    await this.getNewRelease()
    this.loading = false
  },
  async mounted () {
    this.lazyLoad()
  },
  components: {
    FilmItemInfo
  },
  methods: {
    async getNewRelease () {
      // Обрабатывем дату
      const currentDate = new Date()
      const currentYear = await this.currentYear(currentDate)
      const currentMonth = await this.currentMonth(currentDate)

      const options = {
        year: currentYear,
        month: currentMonth,
        page: 1
      }

      try {
        this.newRelease = await this.$store.dispatch('getNewRelease', options)
      } catch (e) {
        console.log(e)
      }
    },

    currentMonth (date) {
      // Если закончились фильмы в текущем месяце переключать на другой
      if (this.page >= 2 && this.checkingItemsRelease === false) {
        const currentMonth = date.getMonth()
        debugger
        date.setMonth(currentMonth - 1)
      }

      const options = {
        month: 'long'
      }
      return new Intl.DateTimeFormat('en-EN', options).format(date)
    },
    currentYear (date) {
      // Если закончились фильмы в текущем году переключать на другой
      if (this.page >= 2 && this.checkingItemsRelease === false) {
        const currentYear = date.getYear()
        debugger
        date.setYear(currentYear - 1)
      }

      const options = {
        year: 'numeric'
      }
      return new Intl.DateTimeFormat('en-EN', options).format(date)
    },

    // Загрузить больше
    async loadMore () {
      this.lazyLoading = true

      await this.getMoreNewRelease()

      this.lazyLoading = false
    },

    async getMoreNewRelease () {
      const currentDate = new Date()
      const currentYear = await this.currentYear(currentDate)
      const currentMonth = await this.currentMonth(currentDate)

      this.page++

      const options = {
        year: currentYear,
        month: currentMonth,
        page: this.page
      }

      try {
        const newRelease = await this.$store.dispatch('getNewRelease', options)

        newRelease.releases.forEach(film => {
          this.newRelease.releases.push(film)
        })
      } catch (e) {
        console.log(e)
      }
    },
    async lazyLoad () {
      const options = {
        root: null,
        threshold: 0
      }

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!this.loading && !this.checkingItemsRelease) {
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

.collection {
  padding-top: 50px;
}

.more {
  display: block;
  height: 5px;
  opacity: 0;
}
</style>
