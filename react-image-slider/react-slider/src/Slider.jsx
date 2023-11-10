// Slider.jsx
import React from "react";

const Slider = ({ handleBackBtn, handleFwdBtn, image, imageData }) => {
  return (
    <div>
      <img
        className="image-size"
        src={imageData[image].image}
        alt={`Image ${image + 1}`}
      />
      <div className="button-el">
        <button onClick={handleBackBtn}>Backward</button>
        <button onClick={handleFwdBtn}>Forward</button>
      </div>
    </div>
  );
};

export default Slider;
