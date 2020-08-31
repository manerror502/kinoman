<template>
  <div class="row no-gutters your__movie">
    <section class="playlists">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3 class="playlists__title">
              Плейлисты
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
              Фильмы
            </h3>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <HeartMovie />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SmartPlaylists from '@/components/Main/SmartPlaylists'
import HeartMovie from '@/components/YourMovie/HeartMovie'

export default {
  name: 'YourMovie',
  components: {
    SmartPlaylists,
    HeartMovie
  }
}
</script>

<style lang="less">

.your__movie{
  margin-top: 50px;
}
</style>
