import React from "react";
// import PanierCard from "@components/PanierCard";

function Panier() {
  return (
    <div className="Panier-container">
      <h1 className="logo">NARVEL</h1>

      {/* {Heroes.slice(0, 7).map((Heroe) => (
        <PanierCard key={Heroe.id} Heroe={Heroe} />
      ))} */}

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
