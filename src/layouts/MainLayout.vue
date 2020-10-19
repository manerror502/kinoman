<template>
  <section
    class="page row justify-content-end no-gutters"
  >
    <!-- NavBar -->

    <aside
      class="navbar__container"
    >
      <Navbar />
    </aside>

    <!-- Контент -->
    <div class="content">
      <div class="row no-gutters h-0">
        <Header />
      </div>

      <main
        class="row no-gutters w-100"
      >
        <Loader
          v-if="loading"
          style="width: 100%; min-height: 100vh"
        />

        <router-view v-else />

        <MobileBar />
      </main>

      <!-- Search button -->
      <router-link
        to="/search"
        tag="a"
        active-class="active"
        class="btn app__search"
        v-scroll="handleScroll"
        :class="{fade: fadeSearch || $route.fullPath === '/search'}"
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

      <!-- Модальные окна -->
      <transition name="slide-fade">
        <Modal
          v-if="filmMenuOpen"
          v-scroll-lock="filmMenuOpen"
        >
          <MenuFilm />
        </Modal>
      </transition>
    </div>
  </section>
</template>

<script>
import Header from '@/components/app/Header.vue'
import Navbar from '@/components/app/NavBar.vue'
import MenuFilm from '@/components/app/MenuFilm.vue'
import Modal from '@/components/app/Modal.vue'
import MobileBar from '@/components/mobile/MobileBar'

import messages from '@/utils/messages'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Navbar,
    MenuFilm,
    Modal,
    MobileBar
  },
  data: () => ({
    loading: true,

    fadeSearch: false,
    scrollPrev: 0
  }),
  computed: {
    error () {
      return this.$store.getters.error
    },
    filmMenuOpen () {
      return this.$store.getters.menuFilmOpen
    }
  },
  async mounted () {
    await this.getBasicInfo()
    this.setLocalStorageInfo()
    this.loading = false
    this.$store.state.app.loading = false
  },
  methods: {
    getLocalStorageInfo () {
      // Получение Инфорамии о пользователе из локального хранилища
      if (!localStorage.infoUser) {
        return
      }

      const infoUser = JSON.parse(localStorage.getItem('infoUser'))
      this.$store.commit('setInfo', infoUser)
    },
    setLocalStorageInfo () {
      const infoUser = JSON.stringify(this.$store.getters.info)
      localStorage.setItem('infoUser', infoUser)
    },

    async getBasicInfo () {
      // Получение Инфорамии о пользователе из базы данных
      await this.getInfoUser()
      // Получаем фильтры для фильмов
      // Жанры, Страны
      await this.getFilters()
    },
    async getInfoUser () {
      // Получение информации о пользователе
      await this.$store.dispatch('fetchInfo')
    },
    async getFilters () {
      const filters = await this.$store.dispatch('getFiltersJSON')
      await this.$store.dispatch('setFilters', filters)
    },

    handleScroll () {
      const scroll = window.scrollY
      if (scroll > 20 && scroll > this.scrollPrev) {
        this.fadeSearch = true
      } else {
        this.fadeSearch = false
      }

      this.scrollPrev = scroll
    }
  },
  watch: {
    error (fbError) {
      this.$toast.error(
        messages[fbError.code] || messages[fbError] || 'Что-то пошло не так'
      )
      console.log(fbError)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/vars/_vars';

.page {
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.w-100 {
  width: 100%;
}

.h-0 {
  height: 0;
}

.content {
  max-width: calc(100% - 100px);
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: $border-radius__big;
  position: relative;
  z-index: 2;

  @media (max-width: $breackpoints__md) {
    margin: 0;
    max-width: 100%;
    border-radius: 0;
  }
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
  filter: blur(100px);
  width: 100%;
  height: 700px;

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
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  height: 5px;
  opacity: 0;
}

// Movie
.your__movie {
  padding-top: $padding__views;
  width: 100%;
}
</style>
