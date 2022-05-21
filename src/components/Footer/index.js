import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-top border-white border-4 border-2 d-flex justify-content-between align-items-center fs-2"
      id="footer"
    >
      <span className="">Copyright {year}</span>
      <div className="">
        <span className="fs-5">Reach me at:</span>
        <span>
          <a href="mailto:jcomp_03@yahoo.com" style={{ color: "white" }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mx-4 fa-beat"
            ></FontAwesomeIcon>
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/james-compagnoni-27393030/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(10,102,194)" }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="mx-4"
            ></FontAwesomeIcon>
          </a>
        </span>
        <span>
          <a
            href="https://github.com/jcomp-03"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="mx-4"
            ></FontAwesomeIcon>
          </a>
        </span>
        <span>
          <a
            href="https://stackoverflow.com/users/6099283/jcomp-03"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgba(244,128,36)" }}
          >
            <FontAwesomeIcon
              icon={faStackOverflow}
              className="mx-4"
            ></FontAwesomeIcon>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
