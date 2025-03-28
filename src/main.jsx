import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Utilisez react-router-dom
import Default from "./layout/Default/Default";

import "./assets/styles/index.scss";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Location from "./pages/Location/Location";
import NotFound from "./pages/NotFound/NotFound";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/a-propos" element={<About />}></Route>
        <Route path="/location/:id" element={<Location />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
