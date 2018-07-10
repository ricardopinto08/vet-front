<template lang="html">
  <div class="table-responsive-sm">
    <h1>Historial de propietarios</h1>
    <b-table striped hover :items="clients" :fields="fields"></b-table>
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
      clients:[]
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
    console.info(this.$route.params.id);
    this.$http.get('horses/'+this.$route.params.id+'/historyOfOwners')
    .then(response =>{
      this.clients=response.body;
      console.info(this.clients);
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
