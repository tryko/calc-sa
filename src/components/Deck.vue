<template>
  <div class="deck-container">
    <div v-for="(type, i) in multiplyerCardsTypes" :key="i">
      <MultiplyerCards
        :cards="deckCards[type]"
        :cardsType="type"
        owner="deck"
      />
    </div>
  </div>
</template>

<script lang="js">
import MultiplyerCards from "./MultiplyerCards.vue";

export default {
  props: ["deckCards"],
  data() {
    return {
      multiplyerCardsTypes: ["agri", "tools", "meeple", "arti", "hutsM", "huts"]
    };
  },
  components: {
    MultiplyerCards
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deck-container {
  margin-left: 5px;
}

.type-of-cards {
  align-self: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  width: 70px;
  text-align: left;
}
</style>
