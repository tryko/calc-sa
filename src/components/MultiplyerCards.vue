<template>
  <div class="multiplyer-cards">
    <div
      v-for="(card, i) in cards"
      :key="i + cardsType"
      class="sub-deck-of-type"
    >
      <Card
        class="box"
        :multiplyBy="card.value"
        :cardType="card.type"
        :imgURL="card.imgURL"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Card from "./Card.vue";
export default {
  props: ["cardsType", "owner", "cards"],
  components: { Card }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.multiplyer-cards {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  /* margin-bottom: 10px; */
  width: 520px;
}
.sub-deck-of-type {
  display: flex;
  margin-left: 5px;
}
</style>
