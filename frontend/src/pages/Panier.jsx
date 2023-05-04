import React from "react";
import PanierCard from "@components/PanierCard";

function Panier({ panier }) {
  return (
    <div className="Panier-container">
      {panier.map((item) => (
        <PanierCard item={item} />
      ))}
      <div className="Panier-total">
        <div className="Panier-reduc">
          <h3>Une réduction ?</h3>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Code de réduction"
          />
          <button type="button">Ajouter</button>
        </div>

        <h3>Total : {panier.length * 500} $</h3>
        <button className="Panier-btn-checkout" type="button">
          Paiement
        </button>
      </div>
    </div>
  );
}

export default Panier;
