import React from "react";

function HeroeCard({ Heroes }) {
  return (
    <div className="containerCard">
      <div className="imgSection">
        <img src={Heroes[0].image_md} alt="" />
      </div>
      <section className="infoSection">
        <section className="descSection">
          <h2 className="descElement">{Heroes[0].name}</h2>
          <h3 className="descElement">
            {Heroes[0].gender} - {Heroes[0].race}
          </h3>
          <p className="descElement">
            {Heroes[0].fullName} | Born in {Heroes[0].placeOfBirth}
          </p>
          <h3 className="descElement">Caracteristics</h3>
          <p className="descElement">
            {Heroes[0].eyeColor} eyes & {Heroes[0].hairColor}
          </p>
          <p className="descElement">
            First appeared in {Heroes[0].firstAppearance}
          </p>
          <p className="descElement">Work as {Heroes[0].work}</p>
        </section>
        <section className="statSection">
          <h3>Statistics</h3>
          <ul>
            <li>Intelligence : {Heroes[0].intelligence} </li>
            <li>Strength : {Heroes[0].strength}</li>
            <li>Speed : {Heroes[0].speed}</li>
            <li>Durability : {Heroes[0].durability}</li>
            <li>Power : {Heroes[0].power}</li>
            <li>Combat : {Heroes[0].combat}</li>
          </ul>
        </section>
        <section className="buttonSection">
          <button type="button">Louer mon super héros</button>
        </section>
      </section>
    </div>
  );
}

export default HeroeCard;
