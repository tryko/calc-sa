<template>
  <div class="multiplyer-cards">
    <div v-for="(card, i) in cards" :key="i + cardsType">
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
  methods: {
    setClassName: type => {
      const className =
        "cards-sub-container" + " " + type === "huts" ? "huts" : "";
      console.log(className);
      return className;
    }
  },
  components: { Card }
};
</script>

<style scoped>
.multiplyer-cards {
  display: flex;
  flex-wrap: wrap;
  min-height: 53px;

  /* margin-bottom: 10px; */
}
.sub-deck-of-type {
  display: flex;
  margin-left: 5px;
}

.cards-sub-container {
  min-height: 53px;
}
.huts {
  min-height: 200px;
}
</style>
