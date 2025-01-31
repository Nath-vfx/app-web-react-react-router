import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Default from "./layout/Default/Default";

import "./assets/styles/index.scss"

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Default/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/a-propos" element={<About/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
