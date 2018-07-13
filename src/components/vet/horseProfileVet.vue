<template lang="html">
  <div class="container espacio">
    <h1>{{this.horse.name}}</h1>
    <b>Id de caballo: </b> <p >{{this.horse.id}}</p>
    <b>Fecha de nacimiento: </b> <p >{{this.horse.born_date}}</p>
    <b>Raza: </b> <p >{{this.horse.breed}}</p>
    <b>Color: </b> <p >{{this.horse.color}}</p>
    <b>Peso actual: </b> <p >{{this.horse.current_weight}} kilogramos</p>
    <b>Altura actual: </b> <p >{{this.horse.current_height}} metros</p>
    <b>Perímetro de pecho actual: </b> <p >{{this.horse.current_chest}} metros</p>
    <b>Perímetro de abdomen actual: </b> <p >{{this.horse.current_umbilical}} metros</p>
    <b>Largo hasta el hombro actual: </b> <p >{{this.horse.current_shoulder}} metros</p>
    <b>Largo hasta el olecranon actual: </b> <p >{{this.horse.current_olecranon}} metros</p>
    <b>Creación del caballo: </b> <p >{{this.horse.created_at}}</p>
    <div v-if="clients.lenght!==0" class="">
      <h2 >Dueño:</h2>
      <b>Id: </b><p>{{this.clients.id}}</p>
      <b>Nombre: </b><p>{{this.clients.name}} {{this.clients.lastname}}</p>
      <b>Correo: </b><p>{{this.clients.email}}</p>
    </div>
    <b-button @click="history">Historial de dueños</b-button>
    <b-button @click="medicalHistory">Historia médica</b-button>
    <b-button @click="clinicalExam">Examen clínico</b-button>
    <hr>
  </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  created() {
    this.$http.get('horses/'+this.$route.params.id+'/getCurrentOwner')
    .then(r =>{
      this.clients=r.body;
    }, error1 =>{
      console.info(error1);
    });
    this.$http.get('horses/'+this.$route.params.id)
    .then(response =>{
      this.horse=response.body;
    }, error1 =>{
      console.info(error1);
    });

  },
  data() {
    return {
      horse: {},
      clients: [],
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
      this.$http.post('horses/'+this.horse.id+'/deleteVet',{emailVet: this.clients[index].email})
          .then(response =>{
            this.$router.push('/');
          }, error1 =>{
            this.error="Usuario o contraseña incorrecta";
          });
    },
    history(){
      this.$router.push('/historyOfOwners'+this.horse.id);
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
