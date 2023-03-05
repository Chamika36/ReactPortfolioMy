import React from "react";

import img4 from "../../../src/assets/4.png";
import "./index.css";

function Certifications() {
  return (
    <div className="columns p-5 m-5">
      <div className="column is-6 is-align-self-center left-col content">
        <p className="sub-title">Certifications</p>
        <br />
        <p>
          <dl className="font is-size-4">
            <dt>
              <strong>2022 April</strong>
            </dt>
            <dd>
              Full Stack Developer
              <br />
              University of Moratuwa - CODL
            </dd>
            <dt>
              <strong>2022 August</strong>
            </dt>
            <dd>
              NDG Linux Essentials
              <br />
              Cisco Networking Academy
            </dd>
          </dl>
        </p>
      </div>

      <div className="column is-6 is-align-self-center has-text-centered">
        <img
          className=""
          // width="640"
          height="360"
          src={img4}
          width="70%"
        />
      </div>
    </div>
  );
}

export default Certifications;
