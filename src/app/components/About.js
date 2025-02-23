/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css"; // Import the CSS file

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="suspenseful-world1">
        <div
          className="text-content1"
          data-aos="zoom-in"
          data-aos-duration="90000"
          data-aos-easing="ease-in-out-cubic"
        >
          <h1>MLG Studio</h1>
          <hr></hr>
          <p>
            Moment Light Grit Studio (MLG Studio) a indie company handled by Mr.
            Gaurav Ghaghre. A company which dedicated to capture the beautiful
            moment through the lenses and put all in one place.
          </p>
          <p>
            Here all kind of shooting is done whether it is related to <br></br>
            WEDDING, CANDID, VIDEOGRAPHY, CINEMATOGRAPHY.
            <br></br>
          </p>

          <p>
            We ensure that all the moment should be captured in a perfect time
            so that if you wish to look photo again and again, You shouldn't be
            dissappointed.
          </p>
          <p></p>
          <p>
            If you wish to contact us, please go through all the social links
            given bottom of the page.
          </p>

          <hr></hr>
        </div>
      </div>
    </>
  );
};

export default About;
