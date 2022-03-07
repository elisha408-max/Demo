// import { ADD_TO_CART, REMOVE_FROM_CART, PRODUCT_LIST } from "../constants";

// const INITIAL_STATE = {
//   cart: [],
// };

// const cartReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const item = state.products.find((prod) => prod.id === action.payload.id);
//       console.log(item, "item");
//       //   Check if  Item is in cart.
//       const inCart = state.cart.find((item) =>
//         item.id === action.payload.id ? true : false
//       );
//       return {
//         ...state,
//       };

//     case REMOVE_FROM_CART:
//       return {};
//     default:
//       return state;
//   }
// };
// export default cartReducer;
