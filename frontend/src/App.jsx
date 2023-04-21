// US 1 import

// US 2 Import
import Catalogue from "./pages/Catalogue";
// US 3 import
import HeroeCard from "./components/HeroeCard";
import { Heroes } from "./assets/data";
// US 4 import

import "./App.scss";

function App() {
  return (
    <div className="App">
      {/** US 1 Page */}

      {/** US 2 Page */}
      <Catalogue Heroes={Heroes} />
      {/** US 3 Page */}
      <HeroeCard Heroes={Heroes} />
      {/** US 4 Page */}
    </div>
  );
}

export default App;
