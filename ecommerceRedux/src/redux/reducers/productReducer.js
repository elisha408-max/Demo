import {
  PRODUCT_LIST,
  PRODUCT_LIST_FETCHING,
  PRODUCT_LIST_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_NUMBER,
  DECREMENT_NUMBER,
} from "../constants";

const initialState = {
  products: [],
  isLoading: false,
  cart: [],
  counter: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      console.log(item); //   Check if  Item is in cart.

      return {
        ...state,
        cart: [...state.cart, item],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case INCREMENT_NUMBER:
      const item1 = state.products.find(
        (prod) => prod.id === action.payload.id
      );

      return {
        ...state,
        counter: state.counter + action.payload.number,
      };
    case DECREMENT_NUMBER:
      return {
        ...state,
        counter: state.counter - action.payload.number,
      };

    default:
      return state;
  }
};

export default productReducer;
