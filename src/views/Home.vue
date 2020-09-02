<template>
  <div class="row no-gutters">
    <Intro />

    <section class="playlists">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3 class="playlists__title">
              Новые релизы
            </h3>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <NewRelease />
          </div>
        </div>
      </div>
    </section>

    <section class="playlists">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3 class="playlists__title">
              Специально для вас
            </h3>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <Recommends />
          </div>
        </div>
      </div>
    </section>

    <Modal v-if="modal">
      <div class="modal__dialog">
        <div class="modal__header">
          <div class="modal__img">
            <svg viewBox="0 0 512 512">
              <g><g><g><g><g><g><g><g><g><path
                d="m512 256c0-141.385-114.615-256-256-256s-256 114.615-256 256c0 86.707 43.115 163.335 109.067 209.644h293.866c65.952-46.309 109.067-122.937 109.067-209.644z"
                fill="#ffce00"
              /></g></g></g></g></g></g></g></g><path
                d="m512 256c0-3.383-.066-6.751-.196-10.103l-83.239-83.239-5.001 7.911-88.699-88.699-8.446 36.513-36.513-36.513-9.073 35.886-35.886-35.886-9.685 36.112-32.573-32.572-11.422 131.341-107.833 26.052 222.841 222.841h96.662c65.951-46.309 109.063-122.938 109.063-209.644z"
                fill="#ffa300"
              /><g><path
                d="m189.539 159.726c-8.284 0-15-6.716-15-15v-52.099c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v52.099c0 8.285-6.716 15-15 15z"
                fill="#06bf51"
              /></g><g><path
                d="m234.498 159.726c-8.284 0-15-6.716-15-15v-52.099c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v52.099c0 8.285-6.716 15-15 15z"
                fill="#06bf51"
              /></g><g><path
                d="m279.457 159.726c-8.284 0-15-6.716-15-15v-52.099c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v52.099c0 8.285-6.716 15-15 15z"
                fill="#0d9b50"
              /></g><g><path
                d="m324.416 159.726c-8.284 0-15-6.716-15-15v-52.099c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v52.099c0 8.285-6.716 15-15 15z"
                fill="#0d9b50"
              /></g><g><path
                d="m299.004 326.206h-86.009v54.733l-77.123 20.372c-15.606 4.122-26.478 18.239-26.478 34.381v30.198c41.526 29.06 92.075 46.11 146.606 46.11s105.08-17.05 146.606-46.11v-30.198c0-16.142-10.872-30.259-26.478-34.381l-77.123-20.372v-54.733z"
                fill="#06bf51"
              /></g><g><path
                d="m402.606 435.692c0-16.142-10.872-30.259-26.479-34.381l-77.123-20.372v-54.733h-42.884v185.793c54.485-.025 104.99-17.07 146.485-46.109v-30.198z"
                fill="#0d9b50"
              /></g><g><g><path
                d="m83.434 242.803 107.512-17.593v-44.959l-107.512-17.592z"
                fill="#06bf51"
              /></g><g><path
                d="m428.566 242.803-107.512-17.593v-44.959l107.512-17.592z"
                fill="#0d9b50"
              /></g></g><g><path
                d="m256 375.726c-50.2 0-90.896-40.695-90.896-90.896v-157.357h181.792v157.357c0 50.201-40.696 90.896-90.896 90.896z"
                fill="#00d65b"
              /></g><g><path
                d="m256.121 127.473v248.251c50.145-.065 90.775-40.734 90.775-90.894v-157.357z"
                fill="#06bf51"
              /></g><g><g><g><circle
                cx="170.968"
                cy="208.595"
                fill="#fff"
                r="37.14"
              /></g><g><circle
                cx="170.968"
                cy="208.595"
                fill="#555a66"
                r="16.841"
              /></g></g><g><g><circle
                cx="341.031"
                cy="208.595"
                fill="#e9edf5"
                r="37.14"
              /></g><g><circle
                cx="341.031"
                cy="208.595"
                fill="#333940"
                r="16.841"
              /></g></g></g><g><g><circle
                cx="256"
                cy="208.595"
                fill="#fff"
                r="37.14"
              /></g><g><path
                d="m293.14 208.595c0-20.471-16.563-37.072-37.02-37.137v74.274c20.457-.065 37.02-16.665 37.02-37.137z"
                fill="#e9edf5"
              /></g><g><circle
                cx="256"
                cy="208.595"
                fill="#555a66"
                r="16.841"
              /></g><g><path
                d="m272.841 208.595c0-9.26-7.475-16.769-16.72-16.834v33.669c9.244-.066 16.72-7.575 16.72-16.835z"
                fill="#333940"
              /></g></g><g><g><path
                d="m233.52 334.378c-8.284 0-15-6.716-15-15v-30c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v30c0 8.284-6.715 15-15 15z"
                fill="#06bf51"
              /></g><g><path
                d="m278.48 334.378c-8.284 0-15-6.716-15-15v-30c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v30c0 8.284-6.716 15-15 15z"
                fill="#0d9b50"
              /></g></g></g>
            </svg>
          </div>
        </div>

        <div class="modal__text">
          <p>
            Спасибо за регистрацию! <br>
            Теперь рекомендации будут подбирать вам интересное и увелекательное кино. В скором времени вам откроются плейлисты.
          </p>
        </div>

        <div class="modal__button">
          <button @click.prevent="modalClose">
            Понятно
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import NewRelease from '@/components/Main/NewRelease'
// import Collections from '@/components/Main/Collections'
import Intro from '@/components/Main/Intro'
import Recommends from '@/components/app/Recommends'
import Modal from '@/components/app/Modal.vue'

export default {
  name: 'Home',
  data: () => ({}),
  components: {
    NewRelease,
    Intro,
    Modal,
    Recommends
  },
  computed: {
    modal () {
      return this.$route.query.user
    }
  },
  methods: {
    modalClose () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/vars/_vars";

.modal__dialog {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  border-radius: $border-radius__small;
  margin: auto;
}

.modal__header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.modal__img {
  max-width: 140px;
  width: 100%;
}

.modal__text {
  p {
    text-align: center;
    font-family: $font-family__sans;
    font-size: $font-size--normal + 5;
  }
}

.modal__button {
  display: flex;
  margin-top: 20px;
  button {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    border-radius: $buttons__border-radius;
    padding: 10px 50px;
    margin: 0 auto;
    transition: $transition-duration $transition-timing-function;
    text-align: center;
    font-family: $font-family__sans;
    font-size: $font-size--normal + 5;
  }
}
</style>
