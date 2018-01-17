<template>
  <div class="sw-card">
    <h2>{{ card.name }}</h2>
    <img :src="card.photo_url" class="card-photo"/>
    <label>Planet: </label>
    <span class="planet-tag"> {{ card.planet }}</span>
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
</style>
