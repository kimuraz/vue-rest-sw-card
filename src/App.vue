<template>
  <div id="app">
    <card-list route="cards/"/>
  </div>
</template>

<script>
import CardList from './components/CardList'

export default {
  name: 'app',
  components: {
    CardList,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">

*
  padding: 0
  margin: 0


html
  position: relative
  margin: 0
  padding: 0
  height: 100%
  width: 100%

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>
