import Vue from "vue";
import Vuex from "vuex";
import { allCards } from "./types/enums";
import playerCards from "./types/playerCards";
Vue.use(Vuex);

const state = {
  currentPlayer: "player1",
  DeckCards: allCards(),
  cardOwners: [
    { id: "deck", cards: allCards() },
    {
      id: "playerOne",
      agriM: 0,
      tools: 0,
      meeple: 0,
      hutsM: 0,
      artiOneM: 0,
      artiTwo: 0,
      cards: playerCards
    },
    {
      id: "playerTwo",
      agriM: 0,
      tools: 0,
      meeple: 0,
      hutsM: 0,
      artiOneM: 0,
      artiTwo: 0,
      cards: playerCards
    }
  ]
};

const getters = {
  // getDeckCards: state => state.DeckCards,
  // getPlayerCards: state => state.players
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
