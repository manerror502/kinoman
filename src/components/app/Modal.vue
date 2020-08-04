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

<style lang="less">
@import "@/assets/style/vars/vars.module";

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: fade(darken(@colors__blackPrimary, 10%), 50%);
  display: flex;
  padding: 20px 0;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;

    &-track {
      background: rgb(68, 88, 112);
    }

    &-thumb {
      background: rgb(31, 31, 31);
      border-radius: @border-radius__large;
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
