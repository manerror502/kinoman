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

.banner{
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

  button,
  .btn--trailer {
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

  .btn--trailer {
    border-radius: @buttons__border-radius;
    background-color: fade(@colors__primary2, 60%);

    &:hover,
    &:focus,
    &:active {
      background-color: fade(@colors__primary2, 100%);
    }
  }
}
</style>
