<template lang="html">
  <div class="container">
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
      <label for="passConfirm">Contraseña nueva:</label>
      <input
        id="passConfirm"
        type="password"
        class="form-control"
        placeholder="Contraseña"
        v-model="passwordnew"
      >
    </div>
    <div class="form-group">
      <label for="pass">Confirma la contraseña nueva:</label>
      <input
        id="passNew"
        type="password"
        class="form-control"
        placeholder="Contraseña"
        v-model="passwordConfirm"
      >
    </div>
    <button class="btn btn-primary" @click="submit()">Actualizar contraseña</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: sessionStorage.getItem('email'),
      password: '',
      passwordConfirm: '',
      passwordnew: ''
    }
  },
  methods: {
    submit() {
      if(this.passwordnew != this.passwordConfirm) {
        alert("Las contraseñas no coinciden");
      }else{
        this.$http.post('auth/', {user: this.email, password: this.password})
            .then(r =>{
              this.$http.patch('users#update',{email: this.email, password: this.passwordnew})
                  .then(response =>{
                    this.$router.push('/');
                  }, error =>{
                    console.info("YAASSSSS");
                    console.log(error);
                  });
            }, error =>{
              alert("Contraseña anterior incorrecta");
            });
      }
    }
  }
}
</script>

<style lang="css">
</style>
