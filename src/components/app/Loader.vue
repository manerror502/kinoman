<template>
  <div class="loader__container">
    <div class="loader" />
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">
.loader__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 8px solid #f3f3f300;
  border-top: 8px solid #3498db;
  border-right: 8px solid #3498db;
  border-bottom: 8px solid #3498db;
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
