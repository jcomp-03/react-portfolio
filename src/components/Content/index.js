// import necessary stuff
import React from "react";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Content(props) {
  const { currentSection } = props;
  // now that Content has the state of currentSection
  // render/return the appropriate section
  switch (currentSection.name) {
    case "About":
      return <AboutMe />;
    case "Portfolio":
      return <Portfolio />;
    case "Contact":
      return <Contact />;
    case "Resume":
      return <Resume />;
    default:
      return <AboutMe />
  }
}

export default Content;
