// App.jsx
import { useState } from "react";
import Slider from "./Slider";
import imageData from "./ImageData"; // Import as named import
import "./App.css";

function App() {
  const [image, setImageState] = useState(0);

  function handleBackBtn() {
    setImageState(
      (prevImage) => (prevImage - 1 + imageData.length) % imageData.length
    );
    console.log("click BACK");
  }

  function handleFwdBtn() {
    setImageState((prevImage) => (prevImage + 1) % imageData.length);
    console.log("click FORWARD");
  }

  return (
    <>
      <h1>Image Slider</h1>
      <Slider
        handleBackBtn={handleBackBtn}
        handleFwdBtn={handleFwdBtn}
        image={image}
        imageData={imageData} // Pass the imageData as a prop
      />
    </>
  );
}

export default App;
