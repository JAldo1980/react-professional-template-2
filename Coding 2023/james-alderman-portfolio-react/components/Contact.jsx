import React from "react";

export default function Contact() {
  return (
    <div className="contact-container" id="contact-scroll">
      <h3>Contact Me</h3>
      <div className="social-icons">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/jamespalderman/" target="_blank">
            {" "}
            <img
              className="linkedin-icon"
              src="public/linkedin-icon_copy-removebg-preview.png"
              alt=""
            />
          </a>
        </div>
        <div className="email">
          <a href="mailto:james_codes@icloud.com" target="_blank">
            {" "}
            <img
              className="email-icon"
              src="public/email-icon-removebg-preview (1).png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
