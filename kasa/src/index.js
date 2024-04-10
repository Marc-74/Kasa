import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.scss";

document.title = "Kasa";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
