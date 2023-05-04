import React from "react";
import { Link } from "react-router-dom";
import CategoriesJobs from "../components/CategoriesJobs";
import SelectItems from "../components/SelectItems";
import SmartCity from "../assets/Smart-city-main.png";

function Homepage() {
  return (
    <div>
      <header className="header-container">
        <div className="main-title">
          <h2 className="header-title">TEAM FOR YOUR JOB</h2>
          <h1 className="header-title">SUPER HEROES TO HIRE</h1>
          <h4 className="header-title">Discover our services</h4>
        </div>
        <div className="image-container">
          <img
            className="main-picture"
            src={SmartCity}
            alt="city"
            width="100%"
          />
        </div>
        <div className="header-animation">
          <div className="camera_x">
            <div className="camera_y">
              <div className="triangle">
                <div className="triangle_outer clip" />
                <div className="triangle_inner clip" />
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Link to="/heroes" className="header-button">
            Hire Super heroes
          </Link>
        </div>

        <div className="messagedefilant">
          <div>
            <p>
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span>
              HIRE SUPERHERO<span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> HIRE SUPERHERO
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
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span>
              BEST TEAM FOR YOU JOB<span className="puce">•</span> HIRE
              SUPERHERO
              <span className="puce">•</span> BEST TEAM FOR YOU JOB
              <span className="puce">•</span> HIRE SUPERHERO
              <span className="puce">•</span> BEST TEAM FOR YOU JOB
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
