<template>
    <div class="">
        <app-header></app-header>
        <router-view></router-view >
    </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header
  }
}

</script>


<style>

.botonAnexos{
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-color: #5BBDC4;
  color: #5BBDC4;
  height: 28px;
  border-radius: 3px;
}

.mobile{
  margin-bottom: 20%;
}
.espacio{
  margin-bottom: 30%;
}

body {
  margin-bottom: 30%;
  background-color: #F3F6FA !important;
  font-family: 'Oxygen', sans-serif !important;
}
</style>
