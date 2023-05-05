import React from "react";
import { Link } from "react-router-dom";
import Job1 from "../assets/icone-1-white.png";
import Job2 from "../assets/icone-2-white.png";
import Job3 from "../assets/icone-3-white.png";
import Job4 from "../assets/icone-4-white.png";
import Job5 from "../assets/icone-5-white.png";
import Job6 from "../assets/icone-6-white.png";

function CategoriesJobs() {
  return (
    <div>
      <div>
        <div className="categories-jobs">
          <Link to="/heroes" className="job-item">
            <img className="job-picture" src={Job1} alt="heroe-job_1" />
            <p className="job-descrip">Science experiments</p>
          </Link>
          <Link to="/heroes" className="job-item">
            <img className="job-picture" src={Job2} alt="heroe-job_1" />
            <p className="job-descrip">Find the bad guys</p>
          </Link>
          <Link to="/heroes" className="job-item">
            <img className="job-picture" src={Job3} alt="heroe-job_1" />
            <p className="job-descrip">Save the planet </p>
          </Link>
        </div>
        <div className="categories-jobs">
          <Link to="/heroes" className="job-item">
            <img className="job-picture" src={Job4} alt="heroe-job_1" />
            <p className="job-descrip">Your personnal job</p>
          </Link>
          <Link to="/heroes" className="job-item">
            <img className="job-picture" src={Job5} alt="heroe-job_1" />
            <p className="job-descrip">Change the past</p>
          </Link>
          <Link to="/heroes" className="job-item">
            <img className="job-picture" src={Job6} alt="heroe-job_1" />
            <p className="job-descrip">Home works</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesJobs;
