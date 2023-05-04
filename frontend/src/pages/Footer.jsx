import React from "react";
import MenuFooter from "../components/MenuFooter";

const menufooter = {
  link1: "Home",
  link2: "Our super heroes",
  link3: "Shopping card",
};

function Footer() {
  return (
    <footer className="footer-container">
      <div className="row1">
        <div className="footer-column">
          <h3 className="footer-logo">Narvel</h3>
          <h4 className="footer-adress">
            Head office 501 S. Buena Vista Street, Californie États-Unis
          </h4>
        </div>
        <MenuFooter menufooter={menufooter} />

        <div className="footer-column2">
          <h3 className="footer-title">Need for assistance</h3>
          <button className="footer-button" type="button">
            Contact us
          </button>
        </div>
      </div>

      <div className="row2">
        <p className="col4">
          &copy;{new Date().getFullYear()} | Narvel France | All rights reserved
          | CGV | CGU | Legal notices | Cookies management
        </p>
      </div>
    </footer>
  );
}

export default Footer;
