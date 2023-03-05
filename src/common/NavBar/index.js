import React from "react";
import "./index.css";

function NavBar() {
  return (
    <nav className="navbar font is-size-4" role="navigation" aria-label="main navigation" style={{backgroundColor: "#FFC961"}}>
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <strong>Chamika Madhushan</strong>
      </a>
  
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
  
      <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start" style={{ justifyContent: "center" , flexGrow: 1 }}>
        <a className="navbar-item">
          Home
        </a>
        
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              About
            </a>
    
            <div className="navbar-dropdown">
              <a className="navbar-item">
                Personal Details
              </a>
              <a className="navbar-item">
                Education
              </a>
              <a className="navbar-item">
                Certifications
              </a>
              <a className="navbar-item">
                Contact Me
              </a>
            </div>
          </div>

        <a className="navbar-item">
          Education
        </a>
  
        
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">

            <a className="">
                <i className="fa-brands fa-medium m-4"></i>
            </a>
            <a className="">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a>
                <i className="fa-brands fa-twitter m-4"></i>
            </a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;
