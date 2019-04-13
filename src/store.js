import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentPlayer: "player1",
  multiplyerCardsInDeck: {
    // the index represent the scalar of multiplyer
    // e.g: index 0 scalar 0 and number of scalar cards is also 0
    1: { agri: 2, extra: "roll" },
    2: { agri: 1, extra: { agrilvl: 1 } },
    3: { agri: 1, extra: { food: 3 } },
    4: { arti: 1, extra: "roll" }
  },
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
  artifactCards: {
    cart: 2,
    figure: 2,
    flute: 2,
    wheel: 2,
    tablet: 2,
    pot: 2,
    plant: 2,
    patch: 2
  },
  huts: {
    hut1: {
      wood: 2,
      brick: 1
    },
    hut2: {
      any: 3,
      total: 5
    },
    hut3: {
      any: 4,
      total: 4
    }
  }
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
