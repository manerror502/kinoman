<template>
  <section class="playlists collection">
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
          v-for="release in newRelease.films"
          :key="release.filmId"
          :item-info="release"
        />
      </ul>

      <Loader v-if="lazyLoading" />

      <button
        v-if="page <= newRelease.pagesCount - 1"
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

    loading: true,
    lazyLoading: false
  }),
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
      const currentDate = new Date()
      const currentYear = await this.currentYear(currentDate)

      const options = {
        rating: {
          from: '0',
          to: '10'
        },
        year: {
          from: currentYear,
          to: currentYear
        },
        page: 1
      }

      try {
        this.newRelease = await this.$store.dispatch('getNewRelease', options)
      } catch (e) {
        console.log(e)
      }
    },
    currentMonth (date) {
      const options = {
        month: 'long'
      }
      return new Intl.DateTimeFormat('en-EN', options).format(date)
    },
    currentYear (date) {
      const options = {
        year: 'numeric'
      }
      return new Intl.DateTimeFormat('en-EN', options).format(date)
    },

    async loadMore () {
      this.lazyLoading = true

      await this.getMoreNewRelease()

      this.lazyLoading = false
    },

    async getMoreNewRelease () {
      const currentDate = new Date()
      const currentYear = await this.currentYear(currentDate)

      this.page++

      const options = {
        rating: {
          from: '0',
          to: '10'
        },
        year: {
          from: currentYear,
          to: currentYear
        },
        page: this.page
      }

      try {
        const newRelease = await this.$store.dispatch('getNewRelease', options)

        newRelease.films.forEach(film => {
          this.newRelease.films.push(film)
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
            if (!this.loading && this.page <= this.newRelease.pagesCount - 1) {
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
@import "@/assets/style/vars/_vars";

.collection {
  padding-top: 50px;
}

.lazyload {
  display: block;
  flex-direction: column;
  justify-content: center;
  border-radius: $buttons__border-radius;
  padding: 10px 50px;
  margin: 30px auto;
  transition: $transition-duration $transition-timing-function;

  text-align: center;
  font-family: $font-family__sans;
  font-size: $font-size--normal + 5;
}

.more {
  display: block;
  height: 5px;
  opacity: 0;
}
</style>
