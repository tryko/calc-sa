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
      />
    </div>

    <!-- <Card class="box" :multiplyBy="2" />
      <Card class="box" :multiplyBy="2" />
      <Card class="box" :multiplyBy="1" />
      <Card class="box" :multiplyBy="1" /> -->
  </div>
</template>

<script lang="ts">
import Card from "./Card.vue";
export default {
  props: ["cardsType", "wrapperClassType", "cards"],
  components: { Card }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.multiplyer-cards {
  margin-bottom: 40px;
}
.sub-deck-of-type {
  display: flex;
  margin-top: 10px;
  margin-left: 50px;
}

.box {
  background-color: lightseagreen;
  color: #fff;
  padding: 10px;
  font-size: 150%;
  border: 1px solid black;
}
</style>
