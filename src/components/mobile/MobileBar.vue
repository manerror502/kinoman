<template>
  <nav class="mobile">
    <div class="mobile__wrap">
      <div class="mobile__links row justify-content-between">
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          :to="link.url"
          active-class="active"
          :exact="link.exact"
          class="mobile__item"
        >
          <img
            :src="link.icon"
            class="img"
            alt=""
          >
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MobileBar',
  data: () => ({
    links: [
      {
        title: ' Главная ',
        url: '/',
        icon: require('../../assets/img/navBar/home.svg'),
        exact: true
      },
      {
        title: ' Новые релизы ',
        url: '/new-release',
        icon: require('../../assets/img/navBar/new.svg')
      },
      {
        title: ' Рекоммендации ',
        url: '/foryou',
        icon: require('../../assets/img/navBar/ball.svg')
      },
      {
        title: ' Чарт ',
        url: '/chart',
        icon: require('../../assets/img/navBar/chart.svg')
      },
      {
        title: ' Профиль ',
        url: '/profile',
        icon: require('../../assets/img/navBar/profile.svg')
      }
    ]
  })
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.mobile {
  position: fixed;
  bottom: 0;
  z-index: 20;
  width: 100%;

  @media (min-width: $breackpoints__md) {
    display: none;
  }
}

.mobile__links {
  display: flex;
  padding: 0 20px;
}

.mobile__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  overflow: hidden;
  padding: 15px 10px;
  width: calc(100% / 5);
  transition: $transition-duration $transition-timing-function;

  img {
    max-width: 30px;
  }
}
</style>
