import React, { useEffect, useState } from "react";
import CatalogueCardXL from "./CatalogueCardXL";

function SelectItems() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/heroes")
      .then((data) => data.json())
      .then((data) => setHeroes(data));
  }, []);

  return (
    <div className="select-Container">
      <h1 className="select-Title">Nos best of super-heroes</h1>
      <div className="select-Catalogue">
        {heroes.slice(0, 8).map((Heroe) => (
          <CatalogueCardXL key={Heroe.id} Heroe={Heroe} />
        ))}
      </div>
    </div>
  );
}

export default SelectItems;
