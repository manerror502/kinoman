<template>
  <div
    class="infofilm__banner banner"
    :class="{playlist: !param}"
  >
    <div class="banner__wrap">
      <div
        class="banner__bg"
        :style="{backgroundImage: 'url(' + bannerInfo.data.posterUrl + ')'}"
      />
    </div>

    <div class="container-fluid">
      <div class="banner__content">
        <div
          class="banner__preview"
        >
          <img
            :src="bannerInfo.data.posterUrl"
            alt=""
          >
        </div>

        <div class="banner__title">
          <h3>{{ bannerInfo.data.nameRu }}</h3>

          <div
            class="banner__buttoon-wrap"
            :key="counter"
            v-if="param"
          >
            <button
              @click.prevent="menuOpen"
            >
              <svg
                viewBox="0 0 290 290"
              >
                <path
                  fill="currentColor"
                  d="M255,110c-19.299,0-35,15.701-35,35s15.701,35,35,35s35-15.701,35-35S274.299,110,255,110z"
                />
                <path
                  fill="currentColor"
                  d="M35,110c-19.299,0-35,15.701-35,35s15.701,35,35,35s35-15.701,35-35S54.299,110,35,110z"
                />
                <path
                  fill="currentColor"
                  d="M145,110c-19.299,0-35,15.701-35,35s15.701,35,35,35s35-15.701,35-35S164.299,110,145,110z"
                />
              </svg>
            </button>
          </div>
        </div>
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
  },
  data: () => ({
    filmsLike: [],
    filmsBookmarks: [],
    filters: null,
    counter: 0,

    fade: false,
    scrollPrev: 0
  }),
  computed: {
    param () {
      if (this.$route.params.id) {
        return true
      } else {
        return false
      }
    }
  },
  async mounted () {},
  methods: {
    async menuOpen () {
      const filmInfo = this.bannerInfo.data
      await this.$store.dispatch('setMenuFilm', filmInfo)
      await this.$store.dispatch('targetMenuFilm')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.banner__wrap {
  overflow: hidden;
  height: 100%;
}

.banner {
  height: 400px;
  position: relative;
  z-index: 2;
  transition: $transition-duration $transition-timing-function;

  &.playlist {
    .banner__preview {
      max-width: 200px;
      max-height: 215px;
    }
  }

  @media (max-width: $breackpoints__sm) {
    height: 600px;

    &.playlist {
      height: 450px;

      .banner__title {
        top: 70%;
      }
    }
  }
}

.banner__content {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100%);
  height: 100%;
  margin-left: auto;

  @media (max-width: $breackpoints__md) {
    width: 100%;
  }
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

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: $breackpoints__sm) {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
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
    font-size: $font-size--large + 5;
    font-family: $font-family__sans;
    @include adaptiv-font($size--large + 5, $size--normal + 5);
    font-weight: 500;
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (max-width: $breackpoints__sm) {
    padding: 0;
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    // white-space: nowrap;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    line-height: $line-height--normal;
    padding: 0 10px;

    h3 {
      margin-bottom: 10px;
      line-height: $line-height--normal + 10;
    }
  }
}

.banner__buttoon-wrap {
  position: absolute;
  bottom: 50px;

  button {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;
    padding: 10px;
    border-radius: $buttons__border-radius;
    max-width: 300px;
    font-size: $font-size--normal;
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__medium;
    transition: $transition-duration $transition-timing-function;
    // box-shadow: $shadows__coords-x $shadows__coords-y $shadows__size
    //   fade($colors__black, 20%);

    svg {
      width: $font-size--normal + 20;
    }

    &:active {
      transform: scale(1.2);
    }
  }

  @media (max-width: $breackpoints__sm) {
    position: relative;
    padding-top: 50px;
    text-align: center;

    button {
      margin: 0;
    }
  }
}
</style>
