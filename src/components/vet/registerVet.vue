<template lang="html">
  <div class="container espacio">
    <form id="app" @submit="checkForm" method="post">
      <h2>Registro Veterinario</h2>
      <p v-if="error.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
      <div class="form-group">
        <label for="name">Nombre: </label>
        <input
          id="name"
          type="text"
          class="form-control"
          placeholder="Nombre"
          v-model="user.name"
          required="true"
        >
      </div>
      <div class="form-group">
        <label for="lastname">Apellido: </label>
        <input
          id="lastname"
          type="text"
          class="form-control"
          placeholder="Apellido"
          v-model="user.lastname"
          required="true"
        >
      </div>
      <div class="form-group">
        <label for="email">Correo: </label>
        <input
          id="email"
          type="text"
          class="form-control"
          placeholder="Correo"
          v-model="user.email"
          required="true"
        >
      </div>
      <div class="form-group">
        <label for="phone">Teléfono: </label>
        <input
          id="phone"
          type="number"
          class="form-control"
          placeholder="Telefono"
          v-model="user.phone"
          required="true"
        >
      </div>
      <div class="form-group">
        <label for="pass">Contraseña: </label>
        <input
          id="pass"
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="user.password"
          required="true"
        >
      </div>
      <div class="form-group">
        <label for="passC">Confirmar contraseña: </label>
        <input
          id="passC"
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="user.password_confirmation"
          required="true"
        >
      </div>
      <div class="">
        <input type="checkbox" id="checkbox" v-model="checked" required="true">
        <label for="checkbox">Acepto los términos y condiciones</label>
      </div>
      <div class="">
        <input class="btn btn-primary" type="submit" value="Registarme"></input>
      </div>
    </form>
    <hr>
    <div id="app">
      <button class="btn btn-primary" type="button" @click="openDialog">
        Términos y condiciones
      </button>
      <a11y-dialog id="app-dialog" app-root="#app" @dialog-ref="assignDialogRef">
        <h1 slot="title">Términos y Condiciones de Uso</h1>
        <div>
          <p>Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.
El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos.  no asume la responsabilidad en caso de que entregue dicha clave a terceros.
Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.
Los precios de los productos ofrecidos en esta Tienda Online es válido solamente en las compras realizadas en este sitio web.
          </p>
        </div>
      </a11y-dialog>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { eventBus } from '../../main'
export default {
  data() {
    return {
      checked: false,
      dialog: null,
      user: {
        name:'',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: 0,
      },
      error: ''
    }
  },
  methods: {
    openDialog () {
      if (this.dialog) {
        this.dialog.show();
      }
    },
    assignDialogRef (dialog) {
      this.dialog = dialog;
    },
    checkForm: function (e) {
      e.preventDefault();
      if(this.user.password != this.user.password_confirmation) {
        alert("Las contraseñas no coinciden");
      }else if (this.user.name && this.user.lastname && this.user.email && this.user.password && this.user.password_confirmation) {
        this.$http.post('vets#create',this.user)
            .then(response => response.json())
            .then(response =>{
              if (response.error){
                this.errors.push(response.error);
              }else{
                this.credentials = {user: this.user.email, password: this.user.password}
                this.$http.post('auth/',this.credentials)
                    .then(response =>{
                      this.isLogged=true;
                      eventBus.$emit('someoneSignedIn', this.isLogged);
                      sessionStorage.setItem('token', response.body.token);
                      this.$router.push('/');
                    }, error =>{
                      console.log(error);
                    });
              }
            });
        return true;
      }
    }
  },
  created() {
    eventBus.$on('someoneSignedOut', (isLogged) =>{
      this.isLogged = isLogged;
    });
  }
}
</script>

<style lang="css">
</style>
