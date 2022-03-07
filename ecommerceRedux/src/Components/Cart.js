import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image123 from "../img/Logo.png";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cart";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
// import { Form } from "formik";

const Cart = (props) => {
  const { count, setCount, total1, setTotal1 } = props;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [quantity, setQuantity] = React.useState(0);
  // const [total, setTotal] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let total123 = 0;
  // var totalCartPrice = 0;

  // const deleteId = (id) => {
  //   let filteredItem = cartValue.filter((item) => item.id !== id);
  //   console.log(filteredItem, "filteredItem");
  //   setCartValue(filteredItem);

  //   // console.log(cardValue,'hjbljh')
  // };
  // const increment = (id) => {
  //   setCount(parseInt(count) + 1);
  // };
  // console.log(count,'store')
  // console.log(store,'store')
  const dispatch = useDispatch();
  const { cart: cartValue } = useSelector((state) => state.product);

  // const totalCartPrice = cartValue?.reduce(
  //   (total,
  //   (item) => {
  //     console.log(item);
  //     const price = item.price.split("").slice(1).join("") * 120;

  //     return total + item.quantity * 2;
  //   }),
  //   0
  // );

  return (
    <>
      <button
        type="button"
        className="btn position-relative text-white "
        onClick={handleShow}
      >
        <BsCartPlus className="reactIcon" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartValue.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartValue.map((item, index) => {
            const subTotal =
              item.price.split("").slice(1).join("") * 120 * item.quantity;

            return (
              <div className="row" key={index}>
                <div className="col-6">
                  <div className="row">
                    <div className="col-5">
                      <img
                        src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                        alt="ItemsAdded"
                        className="img-fluid"
                        style={{}}
                      />
                    </div>
                    <div className="col-7">
                      <h5>{item.name}</h5>
                      <p className="text-success">Rs.{subTotal}</p>

                      <p className="text-success">Quantity: {item.quantity}</p>
                      <span className="d-none">
                        {(total123 = total123 + subTotal)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <b className="text-success stockStyling">{item.stock}</b>{" "}
                  &nbsp; &nbsp; &nbsp;{" "}
                  <span style={{ fontSize: "20px" }}>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <AiOutlineDelete
                        onClick={() => dispatch(removeFromCart(item.id))}
                      />
                    </button>
                  </span>
                  <br />
                  <div
                    className="btn-group buttonStyling"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" className="btn btn-outline-success">
                      -
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      {item.quantity}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => {
                        // increment();
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Modal.Body>

        <Modal.Footer>
          <div>
            <p className="fw-bold">{`Total Amount:Rs.  ${total123}`} </p>

            <Button
              disabled={cartValue?.length < 1 ? true : false}
              onClick={() => {
                navigate("/checkout");
              }}
              variant="success"
            >
              Checkout
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
