// US 1 import
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Catalogue from "./pages/Catalogue";
import Panier from "./pages/Panier";
import HeroePage from "./pages/HeroePage";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

import "./App.scss";

function App() {
  const [panier, setPanier] = useState([]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/heroes" element={<Catalogue />} />
          <Route
            path="/heroes/:heroenumber"
            element={<HeroePage setPanier={setPanier} panier={panier} />}
          />
          <Route
            path="/cart"
            element={<Panier panier={panier} setPanier={setPanier} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
