/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import photo from '../../assets/small/commercial/0.jpg';

function Project({ work }) {
  const {
    title,
    description,
    technologiesUsed,
    imageUrlPath,
    githubUrlPath,
    deployedAppUrlPath,
  } = work;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrlPath} className="card-img-top" alt={description}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={githubUrlPath} className="btn btn-primary">
          View GitHub repo
        </a>
        <a href={deployedAppUrlPath} className="btn btn-primary">
          View Deployment
        </a>
      </div>
    </div>
  );
}

export default Project;
