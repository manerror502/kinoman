<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import 'assets/style/base.less';
@import 'assets/style/manGrid.css';

#app{
  height: 3000px;
  background-image: @gradient__body;
}
</style>
