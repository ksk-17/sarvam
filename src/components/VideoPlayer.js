import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Pause, Play, ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import "./VideoPlayer.css";
import ImagePlayer from "./ImagePlayer.js";
import { formatTime } from "../util.js";

export default function VideoPlayer({
  playerRef,
  currentVideoIndex,
  items,
  setCurrentVideoIndex,
  totalVideoDuration,
  height, width
}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [completedVideosDuration, setCompletedVideosDuration] = useState(0);

  const handlePlay = () => {
    playerRef.current.getInternalPlayer().play();
  };

  const handlePause = () => {
    playerRef.current.getInternalPlayer().pause();
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < items.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <div className="video-viewer">
      {items[currentVideoIndex].type === "video" ? (
        <ReactPlayer
          url={`\\${items[currentVideoIndex].url}`}
          ref={playerRef}
          playing={true}
          progressInterval={10}
          onReady={() => {
            if(currentVideoIndex == 0){
              setCompletedVideosDuration(0);
            }
          }}
          onProgress={(progress) => {
            setCurrentTime(completedVideosDuration + progress.playedSeconds);
          }}
          onEnded={() => {
            setCompletedVideosDuration(
              completedVideosDuration + items[currentVideoIndex].duration
            );
            handleNextVideo();
          }}
          height={height}
          width={width}
        />
      ) : (
        <ImagePlayer
          item={items[currentVideoIndex]}
          onEnded={handleNextVideo}
          height={height}
          width={width}
        />
      )}
      {!!totalVideoDuration && (
        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(totalVideoDuration)}
        </div>
      )}
      <div className="video-controls">
        <ArrowLeftCircle
          className="control-icon"
          onClick={handlePreviousVideo}
        />
        <Pause className="control-icon" onClick={handlePause} />
        <Play className="control-icon" onClick={handlePlay} />
        <ArrowRightCircle className="control-icon" onClick={handleNextVideo} />
      </div>
    </div>
  );
}
