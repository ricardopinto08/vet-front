<template lang="html">
  <div class="">
    <b-table striped hover :items="horses" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: sessionStorage.getItem('id'),
      fields: ['id', 'name', 'born_date', 'created_at'],
      horses:[]
    }
  },
  methods: {
    submit() {

    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/clients/'+this.id+'/gethorses')
    .then(response =>{
      this.horses=response.body;
      console.info(response);
      console.info(this.horses);
    }, error1 =>{
      console.info(error1);
    });
  }
}
</script>

<style lang="css">
</style>
