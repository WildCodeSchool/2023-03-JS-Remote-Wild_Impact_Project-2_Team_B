// US 1 import
import React from "react";

// US 2 Import

// US 3 import
import HeroeCard from "./components/HeroeCard";
import { Heroes } from "./assets/data";
// US 4 import
import Contact from "./pages/contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/** US 1 Page */}

      {/** US 2 Page */}

      {/** US 3 Page */}
      <HeroeCard Heroes={Heroes} />
      {/** US 4 Page */}
      <Contact />
    </div>
  );
}

export default App;
