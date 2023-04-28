import React, { useEffect, useState } from "react";
import CatalogueCard from "@components/CatalogueCard";

function Catalogue() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/heroes')
    .then(data => data.json())
    .then(data => setHeroes(data))
  }, [])

  return (
    <div>
      <h1 className="Catalogue-logo">NARVEL</h1>
      <div className="Catalogue-main">
        {heroes.map((Heroe) => (
          <CatalogueCard key={Heroe.id} Heroe={Heroe} />
        ))}
      </div>
    </div>
  );
}


export default Catalogue;
