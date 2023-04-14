import React from "react";
import PropTypes from "prop-types";

function CatalogueCard({ Heroe }) {
  return (
    <div className="Catalogue-card">
      <img
        className="Card-img"
        src={Heroe.image_sm}
        alt="des différents super héroes."
      />
      <h1 className="Card-title">{Heroe.name}</h1>
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
