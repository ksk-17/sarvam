import React, { useState, useEffect } from "react";

export default function ImagePlayer({ item, onEnded, height, width }) {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(false);
      onEnded();
    }, item.duration * 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return showComponent ? <img src={`\\${item.url}`} height={height} width={width} /> : null;
}
