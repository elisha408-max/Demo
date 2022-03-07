import React, { useState,useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body";
import { connect } from "react-redux";
import { BrowserRouter as Routes, Route,Link } from "react-router-dom";

import store from './redux/reducers/store';
import { Provider } from "react-redux";



function App() {
  const [count, setCount] = useState([]);
  const [cartValue, setCartValue] = useState([]);
  const [total1, setTotal1] = useState(0);

  // const counter = useSelector((state)=> state.counter.count)

  // const dispatch = useDispatch();


  // useEffect(()=>{
  //   dispatch(fetchProduct())
  // },[])
  // console.log(props ,'props')

  return (
    <div className="App">
      <Provider store = {store}>
      <Navbar
        count={count}
        setCount={setCount}
        cartValue={cartValue}
        setCartValue={setCartValue}
        total1={total1}
        setTotal1={setTotal1}
      ></Navbar>
      
      <Body
        count={count}
        setCount={setCount}
        cartValue={cartValue}
        setCartValue={setCartValue}
        total1={total1}
        setTotal1={setTotal1}
      />
      </Provider>
    </div>
  );
}

export default App;

// import React from "react"

// import "./App.css"

// import { connect } from "react-redux"

// import {
//    increment,
//    decrement
// } from "./redux/actions/counter";

// function App(props) {
//   return (
//     <div className="App">
//       <div>Count: {props.count}</div>

//       <button onClick={() => props.increment()}>Increase Count</button>

//       <button onClick={() => props.decrement()}>Decrease Count</button>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch(increment()),

//     decrement: () => dispatch(decrement()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
