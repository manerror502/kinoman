<template>
  <section class="yourecommends">
    <div
      class="container-fluid"
    >
      <Recommends />
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
  margin: 0 auto;
  margin-top: 100px;
}
</style>
