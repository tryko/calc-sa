import { CARD_TYPES } from "./enums";
function createPlayerObj() {
  const obj = {};
  for (let key in CARD_TYPES) {
    obj[key] = [];
  }
  return obj;
}
export const playerOneCards = {
  ...createPlayerObj()
};
export const playerTwoCards = {
  ...createPlayerObj()
};
