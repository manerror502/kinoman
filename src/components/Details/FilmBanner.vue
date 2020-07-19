<template>
  <div
    class="infofilm__banner banner"
  >
    <div class="banner__wrap">
      <div
        class="banner__bg"
        :style="{backgroundImage: 'url(' + bannerInfo.data.posterUrl + ')'}"
      />
    </div>

    <div class="banner__content">
      <div class="banner__preview">
        <img
          class=""
          :src="bannerInfo.data.posterUrl"
          alt=""
        >
      </div>

      <div class="banner__title">
        <h3>{{ bannerInfo.data.nameRu }}</h3>

        <button><span>❤</span>  Нравиться </button>
        <button class="banner__button">
          <svg
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M384,0H149.333c-41.237,0-74.667,33.429-74.667,74.667v426.667c0.001,4.316,2.603,8.207,6.592,9.856
              c1.291,0.538,2.676,0.813,4.075,0.811c2.831,0.005,5.548-1.115,7.552-3.115l120.448-120.619C260.48,434.795,325.44,499.2,332.416,507.136c3.261,4.906,9.882,6.24,14.788,2.979c1.775-1.18,3.155-2.864,3.964-4.835
              c0.687-1.195,0.978-2.576,0.832-3.947v-448c0-17.673,14.327-32,32-32c5.891,0,10.667-4.776,10.667-10.667S389.891,0,384,0z"
            />
            <path
              fill="currentColor"
              d="M394.667,0L394.667,0c23.564,0,42.667,19.103,42.667,42.667v32c0,5.891-4.776,10.667-10.667,10.667
              H352l0,0V42.667C352,19.103,371.103,0,394.667,0z"
            />
          </svg>
        </button>

        <!-- <a
          target="_blank"
          v-if="trailerFilm.trailers"
          :href="trailerFilm.trailers[0].url"
          class="btn--trailer"
        > Смотерть трейлер </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBanner',
  props: {
    bannerInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.banner__wrap {
  overflow: hidden;
  height: 100%;
}

.banner {
  height: 400px;
  position: relative;
  z-index: 2;
}

.banner__content {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.banner__preview {
  max-width: 185px;
  max-height: 250px;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 40px;
  left: 90px;
  z-index: 5;
  overflow: hidden;
  box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size + 10
    fade(@colors__black, 50%);

  img {
    width: 100%;
    height: 100%;
  }
}

.banner__bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(100px);
  overflow: hidden;
}

.banner__title {
  text-align: left;
  margin: auto 20px;
  padding-left: 310px;
  padding-top: 70px;

  h3 {
    font-size: @font-size--large+ 5;
    // line-height: @line-height--normal;
    font-family: @font-family__sans__black;
    font-weight: 500;
    color: @colors__grays--lighter;
    margin-bottom: 30px;
  }

  button {
    position: absolute;
    bottom: 50px;
    background-color: fade(@colors__green, 80%);
    max-width: 300px;
    color: fade(@colors__grays--lighter, 70%);
    font-size: @font-size--normal;
    font-family: @font-family__sans;
    font-weight: 400;
    border-radius: @buttons__border-radius + 30px;
    padding: 5px 30px;
    transition: @transition-duration @transition-timing-function;
    box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
      fade(@colors__black, 20%);

    &:hover,
    &:focus,
    &:active {
      color: @colors__white;
      background-color: fade(@colors__green, 100%);
    }
  }

  .banner__button {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    bottom: 50px;
    margin-left: 230px;
    background-color: fade(@colors__blackPrimary, 80%);
    border-radius: @buttons__border-radius;
    padding: 10px;

    svg {
      width: @font-size--normal + 5;
    }

    &:hover,
    &:focus,
    &:active {
      color: @colors__white;
      background-color: fade(@colors__blackPrimary, 100%);
    }

    .acitve {
      color: @colors__yellow;
    }
  }
}
</style>
