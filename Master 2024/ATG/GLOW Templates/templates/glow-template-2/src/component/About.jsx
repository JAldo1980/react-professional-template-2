import React from "react";
import { Link as ScrollLink } from "react-scroll";

function About() {
  return (
    <>
      <div className="about-container" id="about">
        <div className="top-block">
          <h2>About</h2>
          <p>
            Originating from the vibrant cityscape of New York and deeply rooted
            in the dynamic field of performance marketing, my journey has been
            marked by creativity and a relentless pursuit of excellence.
          </p>
          <p>
            My mission is crystal clear: to redefine the landscape of
            performance marketing by seamlessly blending data-driven insights
            with cutting-edge strategies.
          </p>
          <p>
            I am dedicated to propelling brands to new heights, reshaping market
            trajectories, and leaving an indelible mark on the world of digital
            marketing.
          </p>

          <p>
            My passion extends beyond individual success, focusing on fostering
            collaborative, high-performing teams.
          </p>
          <blockquote>
            <h4>
              <em>
                "I believe that true innovation arises from diverse perspectives
                working together towards a common goal."
              </em>
            </h4>
          </blockquote>
          <p>
            Embark on this journey with me, as we navigate the ever-evolving
            realm of performance marketing, shaping a future where brands thrive
            and make a lasting impact on their audiences.
          </p>
          <div className="button-container">
            <div className="button-container-inner">
              <ScrollLink
                activeClass="active"
                to="results"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Getting Results
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="bottom-block">
          <img
            src="woman-3.png"
            className="bottom-block-img"
            alt="professional woman sitting at her work desk"
          />
        </div>
      </div>
    </>
  );
}

export default About;
