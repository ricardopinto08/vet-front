<template lang="html">
  <div class="">
    <h1>Historial de veterinarios</h1>
    <b-table striped hover :items="vets" :fields="fields"></b-table>
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
        name:{
          label: 'Nombre',
          sortable: true
        },
        lastname: {
          label: 'Apellido',
          sortable: true
        },
        created_at: {
          label: 'Fecha de inicio',
          sortable: true
        },
        end_date: {
          label: 'Fecha de finalización',
          sortable: true
        }
      },
      vets:[]
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
    this.$http.get('http://localhost:3000/v1/horses/'+this.$route.params.id+'/historyOfVets')
    .then(response =>{
      this.vets=response.body;
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
