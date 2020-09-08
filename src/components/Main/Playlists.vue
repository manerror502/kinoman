<template>
  <div class="playlists__wrap row ">
    <div
      v-if="userInfo"
      class="playlists__day row"
    >
      <div class="col-lg-4">
        <div class="playlists__day-img">
          <img
            class="img"
            src="../../assets/img/smartPlaylist/1.jpg"
            alt=""
          >
        </div>
      </div>

      <div class="col-lg-6">
        <div class="playlists__day-descr">
          <div class="playlists__day-title">
            <h4>КиноЛента дня</h4>
          </div>

          <div class="playlists__day-info">
            <p>Смотрите плейлист с подходящими именно вам фильмами и сериалами. Обновляется каждый день, учитывает ваши предпочтения и использует кинематографическую магию!</p>

            <div class="playlists__day-btn">
              <router-link
                to="/login"
                tag="button"
              >
                Создать
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ul
      class="row no-gutters"
      v-else
    >
      <li
        class="playlists__item"
        v-for="playlist in playlists"
        :key="playlist.url"
      >
        <router-link :to="playlist.url">
          <div
            class="playlists__item-img"
          >
            <img
              class=""
              :src="playlist.img"
              alt=""
            >
          </div>
          <div class="playlists__item-title">
            <h5>{{ playlist.title }}</h5>
          </div>
          <div class="playlists__item-descr">
            <h6>Обновлён сегодня</h6>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
// import 'hooper/dist/hooper.css'

export default {
  name: 'SmartPlaylists',
  // components: {
  //   Hooper,
  //   Slide,
  //   HooperNavigation
  // },
  data: () => ({
    playlists: [
      {
        title: 'Кинолента Дня',
        url: '/kinolenta/day',
        img:
          'https://firebasestorage.googleapis.com/v0/b/kinoman-1cc31.appspot.com/o/app%2FplaylistImg%2F1.jpg?alt=media&token=35db6ac1-3cf5-4e88-b808-c017ed043ea9'
      }
    ]
  }),
  computed: {
    userInfo () {
      return !Object.keys(this.$store.getters.info).length
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.playlists__wrap {
  // @media (max-width: $breackpoints__md) {
  //   max-width: 100%;
  //   overflow-x: auto;

  //   &::-webkit-scrollbar {
  //     display: none;
  //   }
  // }
}

.nowrap {
  flex-wrap: nowrap;
}

.playlists__item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: $border-radius__small;
  overflow: hidden;
  transition: $transition-duration $transition-timing-function;
  margin-right: 10px;

  &:hover,
  &:focus {
    .playlists__item-hover {
      opacity: 1;
    }
  }
}

.playlists__item-img {
  max-width: 100%;
  max-height: 100%;
  @include adaptiv-image(300, 200);
  overflow: hidden;
  border-radius: $border-radius__small;
  position: relative;
  z-index: 2;

  img {
    margin: 0 auto;
    max-width: 100%;
  }
}

.playlists__item-title,
.playlists__item-descr {
  user-select: none;
  text-align: left;

  h5 {
    @include adaptiv-font($size--normal + 10, $size--normal);
    font-family: $font-family__sans;
  }
}

.playlists__item-descr {
  h6 {
    @include adaptiv-font($size--normal, $size--small);
    font-weight: 400;
  }
}

.playlists__item-hover {
  opacity: 0;
  position: absolute;
  bottom: 20px;
  right: 20px;
  // background-color: darken($colors__green, 10%);
  z-index: 4;
  border-radius: 50%;
  transition: $transition-duration $transition-timing-function;
  // box-shadow: $shadows__coords-x 0 $shadows__size
  //   fade($colors__blackPrimary, 40%);

  button {
    padding: 15px;
    margin: 10px;
    border-radius: $buttons__border-radius;
    overflow: hidden;

    transition: $transition-duration $transition-timing-function;
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: 100px;
      height: 100px;
    }
  }
}

.playlists__day {
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: $border-radius__small;
  overflow: hidden;
  padding: 20px;
  margin: 0 10px;
}

.playlists__day-img {
  max-width: 350px;
  max-height: 350px;
  overflow: hidden;
  border-radius: $border-radius__small;
  box-shadow: $shadows__coords-x $shadows__coords-y $shadows__size
    fade-out(#000, 0.8%);

  @media (max-width: $breackpoints__md) {
    margin: 0 auto;
  }
}

.playlists__day-descr {
  padding: 10px 20px;
  height: 100%;
}

.playlists__day-title {
  h4 {
    font-family: $font-family__sans__black;
    @include adaptiv-font($size--large, $size--normal);
  }
}

.playlists__day-info {
  max-width: 500px;
  height: 250px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__regular;
    line-height: $line-height--normal;
    @include adaptiv-font($size--normal, $size--small);
  }

  @media (max-width: $breackpoints__md) {
    height: auto;
  }
}

.playlists__day-btn {
  button {
    opacity: 1;

    line-height: $line-height--normal;
    font-size: $font-size--normal;
    padding: 10px 30px;
    border-radius: 50px;
    box-shadow: $shadows__coords-x $shadows__coords-y $shadows__size
      fade-out(#000, 0.8%);
    transition: $transition-duration $transition-timing-function;

    &:hover,
    &:focus,
    &:active {
      transform: scale(1.1);
    }
  }
}
</style>
