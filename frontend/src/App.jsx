// US 1 import
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar_old";

// US 2 Import

// US 3 import
import HeroeCard from "./components/HeroeCard";
import { Heroes } from "./assets/data";
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
          <Route
            path="/heroes/:heroenumber"
            element={<HeroeCard Heroes={Heroes} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/** US 1 Page */}

      {/** US 2 Page */}

      {/** US 3 Page */}

      {/** US 4 Page */}
      <Footer />
    </div>
  );
}

export default App;
