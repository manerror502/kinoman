<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
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
  background-image: @gradient__body;
  overflow: hidden;
}
</style>
