<template lang="html">
  <div class="w-100">

  <div class="mobile">
    <div class="encabezado verde">
      <p class="textoblanco">Criadero {{this.hatchery}}</p>
    </div>
    <p class="title"> <b>Mis caballos</b></p>
    <p class="subtitle">({{leng}} en total)</p>
    <div @click="caballo(horse)" class="caballo" v-for="horse in horses">
      <img src="../../assets/caballo.png" class="fotoPerfilCaballoPreview" >

      <div class="primerRenglon">
        <b class="tituloCaballo">{{horse.name}}</b> <p class="meses">({{calcularEdad(horse.born_date)}} meses)</p>
      </div>


      <div class="renglon">
        <b class="propiedadNegrilla">Nacimiento:</b> <p class="propiedadValue"> {{format(horse.born_date)}}</p>
      </div>

      <div class="renglon">
        <b class="propiedadNegrilla">Color:</b> <p class="propiedadValue"> {{horse.color}}</p>
      </div>
      <div class="renglon">
        <b class="propiedadNegrilla">Mamá:</b> <p class="propiedadValue"> {{horse.mom}}</p>
      </div>
      <div class="renglon">
        <b class="propiedadNegrilla">Papá:</b> <p class="propiedadValue"> {{horse.dad}}</p>
      </div>
    </div>
    <div v-if="this.leng === 0" class="">
      <img  src="../../assets/menu_home_a.svg" class="profileIconVacio">
      <p class="subtitleVacio">Aún no tienes caballos relacionados</p>
    </div>
  </div>

  <div class="desktop">
    <b-table class="tabla" striped hover v-if="leng > 0" :items="horses" :fields="fields">
      <template slot="name" slot-scope="data">
        <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`" @click="caballo(data.item)">
          {{data.value}}
        </a>
      </template>
    </b-table>
  </div>



  </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  data() {
    return {
      id: sessionStorage.getItem('id'),
      name: sessionStorage.getItem("name"),
      hatchery: sessionStorage.getItem("hatchery"),
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

    calcularEdad(data) {
      var fecha = data.substring(0, 4)+"-"+data.substring(5, 7)+"-"+data.substring(8, 10);

      var values = fecha.split("-");
      var dia = values[2];
      var mes = values[1];
      var ano = values[0];
      // cogemos los valores actuales
      var fecha_hoy = new Date();
      var ahora_ano = fecha_hoy.getYear();
      var ahora_mes = fecha_hoy.getMonth() + 1;
      var ahora_dia = fecha_hoy.getDate();
      // realizamos el calculo
      var edad = (ahora_ano + 1900) - ano;
      if (ahora_mes < mes) {
          edad--;
      }
      if ((mes == ahora_mes) && (ahora_dia < dia)) {
          edad--;
      }
      if (edad > 1900) {
          edad -= 1900;
      }
      // calculamos los meses
      var meses = 0;
      if (ahora_mes > mes && dia > ahora_dia)
          meses = ahora_mes - mes - 1;
      else if (ahora_mes > mes)
          meses = ahora_mes - mes
      if (ahora_mes < mes && dia < ahora_dia)
          meses = 12 - (mes - ahora_mes);
      else if (ahora_mes < mes)
          meses = 12 - (mes - ahora_mes + 1);
      if (ahora_mes == mes && dia > ahora_dia)
          meses = 11;
      return meses+edad*12
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

@media (min-width: 575.99px) {
  .tabla {
    float: block;
  }
  .mobile {
    display: none;
  }
}
@media (max-width: 575.98px) {
  .title {
    font-size: 18px;
    color: #303434;
    margin-bottom: 3px;
    margin-top: 20px;
    margin-left: 15px;
  }

  .tituloCaballo {
    max-width: 50%;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-height: 19px;
    overflow: hidden;
    font-size: 15px;
    color: #303434;
    float: left;
    margin-bottom: 0px;
  }

  .propiedad {
    font-size: 12px;
    color: #303434;
    margin-bottom: 10px;
    padding-top: 3px;
    margin-top: 16px;
    margin-left: 85px;
  }

  .subtitle {
    font-size: 13px;
    color: #BEC6C7;
    margin-bottom: 20px;
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
    font-size: 13px;
    height: 32px;
    width: 126px;
    color: #BEC6C7;
    text-align: center;
    margin-top: 30px;
    margin-left: 124px;
    margin-right: 125px;
  }

  .tabla {
    display: none;
  }

  .encabezado {
    font-size: 13px;
    height: 30px;
    width: 100%;

    text-align: center;
    background-color: #5BBDC4;
  }

  .verde {
    color: #BEC6C7;
  }

  

  .principal {
    width: 100%;
    position: fixed;
  }

  .caballo {
    background-color: #FFFFFF;
    width: 80%;
    height: 120px;
    border-radius: 10px;
    margin-left: 60px;
    margin-bottom: 10px;
  }

  .renglon {
    margin-bottom: 3px;
    font-size: 12px;
    height: 13px;
    color: #303434;
    margin-left: 32%;
  }

  .primerRenglon {
    margin-bottom: 10px;
    font-size: 12px;
    color: #303434;
    padding-top: 10px;
    padding-bottom: 15px;
    margin-left: 32%;
  }
  .propiedadNegrilla {
    max-width: 50%;
    max-height: 19px;
    overflow: hidden;
    font-size: 12px;
    text-align: left;
    float: auto;
  }
  .propiedadValue {
    max-width: 50%;
    max-height: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    height: 15px;
    float: right;
    color: #4A5152;
    margin-bottom: 0px;
    text-align: right;
    margin-right: 20px;

  }

  .meses{

    font-size: 12px;
    color: #BEC6C7;
    height: 13px;
    float: right;
    text-align: right;
    margin-right: 20px;
  }

  .fotoPerfilCaballoPreview {
    width: 38%;
    height: 90px;
    margin-left: -15%;
    margin-top: 15px;
    position: absolute;
  }

}

</style>
