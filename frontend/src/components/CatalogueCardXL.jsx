import React from "react";
import PropTypes from "prop-types";

function CatalogueCardXL({ Heroe }) {
  return (
    <div className="Catalogue-card-XL">
      <img
        className="Card-img-XL"
        src={Heroe.image_sm}
        alt="des différents super héroes."
      />
      <h3 className="Card-title-XL">{Heroe.name}</h3>
    </div>
  );
}

CatalogueCardXL.propTypes = {
  Heroe: PropTypes.shape({
    image_sm: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CatalogueCardXL;
