<template>
  <ul class="playlists__wrap row ">
    <div
      v-if="playlistInfo"
      class="playlists__day"
    >
      <div class="col-4">
        <div class="playlists__day-img">
          <img
            class="img"
            src="../../assets/img/smartPlaylist/1.jpg"
            alt=""
          >
        </div>
      </div>

      <div class="col">
        <div class="playlists__day-descr">
          <div class="playlists__day-title">
            <h4>КиноЛента дня</h4>
          </div>

          <div class="playlists__day-info">
            <p>Смотрите плейлист с подходящими именно вам фильмами и сериалами. Обновляется каждый день, учитывает ваши предпочтения и использует кинематографическую магию!</p>

            <div class="playlists__day-btn">
              <button>Создать</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <li class="playlists__item">
      <router-link to="/kinolenta/day">
        <div
          class="playlists__item-img"
        >
          <img
            class=""
            src="../../assets/img/smartPlaylist/1.jpg"
            alt=""
          >

          <div class="playlists__item-hover">
            <button>
              <svg viewBox="0 0 494.942 494.942">
                <path
                  fill="currentColor"
                  d="m353.53 319.966c-5.714-1.165-11.624-1.789-17.677-1.789-48.731 0-88.383 39.651-88.383 88.383s39.651 88.383 88.383 88.383 88.383-39.651 88.383-88.383v-159.089h70.706v-70.706h-141.412z"
                /><path
                  fill="currentColor"
                  d="m0 0h494.942v70.706h-494.942z"
                /><path
                  fill="currentColor"
                  d="m0 141.412h318.177v70.706h-318.177z"
                /><path
                  id="path-1_7_"
                  fill="currentColor"
                  d="m0 282.824h212.118v70.706h-212.118z"
                  transform="translate(1 9)"
                /><path
                  id="path-1_6_"
                  fill="currentColor"
                  d="m0 424.236h212.118v70.706h-212.118z"
                  transform="translate(1 13)"
                />

              </svg>
            </button>
          </div>
        </div>
        <div class="playlists__item-title">
          <h5>КиноЛента Дня</h5>
        </div>
        <div class="playlists__item-descr">
          <h6>Обновлён сегодня</h6>
        </div>
      </router-link>
    </li>

    <li class="playlists__item">
      <a href="">
        <div
          class="playlists__item-img"
        >
          <img
            class=""
            src="../../assets/img/smartPlaylist/2.jpg"
            alt=""
          >

          <div class="playlists__item-hover">
            <button>
              <svg viewBox="0 0 494.942 494.942">
                <path
                  fill="currentColor"
                  d="m353.53 319.966c-5.714-1.165-11.624-1.789-17.677-1.789-48.731 0-88.383 39.651-88.383 88.383s39.651 88.383 88.383 88.383 88.383-39.651 88.383-88.383v-159.089h70.706v-70.706h-141.412z"
                /><path
                  fill="currentColor"
                  d="m0 0h494.942v70.706h-494.942z"
                /><path
                  fill="currentColor"
                  d="m0 141.412h318.177v70.706h-318.177z"
                /><path
                  id="path-1_7_"
                  fill="currentColor"
                  d="m0 282.824h212.118v70.706h-212.118z"
                  transform="translate(1 9)"
                /><path
                  id="path-1_6_"
                  fill="currentColor"
                  d="m0 424.236h212.118v70.706h-212.118z"
                  transform="translate(1 13)"
                />

              </svg>
            </button>
          </div>
        </div>
        <div class="playlists__item-title">
          <h5>Лучше вместе</h5>
        </div>
        <div class="playlists__item-descr">
          <h6>Обновлён сегодня</h6>
        </div>
      </a>
    </li>

    <li class="playlists__item">
      <a href="">
        <div
          class="playlists__item-img"
        >
          <img
            class=""
            src="../../assets/img/smartPlaylist/3.jpg"
            alt=""
          >

          <div class="playlists__item-hover">
            <button>
              <svg viewBox="0 0 494.942 494.942">
                <path
                  fill="currentColor"
                  d="m353.53 319.966c-5.714-1.165-11.624-1.789-17.677-1.789-48.731 0-88.383 39.651-88.383 88.383s39.651 88.383 88.383 88.383 88.383-39.651 88.383-88.383v-159.089h70.706v-70.706h-141.412z"
                /><path
                  fill="currentColor"
                  d="m0 0h494.942v70.706h-494.942z"
                /><path
                  fill="currentColor"
                  d="m0 141.412h318.177v70.706h-318.177z"
                /><path
                  id="path-1_7_"
                  fill="currentColor"
                  d="m0 282.824h212.118v70.706h-212.118z"
                  transform="translate(1 9)"
                /><path
                  id="path-1_6_"
                  fill="currentColor"
                  d="m0 424.236h212.118v70.706h-212.118z"
                  transform="translate(1 13)"
                />

              </svg>
            </button>
          </div>
        </div>
        <div class="playlists__item-title">
          <h5>Помни меня</h5>
        </div>
        <div class="playlists__item-descr">
          <h6>Обновлён сегодня</h6>
        </div>
      </a>
    </li>

    <li class="playlists__item">
      <a href="">
        <div
          class="playlists__item-img"
        >
          <img
            class=""
            src="../../assets/img/smartPlaylist/4.jpg"
            alt=""
          >

          <div class="playlists__item-hover">
            <button>
              <svg viewBox="0 0 494.942 494.942">
                <path
                  fill="currentColor"
                  d="m353.53 319.966c-5.714-1.165-11.624-1.789-17.677-1.789-48.731 0-88.383 39.651-88.383 88.383s39.651 88.383 88.383 88.383 88.383-39.651 88.383-88.383v-159.089h70.706v-70.706h-141.412z"
                /><path
                  fill="currentColor"
                  d="m0 0h494.942v70.706h-494.942z"
                /><path
                  fill="currentColor"
                  d="m0 141.412h318.177v70.706h-318.177z"
                /><path
                  id="path-1_7_"
                  fill="currentColor"
                  d="m0 282.824h212.118v70.706h-212.118z"
                  transform="translate(1 9)"
                /><path
                  id="path-1_6_"
                  fill="currentColor"
                  d="m0 424.236h212.118v70.706h-212.118z"
                  transform="translate(1 13)"
                />

              </svg>
            </button>
          </div>
        </div>
        <div class="playlists__item-title">
          <h5>Дежавю</h5>
        </div>
        <div class="playlists__item-descr">
          <h6>Обновлён сегодня</h6>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
