<template lang="html">
  <div class="">
    <h1>{{this.horse.name}}</h1>
    <b>Id de caballo: </b> <p >{{this.horse.id}}</p>
    <b>Fecha de nacimiento: </b> <p >{{this.horse.born_date}}</p>
    <b>Creación del caballo: </b> <p >{{this.horse.created_at}}</p>
    <div v-if="clients.lenght!==0" class="">
      <h2 >Dueño:</h2>
      <b>Id: </b><p>{{this.clients[0].id}}</p>
      <b>Nombre: </b><p>{{this.clients[0].name}} {{this.clients[0].lastname}}</p>
      <b>Correo: </b><p>{{this.clients[0].email}}</p>
    </div>
    <b-button @click="history">Historial de dueños</b-button>
    <b-button @click="medicalHistory">Historia médica</b-button>
  </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  created() {
    this.$http.get('http://localhost:3000/v1/horses/'+this.$route.params.id)
    .then(response =>{
      this.horse=response.body;
      this.$http.get('http://localhost:3000/v1/horses/'+this.$route.params.id+'/getClients')
      .then(r =>{
        this.clients=r.body;
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
      this.$http.post('http://localhost:3000/v1/horses/'+this.horse.id+'/deleteVet',{emailVet: this.clients[index].email})
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
    }
  }

}
</script>

<style lang="css">
</style>
