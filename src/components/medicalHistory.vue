<template lang="html">
  <div class="container">
    <h1>Historia médica</h1>
    <div class="table-responsive-sm">

      <b-table striped hover :items="history" :fields="fields">
        <template slot="title" slot-scope="data">
          <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`" @click="caballo(data.item)">
            {{data.value}}
          </a>
        </template>
      </b-table>
    </div>

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
      this.$router.push('/examination'+value.id);
    },
  },
  created() {
    this.$http.get('horses/'+this.$route.params.id+'/getMedicalHistory')
    .then(response =>{
      this.history=response.body;
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
