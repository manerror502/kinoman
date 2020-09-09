<template>
  <div class="collections">
    <div class="row justify-content-around">
      <router-link
        :to="'/collection/' + item.id"
        tag="a"
        v-for="item in collections.items"
        :key="item.id"
      >
        <div
          class="collection__item"
        >
          <h5>{{ item.title }}</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collections',
  data: () => ({
    collections: null
  }),
  computed: {},
  async created () {
    await this.getCollections()
  },
  methods: {
    getCollections () {
      this.collections = this.$store.getters.collections
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.collections {
  width: 100%;
  padding: 15px;
}

.collection__item {
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  max-width: 300px;
  max-height: 300px;
  width: 300px;
  height: 300px;
  background-image: $gradient__primary;
  border-radius: $border-radius__large;
  overflow: hidden;
  box-shadow: $shadows__coords-x $shadows__coords-y $shadows__size
    fade-out($colors__blackPrimary, 0.5%);
  transition: $transition-duration $transition-timing-function;

  h5 {
    color: $colors__grays--lighter;
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__bold;
    font-size: $font-size--large;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
}
</style>
