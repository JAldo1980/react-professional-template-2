import React from "react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <h2 className="logo-img-style"></h2>
        <div className="top-menu-links-container">
          <Link
            to="about" // Replace "about" with the actual ID of your About component
            smooth={true}
            duration={500}
          >
            <h4>About</h4>
          </Link>
          <Link
            to="results" // Replace "about" with the actual ID of your About component
            smooth={true}
            duration={500}
          >
            <h4>Results</h4>
          </Link>

          <Link
            to="benefits" // Replace "about" with the actual ID of your About component
            smooth={true}
            duration={500}
          >
            <h4>How I will help you</h4>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
