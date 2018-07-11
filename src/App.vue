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
.mobile{
  margin-bottom: 20%;
}
.espacio{
  margin-bottom: 30%;
}

body {
  margin-bottom: 30%;
  background-color: #F3F6FA !important;
  font-family: 'Oxygen', sans-serif;
}
</style>
