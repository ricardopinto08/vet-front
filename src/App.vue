<template>
  <div class="container">
    <div class="row">
      <div >
        <h1>Vet</h1>
        <hr>
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
