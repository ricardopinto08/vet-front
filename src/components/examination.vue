<template lang="html">
  <div class="w-100 espacio">
    <div class="desktop">
      <h1>Consulta médica</h1>
      <b>Fecha de consulta: </b> <p >{{this.examination.created_at}} kilogramos</p>
      <b>Peso de nacimiento: </b> <p >{{this.examination.current_weight}} kilogramos</p>
      <b>Altura de nacimiento: </b> <p >{{this.examination.current_height}} metros</p>
      <b>Perímetro de pecho de nacimiento: </b> <p >{{this.examination.current_chest}} metros</p>
      <b>Perímetro de abdomen de nacimiento: </b> <p >{{this.examination.current_umbilical}} metros</p>
      <b>Largo hasta el hombro de nacimiento: </b> <p >{{this.examination.current_shoulder}} metros</p>
      <b>Largo hasta el olecranon de nacimiento: </b> <p >{{this.examination.current_olecranon}} metros</p>
      <b>Titulo de consulta: </b> <p >{{this.examination.title}} </p>
      <b>Descripción: </b> <p >{{this.examination.description}} </p>
      <b>Ciudad: </b> <p >{{this.examination.city}} </p>
      <b>Dirección: </b> <p >{{this.examination.address}} </p>
      <b>Hora inicio: </b> <p >{{this.examination.start_hour}} </p>
      <b>Hora final: </b> <p >{{this.examination.end_hour}} </p>
      <b-button  @click="annexed" >Ver anexos</b-button>
      <hr>
    </div>

    <div class="mobile">
      <div class="headerConsulta">
        <img src="../assets/back_arrow.svg" class="backArrowConsulta">
        <p class="titulo tituloConsulta"><b>Consulta {{format(this.examination.created_at)}}</b></p>
        <div class="verAnexos">
          <button @click="annexed" class="botonAnexos" type="button" name="button">Ver anexos (0)</button>
        </div>

      </div>
      <div class="cuerpoConsulta">
        <p class="titulo"><b>Peso del caballo:</b></p>
        <p class="titulo derecha">{{this.examination.current_weight}} kg</p>
        <hr class="miLinea">

        <p class="titulo"> <b  >Perímetro pecho:</b> </p>
        <p class="titulo derecha">{{this.examination.current_chest}} m</p>
        <hr class="miLinea">

        <p class="titulo"><b  >Perímetro abdominal:</b></p>
        <p class="titulo derecha">{{this.examination.current_umbilical}} m</p>
        <hr class="miLinea">

        <p class="titulo"><b >Largo hasta el hombro:</b></p>
        <p class="titulo derecha">{{this.examination.current_shoulder}} m</p>
        <hr class="miLinea">

        <p class="titulo"><b  >Largo hasta el olecranon:</b></p>
        <p class="titulo derecha">{{this.examination.current_olecranon}} m</p>
        <hr class="miLinea">

        <p class="titulo"><b  >Altura:</b></p>
        <p class="titulo derecha">{{this.examination.current_height}} m</p>
        <hr class="miLinea">

        <p class="titulo"><b  >Ciudad:</b></p>
        <p class="titulo derecha">{{this.examination.city}}</p>
        <hr class="miLinea">

        <p class="titulo"><b  >Dirección:</b></p>
        <p class="titulo derecha">{{this.examination.address}}</p>
        <hr class="miLinea">

        <p class="titulo"><b  >Hora de inicio:</b></p>
        <p class="titulo derecha">{{formatHour(this.examination.start_hour)}}</p>
        <hr class="miLinea">

        <p class="titulo"><b  >Hora final:</b></p>
        <p class="titulo derecha">{{formatHour(this.examination.end_hour)}}</p>
        <hr class="miLinea">

        <p class="titulo"><b  >Título:</b></p>
        <p class="titulo derecha">{{this.examination.title}}</p>
        <p class="titulo"><b  >Descripción:</b></p>
        <p class="titulo derecha">{{this.examination.description}}</p>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  created() {
    this.$http.get('examinations/'+this.$route.params.id)
    .then(response =>{
      console.info(response.body);
      this.examination=response.body;
    }, error1 =>{
      console.info(error1);
    });

  },
  data() {
    return {
      rol: sessionStorage.getItem('type'),
      examination: {}
    }
  },
  methods: {
    annexed(){
      this.$router.push('/annexeds'+this.$route.params.id);
    },
    format (data){
      if(data != null){
        return data.substring(8, 10)+"·"+data.substring(5, 7)+"·"+data.substring(0, 4);
      }else{
        return ""
      }
    },
    formatHour(data){
      if(data != null){
        return data.substring(11, 16);
      }else{
        return ""
      }
    }
  }
}
</script>

<style lang="css">
@media (min-width: 575.99px) {
  .desktop{
    display: block;
  }
}
@media (max-width: 575.98px) {
  .headerConsulta{
    background-color: white;
    width: 100%;
    height: 60px;
  }
  .backArrowConsulta{
    float: left;
    width: 16px;
    height: 100%;
    margin-left: 16px;
    display: flex;
    align-items: center;
    filter:invert(100%);

  }
  .tituloConsulta{
    height: 100% !important;
  }
  .titulo{
    float: left;
    font-size: 15px;
    padding-left: 20px;
    height: 47px;
    display: flex;
    align-items: center;
    margin: 0;
  }

  .derecha{
    float: right;
    margin-right: 20px;
  }

  .miLinea{
    float:right;
    margin-left: 50.5px;
    width: 324.5px;
    margin-top: 0;
    margin-bottom: 0;
    border-width: 1px;
    color: #E4EDEF;
  }
  .verAnexos{
    height: 100%;
    float:right;
    margin-right: 20px;
    display: flex;
    align-items: center;
  }

  .botonAnexos{
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: #5BBDC4;
    color: #5BBDC4;
    height: 28px;
    border-radius: 3px;
  }


}



</style>
