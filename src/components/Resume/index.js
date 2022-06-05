import React, { useState } from "react";
// import validator function for email
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <section id="section-resume" className="row">
      <h1 className="d-flex justify-content-center align-items-center">
        Click on that neat FontAwesome icon to find my resume!
      </h1>
      <a
        href="https://drive.google.com/file/d/1FYizq3XPfa07roWLmyhHKvzRdvc3JhPT/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="text-center"
      >
        <FontAwesomeIcon
          icon={faFileArrowDown}
          className="font-awesome-code-icon"
        ></FontAwesomeIcon>
      </a>
    </section>
  );
}

export default Resume;
