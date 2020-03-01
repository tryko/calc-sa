<template>
  <div class="multiplyer-container">
    <div :class="'multiplyer-cards ' + cardsType">
      <Card
        v-for="(card, i) in cards"
        :key="i + cardsType"
        :value="card.value"
        :type="cardsType"
        :id="card.id"
        :imgURL="card.imgURL"
        :owner="owner"
        :player="player"
      />
    </div>
    <div>{{ typeScore }}</div>
  </div>
</template>

<script lang="ts">
import Card from "./Card.vue";
export default {
  props: ["cardsType", "owner", "cards", "typeScore", "multi", "player"],
  data() {
    return {
      playerMultiplyer: 0
    };
  },
  components: { Card }
};
</script>

<style scoped>
.multiplyer-cards {
  display: flex;
  flex-wrap: wrap;
}
.huts {
  min-height: 170px;
}
.multiplyer-container {
  display: flex;
  min-height: 65px;
  padding: 5px 0 0 2px;
  box-sizing: border-box;
  border: 1px solid black;
  border-right: none;
  border-bottom: none;
  justify-content: space-between;
}
</style>
