<template>
  <section class="playlists collection">
    <Loader v-if="loading" />
    <div
      v-else
      class="container-fluid"
    >
      <ul class="row justify-content-arround">
        <FilmItemInfo
          class="col-xl-4 col-lg-6"
          v-for="release in newRelease.releases"
          :key="release.filmId"
          :item-info="release"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import FilmItemInfo from '@/components/app/FilmItemInfo'

export default {
  name: 'NewRelease',
  data: () => ({
    newRelease: {},
    loading: true
  }),
  async created () {
    await this.getNewRelease()
    this.loading = false
  },
  components: {
    FilmItemInfo
  },
  methods: {
    async getNewRelease () {
      const currentDate = new Date()
      const currentMonth = await this.currentMonth(currentDate)
      const currentYear = await this.currentYear(currentDate)

      const options = {
        month: currentMonth,
        year: currentYear,
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
    }
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.collection {
  padding-top: 50px;
}
</style>
