<template>
  <div>
    <div
      class="player-multyplyer-container"
      v-for="(multiplyerType, i) in multiplyerCardsTypes"
      :key="i"
    >
      <MultiplyerCards
        :cards="playerCards[multiplyerType]"
        :cardsType="multiplyerType"
        :owner="playerId"
      />
      <div class="player-cell">0</div>
      <div class="player-cell">score</div>
    </div>
  </div>
</template>

<script lang="js">
import MultiplyerCards from "./MultiplyerCards.vue";

export default {
  props:["playerCards","playerId"],
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
.player-multyplyer-container {
  display: flex;
}
.player-cell {
  margin: 20px 10px 0 10px;
  align-self: end;
}
</style>
