<template>
  <div class="box" @click="cardClicked">
    <img src="./../assets/agri-1-ex-1stone.PNG" alt="" />
  </div>
</template>

<script lang="ts">
export default {
  props: ["boxClass", "multiplyBy", "cardType", "owner", "imgURL"],
  methods: {
    cardClicked() {
      if (this.owner === "deck") {
        this.$store.commit("addCardToPlayer", {
          cardType: this.cardType,
          multiplyBy: this.multiplyBy
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .board-deck {
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
} */

.box {
  background-color: lightseagreen;
  color: #fff;
  height: 70px;
  width: 50px;
  padding: 10px;
  font-size: 150%;
  border: 1px solid black;
}

/* .box-invisible {
    background-color: lightseagreen;
    color: #fff;
    padding: 10px;
    font-size: 150%;
    border: 1px solid black;
    visibility: hidden;
  } */
</style>
