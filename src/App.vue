<template>
  <div
    id="app"
    class="app"
    :class="`app--${theme.currentTheme}`"
  >
    <transition name="fade">
      <component :is="layout">
        <router-view />
      </component>
    </transition>

    <MobileBar />
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
@import './assets/style/_base.scss';
@import './assets/style/manGrid.css';

.app {
  min-height: 100vh;
  position: relative;
  overflow-y: scroll;

  @media (max-width: $breackpoints__md) {
    padding-bottom: 50px;
  }
}

a {
  text-decoration: none;
}

// scrollbar
::-webkit-scrollbar {
  width: 10px;
  border-radius: $border-radius__large;

  &-track {
    background: rgba(59, 59, 59, 0);
  }

  &-thumb {
    background: rgb(163, 163, 163);
    border-radius: $border-radius__large;
  }
}
</style>
