<template>
  <ul class="playlists__wrap row">
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

    <hooper
      v-else
      :mouse-drag="false"
      :wheel-control="false"
      :items-to-show="4"
      :infinite-scroll="true"
      pagination="no"
      style="height: 100%"
    >
      <slide>
        <div class="playlists__item">
          <a href="">
            <div
              class="playlists__item-img"
            >
              <img
                class=""
                src="../../assets/img/smartPlaylist/1.jpg"
                alt=""
              >

              <div class="playlists__item-hover">
                <button class="">
                  <svg viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M511.812,167.164C508.179,89.995,448.439,29.1,377.056,28.529c-0.352,0-0.688,0-1.04,0
                        c-65.963,0-102.73,48.413-120.016,81.095c-17.285-32.681-54.052-81.095-120.015-81.095c-0.352,0-0.703,0-1.04,0
                        C63.562,29.101,3.821,89.995,0.188,167.164c-4.468,94.63,71.035,158.132,183.814,254.225
                        c19.526,16.641,40.298,34.336,62.125,53.439l9.873,8.643l9.873-8.642c21.826-19.102,42.598-36.797,62.125-53.439
                        C440.777,325.295,516.28,261.794,511.812,167.164z"
                    />
                  </svg>
                </button>
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
          </a>
        </div>
      </slide>

      <slide>
        <div class="playlists__item">
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
                <button class="heart">
                  <svg viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M511.812,167.164C508.179,89.995,448.439,29.1,377.056,28.529c-0.352,0-0.688,0-1.04,0
                        c-65.963,0-102.73,48.413-120.016,81.095c-17.285-32.681-54.052-81.095-120.015-81.095c-0.352,0-0.703,0-1.04,0
                        C63.562,29.101,3.821,89.995,0.188,167.164c-4.468,94.63,71.035,158.132,183.814,254.225
                        c19.526,16.641,40.298,34.336,62.125,53.439l9.873,8.643l9.873-8.642c21.826-19.102,42.598-36.797,62.125-53.439
                        C440.777,325.295,516.28,261.794,511.812,167.164z"
                    />
                  </svg>
                </button>
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
        </div>
      </slide>

      <slide>
        <div class="playlists__item">
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
                <button class="heart">
                  <svg viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M511.812,167.164C508.179,89.995,448.439,29.1,377.056,28.529c-0.352,0-0.688,0-1.04,0
                        c-65.963,0-102.73,48.413-120.016,81.095c-17.285-32.681-54.052-81.095-120.015-81.095c-0.352,0-0.703,0-1.04,0
                        C63.562,29.101,3.821,89.995,0.188,167.164c-4.468,94.63,71.035,158.132,183.814,254.225
                        c19.526,16.641,40.298,34.336,62.125,53.439l9.873,8.643l9.873-8.642c21.826-19.102,42.598-36.797,62.125-53.439
                        C440.777,325.295,516.28,261.794,511.812,167.164z"
                    />
                  </svg>
                </button>
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
        </div>
      </slide>

      <slide>
        <div class="playlists__item">
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
                <button class="heart">
                  <svg viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M511.812,167.164C508.179,89.995,448.439,29.1,377.056,28.529c-0.352,0-0.688,0-1.04,0
                        c-65.963,0-102.73,48.413-120.016,81.095c-17.285-32.681-54.052-81.095-120.015-81.095c-0.352,0-0.703,0-1.04,0
                        C63.562,29.101,3.821,89.995,0.188,167.164c-4.468,94.63,71.035,158.132,183.814,254.225
                        c19.526,16.641,40.298,34.336,62.125,53.439l9.873,8.643l9.873-8.642c21.826-19.102,42.598-36.797,62.125-53.439
                        C440.777,325.295,516.28,261.794,511.812,167.164z"
                    />
                  </svg>
                </button>
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
        </div>
      </slide>

      <hooper-navigation slot="hooper-addons" />
    </hooper>
  </ul>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'SmartPlaylists',
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
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
  height: 300px;
  overflow: hidden;
  border-radius: @border-radius__small;
  position: relative;
  z-index: 2;

  img {
    width: 300px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    transform: translate3d(-50%, -50%, 0);
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
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darken(fade(@colors__primary3, 70%), 50%);
  transition: @transition-duration @transition-timing-function;

  button {
    padding: 10px;
    margin: 10px;
    color: fade(@colors__grays--lighter, 70%);
    border-radius: @buttons__border-radius;
    overflow: hidden;

    transition: @transition-duration @transition-timing-function;
    svg {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: 60px;
      height: 60px;
    }

    &:hover,
    &:focus,
    &:active {
      color: @colors__white;
      // background-color: fade(#fff, 10%);
      transform: scale(1.2);
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
