<template>
  <div id="app">
    <Deck :cardsLeftInDeck="multiplyerCards" />
    <div class="players-container">
      <PlayerBoard />
      <PlayerBoard />
    </div>
  </div>
</template>

<script lang="js">
import { mapState } from "vuex";
import Deck from "./components/Deck.vue";
import PlayerBoard from "./components/PlayerBoard.vue";

export default {
  components: {
    Deck,
    PlayerBoard
  },
  computed: {
    ...mapState(["multiplyerCards"])
  },
  mounted() {
    console.log(this.multiplyerCards);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
}
.players-container {
  display: flex;
}
</style>
