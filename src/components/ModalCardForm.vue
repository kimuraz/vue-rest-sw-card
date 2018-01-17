<template>
  <div class="modal-card-form">
    <h2>SW Card Form</h2>
    <form @submit.prevent="save">
      <div class="input-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="requestObj.name"/>
      </div>
      <div class="input-group">
        <label for="photo">Photo:</label>
        <input type="text" id="photo" v-model="requestObj.photo_url"/>
      </div>
      <div class="input-group">
        <label for="planet">Planet: </label>
        <select v-model="requestObj.planet">
          <option v-for="planet in planets" :value="planet.name">
            {{ planet.name }}
          </option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { ApiForm } from 'vue-rest'

export default {
  name: 'modalCardForm',
  mixins: [ApiForm],
  data() {
    return {
      requestObj: {
        name: '',
        photo_url: '',
        planet: '',
      },
      planets: []
    };
  },
  created() {
    this.loadPlanets('https://swapi.co/api/planets/');
  },
  methods: {
    loadPlanets(url) {
      this.$api.get(url).then((res) => {
        this.planets.push(...res.data.results);
        if (res.data.next) {
          this.loadPlanets(res.data.next);
        }
      }).catch((err) => {
        alert(err);
      });
    } 
  }
}
</script>

<style lang="sass">

</style>
