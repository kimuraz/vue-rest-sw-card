<template>
  <div class="bg">
    <div class="modal-card-form">
      <h2>SW Card Form</h2>
      <form @submit.prevent="save(afterSave, showErr)" class="form">
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
        <div class="btn-wrapper">
          <button class="btn-cancel" @click="resetAndClose" type="button">Cancel</button>
          <button class="btn-save" type="submit">Save</button>
        </div>
      </form>
    </div>
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
      planets: [],
      loading: true
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
        } else {
          this.loading = false;
        }
      }).catch((err) => {
        alert(err);
      });
    },
    resetAndClose() {
      this.requestObj = {
        name: '',
        photo_url: '',
        planet: '',
      };
      this.$emit('close');
    },
    afterSave(response) {
      alert(`${response.data.name} saved.`);
      this.resetAndClose();
    },
    showErr(err) {
      alert(JSON.stringify(err));
      this.resetAndClose();
    },
  }
}
</script>

<style lang="sass">

$light-blue: #547AD0
$dark-blue: #305EC9
$grey: #6C6C6C


%input
  background-color: transparent
  border: 1px solid $dark-blue
  color: $dark-blue
  padding: 4px 3px 
%button
  padding: 5px 20px
  background-color: transparent
  font-size: .75rem
  margin: 5px 0
  cursor: pointer

.bg
  position: absolute
  background-color: rgba(10,52,149,.8)
  width: 100%
  height: 100%
  z-index: 998
  .modal-card-form
    z-index: 999
    width: 320px
    height: 210px
    background-color: #F9F9F9
    position: absolute
    top: 40%
    left: 50%
    transform: translate(-50%, -50%)
    h2
      width: 100%
      text-align: center
      font-weight: 300
      color: $dark-blue 
      background-color: #E9E9E9
      border-bottom: 1px solid $grey
    .form
      padding: 10px
      .input-group
        width: 100%
        display: flex
        flex-direction: column
        padding: 2px 0
        label
          font-size: .65rem
          font-weight: 300
          color: $grey
        input, select
          @extend %input
      .btn-wrapper
        display: flex
        justify-content: flex-end
        .btn-save
          @extend %button
          border: 1px solid $light-blue 
          color: $light-blue
          &:hover
            background-color: $light-blue
            color: white
        .btn-cancel
          @extend %button
          border: 1px solid $grey
          color: $grey
          margin-right: 10px
          &:hover
            background-color: $grey
            color: white

</style>
