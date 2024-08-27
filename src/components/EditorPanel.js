import React from "react";
import { ZoomIn, ZoomOut } from "react-feather";
import "./EditorPanel.css";
import SlidingLine from "./SlidingLine.js";
import {formatTime} from "../util.js";

export default function EditorPanel({
  items,
  totalVideoDuration,
  setCurrentVideoIndex,
}) {
  // const [zoomLevel, setZoomLevel] = React.useState(1);
  const [pxLength, setPxLength] = React.useState(1);
  // const scaleMap = { 0: 0.5, 1: 1, 2: 2, 3: 5, 4: 10, 5: 20, 6: 30 };

  // const handleZoomIn = () => {
  //   setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 1, 0));
  //   setPxLength(() => scaleMap[zoomLevel]);
  // };

  // const handleZoomOut = () => {
  //   setZoomLevel((prevZoomLevel) => Math.min(prevZoomLevel + 1, 6));
  //   setPxLength(() => scaleMap[zoomLevel]);
  // };

  return (
    <div className="editor-panel">
      {/* <div className="editor-controls">
        <div>{formatTime(totalVideoDuration)}</div>
        <div>
          <ZoomOut onClick={handleZoomOut} />
          {pxLength}
          <ZoomIn onClick={handleZoomIn} />
        </div>
      </div> */}
      <hr className="divider" />
      <div className="track-container">
        {/* <div className="vertical-lines-container">
          {Array.from({
            length: Math.max(Math.floor(totalVideoDuration / pxLength), 65),
          }).map((_, index) => (
            <div key={index} className="vertical-line">
              {index > 0 && index % 5 == 0 && index * pxLength}
            </div>
          ))}
        </div> */}
        {/* <SlidingLine duration={totalVideoDuration} /> */}
        <div className="track">
          {items.map((item, index) => (
            <div
              className="track-item"
              key={item.id}
              style={{ width: `${(item.duration) * 50}px` }}
              onClick={() => setCurrentVideoIndex(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="track">Add audio</div>
      </div>
    </div>
  );
}
