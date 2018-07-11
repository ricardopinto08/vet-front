<template lang="html">
  <div class="w-100">
    <div class="desktop">
      <h1>Anexos</h1>
      <div class="table-responsive-sm">
        <b-table striped hover :items="annexeds" :fields="fields">
          <template slot="title" slot-scope="data">
            <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`" @click="anexo(data.item)">
              {{data.value}}
            </a>
          </template>
        </b-table>
      </div>
    </div>

    <div class="mobile">
      <div class="headerConsulta">
        <img src="../assets/back_arrow.svg" class="backArrowConsulta">
        <p class="titulo tituloConsulta"><b>Anexos consulta {{format(this.examination_date)}}</b></p>
      </div>
    </div>

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
          label: 'Imagen',
          sortable: true
        }
      },
      annexeds:[],
      examination_date:"",
    }
  },
  methods: {
    format (data){
      if(data != null){
        return data.substring(8, 10)+"·"+data.substring(5, 7)+"·"+data.substring(0, 4);
      }else{
        return ""
      }
    },
    submit() {

    },
    annexed(){
      this.$router.push('/newAnnexed'+this.$route.params.id);
    },
    anexo(value){
      this.$router.push('/annexed'+value.id);
    }
  },
  created() {
    this.$http.get('examinations/'+this.$route.params.id+'/getAnnexeds')
    .then(response =>{
      console.info(response);
      this.annexeds=response.body;
    }, error1 =>{
      console.info(error1);
    });
    this.$http.get('examinations/'+this.$route.params.id)
    .then(response =>{
      this.examination_date=response.body.created_at;
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
@media (min-width: 575.99px) {
  .desktop{
    display: block;
  }
}
@media (max-width: 575.98px) {}
</style>
