<template lang="html">
  <div class="w-100">
    <b-table striped hover :items="vets" :fields="fields">
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
        },
        horse_name: {
          label: 'Caballo a cargo',
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
    this.$http.get('clients/'+this.id+'/getVets')
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
