import React, { useState } from "react";
import Header from "./components/Header";
import ContentSection from "./components/ContentSection";
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

  const [currentSection, setCurrentSection] = useState(navSections[0]);

  return (
    <div className="text-warning" id="app-div">
      <Header
        navSections={navSections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <main className="container" id="content-container">
        <ContentSection currentSection={currentSection} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
