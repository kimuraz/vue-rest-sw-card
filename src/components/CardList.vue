<template>
  <div class="card-list">
    <modal-card-form route="cards/" v-if="showForm"/>
    <h3 v-if="!cards || !cards.length">
      No data available.
    </h3>
    <button type="button" @click="showForm = true">
      Add card
    </button>
    <sw-card 
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<script>
import { ApiList } from 'vue-rest'
import SWCard from './SWCard'
import ModalCardForm from './ModalCardForm'

export default {
  name: 'cardList',
  mixins: [ApiList],
  components: {
    swCard: SWCard,
    ModalCardForm
  },
  data() {
    return {
      cards: [],
      showForm: false
    };
  },
  created() {
    this.loadList(this.setCards, this.showErr);
  },
  methods: {
    setCards(res) {
      this.cards = res.data;
    },
    showErr(err) {
      alert(JSON.stringify(err));
    }
  }
}
</script>

<style lang="sass">

</style>
