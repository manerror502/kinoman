<template>
  <nav class="navbar">
    <router-link
      to="/"
      tag="h1"
      class="navbar__logo"
    >
      <img
        class="img"
        src="../../assets/img/logo/logo.png"
        alt=""
      >
    </router-link>

    <ul class="navbar__link">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        :to="link.url"
        active-class="active"
        :exact="link.exact"
      >
        <img
          :src="link.icon"
          class="img"
          alt=""
        >
      </router-link>
    </ul>

    <div class="navbar__playlists">
      <!-- <button class="navbar__playlists-item">
        <div class="navbar__playlists-wrap">
          <p>
            Новая КиноЛента

            <span>
              <svg
                class=""
                viewBox="0 0 426.66667 426.66667"
              >
                <path
                  fill="currentColor"
                  d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"
                />
              </svg>
            </span>
          </p>
        </div>
      </button> -->

      <router-link
        to="/profile/heartMovie"
        class="navbar__playlists-item"
        tag="a"
      >
        <svg
          class=""
          viewBox="0 0 479.958 479.958"
        >
          <path
            fill="currentColor"
            d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"
          />
        </svg>
      </router-link>

      <router-link
        to="/profile/bookmarksMovie"
        class="navbar__playlists-item"
        tag="a"
      >
        <svg
          class=""
          viewBox="0 0 487.222 487.222"
        >
          <path
            fill="currentColor"
            d="M486.554,186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6l-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5l0,0c-5.1,0-9.8,2.9-12.1,7.6   l-67.5,137.9l-152,22.6c-5.1,0.8-9.3,4.3-10.9,9.2s-0.2,10.3,3.5,13.8l110.3,106.9l-25.5,151.4c-0.9,5.1,1.2,10.2,5.4,13.2   c2.3,1.7,5.1,2.6,7.9,2.6c2.2,0,4.3-0.5,6.3-1.6l135.7-71.9l136.1,71.1c2,1,4.1,1.5,6.2,1.5l0,0c7.4,0,13.5-6.1,13.5-13.5   c0-1.1-0.1-2.1-0.4-3.1l-26.3-150.5l109.6-107.5C486.854,197.111,488.154,191.711,486.554,186.811z M349.554,293.911   c-3.2,3.1-4.6,7.6-3.8,12l22.9,131.3l-118.2-61.7c-3.9-2.1-8.6-2-12.6,0l-117.8,62.4l22.1-131.5c0.7-4.4-0.7-8.8-3.9-11.9   l-95.6-92.8l131.9-19.6c4.4-0.7,8.2-3.4,10.1-7.4l58.6-119.7l59.4,119.4c2,4,5.8,6.7,10.2,7.4l132,18.8L349.554,293.911z"
          />
        </svg>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
        url: '/releases',
        icon: require('../../assets/img/navBar/new.svg')
      },
      {
        title: ' Чарт ',
        url: '/chart',
        icon: require('../../assets/img/navBar/chart.svg')
      },
      {
        title: ' Рекоммендации ',
        url: '/foryou',
        icon: require('../../assets/img/navBar/ball.svg')
      }
    ]
  })
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.navbar__container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: $navbar__width;

  @media (max-width: $breackpoints__md) {
    display: none;
    visibility: hidden;
  }
}

.navbar {
  padding: 10px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  user-select: none;
}

.navbar__logo {
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  transition: $transition-duration $transition-timing-function;
  overflow: hidden;
  margin-bottom: 20px;
  width: 100%;
  max-height: 200px;

  img {
    max-height: 200px;
    margin: 0 auto;
  }

  &:hover,
  &:focus,
  &:active {
    filter: contrast(80%);
  }
}

.navbar__link {
  overflow: hidden;
  text-align: center;
  li {
    display: inline-flex;
    justify-content: center;
    border-radius: 50%;
    user-select: none;
    font-size: $font-size--normal - 2;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: $font-weight__sans__regular;
    padding: 10px;
    width: 50px;
    height: 100%;
    transition: $transition-duration $transition-timing-function;

    img {
      display: inline-block;
      max-width: 30px;
    }

    &:hover,
    &:focus,
    &:active {
      cursor: pointer;
    }

    &:last-child {
      border-bottom: 0;
      margin-bottom: 10px;
    }
  }
}

.navbar__playlists {
  padding: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__bold;
    font-size: $font-size--normal;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.navbar__playlists-item {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: $transition-duration $transition-timing-function;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  svg {
    width: $font-size--normal;
    height: $font-size--normal;
  }
}
</style>
