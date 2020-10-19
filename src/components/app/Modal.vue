<template>
  <div
    class="modal"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: $breackpoints__md) {
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
}

.modal__close {
  position: fixed;
  top: 30px;
  right: 30px;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    top: 30px;
    right: 30px;
  }
}
</style>
