import React, { useEffect, useState } from "react";
import CatalogCard from "../components/CatalogCard";

function Catalog() {
  const [Heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/heroes`)
      .then((data) => data.json())
      .then((heroes) => setHeroes(heroes))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="Catalog-main">
        {Heroes.map((Heroe) => (
          <CatalogCard key={Heroe.id} Heroe={Heroe} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
