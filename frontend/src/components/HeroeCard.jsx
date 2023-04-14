import React from "react";

function HeroeCard({ Heroes }) {
  return (
    <div className="containerCard">
      <div className="imgSection">
        <img src={Heroes[0].image_md} alt="" />
      </div>
      <section className="specSection">
        <h2 className="specElement">{Heroes[0].name}</h2>
        <h3 className="specElement"> Description </h3>
        <p className="specElement">{Heroes[0].gender}</p>
        <p className="specElement">{Heroes[0].race}</p>
        <p className="specElement">Eye color : {Heroes[0].eyeColor}</p>
        <p className="specElement">Hair color : {Heroes[0].hairColor}</p>
      </section>
    </div>
  );
}

export default HeroeCard;
