import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { Pause, Play, ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import ZoomableScaleDiv from "./components/ZoomableScaleDiv"

function App() {
  const [ffmpeg, setFfmpeg] = useState(null);
  const [items, setItems] = useState([
    { id: "1", url: "video_1.mp4", title: "video_1.mp4" },
    { id: "2", url: "video_2.mp4", title: "video_2.mp4" },
    { id: "3", url: "video_3.mp4", title: "video_3.mp4" },
  ]);
  const playerRef = useRef(null);
  const [totalVideoDuration, setTotalVideoDuration] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    setFfmpeg(new FFmpeg());
  }, []);

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

  const handleConcat = () => {
    
  }

  return (
    <div className="App">
      <Row className="header">
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Chuppi</Navbar.Brand>
          </Container>
        </Navbar>
      </Row>
      <Row className="h-100">
        <Col xs={2} className="bg-light">
          Sidebar
        </Col>
        <Col className="main">
          <div className="video-viewer">
            <ReactPlayer
              url={items[currentVideoIndex].url}
              ref={playerRef}
              playing={true}
              onEnded={handleNextVideo}
            />
            <div className="video-controls">
              <ArrowLeftCircle onClick={handlePreviousVideo} />
              <Pause onClick={handlePause} />
              <Play onClick={handlePlay} />
              <ArrowRightCircle onClick={handleNextVideo} />
              <Button className="mx-4" onClick={handleConcat}>Download</Button>
            </div>
          </div>
          <div className="editor-panel">
            <div className="track">
              {items.map((item, index) => (
                <div
                  className="track-item"
                  key={item.id}
                  onClick={() => setCurrentVideoIndex(index)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="track">Add audio</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
