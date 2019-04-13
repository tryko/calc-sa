<template>
  <div id="app">
    <Deck
      :cardsLeftInDeck="multiplyerCardsInDeck"
      :currentPlayer="currentPlayer"
    />
    <div class="players-container">
      <!-- <PlayerBoard
        playerId="player1"
        :playerCards="multiplyerCardsOfPlayers[0]"
      />
      <PlayerBoard
        playerId="player2"
        :playerCards="multiplyerCardsOfPlayers[1]"
      /> -->
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
    ...mapState(["multiplyerCardsInDeck","multiplyerCardsOfPlayers","artifactCards", "currentPlayer"])
  },
  mounted() {
    console.log(this.multiplyerCardsInDeck);
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
