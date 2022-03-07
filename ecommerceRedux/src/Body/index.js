import React, { useState } from "react";
// import Api from "./Api";
import Productinfo from "./Productinfo";
import Productlist from "./Productlist";


const Body = (props) => {
  const { count, setCount, cartValue, setCartValue ,total1,setTotal1} = props;

  // setValue(cardValue);
  // console.log(cardValue, "cartValue");
  // const [cardData, setCardData] = useState([]);
  // console.log(cardData, "cardData");

  return (
    <div>
      <Productinfo
        count={count}
        setCount={setCount}
        cartValue={cartValue}
        setCartValue={setCartValue}
        total1={total1}
        setTotal1={setTotal1}
      />
     
    </div>
  );
};

export default Body;
