// US 1 import
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
// US 2 Import
import Catalogue from "./pages/Catalogue";
import Panier from "./pages/Panier";
// US 3 import
import HeroeCard from "./components/HeroeCard";
// US 4 import

import Footer from "./pages/Footer";

import Contact from "./pages/Contact";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/heroes" element={<Catalogue />} />
          <Route path="/heroes/:id" element={<HeroeCard />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/** US 1 Page */}

      {/** <Catalogue /> */}

      {/**  */}
      {/** US 4 Page */}
      <Footer />
    </div>
  );
}

export default App;
