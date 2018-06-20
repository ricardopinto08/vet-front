<template lang="html">
  <div class="">
    <h2>Actualizar contraseña</h2>
    <div class="form-group">
      <label for="pass">Contraseña anterior:</label>
      <input
        id="pass"
        type="password"
        class="form-control"
        placeholder="Contraseña"
        v-model="password"
      >
    </div>
    <div class="form-group">
      <label for="passConfirm">Confirma contraseña anterior:</label>
      <input
        id="passConfirm"
        type="password"
        class="form-control"
        placeholder="Contraseña"
        v-model="passwordConfirm"
      >
    </div>
    <div class="form-group">
      <label for="pass">Contraseña nueva:</label>
      <input
        id="passNew"
        type="password"
        class="form-control"
        placeholder="Contraseña"
        v-model="passwordnew"
      >
    </div>
    <button class="btn btn-primary" @click="submit()">Actualizar contraseña</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      passwordConfirm: '',
      passwordnew: ''
    }
  },
  methods: {
    submit() {
      var credentials = {
        user: this.credentials.user,
        password: this.credentials.password
      }
      this.$http.post('http://localhost:3000/v1/auth/',this.credentials)
          .then(response =>{
            this.isLogged=true;

            sessionStorage.setItem('token', response.body.token);
            this.$router.push('/');
          }, error =>{
            console.log(error);
          });
    }
  }
}
</script>

<style lang="css">
</style>
