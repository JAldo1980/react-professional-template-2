import React from "react";

function Endorsements() {
  return (
    <>
      <div className="endorsements-container">
        <h2>Happy People</h2>
        <div className="inner-endorsement-container">
          <div className="endorsement-1-box">
            <div className="endorsement-text-box">
              <h4>
                "Olivia's strategic prowess and unwavering commitment to success
                have been transformative for our brand. Her innovative approach
                has set new standards in performance marketing."
              </h4>
            </div>
            <div className="endorsement-image-box">
              <img className="avatar-img" src="avatar-2.png" alt="" />
              <p>- Mark Thompson, CEO of Digital Dynamics</p>
            </div>
          </div>
          <div className="endorsement-2-box">
            <div className="endorsement-text-box">
              <h4>
                "Working with Olivia was a game-changer for our company. Her
                dedication to excellence and creative mindset have significantly
                impacted our marketing outcomes."
              </h4>
            </div>
            <div className="endorsement-image-box">
              <img className="avatar-img" src="avatar-1.png" alt="" />
              <p>- Sarah Adams, CMO of Visionary Ventures</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Endorsements;
