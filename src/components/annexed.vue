<template lang="html">
  <div class="">
    <b-table striped hover :items="annexeds" :fields="fields"></b-table>
    <b-button v-if="rol === 'Vet'" @click="annexed" >Crear anexo</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: sessionStorage.getItem('id'),
      rol: sessionStorage.getItem('type'),
      fields: {
        id:{
          label: 'Identificación',
          sortable: true
        },
        date:{
          label: 'Fecha',
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
        image: {
          label: 'Hora final',
          sortable: true
        }
      },
      annexeds:[]
    }
  },
  methods: {
    submit() {

    },
    annexed(){
      this.$router.push('/newAnnexed'+this.$route.params.id);
    },
  },
  created() {
    this.$http.get('http://localhost:3000/v1/examinations/'+this.$route.params.id+'/getAnnexeds')
    .then(response =>{
      this.annexeds=response.body;
      console.info(response.body);
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
