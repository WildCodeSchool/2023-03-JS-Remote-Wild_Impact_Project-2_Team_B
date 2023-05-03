import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroeCard from "../components/HeroeCard";

function HeroePage() {
  const params = useParams();

  const [heroe, setHeroe] = useState();

  useEffect(() => {
    fetch(`http://localhost:5002/heroes/${params.heroenumber}`)
      .then((res) => res.json())
      .then((data) => setHeroe(data))
      .catch((err) => console.error(err));
  }, []);

  return <div> {heroe && <HeroeCard heroe={heroe} />}</div>;
}

export default HeroePage;