<template>
  <component :is="param" />
</template>

<script>
import InfoFilm from '@/components/Details/InfoFilm'

export default {
  name: 'Details',
  components: {
    InfoFilm
  },
  computed: {
    param () {
      if (this.$route.params.id) {
        return 'infoFilm'
      } else {
        return 'infoPlaylist'
      }
    }
  }
}
</script>
