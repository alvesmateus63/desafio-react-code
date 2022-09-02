import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Members } from "./pages/members";
import { Login } from "./pages/login";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membros" element={<Members />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
