<template>
    <div class="container">
      <h2>Iniciar sesión</h2>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <label for="mail">Correo:</label>
        <input
          id="mail"
          type="email"
          class="form-control"
          placeholder="Correo"
          v-model="credentials.user"
          required
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
          required
        >
      </div>
      <b-button id="logIn" variant="success" @click="submit()">Siguiente</b-button>
      <hr>
      <p>¿No estás registrado?</p>
      <router-link tag="li" to="/registerClient">
        <a>Registro para propietario</a>
      </router-link>
      <router-link tag="li" to="/registerVet">
        <a>Registro para veterinario</a>
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
        this.credentials.user=this.credentials.user.toLowerCase();
        this.$http.post('auth/',this.credentials)
            .then(response =>{
              console.info(response);
              this.isLogged=true;
              eventBus.$emit('someoneSignedIn', {isLogged: this.isLogged, type: response.body.type});
              sessionStorage.setItem('token', response.body.token);
              sessionStorage.setItem('type', response.body.type);
              sessionStorage.setItem('id', response.body.user.id);
              sessionStorage.setItem('email', response.body.user.email);
              sessionStorage.setItem('name', response.body.user.name);
              sessionStorage.setItem('lastname', response.body.user.lastname);
              sessionStorage.setItem('phone', response.body.user.phone);
              sessionStorage.setItem('hatchery', response.body.hatchery);
              this.$router.push('/myHorses'+sessionStorage.getItem("type"));
            }, error1 =>{
              this.error="Usuario o contraseña incorrecta";
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
