<template>
  <div>
    <SmartPlaylists />
  </div>
</template>

<script>
import SmartPlaylists from '@/components/Main/SmartPlaylists.vue'

export default {
  name: 'Home',
  components: {
    SmartPlaylists
  }
}
</script>

<style lang="less">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(300px);
}
</style>
