import React from "react";
import PanierCard from "@components/PanierCard";

function Panier({ Heroes }) {
  const nmbHeroes = Heroes.length;
  return (
    <div className="Panier-container">
      <h1 className="Logo">NARVEL</h1>

      {Heroes.slice(0, 5).map((Heroe) => (
        <PanierCard key={Heroe.id} Heroe={Heroe} />
      ))}

      <div className="Panier-total">
        <div className="Panier-reduc">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Code de réduction"
          />
          <button type="button">Ajouter</button>
        </div>

        <h3>Total : {nmbHeroes * 500} $</h3>
        <button className="Panier-btn-checkout" type="button">
          Paiement
        </button>
      </div>
    </div>
  );
}

export default Panier;
