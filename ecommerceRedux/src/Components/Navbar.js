import React from "react";
// import { BsCartPlus } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import logo12 from "../img/Logo.png";
import Cart from "./Cart";

const Navbar = (props) => {
  const { count, setCount, cartValue, setCartValue,total1,setTotal1 } = props;
  // console.log(value, "Value");
  return (
    <div className="Navbar text-white sticky-top">
      <nav
        className="navbar navbar-expand-lg bg-primary "
        style={{ opacity: "0.9" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo12} width="100" className="img-fluid" />
          </a>

          <div className=" navbar-collapse col-6" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex designForMobile">
              <p className="d-none d-lg-block">Home</p>
              <Cart
                count={count}
                setCount={setCount}
                cartValue={cartValue}
                setCartValue={setCartValue}
                total1={total1}
                setTotal1={setTotal1}
                 className='designForMobile'
              />

              <CgProfile className="reactIcon d-none d-lg-block" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
