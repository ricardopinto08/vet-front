<template lang="html">
  <div class="">
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
    <b-button v-if="rol === 'Vet'" @click="annexed" >Ver anexos</b-button>
    <hr>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get('examinations/'+this.$route.params.id)
    .then(response =>{
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
  }
}
</script>

<style lang="css">
</style>
