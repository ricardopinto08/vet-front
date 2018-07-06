<template lang="html">
  <div class="w-100">
    <div >
      <div class="bottom">
        <ul class="nav nav-pills nav-fill">

          <li @click="redirect('/myHorsesClient')" v-if="type === 'Client'" class="nav-item">
            <img src="../assets/menu_home.svg" class="profileIcon">
            <a class="nav-link"  href="#">Mi criadero</a>
          </li>
          <li @click="redirect('/myHorsesVet')" v-if="type === 'Vet'" class="nav-item">
            <img src="../assets/menu_home.svg" class="profileIcon">
            <a class="nav-link"  href="#">Mi criadero</a>
          </li>


          <li class="nav-item">
            <img src="../assets/menu_explore.svg" class="profileIcon">
            <a class="nav-link"  href="#">Explorar</a>
          </li>


          <li @click="redirect('/myVets')" v-if="type === 'Client'" class="nav-item">
            <img src="../assets/menu_vet.svg" class="profileIcon">
            <a class="nav-link"  href="#">Mis veterinarios</a>
          </li>


          <li @click="redirect('/myProfileClient')" v-if="type === 'Client'" class="nav-item">
            <img src="../assets/menu_profile.svg" class="profileIcon">
            <a class="nav-link"  href="#">
              Mi perfil
            </a>
          </li>
          <li @click="redirect('/myProfileVet')" v-if="type === 'Vet'" class="nav-item">
            <img src="../assets/menu_profile.svg" class="profileIcon">
            <a class="nav-link"  href="#">
              Mi perfil
            </a>
          </li>


        </ul>
      </div>

      <b-navbar class="myNav" type="dark" variant="primary" toggleable>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <a class="navbar-brand" href="#">Navbar</a>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav>
            <!-- <b-nav-item to="/" tag="li" active-class="active" exact><a>Inicio</a></b-nav-item> -->

            <b-nav-item to="/myProfileClient" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Mi perfil</a></b-nav-item>
            <b-nav-item to="/myProfileVet" tag="li" v-if="type === 'Vet'" active-class="active" exact><a>Mi perfil</a></b-nav-item>

            <b-nav-item to="/myHorsesClient" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Mis caballos</a></b-nav-item>
            <b-nav-item to="/myHorsesVet" tag="li" v-if="type === 'Vet'" active-class="active" exact><a>Mis caballos</a></b-nav-item>

            <b-nav-item to="/myVets" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Mis veterinarios</a></b-nav-item>

            <b-nav-item to="/changeVet" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Agregar veterinario</a></b-nav-item>
            <b-nav-item to="/sellHorse" tag="li" v-if="type === 'Client'" active-class="active" exact><a>Vender caballo</a></b-nav-item>

            <b-nav-item to="/createHorse" tag="li" v-if="type === 'Vet'" active-class="active" exact><a>Crear caballo</a></b-nav-item>
            <b-nav-item to="/createExamination" tag="li" v-if="type === 'Vet'" active-class="active" exact><a>Crear consulta</a></b-nav-item>

            <b-nav-item to="/changePassword" v-if="isLogged" tag="li" active-class="active" exact><a>Cambiar contraseña</a></b-nav-item>
            <b-nav-item v-if="!isLogged" @click="logIn"  active-class="active" exact>Iniciar sesión</b-nav-item>
            <b-nav-item v-if="isLogged" @click="logOut"  active-class="active" exact>Cerrar sesión</b-nav-item>
            <!-- Navbar dropdowns -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

    </div>

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
      type: sessionStorage.getItem('type')
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
.navbar-brand{
  height: 100%;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .myNav {
    display: none;
  }
  .bottom {
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0px;
  }
  .nav-link {
    font-family: 'Ubuntu', sans-serif;
    font-size: 8px;
    min-height: 9px;
    min-width: 40px;
    color: ###5BBDC4;
  }
  .profileIcon{
    border: 5px;
    height: 22px;
    width: 16.73px;
  }
}

</style>
