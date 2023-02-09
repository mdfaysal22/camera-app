import { Button, Container, Navbar } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import {BsImages} from 'react-icons/bs'
import {FiCamera} from 'react-icons/fi'
import './App.css';
import { useEffect, useRef, useState } from "react";

function App() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false)
  console.log(photoRef)

  const getVideo = () => {
    navigator.mediaDevices
    .getUserMedia({
      video: {width: 1920, height: 1080}
    })
    .then(stream => {
      let video = videoRef.current;
      video.srcObject = stream;
      video.play()
    })
    .catch(err => {
      console.error(err);
    })
  }

  useEffect(() => {
    getVideo()
  }, [videoRef])

  const handleTakePhoto = () => {
    const width = 414;
    const height = width / (16/9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height)
    setHasPhoto(true);

  }
  const handleRemovePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');
    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);

  }

  return (
    <div className="app">
      <Navbar>
        <Container>
          <Navbar.Brand>My-Camera-app</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button onClick={handleRemovePhoto} variant="outline-dark">
                <IoIosArrowBack></IoIosArrowBack>
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-sm mx-auto camera-container">
        <div className="camera">
          <video ref={videoRef}></video>
        </div>
        <div className={'result ' + (hasPhoto ? 'hasPhoto' : '')}>
          <canvas ref={photoRef}></canvas>
        </div>

      </div>
      <div>
        <Container className="row mx-auto">
        <div className="fs-1 col">
          <Button variant="outline-dark"><BsImages></BsImages></Button>
          <img src="" alt="" />
        </div>
        <div className="col text-center fs-1">
          <Button onClick={handleTakePhoto} variant="outline-dark"><FiCamera></FiCamera></Button>
        </div>
        <div className="col"></div>
        </Container>
      </div>
    </div>
  );
}

export default App;