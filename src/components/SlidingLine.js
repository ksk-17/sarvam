import React, { useState, useEffect } from "react";
import "./SlidingLine.css";

export default function SlidingLine({ duration }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = (Date.now() - startTime) / 1000;
      const newPosition = (elapsedTime / duration) * 100;

      if (elapsedTime <= duration) {
        setPosition(newPosition);
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [duration]);

  return <div className="sliding-line" style={{ left: `${position}%` }} />;
}
