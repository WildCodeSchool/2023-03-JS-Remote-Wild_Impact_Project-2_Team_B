import React from "react";

function PanierCard({ item, removeItem }) {
  return (
    <div className="Panier-main">
      <ul className="Panier-card">
        <li>
          <img src={item.image_sm} alt="Représentation du super héroe" />
        </li>
        <li>
          <p>{item.name}</p>
        </li>
        <li>
          <button type="button" onClick={() => removeItem(item.id)}>
            X
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PanierCard;
