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
            d="M463.441,189.294c-0.061-0.214-0.133-0.425-0.216-0.632c0-0.088-0.048-0.192-0.088-0.28
                  c-0.372-0.722-0.852-1.383-1.424-1.96c-0.128-0.136-0.288-0.232-0.424-0.36c-0.553-0.491-1.169-0.905-1.832-1.232
                  c-0.24-0.112-0.464-0.224-0.712-0.312c-0.882-0.351-1.819-0.541-2.768-0.56H127.025l-2.104-2.624l103.216-32.408l1.256-0.392
                  l1.848-0.576l99.2-31.152l21.048-6.608l31.152-9.776l75.736-23.768c4.215-1.325,6.557-5.816,5.232-10.031c0,0,0-0.001,0-0.001
                  L444.441,5.558c-0.048-0.144-0.16-0.24-0.216-0.384c-0.264-0.704-0.628-1.367-1.08-1.968c-0.144-0.192-0.256-0.4-0.416-0.576
                  c-0.051-0.078-0.108-0.153-0.168-0.224c-0.561-0.577-1.209-1.063-1.92-1.44c-0.184-0.104-0.392-0.152-0.584-0.24
                  c-0.653-0.294-1.341-0.501-2.048-0.616c-0.272-0.04-0.52-0.072-0.8-0.088c-0.947-0.071-1.898,0.032-2.808,0.304L210.849,70.502
                  l-20.688,6.496l-35.52,11.152l-101.32,31.808H23.977c-4.418,0-8,3.582-8,8v328c0,13.255,10.745,24,24,24h400
                  c13.255,0,24-10.745,24-24v-264c0-0.152-0.08-0.28-0.088-0.432C463.847,190.764,463.696,190.012,463.441,189.294z
                  M439.977,199.958l-36,48h-44l36-48H439.977z M375.977,199.958l-36,48h-44l36-48H375.977z M311.977,199.958l-36,48h-44l36-48
                  H311.977z M247.977,199.958l-36,48h-44l36-48H247.977z M183.977,199.958l-36,48h-4v-40c0.001-1.817-0.617-3.581-1.752-5
                  l-2.32-2.896L183.977,199.958z M436.361,33.278l9.6,30.536l-22.912,7.184L436.361,33.278z M394.793,29.542l29.184-9.152
                  l-20,56.568l-26.632,8.36l-15.352,4.8l20-56.576L394.793,29.542z M326.057,51.126l36.816-11.568l-20,56.576l-41.976,13.176
                  l20-56.584L326.057,51.126z M301.841,58.726l-20,56.568l-41.968,13.176l20-56.568L301.841,58.726z M198.801,91.094l41.976-13.2
                  l-20,56.6l-41.976,13.176L198.801,91.094z M179.761,97.038l-20,56.568l-25.856,8.128l-16.12,5.056l20-56.576L179.761,97.038z
                  M118.625,116.23l-14.016,39.728l-22.576-28.24L118.625,116.23z M31.977,135.958h36.16l36.984,46.24l11.792,14.728l5.6,7.024
                  l0.968,1.208l4.448,5.552v37.248H31.977V135.958z M447.977,455.958c0,4.418-3.582,8-8,8h-400c-4.418,0-8-3.582-8-8v-192h416
                  V455.958z M447.977,247.958h-24l24-32V247.958z"
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
          viewBox="0 0 423.936 423.936"
        >
          <path
            fill="currentColor"
            d="M327.68,0H96.256c-22.528,0-40.96,18.432-40.96,40.96v357.376c0,9.728,5.632,18.944,14.336,23.04
                  c9.216,4.096,19.456,3.072,27.136-3.072l0.512-0.512l114.688-96.768l114.688,96.768l0.512,0.512
                  c4.608,3.584,10.24,5.632,15.872,5.632c3.584,0,7.68-1.024,11.264-3.072c8.704-4.096,14.336-13.312,14.336-23.04V40.96
                  C368.64,18.432,350.208,0,327.68,0z"
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
        url: '/new-release',
        icon: require('../../assets/img/navBar/new.svg')
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
  z-index: 20;
  width: 100px;

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
  li {
    display: inline-flex;
    justify-content: center;
    border-radius: $border-radius__small - 4;
    user-select: none;
    font-size: $font-size--normal - 2;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: $font-weight__sans__regular;
    padding: 10px;
    width: 100%;
    transition: $transition-duration $transition-timing-function;

    img {
      display: inline-block;
      max-width: 30px;
      margin-right: 5px;
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
  overflow: hidden;
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
