<template lang="html">
  <div class="principal">
    <div class="encabezado">
      <p class="textoblanco">Criadero estático</p>
    </div>
    <p class="title"> <b>Mis caballos</b></p>
    <p class="subtitle">({{leng}} en total)</p>
    <b-table striped hover v-if="horses.lenght > 0" :items="horses" :fields="fields">
      <template slot="name" slot-scope="data">
        <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`" @click="caballo(data.item)">
          {{data.value}}
        </a>
      </template>
    </b-table>
    <div v-if="this.leng === 0" class="">
      <img  src="../../assets/menu_home_a.svg" class="profileIconVacio">
      <p class="subtitleVacio">Aún no tienes caballos relacionados</p>
    </div>

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
      horses:[],
      leng: "",
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
      this.leng=this.horses.length
      console.info(this.leng);
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
body {
  background-color: #F3F6FA;
}
.title {
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  height: 20px;
  width: 105px;
  color: #303434;

}
.subtitle {
  font-family: 'Ubuntu', sans-serif;
  font-size: 13px;
  height: 14px;
  width: 65px;
  color: #BEC6C7;
}

@media only screen and (max-width: 600px) {
  .title {
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    height: 20px;
    width: 105px;
    color: #303434;
    margin-bottom: 3px;
    margin-top: 20px;
    margin-left: 15px;

  }
  .subtitle {
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
    height: 14px;
    width: 65px;
    color: #BEC6C7;
    margin-left: 15px;
  }
  .profileIconVacio{
    height: 100px;
    width: 87.64px;
    color: #BEC6C7;
    display: block;
    margin-top: 132px;
    margin-left: 144px;
    margin-right: 143.36px;

  }
  .subtitleVacio {
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
    height: 32px;
    width: 126px;
    color: #BEC6C7;
    text-align: center;
    margin-top: 30px;
    margin-left: 124px;
    margin-right: 125px;
  }
  .encabezado {
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
    height: 30px;
    width: 100%;
    color: #BEC6C7;
    margin-top: 0px;
    text-align: center;
    background-color: #5BBDC4;
  }
  .textoblanco {
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
    height: 100%;
    color: #FFFFFF;
    margin-top: 0px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 0px;
    text-align: center;
  }
  .principal {
    width: 100%;
  }

}
</style>
