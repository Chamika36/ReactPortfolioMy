import React from "react";
import Profile from "../../../src/assets/1.png";
import "./index.css";

function AboutMe() {
  return (
    <div>
    <div className="columns p-5 m-4">
    <div className="column is-5 is-align-self-center has-text-centered">
        <img className="homeimage" src={Profile} width="90%" />
    </div>
    <div className="column is-7 is-align-self-center ml-6">
        <span className="title">Hello, I'm</span><br />
        <span className=" has-text-weight-bold home-title"><strong>Chamika<br />Madhushan</strong></span><br /><br />
        <span className="title">Information Systems Undergraduate</span> 
    </div>
    </div>
    <div className="column is-12 font is-size-3 ml-5">
        A First Year Undergraduate looking forward to revolute the industry.
    </div>
    </div>

  );
}

export default AboutMe;
