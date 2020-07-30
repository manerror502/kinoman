<template>
  <form
    class="sign__login"
    @submit.prevent="submitHandler"
  >
    <h2>Войти в аккаунт КиноMan</h2>

    <div class="sign__wrap">
      <small
        v-if="$v.email.$dirty && !$v.email.required"
      >Поле E-mail не должно быть пустым</small>
      <small
        v-else-if="$v.email.$dirty && !$v.email.email"
      >Введите коректный E-mail</small>
      <input
        autofocus
        type="text"
        placeholder="Электронная почта"
        v-model.trim="email"
        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
      >
      <small
        v-if="$v.password.$dirty && !$v.password.required"
      >Введите пароль</small>
      <input
        type="password"
        placeholder="Пароль"
        v-model.trim="password"
        :class="{invalid: $v.password.$dirty && !$v.password.required}"
      >

      <button
        class="btn btn--login"
        type="submit"
      >
        Войти
      </button>

      <router-link
        tag="a"
        to="/registered"
      >
        У меня ещё нет аккаунт КиноMan
      </router-link>
    </div>
  </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: { email, required },
    password: { required }
  },

  mounted () {
    if (messages[this.$route.query.message]) {
      this.$toast.open({
        message: messages[this.$route.query.message],
        type: 'info',
        duration: 5000,
        dismissible: true
      })
    }
  },
  methods: {
    submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }

      console.log(formData)

      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" >
@import "@/assets/style/vars/vars.module";

.btn--login {
  font-family: @font-family__sans;
  font-size: @font-size--normal - 5;
  color: @colors__grays--lighter;
  display: block;
  margin: 20px 0;
  text-align: center;
  border: @border-width + 1 solid @colors__green;
  padding: 14px 70px;
  outline: none;
  border-radius: @border-radius__large;
  transition: @transition-duration @transition-timing-function;

  &:hover {
    background-color: @colors__green;
  }

  &:focus {
    background-color: @colors__green;
  }
}
</style>
