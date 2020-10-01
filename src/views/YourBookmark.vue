<template>
  <div class="row no-gutters your__movie">
    <section class="items">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <BookmarkMovie />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BookmarkMovie from '@/components/YourBookmark/BookmarkMovie'

export default {
  name: 'YourMovie',
  components: {
    BookmarkMovie
  }
}
</script>

<style lang="less">
.your__movie {
  margin-top: 50px;
  width: 100%;
}
</style>
