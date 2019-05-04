const multiPlyerExtraEnum = {
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
  POINTS: "POINTS",
  TOOLS2: "TOOLS2",
  TOOLS3: "TOOLS3",
  TOOLS4: "TOOLS4",
  EXTRACARD: "EXTRACARD"
};

const artifactsEnum = {
  figure: 1,
  pot: 2,
  patch: 3,
  plant: 4,
  tablet: 5,
  wheel: 6,
  cart: 7,
  flute: 8
};

export const createMultiPlyerCards = () => {
  const {
    figure,
    patch,
    pot,
    plant,
    tablet,
    wheel,
    cart,
    flute
  } = artifactsEnum;
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
  } = multiPlyerExtraEnum;

  return {
    // the index represent the scalar of multiplyer
    // e.g: index 0 scalar 0 and number of scalar cards is also 0
    1: { type: "agri", value: 2, extra: ROLL },
    2: { type: "agri", value: 2, extra: FOOD3 },
    3: { type: "agri", value: 1, extra: ROLL },
    4: { type: "agri", value: 1, extra: AGRILVL },
    5: {
      type: "agri",
      value: 1,
      extra: RESOURCE({ resType: "stone", amount: 1 })
    },

    6: { type: "huts", value: 3, extra: POINTS },
    7: { type: "huts", value: 2, extra: ROLL },
    8: { type: "huts", value: 2, extra: FOOD2 },
    9: { type: "huts", value: 1, extra: ROLL },
    10: { type: "huts", value: 1, extra: FOOD4 },

    11: { type: "tools", value: 2, extra: ROLL },
    12: { type: "tools", value: 2, extra: ROLL },
    13: { type: "tools", value: 2, extra: TOOLS2 },
    14: { type: "tools", value: 1, extra: TOOLS3 },
    15: { type: "tools", value: 1, extra: TOOLS4 },

    16: {
      type: "meepels",
      value: 2,
      extra: RESOURCE({ resType: "wood", amountOfDies: 2 })
    },
    17: {
      type: "meepels",
      value: 2,
      extra: RESOURCE({ resType: "brick", amount: 1 })
    },
    18: {
      type: "meepels",
      value: 1,
      extra: RESOURCE({ resType: "stone", amountOfDies: 2 })
    },
    19: {
      type: "meepels",
      value: 1,
      extra: RESOURCE({ resType: "gold", amount: 1 })
    },
    20: {
      type: "meepels",
      value: 1,
      extra: RESOURCE({ resType: "stone", amount: 1 })
    },

    21: { type: "arti", value: pot, extra: ROLL },
    22: { type: "arti", value: pot, extra: FOOD7 },
    23: { type: "arti", value: plant, extra: ROLL }, // to be changed to a special function to GIVE resource
    24: { type: "arti", value: plant, extra: FOOD5 },
    25: { type: "arti", value: cart, extra: ROLL },
    26: {
      type: "arti",
      value: cart,
      extra: RESOURCE({ resType: "stone", amount: 2 })
    },
    27: {
      type: "arti",
      value: figure,
      extra: RESOURCE({ resType: "gold", amountOfDies: 2 })
    },
    28: { type: "arti", value: figure, extra: TOOLSLVL },
    29: { type: "arti", value: wheel, extra: ROLL },
    30: { type: "arti", value: wheel, extra: AGRILVL },
    31: { type: "arti", value: tablet, extra: ROLL },
    32: { type: "arti", value: tablet, extra: EXTRACARD },
    33: { type: "arti", value: patch, extra: FOOD1 },
    34: { type: "arti", value: patch, extra: FOOD3 },
    35: { type: "arti", value: flute, extra: POINTS },
    36: { type: "arti", value: flute, extra: POINTS }
  };
};
