<template lang="html">
  <div class="w-100">
    <div class="mobile">

      <img src="../../assets/caballo.png" class="fotoPortadaCaballo" >
      <img @click="goBack" src="../../assets/back_arrow.svg" class="backArrowConsulta flechaCaballos">

      <div class="portada">
        <img src="../../assets/caballo.png" class="fotoPerfilCaballo" >
        <button @click='redirect("/sellHorse")' class="botonAnexos transferir" type="button" name="button">Transferir</button>
        <b><p class="nombreCaballo">{{this.horse.name}}</p></b>
        <br>
        <div class="d-flex justify-content-center tripleParametro">
          <div class="p-2 tituloPequeno">
            <p class="valorPequeno"> <b>{{this.horse.current_height}} m</b></p>
            <p class="subtituloPequeno">Altura</p>
          </div>
          <div class="p-2 tituloPequeno central">
            <p class="valorPequeno pad"><b>{{calcularEdad(this.horse.born_date)}} meses</b></p>
            <p class="subtituloPequeno ">Edad</p>
          </div>
          <div class="p-2 tituloPequeno">
            <p class="valorPequeno"><b>{{this.horse.current_weight}} kg</b></p>
            <p class="subtituloPequeno">Peso</p>
          </div>
        </div>
      </div>



      <div id="accordion" class="tarjetas">
        <div @click="flip(1)" class="card">
          <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <img src="../../assets/h_registry.svg" class="icon">
            <b class = "tituloPropiedad">Registro</b>
            <img v-if="arrows[0]" src="../../assets/arrow.svg" class="arrow up">
            <img v-else src="../../assets/arrow.svg" class="arrow">
          </div>

          <div id="collapseOne" class="collapse miColor" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">

              <div class="barData">
                <b class="titulo izquierda">Id del caballo:</b>
                <div class="titulo derecha">{{this.horse.mom}}</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Fecha de nacimiento:</b>
                <div class="titulo derecha">{{format(this.horse.born_date)}}</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Creación del caballo:</b>
                <div class="titulo derecha">{{format(this.horse.created_at)}}</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Raza:</b>
                <div class="titulo derecha">{{this.horse.breed}}</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Color:</b>
                <div class="titulo derecha">{{this.horse.color}}</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Peso actual:</b>
                <div class="titulo derecha">{{this.horse.current_weight}} kg</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Altura actual:</b>
                <div class="titulo derecha">{{this.horse.current_height}} m</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Perímetro de pecho actual:</b>
                <div class="titulo derecha">{{this.horse.current_chest}} m</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Perímetro de abdomen actual:</b>
                <div class="titulo derecha">{{this.horse.current_umbilical}} m</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Largo hasta el hombro actual:</b>
                <div class="titulo derecha">{{this.horse.current_shoulder}} m</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Largo hasta el olecranon actual:</b>
                <div class="titulo derecha">{{this.horse.current_olecranon}} m</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Nombre del padre:</b>
                <div class="titulo derecha">{{this.horse.dad}}</div>
              </div>
              <hr class="miLinea">

              <div class="barData">
                <b class="titulo izquierda">Nombre de la madre:</b>
                <div class="titulo derecha">{{this.horse.mom}}</div>
              </div>


            </div>
          </div>
        </div>

        <div class="card">
          <div @click="" class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <img src="../../assets/h_medical.svg" class="icon">
              <b class = "tituloPropiedad">Consultas médicas</b>
              <img src="../../assets/arrow.svg" class="arrow">
          </div>

          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="miColor">
              <div @click="redirect('/examination'+examination.id)" v-for="examination in historyM" >
                <div class="fila">
                  <div class="fechaAnexo">
                    <b>{{format(examination.start_hour)}}</b>
                  </div>
                  <div class="contentAnexo noPasar">
                    <div class="direccionConsulta">
                      {{examination.address}}, {{examination.city}}
                    </div>
                    <img src="../../assets/right_arrow.svg" class="arrowRight flecha">
                  </div>
                  <p class="contentAnexo">
                    Por: {{examination.vet_name}} {{examination.vet_lastname}}
                  </p>

                </div>
                <hr v-if="historyM.indexOf(examination) != historyM.length-1" class="miLinea">
              </div>
            </div>
          </div>



        </div>

        <div class="card">
          <div class="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            <img src="../../assets/h_vet.svg" class="icon">
            <b class = "tituloPropiedad">Historial de veterinarios</b>
            <img src="../../assets/arrow.svg" class="arrow">
          </div class="miColor">
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="miColor">
              <div v-for="vet in vetsH" >
                <div class="fila">
                  <div class="fechaAnexo">
                    <b>{{format(vet.created_at)}}</b>
                  </div>
                  <b class="contentAnexo">
                    {{vet.name}} {{vet.lastname}}
                  </b>
                  <p class="contentAnexo">
                    {{vet.phone}}
                  </p>

                </div>
                <hr v-if="vetsH.indexOf(vet) != vetsH.length-1" class="miLinea">
              </div>
            </div>
          </div>
        </div>



        <div class="card">
          <div class="card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <img src="../../assets/h_owner.svg" class="icon">
            <b class = "tituloPropiedad">Historial de propietarios</b>
            <img src="../../assets/arrow.svg" class="arrow">
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="miColor">
              <div v-for="client in clients" >
                <div class="fila">
                  <div class="fechaAnexo">
                    <b>{{format(client.created_at)}} / {{format(client.end_date)}}</b>
                  </div>
                  <b class="contentAnexo">
                    {{client.name}} {{client.lastname}}
                  </b>
                  <p class="contentAnexo">
                    {{client.phone}}
                  </p>

                </div>
                <hr v-if="clients.indexOf(client) != clients.length-1" class="miLinea">
              </div>
            </div>
          </div>
        </div>



      </div>
      <div class="table-responsive-sm">
        <b-table striped hover :items="vets"  :fields="fields">
          <template slot="delete_button" slot-scope="row">
            <b-button @click="deleteVet(row.index)" variant="danger">
             Eliminar
            </b-button>
          </template>
        </b-table>
      </div>
    </div>

    <div class="desktop">
      <h1>{{this.horse.name}}</h1>
      <b>Id de caballo: </b> <p>{{this.horse.id}}</p>
      <b>Fecha de nacimiento: </b> <p >{{this.horse.born_date}}</p>
      <b>Raza: </b> <p >{{this.horse.breed}}</p>
      <b>Color: </b> <p >{{this.horse.color}}</p>
      <b>Peso actual: </b> <p >{{this.horse.current_height}} kilogramos</p>
      <b>Altura actual: </b> <p >{{this.horse.current_weight}} metros</p>
      <b>Perímetro de pecho actual: </b> <p >{{this.horse.current_chest}} metros</p>
      <b>Perímetro de abdomen actual: </b> <p >{{this.horse.current_umbilical}} metros</p>
      <b>Largo hasta el hombro actual: </b> <p >{{this.horse.current_shoulder}} metros</p>
      <b>Largo hasta el olecranon actual: </b> <p >{{this.horse.current_olecranon}} metros</p>
      <b>Creación del caballo: </b> <p >{{this.horse.created_at}}</p>
      <hr>
      <h2>Veterinarios:</h2>
      <b-table striped hover :items="vets"  :fields="fields">
        <template slot="delete_button" slot-scope="row">
          <b-button @click="deleteVet(row.index)" variant="danger">
           Eliminar
          </b-button>
        </template>
      </b-table>
      <b-button @click="history">Historial de veterinarios</b-button>
      <b-button @click="medicalHistory">Historia médica</b-button>
      <b-button @click="clinicalExam">Examen clínico</b-button>
      <hr>
    </div>

  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  created() {
    this.$http.get('horses/'+this.$route.params.id)
    .then(response =>{
      this.horse=response.body;

    }, error1 =>{
      console.info(error1);
    });

    this.$http.get('horses/'+this.$route.params.id+'/getVets')
    .then(r =>{
      this.vets=r.body;
    }, error1 =>{
      console.info(error1);
    });

    this.$http.get('horses/'+this.$route.params.id+'/historyOfVets')
    .then(response =>{
      this.vetsH=response.body;
    }, error1 =>{
      console.info(error1);
    });

    this.$http.get('horses/'+this.$route.params.id+'/historyOfOwners')
    .then(response =>{
      this.clients=response.body;
    }, error1 =>{
      console.info(error1);
    });

    this.$http.get('horses/'+this.$route.params.id+'/getMedicalHistory')
    .then(response =>{
      this.historyM=response.body;
    }, error1 =>{
      console.info(error1);
    });

  },
  data() {
    return {
      horse: {},
      vets: [],
      clients: [],
      historyM: [],
      vetsH:[],
      fields: {
        id:{
          label: 'Identificación',
          sortable: true
        },
        name:{
          label: 'Nombre',
          sortable: true
        },
        lastname:{
          label: 'Apellido',
          sortable: true
        },
        email:{
          label: 'Correo electrónico',
          sortable: true
        },
        created_at:{
          label: 'Inicio convenio',
          sortable: true
        },
        delete_button:{
          label: ''
        },
      },
      arrows: {1:false,2:false,3:false,4:false,}
    }
  },
  methods: {
    flip(index){
      console.info(this.arrows);
      this.arrows[index]=!this.arrows[index]

    },
    deleteVet(index) {
      this.$http.post('horses/'+this.horse.id+'/deleteVet',{emailVet: this.vets[index].email})
          .then(response =>{
            this.$router.push('/');
          }, error1 =>{
            this.error="Usuario o contraseña incorrecta";
          });
    },
    history(){
      this.$router.push('/historyOfVets'+this.horse.id);
    },
    medicalHistory(){
      this.$router.push('/medicalHistory'+this.horse.id);
    },
    clinicalExam(){
      this.$router.push('/clinicalExam'+this.horse.id);
    },
    redirect(data){
      this.$router.push(data);
    },
    calcularEdad(data) {
      if(data !== undefined){
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
      }

    }
  }

}
</script>

