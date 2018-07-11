<template lang="html">
  <div class="container">
    <b-form @submit = "submit">
      <label for="ddown1">Selecciona el caballo que deseas vender: </label>
      <b-form-select id = "ddown1" required v-model="selected" :options="horses" class="mb-3" />
      <br>
      <label for="emailClient">Escribe el correo de la persona a quien se lo vas a vender</label>
      <b-form-input id = "emailClient" type="text" required placeholder="Juan@mail.com" v-model="credentials.emailClient"></b-form-input>
      <br>
      <b-button type="submit" variant="primary">Vender</b-button>
    </b-form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      credentials: {
        emailClient:''
      },
      selected: null,
      id: sessionStorage.getItem('id'),
      horses:[{value: null, text: 'Selecciona un caballo', id: "&"}]
    }
  },
  methods: {
    submit(evt) {
      evt.preventDefault();
      this.credentials.emailClient=this.credentials.emailClient.toLowerCase();
      this.$http.post('horses/'+this.selected+'/sell',this.credentials)
          .then(response =>{
            this.$router.push('/myHorsesClient');
          }, error =>{
            this.error=error;
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
