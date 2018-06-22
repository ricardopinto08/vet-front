<template lang="html">
  <div class="">
    <h1>Cliente</h1>
    <b>Id de usuario: </b> <p>{{id}}</p>
    <b>Correo: </b><p>{{email}}</p>
    <b>Nombre: </b><p>{{name}}</p>
    <b>Apellido: </b><p>{{lastname}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: sessionStorage.getItem('id'),
      email: sessionStorage.getItem('email'),
      name: sessionStorage.getItem('name'),
      lastname :sessionStorage.getItem('lastname')
    }
  }
}
</script>

<style lang="css">
</style>
