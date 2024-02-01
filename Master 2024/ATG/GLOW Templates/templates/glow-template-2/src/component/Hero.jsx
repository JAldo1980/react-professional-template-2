import React from "react";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <header>
          <h1>
            Olivia <span>Wilson</span>
          </h1>
          <div className="inner-hero-container">
            <p>
              <strong>
                Performance Marketer | Elevating Brands and Driving Results.
              </strong>
            </p>
            <p className="lower-paragraph">
              <em>
                "Committed to crafting innovative marketing strategies that
                resonate with audiences."
              </em>
            </p>
          </div>
        </header>

        <div className="img-container"></div>
      </div>
    </>
  );
}

export default Hero;
