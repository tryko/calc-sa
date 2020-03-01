const uuidv4 = require("uuid/v4");
import Vue from "vue";
import Vuex from "vuex";
import { CARD_TYPES, allCards } from "./types/enums";
import { playerOneCards, playerTwoCards } from "./types/playerCards";

Vue.use(Vuex);

const setMultiplyer = () => {
  const multipyler = {};
  for (let type in CARD_TYPES) {
    multipyler[type] = 0;
  }
  return multipyler;
};

const state = {
  currentPlayerName: "playerOne",
  cardOwners: {
    deck: { id: uuidv4(), name: "Deck", ownerType: "deck", cards: allCards() },
    playerOne: {
      id: uuidv4(),
      ...setMultiplyer(),
      playerMultiPlyer: { ...setMultiplyer() },
      playerCardsValue: { ...setMultiplyer() },
      name: "Player-1",
      ownerType: "player",
      cards: playerOneCards
    },
    playerTwo: {
      id: uuidv4(),
      ...setMultiplyer(),
      playerMultiPlyer: { ...setMultiplyer() },
      playerCardsValue: { ...setMultiplyer() },
      name: "Player-2",
      ownerType: "player",
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
      const ownerCards = state.cardOwners[owner].cards[type];
      // adding card to player
      if (clickedCard.owner === "deck") {
        state.cardOwners[owner].cards[type] = ownerCards.filter(card => {
          if (card.id === clickedCard.id) {
            state.cardOwners[currPlayer].cards[type].push(card);
          } else return true;
        });
      } // remove card from player and back to deck
    },

    addingScore(state, clickedCard) {
      const type = clickedCard.type;
      const player = clickedCard.player;
      const cardOwner = state.cardOwners[player];
      const playerMultiPlyer = cardOwner.playerMultiPlyer[type];
      const playerCardsValue = cardOwner.playerCardsValue[type];
      if (type === "artiOneM" || type === "artiTwoM") {
        cardOwner[type] = cardOwner.cards[type].length ** 2;
      } else if (type === "hutsM") {
        cardOwner[type] = playerCardsValue * cardOwner.cards["huts"].length;
      } else if (type === "huts") {
        // need to calculate the hutsM score and the huts score at the same go.
        cardOwner["hutsM"] =
          cardOwner.playerCardsValue["hutsM"] * cardOwner.cards["huts"].length;
        cardOwner[type] += clickedCard.value;
      } else {
        cardOwner[type] = playerCardsValue * playerMultiPlyer;
      }
    },
    addToTypeMultiplyer(state, selectorClicked) {
      const player = selectorClicked.player;
      const type = selectorClicked.type;
      state.cardOwners[player].playerMultiPlyer[type] = selectorClicked.value;
    },
    addValueToCards(state, clickedCard) {
      const currPlayer = state.currentPlayerName;
      const type = clickedCard.type;
      state.cardOwners[currPlayer].playerCardsValue[type] += clickedCard.value;
    },
    changePlayer(state) {
      state.currentPlayerName =
        state.currentPlayerName === "playerOne" ? "playerTwo" : "playerOne";
    }
  },
  getters
});
