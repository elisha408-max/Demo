import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import counterReducer from "./counterReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
  cart:cartReducer
});
export default rootReducer;
