import React, { useEffect, useState } from "react";
import CatalogueCard from "../components/CatalogueCard";

function Catalogue() {
  const [Heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/heroes`)
      .then((data) => data.json())
      .then((heroes) => setHeroes(heroes))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="Catalogue-main">
        {Heroes.map((Heroe) => (
          <CatalogueCard key={Heroe.id} Heroe={Heroe} />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
