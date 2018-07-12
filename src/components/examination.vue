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
        <img @click="goBack" src="../assets/back_arrow.svg" class="backArrowConsulta">
        <b class="titulo tituloConsulta">Consulta {{format(this.examination.created_at)}}</b>
        <div class="verAnexos">
          <button @click="annexed" class="botonAnexos" type="button" name="button">Ver anexos ({{this.numAnnexeds}})</button>
        </div>

      </div>
      <div class="cuerpoConsulta">
        <div class="barData">
          <b class="titulo izquierda">Peso del caballo:</b>
          <div class="titulo derecha">{{this.examination.current_weight}} kg</div>
        </div>
        <hr class="miLinea">

        <div class="barData">
            <div class="titulo izquierda"> <b >Perímetro pecho:</b> </div>
            <div class="titulo derecha">{{this.examination.current_chest}} m</div>
        </div>
        <hr class="miLinea">

        <div class="barData">
            <div class="titulo izquierda"><b  >Perímetro abdominal:</b></div>
            <div class="titulo derecha">{{this.examination.current_umbilical}} m</div>
        </div>
        <hr class="miLinea">

        <div class="barData">

            <div class="titulo izquierda"><b >Largo hasta el hombro:</b></div>

            <div class="titulo derecha">{{this.examination.current_shoulder}} m</div>

        </div>
        <hr class="miLinea">

        <div class="barData">

            <div class="titulo izquierda"><b  >Largo hasta el olecranon:</b></div>

            <div class="titulo derecha">{{this.examination.current_olecranon}} m</div>

        </div>
        <hr class="miLinea">

        <div class="barData">
            <div class="titulo izquierda"><b  >Altura:</b></div>

            <div class="titulo derecha">{{this.examination.current_height}} m</div>

        </div>
        <hr class="miLinea">


        <div class="barData">
            <div class="titulo izquierda"><b  >Dirección:</b></div>
            <div class="titulo derecha">{{this.examination.address}}</div>
        </div>
        <hr class="miLinea">


        <div class="barData">
            <div class="titulo izquierda"><b  >Ciudad:</b></div>
            <div class="titulo derecha">{{this.examination.city}}</div>
        </div>
        <hr class="miLinea">

        <div class="barData">
            <div class="titulo izquierda"><b  >Hora de inicio:</b></div>
            <div class="titulo derecha">{{formatHour(this.examination.start_hour)}}</div>

        </div>
        <hr class="miLinea">

        <div class="barData">
            <div class="titulo izquierda"><b  >Hora final:</b></div>

            <div class="titulo derecha">{{formatHour(this.examination.end_hour)}}</div>

        </div>
        <hr class="miLinea">
        <div class="barData">
            <div class="titulo izquierda"><b  >Título:</b></div>
        </div>
        <div class="titulo ultimo">{{this.examination.title}}</div>

        <div class="barData">
            <div class="titulo izquierda"><b  >Descripción:</b></div>

        </div>
        <div class="titulo ultimo">{{this.examination.description}}</div>


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
    this.$http.get('examinations/'+this.$route.params.id+'/getNumAnnexeds')
    .then(response =>{
      console.info(response);
      this.numAnnexeds=response.body;
    }, error1 =>{
      console.info(error1);
    });

  },
  data() {
    return {
      rol: sessionStorage.getItem('type'),
      examination: {},
      numAnnexeds:0,
    }
  },
  methods: {

    annexed(){
      this.$router.push('/annexeds'+this.$route.params.id);
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



  .izquierda{
    width: 60%;
  }

  .derecha{
    width: 40%;
    text-align: right ;
  }

  .miLinea{
    float:right;
    padding-left: 50.5px;
    width: 80%;
    margin-top: 0;
    margin-bottom: 0;
    border-width: 1px;
    color: #E4EDEF;
  }
  .verAnexos{
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

  .barData{
    height: 50px;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    width: 90%;
      align-items: center;

  }

  .ultimo{
    margin-left: 5%;
    margin-right: 5%;
  }

}



</style>
