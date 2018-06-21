<template lang="html">
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact><a>Inicio</a></router-link>
    <button v-if="!isLogged" @click="logIn" class="btn btn-primary" exact>Iniciar sesión</button>
    <router-link to="/changePassword" v-if="isLogged" tag="li" active-class="active" exact><a>Cambiar contraseña</a></router-link>
    <button v-if="isLogged" @click="logOut" class="btn btn-primary" exact>Cerrar sesión</button>
  </ul>
</template>


<script>
import { eventBus } from '../main'
import Dropdown from 'bp-vuejs-dropdown';

export default {
  components: {
     Dropdown
   },
  methods: {
    logOut() {
      sessionStorage.removeItem('token');
      this.isLogged = false;
      eventBus.$emit('someoneSignedOut', this.isLogged);
      this.$router.push('/login');
    },
    logIn() {
      this.$router.push('/login');
    }
  },
  data: function () {
    return {
      isLogged: sessionStorage.getItem('token') !== null
    };
  },
  created() {
    eventBus.$on('someoneSignedIn', (isLogged) =>{
      //console.log(sessionStorage.getItem('token'));
      this.isLogged = isLogged;
    });
  }
}
</script>

<style lang="css">
</style>
