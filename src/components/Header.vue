<template lang="html">
  <div class="w-100">
      <div class="bottom" v-if="isLogged">
        <ul class="nav nav-pills nav-fill">

          <li @click="redirect('/myHorsesClient')" v-if="type === 'Client'" class="nav-item">
            <img src="../assets/menu_home.svg" class="profileIcon">
            <p class="opciones"  href="#">Mi criadero</p>
          </li>

          <li @click="redirect('/myHorsesVet')" v-if="type === 'Vet'" class="nav-item">
            <img src="../assets/menu_home.svg" class="profileIcon">
            <p class="opciones"  href="#">Mi criadero</p>
          </li>


          <li class="nav-item">
            <img src="../assets/menu_explore.svg" class="profileIcon">
            <p class="opciones"  href="#">Explorar</p>
          </li>


          <li @click="redirect('/myVets')" v-if="type === 'Client'" class="nav-item">
            <img src="../assets/menu_vet.svg" class="profileIcon">
            <p class="opciones"  href="#">Mis veterinarios</p>
          </li>


          <li @click="redirect('/myProfileClient')" v-if="type === 'Client'" class="nav-item">
            <img src="../assets/menu_profile.svg" class="profileIcon">
            <p class="opciones"  href="#">
              Mi perfil
            </p>
          </li>

          <li @click="redirect('/myProfileVet')" v-if="type === 'Vet'" class="nav-item active">
            <img src="../assets/menu_profile.svg" class="profileIcon">
            <p class="opciones"  href="#">
              Mi perfil
            </p>
          </li>
        </ul>
      </div>

        <b-navbar class="myNav" type="dark" variant="primary" toggleable>
          <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
          <a class="navbar-brand" href="/" >Horse-app</a>
          <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
              <!-- <b-nav-item to="/" tag="li" active-class="active" exact><a>Inicio</a></b-nav-item> -->

              <b-nav-item  to="/myProfileClient" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Mi perfil</a></b-nav-item>
              <b-nav-item  to="/myProfileVet" tag="li" v-if="type === 'Vet'" active-class="active" exact><a>Mi perfil</a></b-nav-item>

              <b-nav-item  to="/myHorsesClient" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Mis caballos</a></b-nav-item>
              <b-nav-item  to="/myHorsesVet" tag="li" v-if="type === 'Vet'" active-class="active" exact><a>Mis caballos</a></b-nav-item>

              <b-nav-item to="/myVets" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Mis veterinarios</a></b-nav-item>

              <b-nav-item to="/changeVet" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Agregar veterinario</a></b-nav-item>
              <b-nav-item to="/sellHorse" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Vender caballo</a></b-nav-item>

              <b-nav-item to="/createHorse" tag="li" v-if="type === 'Vet'" active-class="active" exact><a>Crear caballo</a></b-nav-item>
              <b-nav-item to="/createExamination" tag="li" v-if="type === 'Vet'" active-class="active" exact><a>Crear consulta</a></b-nav-item>

              <b-nav-item to="/changePassword" v-if="isLogged" tag="li" active-class="active" exact><a>Cambiar contraseña</a></b-nav-item>
              <b-nav-item class="opciones"  v-if="!isLogged" @click="logIn"  active-class="active" exact>Iniciar sesión</b-nav-item>
              <b-nav-item  v-if="isLogged" @click="logOut"  active-class="active" exact>Cerrar sesión</b-nav-item>
              <!-- Navbar dropdowns -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>


  </div>

</template>


<script>
import { eventBus } from '../main'
import Dropdown from 'bp-vuejs-dropdown';
import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';

export default {
  components: {
     Dropdown
   },
  methods: {
    logOut() {
      sessionStorage.clear();
      this.isLogged = false;
      this.type=''
      eventBus.$emit('someoneSignedOut', this.isLogged);
      this.$router.push('/login');
    },
    logIn() {
      this.$router.push('/login');
    },
    redirect(route) {
      this.$router.push(route);
    }
  },
  data: function () {
    return {
      isLogged: sessionStorage.getItem('token') !== null,
      type: sessionStorage.getItem('type'),
    };
  },
  created() {
    eventBus.$on('someoneSignedIn', (response) =>{
      this.isLogged = response.isLogged;
      this.type = response.type;
    });
  }
}
</script>

<style lang="css">
body {
  background-color: #F3F6FA;
}
@media (min-width: 575.99px) {
  .navbar-brand{
    height: 100%;
    display: block;
    text-align: center;
  }
  .bottom {
    display: none;
  }



}
@media (max-width: 575.98px) {
  .desktop {
    display: block;
  }

  .navbar-brand{
    height: 100%;
    margin-left: 5%;
    display: block;
    text-align: center;
  }

  .navbar {
    padding-top: 3%;
    display: block!important;
    height: 100%;
    margin-bottom: 0;
  }


  .navbar-collapse {
    padding-right: 15px;
    padding-left: 15%;
    overflow-x: visible;
    -webkit-overflow-scrolling: touch;
  }

  .bottom {
    background-color: white;
    z-index: 10;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 50px;
  }

  .show {
    border-width: 0px;
  }

  .nav-link {
    font-family: 'Ubuntu', sans-serif;
    padding: 10px;
    font-size: 10px;
    height: 9px;
    margin-bottom: 5px;
    display: inline-block;
    color: #5BBDC4;
  }
  .opciones {
    font-family: 'Ubuntu', sans-serif;
    padding: 0px;
    font-size: 8px;
    height: 9px;
    color: #5BBDC4;
  }
  .profileIcon{
    margin-top: 8px;
    margin-bottom: 5px;
    border: 5px;
    height: 22px;
  }
}

</style>
