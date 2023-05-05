import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CatalogueCardXL({ Heroe }) {
  return (
    <Link to={`/heroes/${Heroe.id}`}>
      <div className="Catalogue-card-XL">
        <img
          className="Card-img-XL"
          src={Heroe.image_sm}
          alt="des différents super héroes."
        />
        <h3 className="Card-title-XL">{Heroe.name}</h3>
      </div>
    </Link>
  );
}

CatalogueCardXL.propTypes = {
  Heroe: PropTypes.shape({
    image_sm: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CatalogueCardXL;
