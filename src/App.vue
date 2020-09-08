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
@import "./assets/style/_base.scss";
@import "./assets/style/manGrid.css";

.app {
  min-height: 100vh;
  position: relative;

  @media (max-width: $breackpoints__md) {
    padding-bottom: 50px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    filter: blur(50px);
    background: linear-gradient(
      to bottom,
      fade-out(rgb(143, 168, 235), 0.4%) 0%,
      rgba(9, 9, 9, 0) 20%
    );
  }
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

a {
  text-decoration: none;
}
</style>
