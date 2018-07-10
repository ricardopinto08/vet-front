<template>
  <div class="">
    <div class="">
        <app-header></app-header>
        <router-view></router-view >
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
.mobile{
  padding-bottom: 20%;
}
body {
  background-color: #F3F6FA;
  margin-bottom: 50%;
}
</style>
