<template lang="html">
  <div class="">
    <b-table striped hover :items="horses" :fields="fields"></b-table>
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
        born_date: {
          label: 'Fecha de nacimiento',
          sortable: true
        },
        created_at: {
          label: 'Creación del caballo',
          sortable: true
        }
      },
      horses:[]
    }
  },
  methods: {
    submit() {

    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/vets/'+this.id+'/gethorses')
    .then(response =>{
      this.horses=response.body;
      console.info(response);
      console.info(this.horses);
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
