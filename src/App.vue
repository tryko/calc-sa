<template>
  <div id="app">
    1
    <div>
      <Deck :deckCards="getDeckCards" />
    </div>
    <div>
      1.2 holds the players information
    </div>
    <!-- <Deck :cardsLeftInDeck="getDeckCards" :currentPlayer="currentPlayer" /> -->
    <div>
      <!-- <div class="players-container"> -->
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
import {
  mapState,
  mapGetters
  } from "vuex";
import Deck from "./components/Deck.vue";
// import PlayerBoard from "./components/PlayerBoard.vue";

export default {
  components: {
    Deck,
    // PlayerBoard
  },
  computed: {
    ...mapState(["DeckCards","players"]),
    ...mapGetters(['getDeckCards','getPlayerCards'])
  },
  mounted() {
    console.log(this.DeckCards);
    // console.log('huts::',this.huts);
  }
};
</script>

<style>
body {
  /* background-image: url("./assets/stone-age-board.jpg"); */
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
