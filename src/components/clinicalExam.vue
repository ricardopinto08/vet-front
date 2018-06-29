<template lang="html">
  <div class="">
    <h1>Examen clínico de {{this.horse.name}}</h1>
    <b>Peso de nacimiento: </b> <p >{{this.horse.born_height}} kilogramos</p>
    <b>Altura de nacimiento: </b> <p >{{this.horse.born_weight}} metros</p>
    <b>Perímetro de pecho de nacimiento: </b> <p >{{this.horse.born_chest}} metros</p>
    <b>Perímetro de abdomen de nacimiento: </b> <p >{{this.horse.born_umbilical}} metros</p>
    <b>Largo hasta el hombro de nacimiento: </b> <p >{{this.horse.born_shoulder}} metros</p>
    <b>Largo hasta el olecranon de nacimiento: </b> <p >{{this.horse.born_olecranon}} metros</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get('http://localhost:3000/v1/horses/'+this.$route.params.id)
    .then(response =>{
      this.horse=response.body;
    }, error1 =>{
      console.info(error1);
    });

  },
  data() {
    return {
      horse: {}
    }
  },
  methods: {

  }
}
</script>

<style lang="css">
</style>