<style lang="css">
@media (min-width: 575.99px) {
  .desktop {
    display: block;
  }
  .mobile {
    width: 100%;
    display: none;
  }
}
@media (max-width: 575.98px) {
  .desktop {
    display: none;
  }
  .mobile {

    width: 100%;
    border: 0;
  }
  .portada {
    background-color: #FFFFFF;
    width: 95%;
    height: 160px;
    border-radius: 10px;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 9px;
    margin-top: -50px;
    position: absolute;
  }
  .nombreCaballo{
    font-size: 15px;
    height: 17px;
    width: 100%;
    color: #5BBDC4;
    margin-bottom: 3px;
    text-align: center;
    padding-top: 68px;

  }
  .card-header {
    background-color: #FFFFFF !important;
    margin-bottom: 0px;
    padding: 0;
    width: 100%;
    border-bottom: 0px !important;
    height: 70px;
  }
  .card {
    margin-bottom: 10px;
    border-width: 0px !important;
    width: 100%;
  }

  .icon {
    float: left;
    width: 21.37px;
    height: 100%;
    margin-left: 24px;
    display: flex;
    align-items: center;
  }

  .arrow {
    float: right;
    width: 28px;
    height: 100%;
    margin-right: 25px;
    display: flex;
    align-items: center;
  }

  .tituloPropiedad {
    float: left;
    font-size: 15px;
    padding-left: 12px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .card-body {
    background-color: #FBFCFD;
    padding: 0;

  }
  .miColor {
    border: 1px solid;
    background-color: #FBFCFD;
    border-color: #E4EDEF;

  }
  .tituloAtributo {
    margin-top: 15px;
    margin-left: 20px;
    margin-bottom: 15px;
    font-size: 15px;
    float: left;
  }
  .valorAtributo {
    margin-top: 15px;
    color: #4A5152;
    font-size: 15px;
    margin-right: 20px;
    margin-bottom: 15px;
    float: right;
    text-align: right;
  }

  .fechaConsulta {
    font-size: 12px;
    display: block;
    height: 13px;
    margin-left: 20px;
    margin-top: 15px;
    float: initial;

  }

  .vetConsulta {
    font-size: 15px;
    color: #303434;
    margin-left: 20px;
    margin-top: 5px;
    float: initial;
  }

  .fotoPerfilCaballo {
    width: 33.3%;
    height: 66%;
    margin-left: 33.3%;
    border-radius: 100%;
    margin-top: -15%;
    position: absolute;
  }
  .fotoPortadaCaballo {
    filter: blur(2px);
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .tarjetas{
    padding-top: 120px;
    width: 100%;
  }

  .tripleParametro {
    margin-top: 5%;
  }

  .tituloPequeno {
    width: 33.3%;
    text-align: center;
    font-size: 18px;
    color: #303434;
    padding: 0 !important;
  }

  .central{
    align-items: center;
    border-left: 1px solid #F3F6FA;
    border-right: 1px solid #F3F6FA;
    height: 30px;
    margin-top: 10px;

  }

  .subtituloPequeno {
    text-align: center;
    color: #BEC6C7;
    font-size: 12px;
  }

  .valorPequeno{
    margin: 0;
  }

  .pad{
    margin-top: -10px;
  }

  .up{
    transform: rotate(180deg);
  }

  .flechaCaballos{
    position: absolute;
    filter:invert(0%);
    margin-left: 16px;
    margin-top: -120px;
  }

  .transferir{
    width: 18%;
    position: absolute;
    margin-top: 10px;
    margin-left: 77%;
  }

}
</style>
