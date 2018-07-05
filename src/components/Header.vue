<template lang="html">
  <div class="w-100">
    <div >
      <b-navbar type="dark" variant="primary" toggleable>
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

</style>
