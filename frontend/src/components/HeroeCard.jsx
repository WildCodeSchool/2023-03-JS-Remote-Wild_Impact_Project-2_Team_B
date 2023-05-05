import React from "react";

function HeroeCard({ heroe, togglePanier, panier }) {
  return (
    <div className="containerCard">
      <div className="imgSection">
        <img src={heroe.image_md} alt="" />
      </div>
      <section className="infoSection">
        <section className="descSection">
          <h2 className="descElement">{heroe.name}</h2>
          <h3 className="descElement">
            {heroe.gender} - {heroe.race}
          </h3>
          <p className="descElement">
            {heroe.fullName} | Born in {heroe.placeOfBirth}
          </p>
          <h3 className="descElement">Caracteristics</h3>
          <p className="descElement">
            {heroe.eyeColor} eyes & {heroe.hairColor}
          </p>
          <p className="descElement">
            First appeared in {heroe.firstAppearance}
          </p>
          <p className="descElement">Work as {heroe.work}</p>
        </section>
        <section className="statSection">
          <h3>Statistics</h3>
          <ul>
            <li>Intelligence : {heroe.intelligence} </li>
            <li>Strength : {heroe.strength}</li>
            <li>Speed : {heroe.speed}</li>
            <li>Durability : {heroe.durability}</li>
            <li>Power : {heroe.power}</li>
            <li>Combat : {heroe.combat}</li>
          </ul>
        </section>
        <section className="buttonSection">
          <button type="button" onClick={togglePanier}>
            {panier.some((item) => item.id === heroe.id)
              ? "Retirer du panier"
              : "Louer mon super héros"}
          </button>
        </section>
      </section>
    </div>
  );
}

export default HeroeCard;
