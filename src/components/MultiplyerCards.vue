<template>
  <div class="multiplyer-cards">
    <div :class="wrapperClassType">
      <Card class="box" :multiplyBy="2" />
      <Card class="box" :multiplyBy="2" />
      <Card class="box" :multiplyBy="2" />
      <Card class="box" :multiplyBy="1" />
      <Card class="box" :multiplyBy="1" />
    </div>
  </div>
</template>

<script lang="ts">
import Card from "./Card.vue";
export default {
  props: ["cardsType", "wrapperClassType"],
  components: { Card }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board-deck {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 100px 100px 100px;
  background-color: #fff;
  color: #444;
  background-color: inherit;
  padding: 30px;
}

.player-deck {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 75px 75px 75px;
  background-color: #fff;
  color: #444;
  background-color: inherit;
  padding: 30px;
}

.box {
  background-color: lightseagreen;
  color: #fff;
  padding: 10px;
  font-size: 150%;
  border: 1px solid black;
}
</style>
