import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.scss";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </React.StrictMode>
);
