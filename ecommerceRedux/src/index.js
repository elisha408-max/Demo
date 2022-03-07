import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/checkout" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
