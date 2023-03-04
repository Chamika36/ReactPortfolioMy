import React from "react";
import "./index.css";
import img5 from "../../../src/assets/5.png";

function Contact() {
  return (
    <div class="columns p-5 m-5">
    <div className="column is-6 is-align-self-center has-text-centered">
        <img className="homeimage contact" src={img5} width="70%" />
    </div>

    <div className="column is-6 is-align-self-center left-col content">
        <p className="sub-title">Contact</p><br />
        <p className="font is-size-5">
            
                Feel free to contact me.
                <br />Visit my profiles.
                <br />email - <a href="mailto:chamikamadhushan35@gmail.com">chamikamadhushan35@gmail.com</a>
                <br /><a href="https://www.linkedin.com/in/chamika-madhushan-472659200">linkedin/chamika36</a>
                <br /><a href="https://www.twitter.com/chamika36">twitter.com/chamika36</a>
                <br /><a href="https://www.facebook.com/chamika.madhushan.35">facebook.com/chamika.madhushan.35</a>
        </p> 
    </div>

  </div>
  );
}

export default Contact;
