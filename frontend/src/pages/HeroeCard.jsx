import React from "react";
import { useParams } from "react-router-dom";

function HeroeCard({ Heroes }) {
  const { heroenumber } = useParams();
  return (
    <div className="containerCard">
      <div className="imgSection">
        <img src={Heroes[heroenumber].image_md} alt="" />
      </div>
      <section className="infoSection">
        <section className="descSection">
          <h2 className="descElement">{Heroes[heroenumber].name}</h2>
          <h3 className="descElement">
            {Heroes[heroenumber].gender} - {Heroes[heroenumber].race}
          </h3>
          <p className="descElement">
            {Heroes[heroenumber].fullName} | Born in
            {Heroes[heroenumber].placeOfBirth}
          </p>
          <h3 className="descElement">Caracteristics</h3>
          <p className="descElement">
            {Heroes[heroenumber].eyeColor} eyes &{" "}
            {Heroes[heroenumber].hairColor} hair
          </p>
          <p className="descElement">
            First appeared in {Heroes[heroenumber].firstAppearance}
          </p>
          <p className="descElement">Work as {Heroes[heroenumber].work}</p>
        </section>
        <section className="statSection">
          <h3>Statistics</h3>
          <ul>
            <li>Intelligence : {Heroes[heroenumber].intelligence} </li>
            <li>Strength : {Heroes[heroenumber].strength}</li>
            <li>Speed : {Heroes[heroenumber].speed}</li>
            <li>Durability : {Heroes[heroenumber].durability}</li>
            <li>Power : {Heroes[heroenumber].power}</li>
            <li>Combat : {Heroes[heroenumber].combat}</li>
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
