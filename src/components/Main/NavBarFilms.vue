<template>
  <div class="navbarfilms">
    <ul class="navbarfilms__ul">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        :to="link.url"
        active-class="active"
        :exact="link.exact"
      >
        {{ link.title }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBarFilms',
  data: () => ({
    links: [
      { title: 'Умные плейлисты 🔮', url: '/', exact: true },
      { title: 'Новые релизы 🎉', url: '/new-release' },
      { title: 'Топ-500 🏆', url: '/top-500' },
      { title: 'Жанры 📚', url: '/genre' }
    ]
  })
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.navbarfilms {
  overflow: hidden;
  border: @border-width + 1 solid fade(@colors__grays, 20%);
  border-radius: @border-radius__small;
}

.navbarfilms__ul {
  li {
    user-select: none;
    border-bottom: @border-width solid fade(@colors__grays, 40%);
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
      cursor: pointer;
      background-color: fade(#fff, 10%);
      color: @colors__white;
    }

    &:last-child{
      border-bottom: 0;
    }

    &.active {
      background-color: fade(@colors__grays--lighter, 13%);
    }
  }
}
</style>
