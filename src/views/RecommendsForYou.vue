<template>
  <section class="yourecommends">
    <Loader
      v-if="loading"
      style="width: 100vw; height: 100vh;"
    />
    <div
      v-else
      class="container-fluid"
    >
      <Recommends />

      <!-- <Loader v-if="lazyLoading" />

      <button
        v-if="page <= newRelease.pagesCount - 1"
        @click.prevent="loadMore"
        class="lazyload"
      >
        Загрузить больше
      </button> -->
    </div>
  </section>
</template>

<script>
import Recommends from '@/components/app/Recommends'

export default {
  name: 'RecommendsForYou',
  data: () => ({}),

  components: {
    Recommends
  }
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.yourecommends {
  width: 100%;
  margin-top: 100px;
}
</style>
