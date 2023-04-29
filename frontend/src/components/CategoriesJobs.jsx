import React from "react";
import { Link } from "react-router-dom";

function CategoriesJobs() {
  return (
    <div>
      <div>
        <div className="categories-jobs">
          <Link to="/" className="job-item">
            <img
              className="job-picture"
              src="src\assets\icone-1-white.png"
              alt="heroe-job_1"
            />
            <p className="job-descrip">firtst job</p>
          </Link>
          <Link to="/" className="job-item">
            <img
              className="job-picture"
              src="\src\assets\icone-2-white.png"
              alt="heroe-job_1"
            />
            <p className="job-descrip">firtst job</p>
          </Link>
          <Link to="/" className="job-item">
            <img
              className="job-picture"
              src="src\assets\icone-3-white.png"
              alt="heroe-job_1"
            />
            <p className="job-descrip">firtst job</p>
          </Link>
        </div>
        <div className="categories-jobs">
          <Link to="/" className="job-item">
            <img
              className="job-picture"
              src="src\assets\icone-4-white.png"
              alt="heroe-job_1"
            />
            <p className="job-descrip">firtst job</p>
          </Link>
          <Link to="/" className="job-item">
            <img
              className="job-picture"
              src="\src\assets\icone-5-white.png"
              alt="heroe-job_1"
            />
            <p className="job-descrip">firtst job</p>
          </Link>
          <Link to="/" className="job-item">
            <img
              className="job-picture"
              src="src\assets\icone-6-white.png"
              alt="heroe-job_1"
            />
            <p className="job-descrip">firtst job</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesJobs;
