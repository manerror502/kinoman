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
            d="M348.8,185.703c-0.001-96.318-78.083-174.399-174.401-174.399C78.08,11.305-0.001,89.387,0,185.705
            c0,46.254,18.375,90.613,51.081,123.319c32.672,32.759,77.054,51.142,123.32,51.08v0
            C270.72,360.103,348.801,282.021,348.8,185.703z M240.361,109.464c15.784-9.156,36.002-3.783,45.158,12.001
            c9.156,15.784,3.783,36.002-12.001,45.158c-15.783,9.156-36,3.784-45.157-11.999
            C219.227,138.837,224.595,118.635,240.361,109.464z M108.558,261.863c-15.783,9.156-36,3.784-45.157-11.999
            c-9.157-15.783-3.785-36.002,11.998-45.159c0.001,0,0.001-0.001,0.002-0.001c15.784-9.156,36.002-3.783,45.158,12.001
            C129.715,232.489,124.342,252.707,108.558,261.863z M120.558,154.705c-9.157,15.783-29.374,21.155-45.157,11.999
            c-15.766-9.171-21.134-29.373-12-45.16c9.157-15.783,29.375-21.155,45.159-11.998
            C124.344,118.703,129.715,138.921,120.558,154.705z M174.401,314.024c-18.247,0-33.04-14.792-33.04-33.04
            s14.792-33.04,33.04-33.04s33.04,14.792,33.04,33.04S192.649,314.024,174.401,314.024z M149.721,185.704
            c0-13.63,11.05-24.68,24.68-24.68s24.68,11.05,24.68,24.68s-11.05,24.68-24.68,24.68S149.721,199.334,149.721,185.704z
            M174.401,123.464c-18.247,0-33.04-14.793-33.04-33.04c0-18.247,14.792-33.04,33.04-33.04s33.04,14.792,33.04,33.04
            S192.649,123.464,174.401,123.464z M285.518,249.985c-9.157,15.783-29.374,21.155-45.157,11.999
            c-15.795-9.144-21.2-29.352-12.08-45.16h0.08c9.157-15.784,29.375-21.155,45.159-11.998
            C289.304,213.983,294.675,234.201,285.518,249.985z"
          />
          <path
            fill="currentColor"
            d="M418.761,355.304c-3.212-6.355-7.41-12.16-12.44-17.2c-5.827-5.913-12.583-10.832-20-14.56
            c-18.28-9.16-42.56-12-70.64,1.92c-8.186,3.985-16.68,7.303-25.4,9.92c-23.683,18.383-51.411,30.848-80.88,36.36
            c26.6,4,55.72,1.12,81.24-1.32c12.892-1.524,25.858-2.339,38.84-2.44c28.56,0.72,27,30.96,26.72,34.32
            c-0.617,4.375,2.429,8.422,6.804,9.039c1.8,0.254,3.633-0.113,5.196-1.039l49.72-28.8c1.36-0.785,2.459-1.954,3.16-3.36
            C423.921,372.424,423.041,364.024,418.761,355.304z"
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
