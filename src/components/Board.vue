<template>
  <div class="board-container">
    <div
      :class="'cards-container-' + owner.id"
      v-for="(owner, i) in cardOwners"
      :key="i"
    >
      <div v-for="(type, i) in multiplyerCardsTypes" :key="i">
        <MultiplyerCards
          :cards="owner.cards[type]"
          :cardsType="type"
          :owner="owner.id"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="js">
import MultiplyerCards from "./MultiplyerCards.vue";

export default {
  props: ["cardOwners"],
  data() {
    return {
      multiplyerCardsTypes: ["agriM", "toolsM", "meepleM", "artiOneM","artiTwoM", "hutsM", "huts"]
    };
  },
  components: {
    MultiplyerCards
  }
};
</script>

<!-- using grid didn't work i have to set it like this cause childern to adhear to grid proeprly
// todo fix classes
 -->

<style scoped>
.board-container {
  display: flex;
}
.cards-container-deck {
  max-width: 520px;
}
.cards-container-player {
  min-width: 400px;
}
</style>
