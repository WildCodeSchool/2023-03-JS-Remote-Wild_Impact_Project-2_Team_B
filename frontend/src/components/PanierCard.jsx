import React from "react";

function PanierCard({ Heroe }) {
  return (
    <div className="Panier-main">
      <ul className="Panier-card">
        <li>
          <img src={Heroe.image_sm} alt="Représentation du super héroe" />
        </li>
        <li>
          <p>{Heroe.name}</p>
        </li>
        <li>
          <p>icone poubelle ici</p>
        </li>
      </ul>
    </div>
  );
}

export default PanierCard;
