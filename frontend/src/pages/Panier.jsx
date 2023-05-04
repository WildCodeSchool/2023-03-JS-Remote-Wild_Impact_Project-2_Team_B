import React from "react";
import PanierCard from "@components/PanierCard";

function Panier({ panier, setPanier }) {
  const removeItem = (id) => {
    setPanier(panier.filter((item) => item.id !== id));
  };

  return (
    <div className="Panier-container">
      <h1 className="contactTitle">Your Products</h1>
      {panier.map((item) => (
        <PanierCard key={item.id} item={item} removeItem={removeItem} />
      ))}
      <div className="Panier-total">
        <div className="Panier-reduc">
          <h3>A discount code ?</h3>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Discount code"
          />
          <button type="button" className="Panier-btn-add">
            ADD product
          </button>
        </div>

        <h3>Total : {panier.length * 500} $</h3>
        <button className="Panier-btn-checkout" type="button">
          Payment
        </button>
      </div>
    </div>
  );
}

export default Panier;
