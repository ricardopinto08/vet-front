<template lang="html">
  <ul class="nav nav-pills">
    <hr>
    <router-link to="/" tag="li" active-class="active" exact><a>Inicio</a></router-link>

    <router-link to="/myProfileClient" tag="li" v-if="isClient" active-class="active" exact><a>Mi perfil</a></router-link>
    <router-link to="/myProfileVet" tag="li" v-if="isVet" active-class="active" exact><a>Mi perfil</a></router-link>

    <router-link to="/myHorsesClient" tag="li" v-if="isClient" active-class="active" exact><a>Mis caballos</a></router-link>
    <router-link to="/myHorsesVet" tag="li" v-if="isVet" active-class="active" exact><a>Mis caballos</a></router-link>

    <router-link to="/changeVet" tag="li" v-if="isClient" active-class="active" exact><a>Reasignar caballo</a></router-link>

    <router-link to="/changePassword" v-if="isLogged" tag="li" active-class="active" exact><a>Cambiar contraseña</a></router-link>
    <button v-if="!isLogged" @click="logIn" class="btn btn-primary" exact>Iniciar sesión</button>
    <button v-if="isLogged" @click="logOut" class="btn btn-primary" exact>Cerrar sesión</button>
    <hr>
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
      sessionStorage.clear();
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
      isLogged: sessionStorage.getItem('token') !== null,
      isVet: sessionStorage.getItem('type') == "Vet",
      isClient: sessionStorage.getItem('type') == "Client"
    };
  },
  created() {
    eventBus.$on('someoneSignedIn', (isLogged) =>{
      console.log(sessionStorage.getItem('type'));
      this.isLogged = isLogged;
    });
  }
}
</script>

<style lang="css">
</style>
