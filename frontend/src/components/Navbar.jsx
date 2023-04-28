import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="cont-logo">
        <h1 className="menu-logo">narvel</h1>
      </div>
      <nav className="nav-container">
        <ul>
          <li className="menu-item">
            <Link to="/" className="menu-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalogue" className="menu-item">
              Catalogue
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu-item">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
