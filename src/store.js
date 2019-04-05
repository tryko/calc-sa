import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  multiplyerCardsInDeck: {
    // the index represent the scalar of multiplyer
    // e.g: index 0 scalar 0 and number of scalar cards is also 0
    agri: [0, 2, 3, 0],
    tools: [0, 2, 3, 0],
    meeple: [0, 2, 3, 0],
    huts: [0, 2, 3, 1]
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
  artifactCards: []
};

const getters = {
  multiplyerCardsGetter: state => state.multiplyerCardsInDeck
};

export default new Vuex.Store({
  state,
  mutations: {},
  getters,
  actions: {}
});
