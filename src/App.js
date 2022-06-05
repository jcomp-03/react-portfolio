import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [navSections] = useState([
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentSection, setCurrentSection] = useState(navSections[1]);
  const [sectionActive, setSectionActive] = useState(false);

  return (
    <div className="text-warning" id="app-div">
      <Header
        navSections={navSections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        sectionActive={sectionActive}
        setSectionActive={setSectionActive}
      />

      <main className="container" id="content-container">
        <Content currentSection={currentSection} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
