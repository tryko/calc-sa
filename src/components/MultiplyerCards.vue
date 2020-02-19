<template>
  <div :class="'multiplyer-cards ' + cardsType">
    <div v-for="(card, i) in cards" :key="i + cardsType">
      <Card
        :value="card.value"
        :type="cardsType"
        :id="card.id"
        :imgURL="card.imgURL"
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

<style scoped>
.multiplyer-cards {
  display: flex;
  flex-wrap: wrap;
  min-height: 65px;
  padding: 5px 0 0 2px;
  box-sizing: border-box;
  border: 1px solid black;
}
.huts {
  min-height: 170px;
}
</style>
