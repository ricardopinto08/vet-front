<template>
    <div>
      <h2>Iniciar sesión</h2>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <label for="mail">Correo:</label>
        <input
          id="mail"
          type="text"
          class="form-control"
          placeholder="Correo"
          v-model="credentials.user"
        >
      </div>
      <div class="form-group">
        <label for="pass">Contraseña:</label>
        <input
          id="pass"
          type="password"
          class="form-control"
          placeholder="Contraseña"
          v-model="credentials.password"
        >
      </div>
      <button class="btn btn-primary" @click="submit()">Siguiente</button>
      <div class="">
        ¿Olvidaste tu contraseña?
      </div>
      <hr>
      <p>¿No estás registrado?</p>
      <router-link tag="li" to="/registerClient">
        <a>Registro para clientes</a>
      </router-link>
      <router-link tag="li" to="/registerVet">
        <a>Registro para veterinarios</a>
      </router-link>
    </div>
  </template>

  <script>
  import router from "../router/index"
  import { eventBus } from '../main'
  export default {
    data() {
      return {
        credentials: {
          user: '',
          password: ''
        },
        error: '',
        isLogged: false
      }
    },
    methods: {
      submit() {
        this.$http.post('http://localhost:3000/v1/auth/',this.credentials)
            .then(response =>{
              this.isLogged=true;
              eventBus.$emit('someoneSignedIn', this.isLogged);
              sessionStorage.setItem('token', response.body.token);
              sessionStorage.setItem('email', this.credentials.user);
              this.$router.push('/');
            }, error =>{
              console.log(error);
            });
      }
    },
    created() {
      eventBus.$on('someoneSignedOut', (isLogged) =>{
        this.isLogged = isLogged;
      });
    }

  }
  </script>
