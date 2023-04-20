import React from "react";

// function Footer() {
//   return (
//     // <div className="main-footer">
//       <div className="container">
//         <div className="row">
//           {/* Column1 */}
//           <div className="col1">
//             <h4>Narvel</h4>
//             <h1 className="list-unstyled">
//               <li>Location de supers héros</li>
//               <p>Blablabla bla bla bla bla</p>
//             </h1>
//           </div>
//           {/* Column2 */}
//           <div className="col2">
//             <h4>Menu</h4>
//             <ul className="list-unstyled">
//               <li>Home</li>
//               <li>Catalogue</li>
//               <li>Cards</li>
//             </ul>
//           </div>
//           {/* Column3 */}
//           <div className="col3">
//             <h4>Contact</h4>
//             <ul className="list-unstyled">
//               <li>1 </li>
//               <li>2</li>
//               <li>3</li>
//             </ul>
//           </div>
//         </div>
//         <hr />
//         <div className="row1">
//           <p className="col4">
//             &copy;{new Date().getFullYear()} | Narvel France |
//             All rights reserved
//           </p>
//         </div>
//       </div>
//   );
// }

// export default Footer;

function Footer() {
  return (
    <footer className="footer-container">
      <div className="row1">
        <div className="footer-column">
          <h3>Narvel Logo</h3>
          <h4 className="list-unstyled">
            <p>Location de supers héros</p>
            <p>Blablabla bla bla bla bla</p>
          </h4>
        </div>

        <div className="footer-column1">
          <h3 className="footer-title">Menu</h3>
          <ul className="list-unstyled">
            <li>Home</li>
            <li>Catalogue</li>
            <li>Cards</li>
          </ul>
        </div>

        <div className="footer-column2">
          <h4>Contactez nous</h4>
          <ul className="list-unstyled" />
        </div>
      </div>

      <div className="row2">
        <p className="col4">
          &copy;{new Date().getFullYear()} | Narvel France | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
