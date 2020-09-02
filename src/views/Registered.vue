<template>
  <!--sign window registr-->
  <form
    class="sign__login"
    @submit.prevent="onSubmit"
  >
    <h2>Создать аккаунт КиноMan</h2>

    <div class="sign__wrap">
      <small v-if="$v.userName.$dirty && !$v.userName.required">Поле Имя не должно быть пустым</small>
      <input
        v-model.trim="userName"
        autofocus
        type="text"
        placeholder="Имя пользователя"
        :class="{ invalid: $v.userName.$dirty && !$v.userName.required }"
      >

      <small v-if="$v.email.$dirty && !$v.email.required">Поле E-mail не должно быть пустым</small>
      <small v-else-if="$v.email.$dirty && !$v.email.email">Введите коректный E-mail</small>
      <input
        v-model.trim="email"
        type="text"
        placeholder="Электонная почта"
        :class="{
          invalid:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
      >

      <small
        v-if="$v.password.$dirty && !$v.password.required"
      >Введите пароль</small>
      <small
        v-else-if="$v.password.$dirty && !$v.password.minLength"
      >Пароль должен быть {{ $v.password.$params.minLength.min }} символов
        сейчас он {{ password.length }}</small>

      <input
        v-model.trim="password"
        type="password"
        placeholder="Пароль"
        :class="{
          invalid:
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength),
        }"
      >

      <button
        class=" btn--login  btn"
        type="submit"
      >
        Зарегистрироваться
      </button>

      <router-link
        tag="a"
        to="/login"
      >
        У меня уже есть аккаунт КиноMan
      </router-link>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Registr',
  data: () => ({
    email: '',
    password: '',
    userName: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) },
    userName: { required }
  },
  methods: {
    async onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        userName: this.userName
      }

      try {
        await this.$store.dispatch('registr', formData)
        this.$router.push('/?user=new')
      } catch (e) {}
    }
  }
}
</script>

<style lang="scss" >
@import "@/assets/style/vars/_vars";

.btn--login {
  font-family: $font-family__sans;
  font-size: $font-size--normal - 5;
  display: block;
  margin: 20px 0;
  text-align: center;
  padding: 14px 70px;
  outline: none;
  border-radius: $border-radius__large;
  transition: $transition-duration $transition-timing-function;
    @media (max-width: $breackpoints__sm) {
    padding: 14px 50px;
  }
}
</style>
