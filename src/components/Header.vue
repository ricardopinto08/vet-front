<template lang="html">
  <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a>Inicio</a></router-link>
        <router-link to="/login" tag="li" v-if="!isLogged" active-class="active"><a>Login</a></router-link>
        <router-link to="/login" tag="li" v-if="isLogged" @click="logOut" active-class="active"><a>Log out</a></router-link>
    </ul>
</template>

<script>
import { eventBus } from '../main'
export default {
  methods: {
    logOut() {
      sessionStorage.removeItem('token');
      isLogged = false;
      eventBus.$emit('someoneSignedOut', this.isLogged);
    }
  },
  data: function () {
    return {
      isLogged: false
    };
  },
  created() {
    eventBus.$on('someoneSignedIn', (isLogged) =>{
      this.isLogged = isLogged;
    });
  }
}
</script>

<style lang="css">
</style>
