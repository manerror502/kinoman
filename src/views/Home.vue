<template>
  <div>
    <SmartPlaylists />
    <Modal>
      <InfoFilm />
    </Modal>
  </div>
</template>

<script>
import SmartPlaylists from '@/components/Main/SmartPlaylists.vue'
import Modal from '@/components/app/Modal.vue'
import InfoFilm from '@/components/app/InfoFilm.vue'

export default {
  name: 'Home',
  components: {
    SmartPlaylists,
    Modal,
    InfoFilm
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
