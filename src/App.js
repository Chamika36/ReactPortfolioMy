import React from "react";

import "./index.css";
import "./screens/AboutMe/index.css";
import NavBar from "./common/NavBar";
import Personal from "./screens/Personal";
import AboutMe from "./screens/AboutMe";
import Education from "./screens/Education";
import Certifications from "./screens/Certifications";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="bg">
      <NavBar />
      <AboutMe />
      <Personal />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
