import React from "react";
import PanierCard from "@components/PanierCard";

function Panier({ Heroes }) {
  const nmbHeroes = Heroes.length;
  return (
    <div>
      <h1 className="Logo">NARVEL</h1>

      {Heroes.slice(0, 5).map((Heroe) => (
        <PanierCard key={Heroe.id} Heroe={Heroe} />
      ))}

      <div className="Panier-total">
        <h3>Total : {nmbHeroes * 500} $</h3>
        <button type="button">Paiement</button>
      </div>
    </div>
  );
}

export default Panier;
