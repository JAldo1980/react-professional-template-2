import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <a href="#">
          <img src="twitter.png" className="social-icon" alt="x icon" />
        </a>

        <a href="#">
          <img src="linkedin.png" className="social-icon" alt="linkedin icon" />
        </a>

        <a href="#">
          <img
            src="instagram.png"
            className="social-icon"
            alt="instagram icon"
          />
        </a>

        <a href="#">
          <img src="tiktok.png" className="social-icon" alt="tiktok icon" />
        </a>
      </div>
      <div className="footer-text">
        <p>Olivia Wilson | Rights Reserved 2024</p>
      </div>
    </>
  );
}

export default Footer;
