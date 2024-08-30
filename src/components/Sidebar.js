import React, { useState } from "react";
import "./Sidebar.css";
import { Button } from "react-bootstrap";
import { FolderPlus, Upload } from "react-feather";

export default function Sidebar({ ffmpeg, items, setItems }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const[loading, setLoading] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  const extractAudio = async (file) => {
    console.log("started extract audio")

    setLoading(true);
    setError(null);

    try {
      // Load the video file into ffmpeg.wasm
      ffmpeg.FS("writeFile", "input.mp4", file);

      // Run ffmpeg command to extract audio
      await ffmpeg.run(
        "-i",
        "input.mp4",
        "-q:a",
        "0",
        "-map",
        "a",
        "output.mp3"
      );

      // Read the output file from ffmpeg.wasm
      const data = ffmpeg.FS("readFile", "output.mp3");

      // Create a URL for the audio file
      const audioBlob = new Blob([data.buffer], { type: "audio/mp3" });
      const audioUrl = URL.createObjectURL(audioBlob);

      setAudioUrl(audioUrl);
    } catch (err) {
      setError("Failed to extract audio");
    } finally {
      setLoading(false);
      console.log("complete extract audio");
    }
  };

  const hadleUpload = (e) => {
    const fileUploaded = e.target.files[0];
    const name = fileUploaded.name;
    var duration = null;
    var type = null;
    setFile(fileUploaded);
    console.log("fileUploaded successfully");

    if (fileUploaded.type.startsWith("video/")) {
      type = "video";
      extractAudio(fileUploaded);
    } else {
      type = "photo";
      duration = 4;
    }

    console.log(name, type, duration, audioUrl);
  };

  return (
    <div className="sidebar-main">
      <div className="iconBar">
        <FolderPlus />
      </div>
      <div className="mediaBox">
        <Button>Upload Media</Button>
        <input type="file" accept="image/*,video/*" onChange={hadleUpload} />
        {audioUrl && (
          <div>
            <p>Audio extracted successfully!</p>
            <a href={audioUrl} download="output.mp3">
              Download Audio
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
