import React from "react";
import './index.css';
import img1 from "../../../src/assets/2.png";

function Personal() {
  return (
    <div className="columns p-5 m-5">

        <div className="column is-5 is-align-self-center left-col content">
            <p className="title sub-title">Personal Details</p><br />
            <p>
                <ul className="font is-size-5">
                    <li><strong>Name</strong> - Chamika Madhushan</li>
                    <li><strong>Date</strong> - 19th May, 2000 </li>
                    <li><strong>Address</strong> - Balangoda, Sri Lanka</li>
                    <li><strong>Email</strong> - chamikamadhushan35@gmail.com</li>
                </ul>    
            </p> 
        </div>

        <div className="column is-7 is-align-self-center has-text-centered">
            <img className="homeimage" src={img1} width="70%"/>
        </div>
      </div>
  );
}

export default Personal;
