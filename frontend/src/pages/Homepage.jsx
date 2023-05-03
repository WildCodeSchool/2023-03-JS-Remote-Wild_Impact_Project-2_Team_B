import React from "react";
import CategoriesJobs from "../components/CategoriesJobs";
import SelectItems from "../components/SelectItems";

function Homepage() {
  return (
    <div>
      <header className="header-container">
        <div className="main-title">
          <h2 className="header-title">TEAM POUR VOTRE JOB</h2>
          <h1 className="header-title">SUPERHEROES A LOUER</h1>
          <h4 className="header-title">Découvrez nos services</h4>
        </div>
        <div className="image-container">
          <img
            className="main-picture"
            src="\src\assets\Smart-city-main.png"
            alt="city"
            width="100%"
          />
        </div>
        <div className="header-animation" />
        <div>
          <button className="header-button" type="button">
            Louer Superheroes
          </button>
        </div>

        <div className="messagedefilant">
          <div>
            <p>
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> HIRE SUPERHERO{" "}
              <span className="puce">•</span>
              HIRE SUPERHERO<span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> HIRE SUPERHERO{" "}
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span>
              HIRE SUPERHERO
              <span className="puce">•</span> HIRE SUPERHERO
            </p>
          </div>
        </div>
      </header>
      <div>
        <CategoriesJobs />
      </div>
      <div>
        <div className="messagedefilant hihgt">
          <div>
            <p>
              <span className="puce">•</span> BEST TEAM FOR YOU JOB
              <span className="puce">•</span> HIRE SUPERHERO{" "}
              <span className="puce">•</span>
              BEST TEAM FOR YOU JOB<span className="puce">•</span> HIRE
              SUPERHERO
              <span className="puce">•</span> BEST TEAM FOR YOU JOB
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> BEST TEAM FOR YOU JOB{" "}
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span>
              BEST TEAM FOR YOU JOB
              <span className="puce">•</span> HIRE SUPERHERO
            </p>
          </div>
        </div>
      </div>
      <div>
        <SelectItems />
      </div>
    </div>
  );
}

export default Homepage;
