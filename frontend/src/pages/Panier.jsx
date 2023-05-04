import React from "react";

function Panier() {
  return (
    <div className="Panier-container">
      <h1 className="contactTitle">Your Products</h1>
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

        <h3>Total : {500} $</h3>
        <button className="Panier-btn-checkout" type="button">
          Payment
        </button>
      </div>
    </div>
  );
}

export default Panier;
