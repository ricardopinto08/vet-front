<template>
    <div>
      <h2>Log In</h2>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your username"
          v-model="credentials.user"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="credentials.password"
        >
      </div>
      <button class="btn btn-primary" @click="submit()">Access</button>
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
        console.log(this.credentials);
        var credentials = {
          user: this.credentials.user,
          password: this.credentials.password
        }
        this.$http.post('http://localhost:3000/v1/auth/',this.credentials)
            .then(response =>{
              this.isLogged=true;
              eventBus.$emit('someoneSignedIn', this.isLogged);
              sessionStorage.setItem('token', response.body.token);
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
