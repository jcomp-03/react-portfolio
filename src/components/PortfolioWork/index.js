/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import photo from '../../assets/small/commercial/0.jpg';

function PortfolioWork({ work, key }) {
  const {
    title,
    description,
    technologiesUsed,
    imageUrlPath,
    githubUrlPath,
    deployedAppUrlPath,
  } = work;

  return (
    <div class="card" style={{ width: "18rem;" }}>
      <img src={imageUrlPath} class="card-img-top" alt={description}/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href={githubUrlPath} class="btn btn-primary">
          View GitHub repo
        </a>
        <a href={deployedAppUrlPath} class="btn btn-primary">
          View Deployment
        </a>
      </div>
    </div>
  );
}

export default PortfolioWork;
