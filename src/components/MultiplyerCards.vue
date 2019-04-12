<template>
  <div class="multiplyer-cards">
    <div
      v-for="(numOfCards, scalar) in cards"
      :key="scalar"
      class="sub-deck-of-type"
    >
      <Card
        v-for="card in numOfCards"
        :key="card"
        class="box"
        :multiplyBy="scalar"
        :cardType="cardsType"
        :owner="owner"
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
}
.sub-deck-of-type {
  display: flex;
  margin-top: 10px;
  margin-left: 50px;
}
</style>
