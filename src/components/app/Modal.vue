<template>
  <div class="modal">
    <slot />
  </div>
</template>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.modal {
  opacity: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: fade(darken(@colors__primary, 40%), 90%);
  display: flex;
  padding: 20px;
}

</style>
