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
  branch: 4,
  tablet: 5,
  clock: 6,
  cart: 7,
  flute: 8
};

export const huts = [
  { id: 1, imgURL: "hut-1b-1s-1g" },
  { id: 2, imgURL: "hut-1b-1s-1g" },
  { id: 3, imgURL: "hut-1b-2s" },
  { id: 4, imgURL: "hut-1to7-any" },
  { id: 5, imgURL: "hut-1to7-any" },
  { id: 6, imgURL: "hut-1to7-any" },
  { id: 7, imgURL: "hut-1w-1b-1g" },
  { id: 8, imgURL: "hut-1w-1b-1g" },
  { id: 9, imgURL: "hut-1w-1b-1s" },
  { id: 10, imgURL: "hut-1w-1b-1s" },
  { id: 11, imgURL: "hut-1w-1s-1g" },
  { id: 12, imgURL: "hut-1w-1s-1g" },
  { id: 13, imgURL: "hut-1w-2b" },
  { id: 14, imgURL: "hut-1w-2s" },
  { id: 15, imgURL: "hut-2b-1g" },
  { id: 16, imgURL: "hut-2b-1g" },
  { id: 17, imgURL: "hut-2s-1g" },
  { id: 18, imgURL: "hut-2w-1b" },
  { id: 19, imgURL: "hut-2w-1g" },
  { id: 20, imgURL: "hut-2w-1s" },
  { id: 21, imgURL: "hut-4res-1t" },
  { id: 22, imgURL: "hut-4res-2t" },
  { id: 23, imgURL: "hut-4res-3t" },
  { id: 24, imgURL: "hut-4res-4t" },
  { id: 25, imgURL: "hut-5res-1t" },
  { id: 26, imgURL: "hut-5res-2t" },
  { id: 27, imgURL: "hut-5res-3t" },
  { id: 28, imgURL: "hut-5res-5t" }
];
export const allCards = () => {
  const { figure, field, pot, branch, tablet, clock, cart, flute } = artifacts;
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
    agriM: [
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
    huts: huts,
    hutsM: [
      { type: "huts", value: 3, extra: POINTS, imgURL: "hutM-3-ex-3points" },
      { type: "huts", value: 2, extra: ROLL, imgURL: "hutM-2-ex-roll" },
      { type: "huts", value: 2, extra: FOOD2, imgURL: "hutM-2-ex-f2" },
      { type: "huts", value: 1, extra: ROLL, imgURL: "hutM-1-ex-roll" },
      { type: "huts", value: 1, extra: FOOD4, imgURL: "hutM-1-ex-f4" }
    ],
    toolsM: [
      { type: "tools", value: 2, extra: ROLL, imgURL: "tool-2-ex-roll" },
      { type: "tools", value: 2, extra: ROLL, imgURL: "tool-2-ex-roll" },
      { type: "tools", value: 2, extra: TOOLS2, imgURL: "tool-2-ex-2tools" },
      { type: "tools", value: 1, extra: TOOLS3, imgURL: "tool-1-ex-3tools" },
      { type: "tools", value: 1, extra: TOOLS4, imgURL: "tool-1-ex-4tools" }
    ],
    meepleM: [
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
    // called this artiOneM => arti multiplyer.
    // since i will calculate as num of cards * arti multi
    // and arti multi === num of cards any way
    artiOneM: [
      { type: "arti", value: pot, extra: ROLL, imgURL: "arti-pot-ex-roll" },
      {
        type: "arti",
        value: branch,
        extra: ROLL,
        imgURL: "arti-branch-ex-2res"
      }, // to be changed to a special function to GIVE resource
      { type: "arti", value: cart, extra: ROLL, imgURL: "arti-cart-ex-roll" },
      {
        type: "arti",
        value: figure,
        extra: RESOURCE({ resType: "gold", amountOfDies: 2 }),
        imgURL: "arti-figure-ex-rollgold"
      },
      { type: "arti", value: clock, extra: ROLL, imgURL: "arti-clock-ex-roll" },
      {
        type: "arti",
        value: tablet,
        extra: ROLL,
        imgURL: "arti-tablet-ex-roll"
      },
      { type: "arti", value: field, extra: FOOD1, imgURL: "arti-field-ex-f1" },
      {
        type: "arti",
        value: flute,
        extra: POINTS,
        imgURL: "arti-flute-ex-3points"
      }
    ],
    // called this artiTwoM => arti multiplyer.
    // since i will calculate as num of cards * arti multi
    // and arti multi === num of cards any way
    artiTwoM: [
      { type: "arti", value: pot, extra: FOOD7, imgURL: "arti-pot-ex-f7" },
      {
        type: "arti",
        value: branch,
        extra: FOOD5,
        imgURL: "arti-branch-ex-f5"
      },
      {
        type: "arti",
        value: cart,
        extra: RESOURCE({ resType: "stone", amount: 2 }),
        imgURL: "arti-cart-ex-2stone"
      },
      {
        type: "arti",
        value: figure,
        extra: TOOLSLVL,
        imgURL: "arti-figure-ex-plustool"
      },
      {
        type: "arti",
        value: clock,
        extra: AGRILVL,
        imgURL: "arti-clock-ex-plusagri"
      },
      {
        type: "arti",
        value: tablet,
        extra: EXTRACARD,
        imgURL: "arti-tablet-ex-pluscard"
      },
      { type: "arti", value: field, extra: FOOD3, imgURL: "arti-field-ex-f3" },
      {
        type: "arti",
        value: flute,
        extra: POINTS,
        imgURL: "arti-flute-ex-3points"
      }
    ]
  };
};
