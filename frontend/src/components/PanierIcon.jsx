import React from "react";
import { Link } from "react-router-dom";

function PanierIcon() {
  return (
    <div className="Panier-Icon">
      <ul>
        <li>
          <Link to="/panier" className="panier-icon">
            <p>Caddy</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PanierIcon;
