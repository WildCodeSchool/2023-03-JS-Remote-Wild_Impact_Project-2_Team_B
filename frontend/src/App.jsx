// US 1 import
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Catalogue from "./pages/Catalogue";
import Error from "./pages/Error";
// US 2 Import

// US 3 import
import HeroeCard from "./pages/HeroeCard";
import { Heroes } from "./assets/data";

// US 4 import

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/catalogue" element={<Catalogue />} /> */}
          <Route
            path="/heroes/:heroenumber"
            element={<HeroeCard Heroes={Heroes} />}
          />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      {/** US 1 Page */}

      {/** US 2 Page */}

      {/** US 3 Page */}

      {/** US 4 Page */}
    </div>
  );
}

export default App;
