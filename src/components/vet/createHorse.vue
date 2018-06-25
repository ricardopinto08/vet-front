<template lang="html">
  <div class="">
    <b-form @submit="submit">
      <b-form-group id="horseNamefg"
                    label="Nombre del caballo:"
                    label-for="horseName">
        <b-form-input id="horseName"
                      type="text"
                      v-model="credentials.name"
                      required
                      placeholder="Nombre del caballo">
        </b-form-input>
      </b-form-group>
      <b-form-group id="bornDatefg"
                    label="Fecha de nacimiento:"
                    label-for="bornDate">
        <b-form-input id="bornDate"
                      type="date"
                      v-model="credentials.born_date"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="emailClientfg"
                    label="Correo propietario:"
                    label-for="emailClient"
                    description="Correo electrónico del propietario del caballo.">
        <b-form-input id="emailClient"
                      type="email"
                      v-model="credentials.emailClient"
                      required
                      placeholder="Ej: juan@mail.com">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Crear</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        name: '',
        born_date:'',
        emailClient:'',
        emailVet:sessionStorage.getItem("email"),
      }

    }
  },
  methods: {
    submit() {
      this.$http.post('http://localhost:3000/v1/horses#create',this.credentials)
          .then(response =>{

            this.$router.push('/myHorsesVet');
          }, error1 =>{
            this.error="Usuario o contraseña incorrecta";
          });
    }
  },
  created() {

  }
}
</script>

<style lang="css">
</style>
