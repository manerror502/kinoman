<template>
  <div id="app">
    <transition name="fade">
      <component :is="layout">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  components: {
    MainLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
}
</script>

<style lang="less">
@import "assets/style/base.less";
@import "assets/style/manGrid.css";

#app {
  background-image: @colors__body;
  overflow: hidden;
}

::-webkit-scrollbar {
    width: 10px;

    &-track {
      background: rgb(68, 88, 112);
    }

    &-thumb {
      background: rgb(31, 31, 31);
      border-radius: @border-radius__large;
    }
  }
</style>
