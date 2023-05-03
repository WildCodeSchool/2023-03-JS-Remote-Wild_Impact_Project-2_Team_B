import React from "react";
import { Link } from "react-router-dom";

function CatalogueCard({ Heroe }) {
  return (
    <Link to={`/heroes/${Heroe.id}`}>
      <div className="Catalogue-card">
        <img
          className="Card-img"
          src={Heroe.image_sm}
          alt="des différents super héroes."
        />
        <h3 className="Card-title">{Heroe.name}</h3>
      </div>
    </Link>
  );
}

export default CatalogueCard;
