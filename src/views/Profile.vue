<template>
  <section class="profile">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col">
          <div class="profile__name">
            <h3>{{ name }}</h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <router-link
            tag="a"
            to="/profile/preferences"
            class="profile__item large"
          >
            <div class="profile__item-img col-3">
              <img
                src="../assets/img/profile/profile1.jpg"
                alt=""
                class="img"
              >
            </div>

            <div class="col">
              <h4>Ваши предпочтения</h4>
              <p>
                Узнайте на сколько точно мы подобрали ваши интересы в кино
              </p>
            </div>

            <button class="profile__item-btn">
              <svg viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
                  H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
                  c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
                  "
                />
              </svg>
            </button>
          </router-link>
        </div>

        <div class="col-6">
          <label
            for="theme"
            class="profile__item large"
          >
            <div class="profile__item-img col-3">
              <img
                src="../assets/img/profile/profile2.jpg"
                alt=""
                class="img"
              >
            </div>

            <div class="col">
              <h4>Тема</h4>
              <p>
                Выберите цветовую тему которая нравиться именно вам
              </p>
            </div>

            <button
              id="theme"
              class="profile__item-btn"
              @click="modalOpen"
            >
              <svg viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
                  H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
                  c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
                  "
                />
              </svg>
            </button>

            <div
              class="profile__menu"
              v-if="menu"
            >
              <button
                v-for="theme in theme.themeArr"
                :key="theme.id"
                @click.prevent="themeSet(theme.id)"
              >{{ theme.name }}</button>

            </div>
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-8">
          <label
            for="checkbox"
            class="profile__item"
          >
            <div class="profile__item-img col-2">
              <img
                src="../assets/img/profile/profile3.jpg"
                alt=""
                class="img"
              >
            </div>

            <div class="col">
              <h4>Получать уведомления</h4>
              <p>
                Мы присылаем сообщения о новый фильмах, сериалах и других важных вещах
              </p>
            </div>

            <div
              class="switch"
            >
              <input
                type="checkbox"
                id="checkbox"
                v-model="notifications"
                @click="notificationsSet"
              >
              <div class="slider round" />
            </div>
          </label>
        </div>

        <div class="col-8">
          <label
            for="checkbox1"
            class="profile__item"
          >
            <div class="profile__item-img col-2">
              <img
                src="../assets/img/profile/profile4.jpg"
                alt=""
                class="img"
              >
            </div>

            <div class="col">
              <h4>Добавить в начало</h4>
              <p>
                Все новые фильмы и сериалы в плейлисте будут появляться в начале списка
              </p>
            </div>

            <div
              class="switch"
            >
              <input
                type="checkbox"
                id="checkbox1"
                v-model="inTheBeginning"
                @click="reverseSet"
              >
              <div class="slider round" />
            </div>
          </label>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-2">
          <label
            for="logout"
            class="profile__item"
          >

            <div class="col">
              <h4 class="logout">Выйти</h4>
            </div>

            <button
              id="logout"
              class="profile__item-btn"
              @click="logout"
            >
              <svg viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
                  H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
                  c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
                  "
                />
              </svg>
            </button>

          </label>
        </div>
      </div>
    </div>

    <Modal v-if="modal">
      <div class="theme">
        <h5>Выберите тему</h5>
        <div class="theme__wrap">
          <button
            v-for="them in theme.themeArr"
            :key="them.id"
            @click.prevent="themeSet(them.id)"
            :class="{active: theme.currentTheme === them.id}"
          >
            {{ them.name }}
          </button>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script>
import Modal from '@/components/app/Modal.vue'

import { mapState } from 'vuex'

