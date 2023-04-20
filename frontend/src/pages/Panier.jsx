import React from "react";
import PanierCard from "@components/PanierCard";

function Panier({ Heroes }) {
  console.log("Initialisation de la page Panier");

  return (
    <div>
      <h1 className="Logo">NARVEL</h1>

      {Heroes.slice(0, 5).map((Heroe) => (
        <PanierCard key={Heroe.id} Heroe={Heroe} />
      ))}
    </div>
  );
}

export default Panier;
