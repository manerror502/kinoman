<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import EmptyLayout from '@/layouts/EmptyLayout'

export default {
  components: {
    MainLayout,
    EmptyLayout
  },
  computed: {
    layout () {
      return this.$route.meta.layout + '-layout'
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
    background: @colors__grays;
  }

  &-thumb {
    background: @colors__blackPrimary;
    border-radius: @border-radius__small;
  }
}
</style>
