const uuidv4 = require("uuid/v4");
import Vue from "vue";
import Vuex from "vuex";
import { CARD_TYPES, allCards } from "./types/enums";
import { playerOneCards, playerTwoCards } from "./types/playerCards";

Vue.use(Vuex);

const state = {
  currentPlayerName: "playerOne",
  cardOwners: {
    deck: { id: uuidv4(), name: "Deck", ownerType: "deck", cards: allCards() },
    playerOne: {
      id: uuidv4(),
      name: "Player-1",
      ownerType: "player",
      ...CARD_TYPES,
      cards: playerOneCards
    },
    playerTwo: {
      id: uuidv4(),
      name: "Player-2",
      ownerType: "player",
      ...CARD_TYPES,
      cards: playerTwoCards
    }
  }
};

const getters = {
  // getDeckCards: state => state.DeckCards,
  // getPlayerCards: state => state.players
};

export default new Vuex.Store({
  state,
  mutations: {
    addCardToPlayer(state, clickedCard) {
      const owner = clickedCard.owner;
      const type = clickedCard.type;
      const currPlayer = state.currentPlayerName;
      if (clickedCard.owner === "deck") {
        state.cardOwners[owner].cards[type] = state.cardOwners[owner].cards[
          type
        ].filter(card => {
          if (card.id === clickedCard.id) {
            state.cardOwners[currPlayer].cards[type].push(card);
            return false;
          } else return true;
        });
      }
    },
    changePlayer(state) {
      state.currentPlayerName =
        state.currentPlayerName === "playerOne" ? "playerTwo" : "playerOne";
    }
  },
  getters
  // actions: {
  //   changePlayer(context) {
  //     context.commit("changePlayer");
  //   },
  //   addCardToPlayer(context, clickedCard) {
  //     console.log("s");
  //     setTimeout(() => {
  //       context.commit("addCardToPlayer", clickedCard);
  //     }, 1000);
  //   }
  // }
});
