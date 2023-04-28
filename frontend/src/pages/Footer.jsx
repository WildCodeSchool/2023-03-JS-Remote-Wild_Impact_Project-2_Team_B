import React from "react";
import MenuFooter from "../components/MenuFooter";

const menufooter = {
  link1: "Qui sommes nous?",
  link2: "Recrutement",
  link3: "Presse et actualités",
};

function Footer() {
  return (
    <footer className="footer-container">
      <div className="row1">
        <div className="footer-column">
          <h3 className="footer-logo">Narvel</h3>
          <h4 className="footer-adress">
            Siège social 501 S. Buena Vista Street, Californie États-Unis
          </h4>
        </div>
        <MenuFooter menufooter={menufooter} />

        <div className="footer-column2">
          <h3 className="footer-title">Besoin d'aide</h3>
          <button className="footer-button" type="button">
            Contactez nous
          </button>
        </div>
      </div>

      <div className="row2">
        <p className="col4">
          &copy;{new Date().getFullYear()} | Narvel France | All rights reserved
          | CGV | CGU | Mentions légales | Gestion des cookies
        </p>
      </div>
    </footer>
  );
}

export default Footer;
