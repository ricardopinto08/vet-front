<template lang="html">
  <div class="container">
    <b-form @submit = "submit" class="w-10000">
      <label for="ddown1">Selecciona un caballo: </label>
      <b-form-select id = "ddown1" required v-model="selected" :options="horses" class="mb-3" />
      <br>
      <label for="emailVet">Escribe el correo del veterinario a quien se lo vas a asignar</label>
      <b-form-input id = "emailVet" type="text" required placeholder="Veterinario@mail.com" v-model="credentials.emailVet"></b-form-input>
      <br>
      <b-button type="submit" variant="primary">Agregar</b-button>
    </b-form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      credentials: {
        emailVet:''
      },
      selected: null,
      id: sessionStorage.getItem('id'),
      horses:[{value: null, text: 'Selecciona un caballo', id: "&"}]
    }
  },
  methods: {
    submit(evt) {
      evt.preventDefault();
      this.credentials.emailVet=this.credentials.emailVet.toLowerCase();
      this.$http.post('horses/'+this.selected+'/addVet',this.credentials)
          .then(response =>{
            this.$router.push('/myVets');
          }, error1 =>{
            this.error=error1;
          });
    }
  },
  created() {
    this.$http.get('clients/'+this.id+'/gethorses')
    .then(response =>{
      var i;
      for (i=0; i< response.body.length; i++){
        this.horses.push({value: response.body[i].horse_id, text: response.body[i].name });
      }
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
