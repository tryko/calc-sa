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
  margin-bottom: 40px;
  min-height: 200px;
  min-width: 200px;
  display: flex;
  flex-wrap: wrap;
}
.sub-deck-of-type {
  display: flex;
  margin-top: 10px;
  margin-left: 50px;
}
</style>
