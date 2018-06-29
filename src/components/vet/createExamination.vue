<template lang="html">
  <div class="">
    <b-form @submit="submit">
      <label for="ddown1">Selecciona un caballo: </label>
      <b-form-select id = "ddown1" required v-model="examination.idHorse" :options="horses" class="mb-3" />
      <br>
      <b-form-group id="titlefg"
                    label="Titulo:"
                    label-for="title">
        <b-form-input id="title"
                      type="text"
                      v-model="examination.title"
                      required
                      placeholder="Titulo">
        </b-form-input>
      </b-form-group>

      <b-form-group id="descriptionfg"
                    label="Descripcion:"
                    label-for="description">
        <b-form-textarea id="description"
                     v-model="examination.description"
                     placeholder="Descripcion consulta médica"
                     :rows="3"
                     :max-rows="6">
        </b-form-textarea>
      </b-form-group>

      <b-form-group id="cityfg"
                    label="Ciudad:"
                    label-for="city">
        <b-form-input id="city"
                      type="text"
                      v-model="examination.city"
                      required
                      placeholder="Bogota">
        </b-form-input>
      </b-form-group>

      <b-form-group id="addressfg"
                    label="Dirección:"
                    label-for="address">
        <b-form-input id="address"
                      type="text"
                      v-model="examination.address"
                      required
                      placeholder="Dirección">
        </b-form-input>
      </b-form-group>

      <b-form-group id="starttimefg"
                    label="Hora de inicio:"
                    label-for="starttime">
        <b-form-input type="time" id="starttime"
               required
               v-model="examination.start_hour"/>
      </b-form-group>

      <b-form-group id="endtimefg"
                    label="Hora de final:"
                    label-for="endtime">
        <b-form-input type="time" id="endtime"
               :min="examination.start_hour"
               v-model="examination.end_hour"
               required />
      </b-form-group>

      <b-button type="submit" variant="primary">Crear</b-button>
    </b-form>
    <b-button @click="prueba" >fasd</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minHour:'',
      examination: {
        title: '',
        description:'',
        city:'',
        address:'',
        start_hour:'',
        end_hour:'',
        idVet: sessionStorage.getItem('id'),
        idHorse:''
      },
      horses:[{value: null, text: 'Selecciona un caballo', id: "&"}]

    }
  },
  methods: {
    prueba() {
      console.info(this.examination);
    },
    submit() {
      this.examination.idHorse = this.examination.idHorse.toString();
      this.$http.post('http://localhost:3000/v1/examinations#create',this.examination)
          .then(response =>{
          }, error1 =>{
            this.error="Incorrecto";
          });
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/vets/'+this.examination.idVet+'/gethorses')
    .then(response =>{
      var i;
      for (i=0; i< response.body.length; i++){
        this.horses.push({value: response.body[i].horse_id, text: response.body[i].name });
      }
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
