import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="row1">
        <div className="footer-column">
        <logo className= "footer-logo" type="logo"></logo>
          <h3>Narvel Logo</h3>
          <h4 className="list-unstyled">
            <p>Siège social </p>
            <p>500 S. Buena Vista Street, Californie États-Unis</p>
          </h4>
        </div>

        <div className="footer-column1">
          {/* <h3 className="footer-title">Menu</h3> */}
          <ul className="list-unstyled">
            <li className="footer-item" >Qui sommes nous ?</li>
            <li className="footer-item">Recrutement</li>
            <li className="footer-item">Presse et actualité</li>
          </ul>
        </div>

        <div className="footer-column2">
        <h3 className="footer-title">Besoin d'aide</h3>
          <button className= "footer-button" type="button">Contactez nous</button>
          {/* <h4>Contactez nous</h4> */}
        </div>
      </div>

      <div className="row2">
        <p className="col4">
          &copy;{new Date().getFullYear()} | Narvel France | All rights reserved | CGV | CGU | Mentions légales | Gestion des cookies
        </p>
      </div>
    </footer>
  );
}

export default Footer;
