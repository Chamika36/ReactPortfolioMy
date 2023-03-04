import React from "react";
import img3 from "../../assets/3.jpg"

function Education() {
    return (
        <div className="columns p-6 m-5">
            <div className="column is-6 is-align-self-center has-text-centered pr-5">
                <figure><img src={img3} className="contact" width="640" height="360" /></figure>
            </div>

            <div className="column is-6 is-align-self-center left-col content mr-5">
                <p className="title sub-title">Education</p><br />
                <p>
                    <dl className="font is-size-5">
                        <dt><strong>2022 - Now</strong></dt>
                        <dd>BSc. in Information Systems Undergraduate
                            <br />University of Colombo School of Computing</dd>

                        <dt><strong>2020 GCE Advanced Level</strong></dt>
                        <dd>Physical Science - 1B and 2Cs
                            <br />R/B/Ananda Maithreya Central College</dd>

                        <dt><strong>2016 GCE Ordinary Level</strong></dt>
                        <dd>9 A's
                            <br />R/B/Ananda Maithreya Central College</dd>
                    </dl>
                </p>
            </div>
        </div>

    );
}

export default Education;