import React from "react";
import PropTypes from "prop-types";

function CatalogueCard({ Heroe }) {
  return (
    <div className="Catalogue-card">
      <img
        className="Catalogue-card-img"
        src={Heroe.image_sm}
        alt="illustration représentant les super héroes."
      />
      <h1 className="Catalogue-card-title">{Heroe.name}</h1>
    </div>
  );
}

CatalogueCard.propTypes = {
  Heroe: PropTypes.shape({
    image_sm: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CatalogueCard;
