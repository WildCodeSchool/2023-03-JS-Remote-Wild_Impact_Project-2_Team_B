// US 1 import
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PanierIcon from "./components/PanierIcon";
import Homepage from "./pages/Homepage";
import Catalogue from "./pages/Catalogue";
import Panier from "./pages/Panier";
import HeroePage from "./pages/HeroePage";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <PanierIcon />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/heroes" element={<Catalogue />} />
          <Route path="/heroes/:heroenumber" element={<HeroePage />} />
          <Route path="/cart" element={<Panier />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
