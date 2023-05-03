import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="cont-logo">
        <h1 className="menu-logo">narvel</h1>
      </div>
      <nav className="nav-container">
        <div className="menuToggle">
          <input type="checkbox" className="menu-input" />
          <span />
          <span />
          <span />
          <ul className="menu">
            <li className="menu-item">
              <Link to="/" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className=" menu-item">
                Our super heroes
              </Link>
            </li>
            <li>
              <Link to="/heroes" className="menu-item">
                Heroe card
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
