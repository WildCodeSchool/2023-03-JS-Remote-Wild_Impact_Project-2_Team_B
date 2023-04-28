import React from "react";

function Panier() {
  return (
    <div className="Panier-container">
      <h1 className="logo">NARVEL</h1>

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

        <h3>Total : {500} $</h3>
        <button className="Panier-btn-checkout" type="button">
          Paiement
        </button>
      </div>
    </div>
  );
}

export default Panier;
