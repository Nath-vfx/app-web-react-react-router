import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Utilisez react-router-dom
import Default from "./layout/Default/Default";

import "./assets/styles/index.scss";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Location from "./pages/Location/Location";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/a-propos" element={<About />}></Route>
        <Route path="/location/:id" element={<Location />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
