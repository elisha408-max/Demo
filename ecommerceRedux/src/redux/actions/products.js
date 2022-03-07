import axios from "axios";
import {
  PRODUCT_LIST,
  PRODUCT_LIST_FETCHING,
  PRODUCT_LIST_SUCCESS,
} from "../constants";

export const fetchProduct = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_FETCHING,
  });
  let response = await axios.get(
    "https://electronic-ecommerce.herokuapp.com/api/v1/product"
  );

  if (response?.data?.data?.product) {
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: response.data.data.product,
    });
  }
};