export default {
  name: 'Profile',
  data: () => ({
    infoUser: null,
    menu: false
  }),
  components: {
    Modal
  },
  computed: {
    ...mapState(['theme']),
    name () {
      return this.$store.getters.info.name
    },
    modal () {
      const modalOpen = this.$store.state.app.modalTheme
      return modalOpen
    },

    notifications () {
      return this.$store.getters.info.settings.notifications
    },
    inTheBeginning () {
      return this.$store.getters.info.settings.inTheBeginning
    }
  },

  methods: {
    async themeSet (id) {
      const themeArr = this.$store.state.theme.themeArr
      const currentTheme = themeArr.filter(theme => theme.id === id)[0]

      await this.$store.dispatch('setTheme', currentTheme)
      this.$store.state.app.modalTheme = false
    },
    async notificationsSet () {
      const notifications = {
        notifications: !this.notifications
      }
      try {
        await this.$store.dispatch('uppdateNotifications', notifications)
        this.$store.getters.info.settings.notifications = !this.notifications
      } catch (e) {
        this.$toast.error(e)
      }
    },
    async reverseSet () {
      const reverse = {
        inTheBeginning: !this.inTheBeginning
      }
      try {
        await this.$store.dispatch('uppdateReverse', reverse)
        this.$store.getters.info.settings.inTheBeginning = !this.inTheBeginning
      } catch (e) {
        this.$toast.error(e)
      }
    },
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    },

    modalOpen () {
      this.$store.state.app.modalTheme = true
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.profile {
  padding-top: 100px;
  width: 100%;
}

.profile__name {
  display: flex;
  width: 100%;
  margin-bottom: 50px;

  h3 {
    font-family: $font-family__sans;
    font-size: $font-size--large + 10;
    line-height: $line-height--large;
  }
}

.profile__item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: $border-radius__small;
  overflow: hidden;

  text-align: left;
  transition: $transition-duration $transition-timing-function;
  cursor: pointer;
  user-select: none;

  h4 {
    font-family: $font-family__sans;
    font-weight: $font-weight__sans__regular;
    font-size: $font-size--normal + 10;
    line-height: $line-height--normal;
    margin-bottom: 20px;
  }

  p {
    font-family: $font-family__sans;
    font-size: $font-size--normal;
    line-height: $line-height--normal;
  }

  &.large {
    margin-bottom: 50px;
    padding: 20px;

    h4 {
      font-weight: $font-weight__sans__bold;
      font-size: $font-size--large;
      margin-bottom: 30px;
    }
  }
}

.profile__item-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  img {
    border-radius: 50%;
    overflow: hidden;
  }
}

.profile__item-btn {
  display: flex;
  height: 100%;
  svg {
    width: 35px;
  }
}

.profile__menu {
  position: absolute;
  bottom: 40px;
  right: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
  z-index: 4;
  border-radius: $border-radius__small;
  padding: 5px;

  button {
    display: inline-flex;
    padding: 0 10px;
    align-items: center;
    text-align: left;
    font-size: $font-size--normal;
    line-height: $line-height--normal + 7;
    font-family: $font-family__sans;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: $transition-duration $transition-timing-function;
    border-radius: $border-radius__small - 4;

    &:hover,
    &:focus,
    &:active {
      background-color: fade-out(#fff, 0.9%);
    }
  }
}

.theme {
  max-width: 700px;
  width: 100%;
  margin: auto;
  padding: 20px;
  border-radius: $border-radius__large;
  box-shadow: $shadows__coords-x - 1 $shadows__coords-y - 3 $shadows__size
    fade-out(#000, 0.8%);

  h5 {
    font-family: $font-family__sans;
    font-size: $font-size--normal + 5;
    font-weight: $font-weight__sans__regular;
    text-align: center;
    margin-bottom: 20px;
  }
}

.theme__wrap {
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    opacity: 0.5;
    display: inline-flex;
    height: 300px;
    width: 200px;
    border-radius: $buttons__border-radius;
    margin: 0 20px;
    transition: $transition-duration $transition-timing-function;
    text-align: center;
    align-items: flex-end;
    justify-content: flex-start;
    font-family: $font-family__sans;
    font-size: $font-size--normal + 5;
    font-weight: $font-weight__sans__regular;
    color: #fff;
    box-shadow: $shadows__coords-x - 1 $shadows__coords-y - 3 $shadows__size
      fade-out(#000, 0.5%);
    text-shadow: $shadows__coords-x - 1 $shadows__coords-y - 3 $shadows__size
      fade-out(#000, 0.8%);

    &:nth-child(1) {
      background: rgb(181, 193, 241) url("../assets/img/profile/ice.jpg")
        no-repeat center;
      background-size: cover;
    }

    &:nth-child(2) {
      background: rgb(26, 55, 168) url("../assets/img/profile/sonic.jpg")
        no-repeat center;
      background-size: cover;
    }

    &:nth-child(3) {
      background: rgb(43, 44, 49) url("../assets/img/profile/black.jpg")
        no-repeat center;
      background-size: cover;
    }

    &:hover,
    &:focus {
      opacity: 1;
      background-position: -20px 0;
    }

    &.active {
      opacity: 1;
      background-position: -20px 0;
    }
  }
}

// switch
.switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.switch input {
  display: none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: $transition-duration $transition-timing-function;
  width: 26px;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
