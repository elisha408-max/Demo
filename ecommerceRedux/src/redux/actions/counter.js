import { INCREMENT_NUMBER, DECREMENT_NUMBER } from "../constants";

export const increment = (itemId ) => {
  return {
    type: INCREMENT_NUMBER,
    payload: {
      number: 1,
      id: itemId,
    },
  };
};

export const decrement = ( itemId) => {
  return {
    type: DECREMENT_NUMBER,
    payload: {
      number: 1,
      id: itemId,
    },
  };
};
