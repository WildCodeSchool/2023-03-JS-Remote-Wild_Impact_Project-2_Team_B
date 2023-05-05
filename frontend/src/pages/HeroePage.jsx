import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroeCard from "../components/HeroeCard";

function HeroePage({ setPanier, panier }) {
  const params = useParams();
  const [heroe, setHeroe] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/heroes/${params.heroenumber}`)
      .then((res) => res.json())
      .then((data) => setHeroe(data))
      .catch((err) => console.error(err));
  }, []);

  const togglePanier = () => {
    if (panier.some((item) => item.id === heroe.id)) {
      setPanier((prevState) =>
        prevState.filter((item) => item.id !== heroe.id)
      );
    } else {
      setPanier((prevState) => [...prevState, heroe]);
    }
  };

  return (
    <div>
      {" "}
      {heroe && (
        <HeroeCard heroe={heroe} togglePanier={togglePanier} panier={panier} />
      )}
    </div>
  );
}

export default HeroePage;
