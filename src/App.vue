<template>
  <div
    id="app"
    class="app"
    :class="`app--${theme.currentTheme}`"
  >
    <transition name="slide-fade">
      <component :is="layout">
        <router-view />

        <MobileBar />
      </component>
    </transition>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import EmptyLayout from '@/layouts/EmptyLayout'
import MobileBar from '@/components/mobile/MobileBar'

import { mapState } from 'vuex'
export default {
  name: 'App',
  metaInfo () {
    return {
      title: this.$title(this.$route.meta.title)
    }
  },
  data: () => ({}),
  components: {
    MainLayout,
    EmptyLayout,
    MobileBar
  },
  computed: {
    ...mapState(['theme']),
    layout () {
      return (this.$route.meta.layout || 'main') + '-layout'
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
