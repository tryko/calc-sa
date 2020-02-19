<template>
  <div id="app">
    <div>
      <Board :cardOwners="cardOwners" :currentPlayerName="currentPlayerName" />
    </div>
  </div>
</template>

<script lang="js">
import {
  mapState,
  } from "vuex";
import Board from "./components/Board.vue";

export default {
  components: {
    Board,
  },
  computed: {
    ...mapState(["cardOwners","currentPlayerName"]),
  },
};
</script>

<style>
body {
  /* background-image: url("./assets/stone-age-board.jpg"); */
  margin: 0;
  background-repeat: no-repeat;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
}
</style>
