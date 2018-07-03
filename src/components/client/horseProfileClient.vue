<template lang="html">
  <div class="">
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
</template>

<script>
import { eventBus } from '../../main'
export default {
  created() {
    this.$http.get('http://localhost:3000/v1/horses/'+this.$route.params.id)
    .then(response =>{
      this.horse=response.body;
      console.info(response.body);
      this.$http.get('http://localhost:3000/v1/horses/'+this.$route.params.id+'/getVets')
      .then(r =>{
        this.vets=r.body;
      }, error1 =>{
        console.info(error1);
      });
    }, error1 =>{
      console.info(error1);
    });

  },
  data() {
    return {
      horse: {},
      vets: [],
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
        }
      },
    }
  },
  methods: {
    deleteVet(index) {
      console.info(this.vets[index].email);
      this.$http.post('http://localhost:3000/v1/horses/'+this.horse.id+'/deleteVet',{emailVet: this.vets[index].email})
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
    }
  }

}
</script>

<style lang="css">
</style>
