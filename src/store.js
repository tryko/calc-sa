import Vue from "vue";
import Vuex from "vuex";
import { allCards } from "./types/enums";
import playerCards from "./types/playerCards";
Vue.use(Vuex);

const state = {
  currentPlayer: "player1",
  DeckCards: allCards(),
  players: [playerCards, playerCards]
};

const getters = {
  getDeckCards: state => state.DeckCards,
  getPlayerCards: state => state.players
};

export default new Vuex.Store({
  state,
  mutations: {
    addCardToPlayer(state, clickedCard) {
      console.log(clickedCard);
    }
  },
  getters,
  actions: {}
});
