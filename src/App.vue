<template>
  <div
    id="app"
    class="app"
    :class="`app--${theme.currentTheme}`"
  >
    <component :is="layout">
      <router-view />
    </component>

    <MobileBar />
  </div>
</template>

<script>
import mainLayout from '@/layouts/mainLayout'
import emptyLayout from '@/layouts/emptyLayout'
import MobileBar from '@/components/mobile/MobileBar'

import { mapState } from 'vuex'
export default {
  name: 'App',
  data: () => ({}),
  components: {
    mainLayout,
    emptyLayout,
    MobileBar
  },
  computed: {
    ...mapState(['theme']),
    layout () {
      return this.$route.meta.layout + '-layout'
    }
  },
  watch: {
    theme (value) {
      console.log(value)
    }
  }
}
</script>

<style  lang="scss">
@import "./assets/style/_base.scss";
@import "./assets/style/manGrid.css";

.app {
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
}

::-webkit-scrollbar {
  width: 15px;

  &-track {
    background: $colors__blackPrimary;
  }

  &-thumb {
    background: $colors__grays;
  }
}
</style>
