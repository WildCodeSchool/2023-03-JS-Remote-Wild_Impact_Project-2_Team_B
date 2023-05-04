import React from "react";
import { Link } from "react-router-dom";

function PanierIcon() {
  return (
    <div className="Panier-Icon">
      <ul>
        <li>
          <Link to="/panier" className="panier-icon">
            <p>Basket</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PanierIcon;
