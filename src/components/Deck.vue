<template>
  <div class="deck-container">
    <div
      class="all-multiplyer-cards"
      v-for="(multiplyerType, i) in multiplyerCardsTypes"
      :key="i"
    >
      <div class="type-of-cards">{{ multiplyerType }}</div>
      <MultiplyerCards
        :cards="cardsLeftInDeck[multiplyerType]"
        :cardsType="multiplyerType"
        owner="deck"
        :currentPlayer="currentPlayer"
      />
    </div>
  </div>
</template>

<script lang="js">
import MultiplyerCards from "./MultiplyerCards.vue";

export default {
  props: ["cardsLeftInDeck","currentPlayer"],
  data() {
    return {
      multiplyerCardsTypes: ["agri", "tools", "huts", "meeple"]
    };
  },
  components: {
    MultiplyerCards
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-multiplyer-cards {
  display: flex;
}

.deck-container {
  display: flex;
}

.type-of-cards {
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  width: 70px;
  text-align: left;
}
</style>
