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

    case ADD_TO_CART: {
      let tmp_cart = state.cart;

      const current_product = action.payload.item;
      const quantity = action.payload.quantity;

      // check if item in cart exists
      const index = state.cart.findIndex(
        (item) => item.id === current_product.id
      );

      if (index >= 0) {
        tmp_cart[index] = { ...current_product, quantity };
      } else {
        tmp_cart.push({ ...current_product, quantity });
      }

      return {
        ...state,
        cart: tmp_cart,
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case INCREMENT_NUMBER:
      const item1 = state.products.find(
        (prod) => prod.id === action.payload.id
      );

      const productID = action.payload.id;
      const productIndex = state.products.findIndex(
        (item) => item.id === productID
      );

      const tmp_products = state.products;

      const tmp_product = tmp_product[productIndex];
      // const ;

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
