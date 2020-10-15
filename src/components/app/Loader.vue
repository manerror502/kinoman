<template>
  <div class="loader__container">
    <div
      class="loader"
      :class="color"
    />
  </div>
</template>

<script>
export default {
  name: 'Loader',
  computed: {
    color () {
      const colors = ['green', 'red', 'yellow']
      return colors[Math.floor(Math.random() * 3)]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.loader__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
