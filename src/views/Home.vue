<template>
  <SmartPlaylists />
</template>

<script>

import SmartPlaylists from '@/components/Main/SmartPlaylists.vue'
// import InfoFilm from '@/components/app/InfoFilm.vue'

export default {
  name: 'Home',
  components: {
    SmartPlaylists
    // InfoFilm
  }

}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

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

.playlists {
  width: 100%;
  margin-top: 44px;
  animation: opacity-animate 0.2s 3s ease-in-out 1 forwards;
  opacity: 0;
}

.playlists__title {
  font-size: @font-size--large;
  font-family: @font-family__sans__black;
  color: @colors__grays--lighter;
  user-select: none;
  margin-bottom: 23px;
  border-bottom: @border-width solid fade(@colors__border, 40%);
}
</style>
