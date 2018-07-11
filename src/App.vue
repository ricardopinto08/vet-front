<template>
    <div class="colorGeneral">
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
  margin-bottom: 20%;
}
body {
  background-color: #F3F6FA !important;
}
</style>
