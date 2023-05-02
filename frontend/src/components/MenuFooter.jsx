import React from "react";

function MenuFooter({ menufooter }) {
  return (
    <div className="footer-column1">
      <ul className="list-unstyled">
        <li className="footer-item">{menufooter.link1}</li>
        <li className="footer-item">{menufooter.link2}</li>
        <li className="footer-item">{menufooter.link3}</li>
      </ul>
    </div>
  );
}

export default MenuFooter;
