const uuidv4 = require("uuid/v4");
export const CARD_TYPES = {
  agriM: "agriM",
  toolsM: "toolsM",
  meepleM: "meepleM",
  artiOneM: "artiOneM",
  artiTwoM: "artiTwoM",
  hutsM: "hutsM",
  huts: "huts"
};
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
  { id: uuidv4(), value: 16, type: "huts", imgURL: "hut-2s-1g" },
  { id: uuidv4(), value: 15, type: "huts", imgURL: "hut-1b-1s-1g" },
  { id: uuidv4(), value: 15, type: "huts", imgURL: "hut-1b-1s-1g" },
  { id: uuidv4(), value: 14, type: "huts", imgURL: "hut-1b-2s" },
  { id: uuidv4(), value: 14, type: "huts", imgURL: "hut-1w-1s-1g" },
  { id: uuidv4(), value: 14, type: "huts", imgURL: "hut-1w-1s-1g" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-1to7-any" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-1to7-any" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-1to7-any" },
  { id: uuidv4(), value: 14, type: "huts", imgURL: "hut-2b-1g" },
  { id: uuidv4(), value: 14, type: "huts", imgURL: "hut-2b-1g" },
  { id: uuidv4(), value: 13, type: "huts", imgURL: "hut-1w-2s" },
  { id: uuidv4(), value: 13, type: "huts", imgURL: "hut-1w-1b-1g" },
  { id: uuidv4(), value: 13, type: "huts", imgURL: "hut-1w-1b-1g" },
  { id: uuidv4(), value: 12, type: "huts", imgURL: "hut-1w-1b-1s" },
  { id: uuidv4(), value: 12, type: "huts", imgURL: "hut-1w-1b-1s" },
  { id: uuidv4(), value: 11, type: "huts", imgURL: "hut-1w-2b" },
  { id: uuidv4(), value: 10, type: "huts", imgURL: "hut-2w-1b" },
  { id: uuidv4(), value: 12, type: "huts", imgURL: "hut-2w-1g" },
  { id: uuidv4(), value: 11, type: "huts", imgURL: "hut-2w-1s" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-4res-1t" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-4res-2t" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-4res-3t" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-4res-4t" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-5res-1t" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-5res-2t" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-5res-3t" },
  { id: uuidv4(), value: 0, type: "huts", imgURL: "hut-5res-5t" }
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
      {
        id: uuidv4(),
        type: "agriM",
        value: 2,
        extra: ROLL,
        imgURL: "agri-2-ex-roll"
      },
      {
        id: uuidv4(),
        type: "agriM",
        value: 2,
        extra: FOOD3,
        imgURL: "agri-2-ex-f3"
      },
      {
        id: uuidv4(),
        type: "agriM",
        value: 1,
        extra: ROLL,
        imgURL: "agri-1-ex-roll"
      },
      {
        id: uuidv4(),
        type: "agriM",
        value: 1,
        extra: AGRILVL,
        imgURL: "agri-1-ex-plusagri"
      },
      {
        id: uuidv4(),
        type: "agriM",
        value: 1,
        extra: RESOURCE({ resType: "stone", amount: 1 }),
        imgURL: "agri-1-ex-1stone"
      }
    ],
    huts: huts,
    hutsM: [
      {
        id: uuidv4(),
        type: "hutsM",
        value: 3,
        extra: POINTS,
        imgURL: "hutM-3-ex-3points"
      },
      {
        id: uuidv4(),
        type: "hutsM",
        value: 2,
        extra: ROLL,
        imgURL: "hutM-2-ex-roll"
      },
      {
        id: uuidv4(),
        type: "hutsM",
        value: 2,
        extra: FOOD2,
        imgURL: "hutM-2-ex-f2"
      },
      {
        id: uuidv4(),
        type: "hutsM",
        value: 1,
        extra: ROLL,
        imgURL: "hutM-1-ex-roll"
      },
      {
        id: uuidv4(),
        type: "hutsM",
        value: 1,
        extra: FOOD4,
        imgURL: "hutM-1-ex-f4"
      }
    ],
    toolsM: [
      {
        id: uuidv4(),
        type: "tools",
        value: 2,
        extra: ROLL,
        imgURL: "tool-2-ex-roll"
      },
      {
        id: uuidv4(),
        type: "toolsM",
        value: 2,
        extra: ROLL,
        imgURL: "tool-2-ex-roll"
      },
      {
        id: uuidv4(),
        type: "toolsM",
        value: 2,
        extra: TOOLS2,
        imgURL: "tool-2-ex-2tools"
      },
      {
        id: uuidv4(),
        type: "toolsM",
        value: 1,
        extra: TOOLS3,
        imgURL: "tool-1-ex-3tools"
      },
      {
        id: uuidv4(),
        type: "toolsM",
        value: 1,
        extra: TOOLS4,
        imgURL: "tool-1-ex-4tools"
      }
    ],
    meepleM: [
      {
        id: uuidv4(),
        type: "meepleM",
        value: 2,
        extra: RESOURCE({ resType: "wood", amountOfDies: 2 }),
        imgURL: "meeple-2-ex-rollwood"
      },
      {
        id: uuidv4(),
        type: "meepleM",
        value: 2,
        extra: RESOURCE({ resType: "brick", amount: 1 }),
        imgURL: "meeple-2-ex-1brick"
      },
      {
        id: uuidv4(),
        type: "meepleM",
        value: 1,
        extra: RESOURCE({ resType: "stone", amountOfDies: 2 }),
        imgURL: "meeple-1-ex-rollstone"
      },
      {
        id: uuidv4(),
        type: "meepleM",
        value: 1,
        extra: RESOURCE({ resType: "gold", amount: 1 }),
        imgURL: "meeple-1-ex-1gold"
      },
      {
        id: uuidv4(),
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
      {
        id: uuidv4(),
        type: "artiOneM",
        value: pot,
        extra: ROLL,
        imgURL: "arti-pot-ex-roll"
      },
      {
        id: uuidv4(),
        type: "artiOneM",
        value: branch,
        extra: ROLL,
        imgURL: "arti-branch-ex-2res"
      }, // to be changed to a special function to GIVE resource
      {
        id: uuidv4(),
        type: "artiOneM",
        value: cart,
        extra: ROLL,
        imgURL: "arti-cart-ex-roll"
      },
      {
        id: uuidv4(),
        type: "artiOneM",
        value: figure,
        extra: RESOURCE({ resType: "gold", amountOfDies: 2 }),
        imgURL: "arti-figure-ex-rollgold"
      },
      {
        id: uuidv4(),
        type: "artiOneM",
        value: clock,
        extra: ROLL,
        imgURL: "arti-clock-ex-roll"
      },
      {
        id: uuidv4(),
        type: "artiOneM",
        value: tablet,
        extra: ROLL,
        imgURL: "arti-tablet-ex-roll"
      },
      {
        id: uuidv4(),
        type: "artiOneM",
        value: field,
        extra: FOOD1,
        imgURL: "arti-field-ex-f1"
      },
      {
        id: uuidv4(),
        type: "artiOneM",
        value: flute,
        extra: POINTS,
        imgURL: "arti-flute-ex-3points"
      }
    ],
    // called this artiTwoM => arti multiplyer.
    // since i will calculate as num of cards * arti multi
    // and arti multi === num of cards any way

    artiTwoM: [
      {
        id: uuidv4(),
        type: "artiTwoM",
        value: pot,
        extra: FOOD7,
        imgURL: "arti-pot-ex-f7"
      },
      {
        id: uuidv4(),
        type: "artiTwoM",
        value: branch,
        extra: FOOD5,
        imgURL: "arti-branch-ex-f5"
      },
      {
        id: uuidv4(),
        type: "artiTwoM",
        value: cart,
        extra: RESOURCE({ resType: "stone", amount: 2 }),
        imgURL: "arti-cart-ex-2stone"
      },
      {
        id: uuidv4(),
        type: "artiTwoM",
        value: figure,
        extra: TOOLSLVL,
        imgURL: "arti-figure-ex-plustool"
      },
      {
        id: uuidv4(),
        type: "artiTwoM",
        value: clock,
        extra: AGRILVL,
        imgURL: "arti-clock-ex-plusagri"
      },
      {
        id: uuidv4(),
        type: "artiTwoM",
        value: tablet,
        extra: EXTRACARD,
        imgURL: "arti-tablet-ex-pluscard"
      },
      {
        id: uuidv4(),
        type: "artiTwoM",
        value: field,
        extra: FOOD3,
        imgURL: "arti-field-ex-f3"
      },
      {
        id: uuidv4(),
        type: "artiTwoM",
        value: flute,
        extra: POINTS,
        imgURL: "arti-flute-ex-3points"
      }
    ]
  };
};
