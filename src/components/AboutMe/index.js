import React from "react";
import faceShot from "../../assets/images/christmas-spirit-7-5-aspect-ratio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <div className="row align-items-center" id="about-me">
      <div className="col col-md-6">
        Nulla et in duis mollit duis. Excepteur dolor est est velit velit aliqua
        excepteur aliqua. Pariatur velit dolore proident ullamco culpa fugiat eu
        dolor. Quis cupidatat irure anim veniam sit elit veniam. Ullamco minim
        irure veniam mollit nostrud est anim sit voluptate laborum minim duis.
        Commodo do fugiat commodo sit occaecat ex sint ullamco id consectetur
        proident cillum laborum ex. Exercitation nostrud magna ipsum nostrud
        dolore reprehenderit ad sunt.
        <br></br>
        <br></br>
        Nulla et in duis mollit duis. Excepteur dolor est est velit velit aliqua
        excepteur aliqua. Pariatur velit dolore proident ullamco culpa fugiat eu
        dolor. Quis cupidatat irure anim veniam sit elit veniam. Ullamco minim
        irure veniam mollit nostrud est anim sit voluptate laborum minim duis.
        Commodo do fugiat commodo sit occaecat ex sint ullamco id consectetur
        proident cillum laborum ex. Exercitation nostrud magna ipsum nostrud
        dolore reprehenderit ad sunt.
      </div>
      <div className="col col-md-6">
        <img
          className=""
          src={faceShot}
          alt="James wearing a festive Christmas hat."
        />
      </div>
      <div className="col col-md-6 font-awesome-code-icon">
        <span>
          <a
            href="https://github.com/jcomp-03"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgba(244,128,36)" }}
          >
            <FontAwesomeIcon icon={faCode} className=""></FontAwesomeIcon>
          </a>
        </span>
      </div>
      <div className="col col-md-6">
        Nulla et in duis mollit duis. Excepteur dolor est est velit velit aliqua
        excepteur aliqua. Pariatur velit dolore proident ullamco culpa fugiat eu
        dolor. Quis cupidatat irure anim veniam sit elit veniam. Ullamco minim
        irure veniam mollit nostrud est anim sit voluptate laborum minim duis.
        Commodo do fugiat commodo sit occaecat ex sint ullamco id consectetur
        proident cillum laborum ex. Exercitation nostrud magna ipsum nostrud
        dolore reprehenderit ad sunt.<br></br>
        <br></br>
        Nulla et in duis mollit duis. Excepteur dolor est est velit velit aliqua
        excepteur aliqua. Pariatur velit dolore proident ullamco culpa fugiat eu
        dolor. Quis cupidatat irure anim veniam sit elit veniam. Ullamco minim
        irure veniam mollit nostrud est anim sit voluptate laborum minim duis.
        Commodo do fugiat commodo sit occaecat ex sint ullamco id consectetur
        proident cillum laborum ex. Exercitation nostrud magna ipsum nostrud
        dolore reprehenderit ad sunt.
      </div>
    </div>
  );
}

export default AboutMe;
