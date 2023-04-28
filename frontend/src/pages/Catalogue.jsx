import React from "react";
import PropTypes from "prop-types";
import CatalogueCard from "@components/CatalogueCard";

function Catalogue({ Heroes }) {
  return (
    <div>
      <h1 className="Catalogue-logo">NARVEL</h1>
      <div className="Catalogue-main">
        {Heroes.map((Heroe) => (
          <CatalogueCard key={Heroe.id} Heroe={Heroe} />
        ))}
      </div>
    </div>
  );
}

Catalogue.propTypes = {
  Heroes: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Catalogue;
