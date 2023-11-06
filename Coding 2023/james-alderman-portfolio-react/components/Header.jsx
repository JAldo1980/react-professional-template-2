import React from "react";
import Navbar from "/components/Navbar.jsx";

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="header-grid">
        <div className="header-left-col">
          <h1 id="home-anchor">
            Hi, my name is <span>James Alderman</span>
            Web Developer in Birmingham, UK
          </h1>

          <a href="#project-scroll">
            <button id="hero-btn">View My Work</button>
          </a>
        </div>
        <div className="header-right-col">
          <img
            className="james-alderman-img"
            src="public/james-alderman-img-removebg.png"
            alt="picture of James Alderman"
          />
        </div>
      </div>
    </header>
  );
}
