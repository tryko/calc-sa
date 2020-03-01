<template>
  <div class="board-container">
    <div
      :class="'cards-container-' + owner.ownerType"
      v-for="(owner, key) in cardOwners"
      :key="key"
      x
    >
      <p :class="currentPlayerName === key ? 'curr-player' : ''">
        {{ owner.name }}
      </p>
      <PlayerSelectors :types="multiplyerCardsTypes" :player="key" />
      <div v-for="(type, i) in multiplyerCardsTypes" :key="i">
        <MultiplyerCards
          :cards="owner.cards[type]"
          :cardsType="type"
          :owner="key"
          :typeScore="owner[type]"
          :player="currentPlayerName"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="js">
import MultiplyerCards from "./MultiplyerCards.vue";
import PlayerSelectors from './playerSelectors';
import {CARD_TYPES} from './../types/enums.js'
export default {
  props: ["cardOwners","currentPlayerName"],
  data() {
    return {
      multiplyerCardsTypes: CARD_TYPES
    };
  },
  components: {
    MultiplyerCards,
    PlayerSelectors
  },
  mounted(){
    window.addEventListener('keypress',this.changePlayer)
  },
  destroyed() {
	  window.removeEventListener('keypress', this.changePlayer);
  },
  methods: {
    changePlayer(e) {
      if(e.code === "Space") this.$store.commit("changePlayer");
    }
  }
};
</script>

<!-- using grid didn't work i have to set it like this cause childern to adhear to grid proeprly
// todo fix classes
 -->

<style scoped>
.board-container {
  margin: 5px;
  display: flex;
}
.cards-container-deck {
  max-width: 405px;
}
.cards-container-player {
  min-width: 410px;
}
.curr-player {
  background-color: black;
  color: white;
}
</style>
