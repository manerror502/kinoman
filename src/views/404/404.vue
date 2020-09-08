<template>
  <section class="undefined">
    <div class="container-fluid">
      <div class="row flex-column justify-content-center no-gutters">
        <div class="col">
          <div class="undefined__wrap">
            <img
              src="../../assets/img/alien/ufo.svg"
              alt=""
              class="img"
            >

            <h3 class="undefined__text">
              Нам некуда приземлиться, страница не найдена!
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '404'
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.undefined {
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  overflow-y: auto;
}

.undefined__wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.undefined__text {
  padding: 0 10px;
  font-family: $font-family__sans;
  font-size: $font-size--large + 5;
  line-height: $line-height--large;
  color: #fff;
  text-align: left;
  margin-bottom: 20px;
}
</style>
