<template>
  <section
    class="infofilm"
  >
    <Loader
      v-if="loading"
    />

    <div v-else>
      <FilmBanner :banner-info="bannerInfo" />

      <div class="infofilm__content">
        <div class="row">
          <FilmItem
            class="col-xl-4 col-lg-6"
            v-for="film in collection.films"
            :key="film.filmId"
            :item-info="film"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FilmBanner from '@/components/Details/FilmBanner'
import FilmItem from '@/components/app/FilmItemInfo'

export default {
  name: 'InfoCollection',
  data: () => ({
    loading: true,
    bannerInfo: {},
    collection: {}
  }),
  components: {
    FilmBanner,
    FilmItem
  },
  async created () {
    const collectionId = this.$route.params.colId
    await this.infoCollection(collectionId)

    this.loading = false
  },
  methods: {
    infoCollection (collectionId) {
      this.getInfoCollection(collectionId)
      this.getBannerInfo(collectionId)
    },
    async getInfoCollection (collectionId) {
      try {
        this.collection = await this.$store.dispatch(
          'getCollection',
          collectionId
        )
      } catch (e) {
        console.log(e)
      }
    },
    async getBannerInfo (collectionId) {
      let collections = await this.$store.getters.collections
      collections = collections.items
      const id = +collectionId

      const collectionTitle = collections.forEach(element => {
        if (element.id === id) {
          return element.title
        }
      })
      debugger

      this.setBannerInfo(collectionTitle)
    },
    setBannerInfo (title) {
      this.bannerInfo.data.nameRu = title
      debugger
      this.bannerInfo.data.posterUrl = this.collection.films[0].posterUrl
      debugger
    }
  }
}
</script>
