<template>
  <div class="container">
    <div class="row">
      <div >
        <h1>Plataforma de veterinarios</h1>
        <app-header></app-header>
        <router-view></router-view >
      </div>
    </div>
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
</style>
