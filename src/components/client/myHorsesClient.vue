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
import { eventBus } from '../../main'
export default {
  data() {
    return {
      id: sessionStorage.getItem('id'),
      fields: [
        {
          key: 'horse_id',
          label: 'Identificador',
          sortable: true
        },
        {
          key: 'name',
          label: 'Nombre',
          sortable: true,
          formatter: 'fullName'
        },
        {
          key: 'born_date',
          label: 'Fecha de nacimiento',
          sortable: true
        }
      ],
      horses:[]
    }
  },
  methods: {
    submit() {

    },
    caballo(value){
      this.$router.push('/horseProfileClient'+value.horse_id);
    },
    fullName (value){
      return `${value}`
    }
  },
  created() {
    this.$http.get('clients/'+this.id+'/gethorses')
    .then(response =>{
      this.horses=response.body;
    }, error1 =>{
      console.info(error1);
    });
    eventBus.$on('oneHorse', (horse) =>{
      this.horse = horse;
      console.info(horse);
    });
  }
}
</script>

<style lang="css">
</style>
