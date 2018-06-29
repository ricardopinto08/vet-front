<template lang="html">
  <div class="">
    <h1>Historia médica</h1>
    <b-table striped hover :items="history" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: sessionStorage.getItem('id'),
      fields: {
        id:{
          label: 'Identificación',
          sortable: true
        },
        title:{
          label: 'Título',
          sortable: true
        },
        description: {
          label: 'Descripción',
          sortable: true
        },
        city: {
          label: 'Ciudad',
          sortable: true
        },
        address: {
          label: 'Dirección',
          sortable: true
        },
        start_hour: {
          label: 'Hora inicio',
          sortable: true
        },
        end_hour: {
          label: 'Hora final',
          sortable: true
        },
        vet_name: {
          label: 'Nombre veterinario',
          sortable: true
        },
        vet_lastname: {
          label: 'Apellido veterinario',
          sortable: true
        },
        vet_email: {
          label: 'Email veterinario',
          sortable: true
        }
      },
      history:[]
    }
  },
  methods: {
    submit() {

    },
    caballo(value){
      this.$router.push('/horseProfileVet'+value.horse_id);
    },
  },
  created() {
    console.info("DASFASDFS");
    this.$http.get('http://localhost:3000/v1/horses/'+this.$route.params.id+'/getMedicalHistory')
    .then(response =>{
      console.info(response);
      this.history=response.body;
      console.info(this.clients);
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
