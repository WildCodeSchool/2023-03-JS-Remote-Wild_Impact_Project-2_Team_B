import React, { useEffect, useState } from "react";
import CatalogueCardXL from "./CatalogueCardXL";

function SelectItems() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/heroes")
      .then((data) => data.json())
      .then((data) => setHeroes(data));
  }, []);

  return (
    <div className="select-Container">
      <h1 className="select-Title">OUR best of super heroes</h1>
      <div className="select-Catalogue">
        {heroes.slice(0, 4).map((Heroe) => (
          <CatalogueCardXL key={Heroe.id} Heroe={Heroe} />
        ))}
      </div>
      <div className="select-Catalogue">
        {heroes.slice(5, 9).map((Heroe) => (
          <CatalogueCardXL key={Heroe.id} Heroe={Heroe} />
        ))}
      </div>
    </div>
  );
}

export default SelectItems;
