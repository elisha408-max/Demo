import React, { useState, useEffect } from "react";
import { CgHello } from "react-icons/cg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../Components/Cart";
import { addToCart } from "../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import Counter1 from "../Components/Counter1";
import { decrement } from "../redux/actions/counter";
import { increment } from "../redux/actions/counter";

function Productlist(props) {
  // console.log(props, "props");
  const {
    name,
    price,
    stock,
    id,
    image,
    click,
    date,
    setArray1,
    array1,
    Hello,
    item,
  } = props;

  const [array, setArray] = useState([]);
  const imageLink = `https://electronic-ecommerce.herokuapp.com/${image}`;
  // const [count, setCount] = useState(0);
  const [disable1, setDisable1] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  let dateObj = new Date(date);
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let day = dateObj.getDate();
  const result = ` ${day}/${month}/${year}`;
  let amt = price.split("").slice(1).join("") * 120;

  const [quantity, setQuantity] = React.useState(0);

  const dispatch = useDispatch();
  // const count = useSelector((state) => state.product.counter);
  // console.log(count,'count')

  // const incrementCount = (id) => {
  //   count >= stock ? setDisable(true) : setCount(count + 1);
  // };
  // const decrementCount = () => {
  //   const decrement = count > 0 ? setCount(count - 1) : 0;
  // };
  // const disableFunction = () => {
  //   count === 0 ? setDisable1(true) : Hello(props);
  //   click(count, props.price);
  // };
  //  console.log(id)
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="card p-1 mt-2">
          <img
            src={`https://electronic-ecommerce.herokuapp.com/${image}`}
            className="card-img-top img-fluid"
            alt="..."
            style={{
              height: "300px",

              objectFit: "contain",
            }}
          />
          <div className="card-body">
            <div
              className="btn-group buttonStyling"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  if (quantity > 0) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>
              <button type="button" className="btn btn-outline-primary">
                {quantity}
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
            <h5 className="card-title text-start mt-3">{name}</h5>
            <div className="d-flex justify-content-between text-success">
              <p>{`Rs. ${amt}`}</p>
              <p>Stocks Left: {stock}</p>
            </div>
            <p className="card-text text-start fw-bold">
              Released on: {result}
            </p>
            <div className="row">
              <button
                className="btn btn-primary"
                data-index={id}
                onClick={() => {
                  // alert(array);
                  dispatch(addToCart(item, quantity));
                  // disableFunction();
                }}
                disabled={quantity < 1}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productlist;
