import React, { useEffect, useRef, useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import Draggable from "react-draggable";
import VideoPlayer from "../components/VideoPlayer.js";
import EditorPanel from "../components/EditorPanel.js";
import Navbar from "../components/Sidebar.js";
import "./Editor.css";

export default function Editor() {
  const [ffmpeg, setFfmpeg] = useState(new FFmpeg());
  const [items, setItems] = useState([
    // {
    //   id: "1",
    //   type: "video",
    //   url: "video_1.mp4",
    //   title: "video_1.mp4",
    //   duration: 18,
    // },
    // {
    //   id: "2",
    //   type: "video",
    //   url: "video_2.mp4",
    //   title: "video_2.mp4",
    //   duration: 12,
    // },
    // { id: "3", type: "image", url: "logo512.png", title: "image", duration: 5 },
    // {
    //   id: "4",
    //   type: "video",
    //   url: "video_3.mp4",
    //   title: "video_3.mp4",
    //   duration: 13,
    // },
    // {
    //   id: "5",
    //   type: "video",
    //   url: "video_1.mp4",
    //   title: "video_4.mp4",
    //   duration: 18,
    // },
    // {
    //   id: "6",
    //   type: "video",
    //   url: "video_2.mp4",
    //   title: "video_5.mp4",
    //   duration: 12,
    // },
    // { id: "7", type: "image", url: "logo512.png", title: "image", duration: 5 },
    {
      id: "1",
      type: "video",
      url: "docker_video.mp4",
      title: "docker video",
      frames: [],
      transcript: "",
      duration: ""
    }
  ]);
  const playerRef = useRef(null);
  const [totalVideoDuration, setTotalVideoDuration] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const totalDuration = items.reduce(
      (accum, item) => accum + item.duration,
      0
    );
    setTotalVideoDuration(totalDuration);
  }, [items]);

  return (
    <div className="editor">
      <div className="navbar">
        <Navbar items={items} setItems={items}/>
      </div>
      <div className="main">
        <VideoPlayer
          playerRef={playerRef}
          currentVideoIndex={currentVideoIndex}
          items={items}
          setCurrentVideoIndex={setCurrentVideoIndex}
          totalVideoDuration={totalVideoDuration}
          height={420}
          width={746}
        />
        <EditorPanel
          items={items}
          totalVideoDuration={totalVideoDuration}
          setCurrentVideoIndex={setCurrentVideoIndex}
        />
      </div>
    </div>
  );
}
