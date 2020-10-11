<template>
  <div
    class="page"
  >
    <transition
      name="fade"
      mode="in-out"
    >
      <div
        class="row no-gutters justify-content-end"
      >
        <aside
          class="navbar__container"
        >
          <Navbar />
        </aside>

        <div class="col-lg-12 no-padding">
          <div class="row no-gutters">
            <div
              class="header__container col-lg-12 no-padding"
            >
              <Header />
            </div>
          </div>

          <div
            class="row no-gutters"
          >
            <main
              class="row no-gutters w-100"
            >
              <Loader
                v-if="loading"
                style="width: 100%; min-height: 100vh"
              />

              <router-view v-else />
            </main>
          </div>
        </div>
      </div>
    </transition>

    <router-link
      to="/search"
      tag="button"
      active-class="active"
      class="btn app__search"
      v-scroll="handleScroll"
      :class="{fade: fadeSearch}"
    >
      <svg viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M181.341,0C81.352,0,0.008,81.344,0.008,181.333s81.344,181.333,181.333,181.333s181.333-81.344,181.333-181.333
                    S281.331,0,181.341,0z M181.341,341.333c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160
                    S269.576,341.333,181.341,341.333z"
        />
        <path
          fill="currentColor"
          d="M508.872,493.803L309.555,294.485c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l199.317,199.317
                    c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115C513.032,504.725,513.032,497.963,508.872,493.803z"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
import Header from '@/components/app/Header.vue'
import Navbar from '@/components/app/NavBar.vue'

// import messages from '@/utils/messages'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Navbar
  },
  data: () => ({
    loading: true,

    fadeSearch: false,
    scrollPrev: 0
  }),
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  async mounted () {
    // Получение информации о пользователе
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
    this.loading = false
    await this.getFilters()
  },
  methods: {
    async getFilters () {
      const filters = await this.$store.dispatch('getFiltersJSON')
      await this.$store.dispatch('setFilters', filters)
    },
    handleScroll () {
      const scroll = window.scrollY
      if (scroll > 200 && scroll > this.scrollPrev) {
        this.fadeSearch = true
      } else {
        this.fadeSearch = false
      }

      this.scrollPrev = scroll
    }
  },
  watch: {
    error (fbError) {
      // this.$toast.error(messages[fbError.code] || 'Что-то пошло не так')
      console.log(fbError)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.page {
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.w-100 {
  width: 100%;
}

.items {
  max-width: 100%;
  width: 100%;
  margin-top: 44px;
}

.items__title {
  @include adaptiv-font($size--large, $size--normal + 10);
  font-family: $font-family__sans;
  user-select: none;
  margin-bottom: 23px;
}

.blur__img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(50px);
  width: 100%;
  height: 500px;

  &::after {
    content: '';
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(15, 15, 15, 1) 0%,
      rgba(15, 15, 15, 0.6) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}

// lazyload
.more {
  display: block;
  height: 5px;
  opacity: 0;
}
</style>
