import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/index";

export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};
