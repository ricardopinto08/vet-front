<template lang="html">
  <div class="">
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
        email:{
          label: 'Correo',
          sortable: true
        },
        name: {
          label: 'Nombre',
          sortable: true
        },
        lastname: {
          label: 'Apellido',
          sortable: true
        }
      },
      vets:[]
    }
  },
  methods: {
    submit() {

    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/clients/'+this.id+'/getVets')
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
