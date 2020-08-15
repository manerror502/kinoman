<template>
  <div
    class="menu"
    ref="menu"
  >
    <!-- <div class="menu__header">
      <a class="menu__title">
        <h5>Вверх</h5>
      </a>
    </div> -->
    <div class="menu__button">
      <button class="btn">
        <span>
          <svg viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                C512,93.417,453.532,30,376,30z"
            />
          </svg>
        </span>
        Нравиться
      </button>
      <button class="btn">
        <span>
          <svg viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,448
              c-105.865,0-192-86.135-192-192c0-40.406,12.25-78.604,35.542-111.198l267.656,267.656C334.604,435.75,296.406,448,256,448z
              M412.458,367.198L144.802,99.542C177.396,76.25,215.594,64,256,64c105.865,0,192,86.135,192,192
              C448,296.406,435.75,334.604,412.458,367.198z"
            />
          </svg>
        </span>
        Не нравиться
      </button>
      <button class="btn">
        <span>
          <svg viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M327.68,0H96.256c-22.528,0-40.96,18.432-40.96,40.96v357.376c0,9.728,5.632,18.944,14.336,23.04
              c9.216,4.096,19.456,3.072,27.136-3.072l0.512-0.512l114.688-96.768l114.688,96.768l0.512,0.512
              c4.608,3.584,10.24,5.632,15.872,5.632c3.584,0,7.68-1.024,11.264-3.072c8.704-4.096,14.336-13.312,14.336-23.04V40.96
              C368.64,18.432,350.208,0,327.68,0z"
            />
          </svg>
        </span>
        В закладки
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  mounted () {},
  methods: {}
}
</script>

<style lang="less">
@import "@/assets/style/vars/vars.module";

.menu {
  display: flex;
  flex-direction: column;
  width: 300px;
  position: absolute;
  right: 100%;
  top: 0;
  z-index: 4;
  background-color: @colors__blackGrays;
  border-radius: @border-radius__small;
  padding: 5px;
}

.menu__header {
  display: flex;
  align-items: center;
}

.menu__title {
  width: 100%;
  padding-bottom: 5px;
  border-bottom: @border-width solid fade(@colors__grays, 30%);

  h5 {
    font-size: @font-size--normal + 10;
    font-family: @font-family__sans;
    font-weight: 700;
    line-height: @line-height--normal + 7;
    color: @colors__grays--lighter;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.menu__button {
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  button {
    display: inline-flex;
    padding: 0 10px;
    align-items: center;
    text-align: left;
    font-size: @font-size--normal;
    line-height: @line-height--normal + 7;
    font-family: @font-family__sans;
    font-weight: 400;
    color: @colors__grays--lighter;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: @transition-duration @transition-timing-function;
    border-radius: @border-radius__small - 4;

    span {
      display: inline-flex;
      height: 100%;
      margin-right: 10px;
      svg {
        width: 30px;
      }
    }

    &:hover,
    &:focus,
    &:active {
      background-color: fade(#fff, 10%);
      color: @colors__white;
    }

    &:nth-child(1) {
      color: @colors__green;

      &:hover,
      &:focus,
      &:active {
        background-color: @colors__green;
        color: @colors__white;
      }
    }

    &:nth-child(2) {
      color: @colors__red;

      &:hover,
      &:focus,
      &:active {
        background-color: @colors__red;
        color: @colors__white;
      }
    }
  }
}
</style>
