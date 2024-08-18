import React, { useState } from "react";
import "./ZoomableScaleDiv.css";

const ZoomableScaleDiv = () => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale * 1.2); // Increase scale by 20%
  };

  const handleZoomOut = () => {
    setScale((prevScale) => prevScale / 1.2); // Decrease scale by 20%
  };

  return (
    <div>
      <div className="zoom-controls">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
      <div
        className="zoomable-div"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <div className="scale-content">Your content here</div>
      </div>
    </div>
  );
};

export default ZoomableScaleDiv;
