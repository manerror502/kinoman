<template>
  <div class="row no-gutters">
    <Intro />

    <section class="playlists">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3 class="playlists__title">
              Умные плейлисты 🔮
            </h3>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <SmartPlaylists />
          </div>
        </div>
      </div>
    </section>

    <section class="playlists">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3 class="playlists__title">
              Подборки
            </h3>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <Collections />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SmartPlaylists from '@/components/Main/SmartPlaylists'
import Collections from '@/components/Main/Collections'
import Intro from '@/components/Main/Intro'

export default {
  name: 'Home',
  components: {
    SmartPlaylists,
    Intro,
    Collections
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
