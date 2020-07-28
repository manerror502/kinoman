<template>
  <!--sign window registr-->
  <form
    class="sign__login"
    @submit.prevent="onSubmit"
  >
    <h2>Блиц опрос 🤔</h2>

    <small
      v-if="$v.userName.$dirty && !$v.userName.required"
      class="invalid"
    >Поле Имя не должно быть пустым</small>
    <p>Ваше имя?</p>
    <input
      v-model.trim="userName"
      autofocus
      type="text"
      placeholder="Имя пользователя"
      :class="{ invalid: $v.userName.$dirty && !$v.userName.required }"
    >

    <small
      v-if="$v.email.$dirty && !$v.email.required"
      class="invalid"
    >Поле E-mail не должно быть пустым</small>
    <small
      v-else-if="$v.email.$dirty && !$v.email.email"
      class="invalid"
    >Введите коректный E-mail</small>

    <p>Ваша Электонная почта?</p>
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
      v-if="$v.age.$dirty && !$v.age.between"
      class="invalid"
    >Возраст должен быть от {{ $v.age.$params.between.min }} до {{ $v.age.$params.between.max }}</small>

    <p>Сколько вам лет?</p>
    <input
      v-model.trim.lazy="age"
      type="text"
      placeholder="Возраст"
      :class="{
        invalid:
          ($v.email.$dirty && !$v.email.between)
      }"
    >

    <small
      v-if="$v.password.$dirty && !$v.password.required"
      class="invalid"
    >Введите пароль</small>
    <small
      v-else-if="$v.password.$dirty && !$v.password.minLength"
      class="invalid"
    >Пароль должен быть {{ $v.password.$params.minLength.min }} символов
      сейчас он {{ password.length }}</small>

    <p>Ваш пароль? Я никому не расскажу!</p>
    <input
      v-model.trim="password"
      type="password"
      placeholder="Password"
      :class="{
        invalid:
          ($v.password.$dirty && !$v.password.required) ||
          ($v.password.$dirty && !$v.password.minLength),
      }"
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
      У меня уже есть аккаунт GaTeMan
    </router-link>
  </form>
</template>

<script>
// import { email, required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: 'Registr'
  // data: () => ({
  //   email: '',
  //   password: '',
  //   userName: '',
  //   age: 0
  // }),
  // validations: {
  //   email: { email, required },
  //   password: { required, minLength: minLength(8) },
  //   userName: { required },
  //   age: { between: between(0, 100) }
  // },
  // methods: {
  //   async onSubmit () {
  //     if (this.$v.$invalid) {
  //       this.$v.$touch()
  //       return
  //     }
  //     const formData = {
  //       email: this.email,
  //       password: this.password,
  //       userName: this.userName,
  //       age: this.age
  //     }

  //     try {
  //       await this.$store.dispatch('register', formData)
  //       this.$router.push('/')
  //     } catch (e) {}
  //   }
  // }
}
</script>

<style lang="less" scoped>

.login{
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.login__form{
  width: 100%;
  max-width: 500px;
  padding: 30px 20px;
  background-color: #555555;
  margin: auto;

}

.sign__login {
  text-align: center;
  position: relative;

  h2 {
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 20px;
  }

  small {
    color: #e83535;
    font-size: 16px;
    transition: 0.2s ease;
  }

  input {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    margin-top: 10px;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: #ffffff;
    border-radius: 24px;
    transition: 0.3s ease;

    &:focus {
      width: 280px;
      border-color: #2ecc71;
    }

    &.invalid {
      border: 2px solid #d91e1e;
    }
  }

  a {
    cursor: pointer;
    transition: 0.1s linear;
    color: #9e9e9e;
    text-decoration: underline;
    &:hover {
      color: #2ecc71;
    }
    &:focus {
      color: #2ecc71;
      outline: none;
    }
  }
}

.btn--login {
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: #ffffff;
  border-radius: 24px;
  transition: 0.3s ease;

  &:hover {
    background-color: #2ecc71;
  }

  &:focus {
    background-color: #2ecc71;
  }
}

.close {
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    transform: translateY(-10px);
  }
}
</style>
