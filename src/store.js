import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  multiplyerCards: {
    agri: {
      1: 2,
      2: 3,
      3: 0
    },
    tools: {
      1: 2,
      2: 3,
      3: 0
    },
    meeple: {
      1: 2,
      2: 3,
      3: 0
    },
    huts: {
      1: 2,
      2: 2,
      3: 1
    }
  },
  artifactCards: []
};

const getters = {
  multiplyerCardsGetter: state => state.multiplyerCards
};

export default new Vuex.Store({
  state,
  mutations: {},
  getters,
  actions: {}
});
