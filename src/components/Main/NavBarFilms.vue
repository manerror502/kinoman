<template>
  <div class="navbarfilms">
    <ul class="navbarfilms__ul">
      <li class="active">
        <a href="">Новые релизы</a>
      </li>
      <li><a href="">Новые релизы</a></li>
      <li><a href="">Новые релизы</a></li>
      <li><a href="">Новые релизы</a></li>
      <li><a href="">Новые релизы</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBarFilms'
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.navbarfilms {
  overflow: hidden;
  border: @border-width + 1 solid fade(@colors__grays, 20%);
  border-radius: @border-radius__small;
  min-height: 500px;
}

.navbarfilms__ul {
  li {
    border-bottom: @border-width solid fade(@colors__grays, 40%);

    &.active {
      border-bottom: @border-width solid fade(@colors__green, 90%);
    }
    a {
      font-size: @font-size--normal;
      font-family: @font-family__sans__light;
      color: @colors__grays--lighter;
      font-weight: 300;
      padding: 10px;
      display: block;
      width: 100%;
      transition: @transition-duration @transition-timing-function;

      &:hover,
      &:focus,
      &:active {
        background-color: fade(#fff, 10%);
        color: @colors__white;
      }
    }
  }
}
</style>