// import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'SmartPlaylists',
  // components: {
  //   Hooper,
  //   Slide,
  //   HooperNavigation
  // },
  computed: {
    userInfo () {
      return this.$store.state.playlistInfo
    }
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.playlists__item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: @border-radius__small;
  overflow: hidden;
  border: @border-width solid fade(@colors__green, 0);
  transition: @transition-duration @transition-timing-function;
  margin-right: 10px;

  &:hover,
  &:focus {
    .playlists__item-hover {
      opacity: 1;
    }
    border: @border-width solid @colors__green;
  }
}

.playlists__item-img {
  max-width: 100%;
  max-height: 100%;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: @border-radius__small;
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
    font-size: @font-size--normal + 10;
    font-family: @font-family__sans;
    color: @colors__grays--lighter;
  }
}

.playlists__item-descr {
  h6 {
    font-size: @font-size--normal;
    font-weight: 400;
    color: @colors__grays;
  }
}

.playlists__item-hover {
  opacity: 0;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: darken(@colors__green, 10%);
  z-index: 4;
  border-radius: 50%;
  transition: @transition-duration @transition-timing-function;
  box-shadow: @shadows__coords-x 0 @shadows__size
    fade(@colors__blackPrimary, 40%);

  button {
    padding: 15px;
    margin: 10px;
    color: @colors__white;
    border-radius: @buttons__border-radius;
    overflow: hidden;

    transition: @transition-duration @transition-timing-function;
    svg {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: 50px;
      height: 50px;
    }

    &.heart {
      &:hover,
      &:focus,
      &:active {
        color: @colors__green;
      }
    }
  }
}

.playlists__day {
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: fade(@colors__primary2, 50%);
  border-radius: @border-radius__small;
  overflow: hidden;
  padding: 20px;
  margin: 0 10px;
}

.playlists__day-img {
  max-width: 350px;
  max-height: 350px;
  overflow: hidden;
  border-radius: @border-radius__small;
  box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
    fade(#000, 20%);
}

.playlists__day-descr {
  padding: 10px 20px;
  height: 100%;
}

.playlists__day-title {
  h4 {
    font-family: @font-family__sans__black;
    font-size: @font-size--large;
    border-bottom: @border-width solid fade(@colors__grays--lighter, 50%);
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
    font-size: @font-size--normal;
    font-family: @font-family__sans;
    font-weight: @font-weight__sans__regular;
    line-height: @line-height--normal;
  }
}

.playlists__day-btn {
  button {
    opacity: 1;
    background-image: @gradient__green;
    color: @colors__white;
    line-height: @line-height--normal;
    font-size: @font-size--normal;
    padding: 10px 30px;
    border-radius: 50px;
    box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
      fade(#000, 20%);
    transition: @transition-duration @transition-timing-function;

    &:hover,
    &:focus,
    &:active {
      transform: scale(1.1);
    }
  }
}
</style>
