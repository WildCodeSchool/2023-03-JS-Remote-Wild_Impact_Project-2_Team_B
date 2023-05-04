import React from "react";

function HeroeCard({ heroe }) {
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
          <div className="single-stats">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart orange">
                <path class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                  stroke-dasharray={heroe.intelligence}
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{heroe.intelligence}</text>
              </svg>
              <p className="stat-text">Intelligence</p>
            </div>
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart green">
                <path class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                  stroke-dasharray={heroe.strength}
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{heroe.strength}</text>
              </svg>
              <p className="stat-text">Strength</p>
            </div>
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart blue">
                <path class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                  stroke-dasharray={heroe.speed}
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{heroe.speed}</text>
              </svg>
              <p className="stat-text">Speed</p>
            </div>
          </div>
          <div className="single-stats">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart orange">
                <path class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                  stroke-dasharray={heroe.durability}
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{heroe.durability}</text>
              </svg>
              <p className="stat-text">Durability</p>
            </div>
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart green">
                <path class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                  stroke-dasharray={heroe.power}
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{heroe.power}</text>
              </svg>
              <p className="stat-text">Intelligence</p>
            </div>
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart blue">
                <path class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                  stroke-dasharray={heroe.combat}
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{heroe.combat}</text>
              </svg>
              <p className="stat-text">Combat</p>
            </div>
          </div>
        </section>
        <section className="buttonSection">
          <button type="button">Louer mon super héros</button>
        </section>
      </section>
    </div >
  );
}

export default HeroeCard;
