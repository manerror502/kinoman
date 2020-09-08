<template>
  <section
    class="hello"
  >
    <div class="hello__logo">
      <img
        src="./../../assets/img/logo/logo.png"
        alt=""
        class=" img "
      >
    </div>
    <hgroup
      class="hello__text"
    >
      <h3>Добрый день</h3>
      <h2>Влад</h2>
    </hgroup>

    <div class="hello__icon">
      <img
        src="../../assets/img/alien/ufo.svg"
        alt=""
        class="ufo img"
      >
      <img
        src="../../assets/img/navBar/popcorn.svg"
        alt=""
        class="popcorn img"
      >
      <img
        src="../../assets/img/navBar/ball.svg"
        alt=""
        class="ball img"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoaderHello',
  data: () => ({
    times: {
      morning: {
        title: 'утро',
        bgImage:
          'https://firebasestorage.googleapis.com/v0/b/kinoman-1cc31.appspot.com/o/app%2FloaderHelloImg%2Fmorning.jpg?alt=media&token=43dfd336-9dc2-465e-a6c2-c4d1e8369922'
      }
    }
  })
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.hello {
  width: 100vw;
  height: 100vh;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  user-select: none;
}

@keyframes image {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.4);
  }
}

.hello__text {
  margin: auto 200px;
  width: 100%;
  font-family: $font-family__sans;
  font-weight: $font-weight__sans__regular;
  @include adaptiv-font($size--large, $size--normal);
  text-align: right;
  color: #e1e3e7;

  h3 {
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__regular;
  }
}

.hello__logo {
  position: absolute;
  top: 50px;
  left: 100px;
  max-width: 350px;
}

.hello__icon {
  .ufo {
    max-width: 300px;
    position: absolute;
    top: 40px;
    right: 30px;
    animation: ufo 5s infinite alternate ease-in-out forwards;
  }

  .popcorn {
    max-width: 300px;
    position: absolute;
    top: 50%;
    left: 200px;
    transform: translateY(-50%);
    animation: popcorn 5s infinite alternate ease-in-out forwards;
  }

  .ball {
    max-width: 300px;
    position: absolute;
    top: 50%;
    left: 200px;
    margin-left: 400px;
    transform: translateY(-50%);
    animation: popcorn 5s infinite alternate ease-in-out forwards;
  }
}

@keyframes ufo {
  0% {
    position: absolute;
    top: -100px;
    right: -100px;
  }
  50% {
    position: absolute;
    top: 40px;
    right: 30px;
  }
  60% {
    transform: translate3d(-10px, -10px, 0);
  }
  70% {
    transform: translate3d(-10px, -20px, 0);
  }
  80% {
    transform: translate3d(-10px, -10px, 0);
  }
  90% {
    transform: translate3d(0px, 0px, 0);
  }
  100% {
    transform: translate3d(-10px, -10px, 0);
  }
}
</style>
