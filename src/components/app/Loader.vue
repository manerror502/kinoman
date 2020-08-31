<template>
  <div class="loader">
    <svg>
      <circle
        cx="70"
        cy="70"
        r="70"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">
.loader {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;

  svg {
    position: relative;
    width: 150px;
    height: 150px;
    animation: rotate 2s linear infinite;

    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke-width: 10;
      stroke-linecap: round;
      stroke: #00a1ff;
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      transform: translate(5px, 5px);
      animation: animate 4s linear infinite;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate {
  0%,
  100% {
    stroke-dashoffset: 440;
  }
  50% {
    stroke-dashoffset: 0;
  }

  50.1% {
    stroke-dashoffset: 880;
  }
}
</style>
