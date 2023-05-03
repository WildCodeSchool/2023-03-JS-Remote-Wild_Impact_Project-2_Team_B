// US 1 import
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
// US 2 Import
import Catalogue from "./pages/Catalogue";
import Panier from "./pages/Panier";
// US 3 import
import HeroePage from "./pages/HeroePage";
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
          <Route path="/heroes/:heroenumber" element={<HeroePage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/** US 1 Page */}

      {/** <Catalogue /> */}

      {/**  */}
      {/** US 4 Page */}
      <Panier />
      <Footer />
    </div>
  );
}

export default App;
