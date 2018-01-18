<template>
  <div class="card-list">
    <modal-card-form route="cards/" v-if="showForm" @close="closeAndUpdate"/>
    <h3 v-if="!cards || !cards.length">
      No data available.
    </h3>
    <button type="button" @click="showForm = true">
      Add card
    </button>
    <div class="cards">
      <sw-card 
        v-for="card in cards"
        :key="card.id"
        :card="card"
      />
    </div>
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
    },
    closeAndUpdate() {
      this.showForm = false;
      this.loadList(this.setCards, this.showErr);
    },
  }
}
</script>

<style lang="sass">
.card-list
  h3
    width: 100%
    text-align: center
  .cards
    display: flex
    justify-content: flex-start
    align-items: center
    padding: 30px 10px

</style>
