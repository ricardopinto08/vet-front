<template lang="html">
  <div class="container espacio">
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

      <b-form-group id="breedfg"
                    label="Raza del caballo:"
                    label-for="breed">
        <b-form-input id="breed"
                      type="text"
                      v-model="credentials.breed"
                      required
                      placeholder="Raza del caballo">
        </b-form-input>
      </b-form-group>

      <b-form-group id="genderfg"
                    label="Género:"
                    label-for="gender">
        <b-form-select id = "gender" required v-model="credentials.gender"  class="mb-3" >
          <option :value="null">Selecciona una opción</option>
          <option value="f">Hembra</option>
          <option value="m">Macho</option>
          <option value="mc">Macho castrado</option>

        </b-form-select>
      </b-form-group>

      <b-form-group id="colorfg"
                    label="Color del caballo:"
                    label-for="color">
        <b-form-select id="color"
                      v-model="credentials.color"
                      required
                      class="mb-3">
          <option :value="null">Selecciona una opción</option>
          <option value="Alazán">Alazán</option>
          <option value="Alazán oscuro">Alazán oscuro</option>
          <option value="Bayo">Bayo</option>
          <option value="Bayo palomino">Bayo palomino</option>
          <option value="Blanco">Blanco</option>
          <option value="Castaño">Castaño</option>
          <option value="Castaño oscuro">Castaño oscuro</option>
          <option value="Cervuno">Cervuno</option>
          <option value="Cisne">Cisne</option>
          <option value="Colorado cereza">Colorado cereza</option>
          <option value="Isabelo">Isabelo</option>
          <option value="Moro">Moro</option>
          <option value="Moro Rosado">Moro Rosado</option>
          <option value="Moro melado">Moro melado</option>
          <option value="Negro">Negro</option>
          <option value="Palomino">Palomino</option>
          <option value="Ruano">Ruano</option>
          <option value="Rusio moro">Rusio moro</option>
          <option value="Rusio moscado">Rusio moscado</option>
          <option value="Zaino">Zaino</option>

        </b-form-select>
      </b-form-group>

      <b-form-group id="momfg"
                    label="Nombre de la madre:"
                    label-for="mom">
        <b-form-input id="mom"
                      type="text"
                      v-model="credentials.mom"
                      required
                      placeholder="Nombre de la madre">
        </b-form-input>
      </b-form-group>

      <b-form-group id="dadfg"
                    label="Nombre del padre:"
                    label-for="dad">
        <b-form-input id="dad"
                      type="text"
                      v-model="credentials.dad"
                      required
                      placeholder="Nombre del padre">
        </b-form-input>
      </b-form-group>

      <b-form-group id="weightfg"
                    label="Peso del caballo (Kg):"
                    label-for="bornWeight">
        <b-form-input id="bornWeight"
                      type="number"
                      step="0.1"
                      min="0"
                      v-model="credentials.born_weight"
                      required
                      placeholder="Peso del caballo (Kg)">
        </b-form-input>
      </b-form-group>

      <b-form-group id="chestfg"
                    label="Perímetro pecho (m):"
                    label-for="bornChest">
        <b-form-input id="bornChest"
                      type="number"
                      step="0.1"
                      min="0"
                      v-model="credentials.born_chest"
                      required
                      placeholder="Perímetro pecho (m):">
        </b-form-input>
      </b-form-group>

      <b-form-group id="umbilicalfg"
                    label="Perímetro abdominal (m):"
                    label-for="bornUmbilical">
        <b-form-input id="bornUmbilical"
                      type="number"
                      step="0.1"
                      min="0"
                      v-model="credentials.born_umbilical"
                      required
                      placeholder="Perímetro abdominal (m):">
        </b-form-input>
      </b-form-group>

      <b-form-group id="shoulderfg"
                    label="Largo hasta el hombro (m):"
                    label-for="bornShoulder">
        <b-form-input id="bornShoulder"
                      type="number"
                      step="0.1"
                      min="0"
                      v-model="credentials.born_shoulder"
                      required
                      placeholder="Largo hasta el hombro (m):">
        </b-form-input>
      </b-form-group>

      <b-form-group id="olecranonfg"
                    label="Largo hasta el olecranon (m):"
                    label-for="bornOlecranon">
        <b-form-input id="bornOlecranon"
                      type="number"
                      step="0.1"
                      min="0"
                      v-model="credentials.born_olecranon"
                      required
                      placeholder="Largo hasta el olecranon (m):">
        </b-form-input>
      </b-form-group>

      <b-form-group id="heightfg"
                    label="Altura (m):"
                    label-for="height">
        <b-form-input id="height"
                      type="number"
                      step="0.1"
                      min="0"
                      v-model="credentials.born_height"
                      required
                      placeholder="Altura (m):">
        </b-form-input>
      </b-form-group>

      <b-form-group id="emailClientfg"
                    label="Correo propietario:"
                    label-for="emailClient"
                    description="Correo electrónico del propietario del caballo.">
        <b-form-input id="emailClient"
                      type="email"
                      min="0"
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
        breed: '',
        gender: 'null',
        color: 'null',
        born_date: '',
        current_weight: '',
        current_chest: '',
        current_umbilical: '',
        current_shoulder: '',
        current_olecranon: '',
        current_height: '',
        born_weight:'',
        born_chest:'',
        born_umbilical:'',
        born_shoulder:'',
        born_olecranon:'',
        born_height: '',
        emailClient:'',
        emailVet:sessionStorage.getItem("email"),
      },


    }
  },
  methods: {
    submit(evt) {
      this.credentials.emailClient=this.credentials.emailClient.toLowerCase();
      evt.preventDefault();
      this.credentials.current_height = this.credentials.born_height;
      this.credentials.current_chest = this.credentials.born_chest;
      this.credentials.current_olecranon = this.credentials.born_olecranon;
      this.credentials.current_shoulder = this.credentials.born_shoulder;
      this.credentials.current_weight = this.credentials.born_weight;
      this.credentials.current_umbilical = this.credentials.born_umbilical;
      this.credentials.emailClient=this.credentials.emailClient.toLowerCase();
      this.$http.post('horses#create',this.credentials)
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
