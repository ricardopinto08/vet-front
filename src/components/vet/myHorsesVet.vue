<template lang="html">
  <div class="container">
    <b-table striped hover :items="horses" :fields="fields">
      <template slot="name" slot-scope="data">
        <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`" @click="caballo(data.item)">
          {{data.value}}
        </a>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: sessionStorage.getItem('id'),
      fields: {
        horse_id:{
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
        }
      },
      horses:[]
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
    this.$http.get('vets/'+this.id+'/gethorses')
    .then(response =>{
      this.horses=response.body;
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
