import React from "react";
import "./styles.css";
import homeImage from "../../../assets/images/dev.svg";
import Particles from "react-particles-js";
import TextLoop from "react-text-loop";

const PageIntro = ({ reff }) => {
  return (
    <section ref={reff}>
     <div className="slider-four">
      <div className="shane_tm_hero" id="home" data-style="one">
        <div className="frame-layout__particles">
          <Particles
            params={{
              particles: {
                number: {
                  value: 30,
                },
                size: {
                  value: 6,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/slider/3.jpg"
              })`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                  Bostami
                  <br />
                </span>{" "}
                <TextLoop>
                  <span className="loop-text">Web Developer</span>
                  <span className="loop-text"> UI/UX Designer.</span>
                  <span className="loop-text"> Content Creator.</span>
                </TextLoop>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                based in USA.
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
            <a
              href="#portfolio"
              className="white-fill-bg btn-outline btn-medium"
            >
              SEE PORTFOLIO
              <span className="overlay_effect"></span>
            </a>
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
    </section>
  );
};

export default PageIntro;
