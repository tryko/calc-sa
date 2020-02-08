const cardExtra = {
  ROLL: "ROLL",
  FOOD1: "FOOD1",
  FOOD2: "FOOD2",
  FOOD3: "FOOD3",
  FOOD4: "FOOD4",
  FOOD5: "FOOD5",
  FOOD7: "FOOD7",
  AGRILVL: "AGRILVL",
  TOOLSLVL: "TOOLSLVL",
  RESOURCE: resPayload => {
    return resPayload;
  },
  POINTS: 3,
  TOOLS2: "TOOLS2",
  TOOLS3: "TOOLS3",
  TOOLS4: "TOOLS4",
  EXTRACARD: "EXTRACARD"
};

const artifacts = {
  figure: 1,
  pot: 2,
  field: 3,
  plant: 4,
  tablet: 5,
  clock: 6,
  cart: 7,
  flute: 8
};

export const allCards = () => {
  const { figure, field, pot, plant, tablet, clock, cart, flute } = artifacts;
  const {
    ROLL,
    FOOD1,
    FOOD2,
    FOOD3,
    FOOD4,
    FOOD5,
    FOOD7,
    AGRILVL,
    TOOLSLVL,
    RESOURCE,
    POINTS,
    TOOLS2,
    TOOLS3,
    TOOLS4,
    EXTRACARD
  } = cardExtra;

  return {
    agri: [
      { type: "agri", value: 2, extra: ROLL, imgURL: "agri-2-ex-roll" },
      { type: "agri", value: 2, extra: FOOD3, imgURL: "agri-2-ex-f3" },
      { type: "agri", value: 1, extra: ROLL, imgURL: "agri-1-ex-roll" },
      { type: "agri", value: 1, extra: AGRILVL, imgURL: "agri-1-ex-plusagri" },
      {
        type: "agri",
        value: 1,
        extra: RESOURCE({ resType: "stone", amount: 1 }),
        imgURL: "agri-1-ex-1stone"
      }
    ],
    huts: [
      { type: "huts", value: 3, extra: POINTS, imgURL: "hut-3-ex-3points" },
      { type: "huts", value: 2, extra: ROLL, imgURL: "hut-2-ex-roll" },
      { type: "huts", value: 2, extra: FOOD2, imgURL: "hut-2-ex-2f" },
      { type: "huts", value: 1, extra: ROLL, imgURL: "hut-1-ex-roll" },
      { type: "huts", value: 1, extra: FOOD4, imgURL: "hut-1-ex-f4" }
    ],
    tools: [
      { type: "tools", value: 2, extra: ROLL, imgURL: "tool-2-ex-roll" },
      { type: "tools", value: 2, extra: ROLL, imgURL: "tool-2-ex-roll" },
      { type: "tools", value: 2, extra: TOOLS2, imgURL: "tool-2-ex-2tools" },
      { type: "tools", value: 1, extra: TOOLS3, imgURL: "tool-1-ex-3tools" },
      { type: "tools", value: 1, extra: TOOLS4, imgURL: "tool-1-ex-4tools" }
    ],

    meeple: [
      {
        type: "meepels",
        value: 2,
        extra: RESOURCE({ resType: "wood", amountOfDies: 2 }),
        imgURL: "meeple-2-ex-rollwood"
      },
      {
        type: "meepels",
        value: 2,
        extra: RESOURCE({ resType: "brick", amount: 1 }),
        imgURL: "meeple-2-ex-1brick"
      },
      {
        type: "meepels",
        value: 1,
        extra: RESOURCE({ resType: "stone", amountOfDies: 2 }),
        imgURL: "meeple-1-ex-rollstone"
      },
      {
        type: "meepels",
        value: 1,
        extra: RESOURCE({ resType: "gold", amount: 1 }),
        imgURL: "meeple-1-ex-1gold"
      },
      {
        type: "meeple",
        value: 1,
        extra: RESOURCE({ resType: "stone", amount: 1 }),
        imgURL: "meeple-1-ex-1stone"
      }
    ],
    arti: [
      { type: "arti", value: pot, extra: ROLL, imgURL: "arti-pot-ex-roll" },
      { type: "arti", value: pot, extra: FOOD7, imgURL: "arti-pot-ex-f7" },
      { type: "arti", value: plant, extra: ROLL, imgURL: "arti-plant-ex-roll" }, // to be changed to a special function to GIVE resource
      { type: "arti", value: plant, extra: FOOD5, imgURL: "arti-plant-ex-f5" },
      { type: "arti", value: cart, extra: ROLL, imgURL: "arti-cart-ex-roll" },
      {
        type: "arti",
        value: cart,
        extra: RESOURCE({ resType: "stone", amount: 2 }),
        imgURL: "arti-cart-ex-2stone"
      },
      {
        type: "arti",
        value: figure,
        extra: RESOURCE({ resType: "gold", amountOfDies: 2 }),
        imgURL: "arti-figure-ex-rollgold"
      },
      {
        type: "arti",
        value: figure,
        extra: TOOLSLVL,
        imgURL: "arti-figure-ex-plustool"
      },
      { type: "arti", value: clock, extra: ROLL, imgURL: "arti-clock-ex-roll" },
      {
        type: "arti",
        value: clock,
        extra: AGRILVL,
        imgURL: "arti-clock-ex-plusagri"
      },
      {
        type: "arti",
        value: tablet,
        extra: ROLL,
        imgURL: "arti-tablet-ex-roll"
      },
      {
        type: "arti",
        value: tablet,
        extra: EXTRACARD,
        imgURL: "arti-tablet-ex-pluscard"
      },
      { type: "arti", value: field, extra: FOOD1, imgURL: "arti-field-ex-f1" },
      { type: "arti", value: field, extra: FOOD3, imgURL: "arti-field-ex-f3" },
      {
        type: "arti",
        value: flute,
        extra: POINTS,
        imgURL: "arti-flute-ex-3points"
      },
      {
        type: "arti",
        value: flute,
        extra: POINTS,
        imgURL: "arti-flute-ex-3points"
      }
    ]
  };
};
