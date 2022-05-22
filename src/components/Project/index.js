/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Project({ work }) {
  const {
    title,
    description,
    // eslint-disable-next-line no-unused-vars
    technologiesUsed,
    // eslint-disable-next-line no-unused-vars
    imageName,
    githubUrlPath,
    deployedAppUrlPath,
  } = work;

  // const imageUrl = require("../../assets/images/" + imageName).default;

  return (
    <div className="col-sm-3">
      <div className="card h-100 mb-5 bg-dark text-white" style={{  }}>
        <img
          src="" 
          className="card-img-top" 
          alt={description}
        />
        <div className="card-body" id="project-card-body-div">
          <h5 className="card-title text-warning text-center">{title}</h5>
          <p className="card-text mb-5">{description}</p>
          
          <div className=""  id="project-button-div">
            <a 
              href={githubUrlPath} 
              className="w-100 mb-2 btn btn-primary bg-warning text-dark fw-bold">
              View GitHub repo
            </a>
            <a
              href={deployedAppUrlPath}
              className="w-100 mb-2 btn btn-primary bg-warning text-dark fw-bold">
              View Deployment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
