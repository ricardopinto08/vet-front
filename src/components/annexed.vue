<template lang="html">
  <div class="container">
    <h1>Anexo</h1>
    <b>Fecha de consulta: </b> <p >{{this.annexed.created_at}} </p>
    <b>Peso de nacimiento: </b> <p >{{this.annexed.current_weight}} kilogramos</p>
    <b>Altura: </b> <p >{{this.annexed.current_height}} metros</p>
    <b>Perímetro de pecho: </b> <p >{{this.annexed.current_chest}} metros</p>
    <b>Perímetro de abdomen: </b> <p >{{this.annexed.current_umbilical}} metros</p>
    <b>Largo hasta el hombro: </b> <p >{{this.annexed.current_shoulder}} metros</p>
    <b>Largo hasta el olecranon: </b> <p >{{this.annexed.current_olecranon}} metros</p>
    <b>Titulo de consulta: </b> <p >{{this.annexed.title}} </p>
    <b>Descripción: </b> <p >{{this.annexed.description}} </p>
    <b>Ciudad: </b> <p >{{this.annexed.city}} </p>
    <b>Dirección: </b> <p >{{this.annexed.address}} </p>
    <b>Hora inicio: </b> <p >{{this.annexed.start_hour}} </p>
    <b>Hora final: </b> <p >{{this.annexed.end_hour}} </p>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rol: sessionStorage.getItem('type'),
      annexed:[]
    }
  },
  methods: {
    submit() {

    }
  },
  created() {
    this.$http.get('annexeds/'+this.$route.params.id)
    .then(response =>{
      this.annexed=response.body;
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
