import React from "react";
import Header from "./components/Header";
// import NavigationBar from "./components/NavigationBar";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-secondary text-warning">
      <Header />
      <ContentSection />
      <Footer />
    </div>
  );
}

export default App;
