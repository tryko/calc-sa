<template>
  <div id="app">
    1
    <div>
      1.1 here will be board game it will contain: backgoround image
    </div>
    <div>
      1.2 holds the players information
    </div>
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
// import PlayerBoard from "./components/PlayerBoard.vue";

export default {
  components: {
    Deck,
    // PlayerBoard
  },
  computed: {
    ...mapState(["multiplyerCardsInDeck","multiplyerCardsOfPlayers","huts"])
  },
  mounted() {
    console.log(this.multiplyerCardsInDeck);
    console.log('huts::',this.huts);
  }
};
</script>

<style>
body {
  background-image: url("./assets/stone-age-board.jpg");
  background-repeat: no-repeat;
}

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
