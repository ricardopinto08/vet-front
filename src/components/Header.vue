<template lang="html">
  <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a>Inicio</a></router-link>
        <router-link to="/login" tag="li" v-if="isLogged" active-class="active"><a>Login</a></router-link>
    </ul>
</template>

<script>
export default {
  methods: {
    isLogged() {
      return sessionStorage.getItem('token') !== undefined;
    }
  }
}
</script>

<style lang="css">
</style>
