<template>
  <div class="sw-card">
    <h2>{{ card.name }}</h2>
    <img :src="card.photo_url" class="card-photo"/>
    <div class="footer">
      <label>Planet: </label>
      <span class="planet-tag"> {{ card.planet }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass">
$light-blue: #547AD0
$dark-blue: #305EC9
$grey: #6C6C6C

.sw-card
  border: 1px solid $grey
  margin: 2px 5px
  h2
    width: 100%
    text-align: center
    color: $dark-blue
    font-weight: 300
    font-size: 1.3rem
  img
    width: 200px
    height: 230px
  .footer
    width: 100%
    text-align: center
    span
      color: $dark-blue
    label
      color: $grey
  width: 200px
  height: 300px
</style>
