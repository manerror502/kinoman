<template>
  <component :is="param" />
</template>

<script>
import InfoFilm from '@/components/Details/InfoFilm'
// import infoPlaylist from '@/components/Details/InfoPlaylist'
// import infoCollection from '@/components/Details/InfoCollection'

export default {
  name: 'Details',
  components: {
    InfoFilm
    // infoPlaylist,
    // infoCollection
  },
  computed: {
    param () {
      if (this.$route.params.id) {
        return 'infoFilm'
      } else if (this.$route.params.colId) {
        return 'infoCollection'
      } else {
        return 'infoPlaylist'
      }
    }
  }
}
</script>
