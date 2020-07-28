<template>
  <div
    class="menu"
    ref="menu"
  >
    <!-- <div class="menu__header">
      <a class="menu__title">
        <h5>Вверх</h5>
      </a>
    </div> -->
    <div class="menu__button">
      <button class="btn">
        <span>❤</span> Нравиться
      </button>
      <button class="btn">
        <span>❤</span> Не нравиться
      </button>
      <button class="btn">
        <span>❤</span> Нравиться
      </button>
      <button class="btn">
        <span>❤</span> Нравиться
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  mounted () {},
  methods: {}
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.menu {
  display: flex;
  flex-direction: column;
  width: 200px;
  position: absolute;
  right: 100%;
  top: 0;
  z-index: 4;
  background-color: @colors__blackGrays;
  border-radius: @border-radius__small;
  padding: 5px;
}

.menu__header {
  display: flex;
  align-items: center;
}

.menu__title {
  width: 100%;
  padding-bottom: 5px;
  border-bottom: @border-width solid fade(@colors__grays, 30%);

  h5 {
    font-size: @font-size--normal + 10;
    font-family: @font-family__sans;
    font-weight: 700;
    line-height: @line-height--normal + 7;
    color: @colors__grays--lighter;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.menu__button {
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  button {
    text-align: left;
    font-size: @font-size--normal;
    line-height: @line-height--normal + 7;
    font-family: @font-family__sans;
    font-weight: 400;
    color: @colors__grays--lighter;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: @transition-duration @transition-timing-function;
    border-radius: @border-radius__small - 4;

    &:hover,
    &:focus,
    &:active {
      background-color: fade(#fff, 10%);
      color: @colors__white;
    }
  }
}
</style>
