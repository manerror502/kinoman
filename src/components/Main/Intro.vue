<template>
  <section
    class="intro"
  >
    <a
      href=""
    >
      <div
        class="intro__image"
        :style="{backgroundImage: 'url(' + introFilm.images.backdrops[0].url + ')'}"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="intro__descr">
              <div class="row justify-content-between align-items-center">
                <div class="col-4  d-flex flex-column">
                  <div class="intro__wrap bg-c">
                    <h2 class="intro__title">
                      {{ introFilm.data.nameRu }}
                    </h2>
                    <p class="intro__text">
                      {{ introFilm.data.description }}
                    </p>

                    <ul class="intro__descr-item">

                      <li>Страна:
                        <span
                          v-for="countries in introFilm.data.countries"
                          :key="countries.country"
                        >/ {{ countries.country }}
                        </span>
                      </li>

                      <li>Год:
                        <span>{{ introFilm.data.year }}
                        </span>
                      </li>
                      <li>Жанр:
                        <span
                          v-for="genre in introFilm.data.genres"
                          :key="genre.genre"
                        >/ {{ genre.genre }} </span>
                      </li>

                      <li>КиноПоиск:
                        <span>{{ introFilm.rating.rating }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Intro',
  data: () => ({}),
  computed: {
    ...mapGetters(['introFilm'])
  }
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

a {
  text-decoration: none;
}

.border-r {
  border-right: @border-width solid @colors__border;
}

.bg-c {
  background-color: fade(#fff, 10%);
  padding-bottom: 20px;
}

.intro {
  width: 100%;
  height: 80vh;
  box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
    fade(@colors__black, 50%);
  overflow: hidden;
  background-color: @colors__primary3;
}

.intro__image {
  padding-top: 80px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  transform: scale(1.2);
  animation: intro-scale 3s ease-in-out 1 forwards;
  // background-attachment: fixed;
  // border-radius: 0 0 @border-radius__small @border-radius__small;

  &::after {
    content: "";
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(4, 4, 4, 0.7) 35%,
      rgba(9, 9, 9, 0) 60%
    );

    animation: opacity-animate 0.2s 3s ease-in-out 1 forwards;
  }
}

.intro__wrap {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

.intro__descr {
  width: 100%;
  opacity: 0;
  position: relative;
  z-index: 2;
  padding: 10px 0;
  animation: opacity-animate 0.2s 3s ease-in-out 1 forwards;
  text-align: center;
}

.intro__title {
  font-family: "Product Sans Medium";
  font-weight: 500;
  font-size: @font-size--large;
  line-height: @line-height--large - 12px;
  color: @colors__grays--lighter;
  margin-bottom: 10px;
  letter-spacing: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.intro__text {
  display: -webkit-box;
  font-family: "Product Sans Light";
  font-weight: 300;
  line-height: @line-height--small + 5px;
  font-size: @font-size--small + 10px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: fade(@colors__grays--lighter, 90%);
}

.intro__descr-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  border-top: @border-width solid fade(@colors__border, 50%);
  max-width: 100%;
  padding: 10px;
  margin-top: 10px;
  color: @colors__white;
  font-size: @font-size--normal;

  li {
    font-family: "Product Sans Light";
    font-weight: 300;
    color: fade(@colors__grays--lighter, 90%);
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      font-family: @font-family__sans;
      font-weight: 400;
      color: @colors__grays--lighter;
    }

    &:last-child {
      font-size: @font-size--normal + 5px;
      font-weight: 600;
      color: #f60;

      span {
        color: @colors__green;
      }
    }
  }
}

@keyframes intro-scale {
  to {
    transform: scale(1);
  }
}

@keyframes opacity-animate {
  to {
    opacity: 1;
  }
}
</style>
