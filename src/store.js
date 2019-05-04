import Vue from "vue";
import Vuex from "vuex";
import { createMultiPlyerCards } from "./types/enums";
import { huts } from "./types/hutsTypes";
Vue.use(Vuex);

const state = {
  currentPlayer: "player1",
  multiplyerCardsInDeck: createMultiPlyerCards(),
  multiplyerCardsOfPlayers: [
    {
      agri: {
        1: 0,
        2: 0,
        3: 0
      },
      tools: {
        1: 0,
        2: 0,
        3: 0
      },
      meeple: {
        1: 0,
        2: 0,
        3: 0
      },
      huts: {
        1: 0,
        2: 0,
        3: 0
      }
    },
    {
      agri: {
        1: 0,
        2: 0,
        3: 0
      },
      tools: {
        1: 0,
        2: 0,
        3: 0
      },
      meeple: {
        1: 0,
        2: 0,
        3: 0
      },
      huts: {
        1: 0,
        2: 0,
        3: 0
      }
    }
  ],
  huts
};

const getters = {
  multiplyerCardsGetter: state => state.multiplyerCardsInDeck
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
