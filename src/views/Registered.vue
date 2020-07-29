<template>
  <!--sign window registr-->
  <form
    class="sign__login"
  >
    <h2>Создать аккаунт КиноMan</h2>

    <small>Поле Имя не должно быть пустым</small>
    <p>Ваше имя?</p>
    <input
      v-model.trim="userName"
      autofocus
      type="text"
      placeholder="Имя пользователя"
    >

    <small>Поле E-mail не должно быть пустым</small>
    <small>Введите коректный E-mail</small>

    <p>Ваша Электонная почта?</p>
    <input
      type="text"
      placeholder="Электонная почта"
    >

    <small>Возраст должен быть от до </small>

    <p>Сколько вам лет?</p>
    <input
      type="text"
      placeholder="Возраст"
    >

    <small>Введите пароль</small>
    <small>Пароль должен быть  символов
      сейчас он </small>

    <p>Ваш пароль? Я никому не расскажу!</p>
    <input
      type="password"
      placeholder="Password"
    >

    <button
      class="btn btn--login"
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
  </form>
</template>

<script>
export default {
  name: 'Registr'
}
</script>

<style lang="less" >
@import "@/assets/style/vars/vars.module";

.sign__login {
  text-align: center;
  position: relative;

  h2 {
    font-family: @font-family__sans;
    color: @colors__grays;
    font-size: @font-size--normal + 5;
    line-height: @line-height--large;
    color: @colors__grays--lighter;
    text-align: center;
    margin-bottom: 20px;
    box-shadow: @shadows__coords-x @shadows__coords-y @shadows__size
      fade(@colors__black, 20%);
  }

  small {
    display: none;
    color: @colors__red;
    font-size: @font-size--normal;
    transition: @transition-duration @transition-timing-function;

    &.invalid {
      display: block;
    }
  }

  input {
    font-family: @font-family__sans;
    font-size: @font-size--normal;
    width: 250px;
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    margin-top: 10px;
    text-align: center;
    border: @border-width + 1 solid @colors__primary;
    padding: 14px 10px;
    outline: none;
    color: @colors__white;
    border-radius: @border-radius__large;
    transition: @transition-duration @transition-timing-function;

    &:focus {
      width: 280px;
      border-color: @colors__green;
    }

    &.invalid {
      border: @border-width + 1 solid @colors__red;
    }
  }

  a {
    transition: @transition-duration @transition-timing-function;
    color: @colors__grays;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: @colors__green;
      outline: none;
    }
  }
}

.btn--login {
  font-family: @font-family__sans;
  font-size: @font-size--normal - 5;
  color: @colors__grays--lighter;
  display: block;
  margin: 20px auto;
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
