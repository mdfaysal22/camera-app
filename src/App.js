import { Button, Container, Navbar } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import {BsImages} from 'react-icons/bs'
import {FiCamera} from 'react-icons/fi'
import './App.css';
import {  useRef, useState } from "react";
import { Camera } from "react-camera-pro";

function App() {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  const [hasPhoto, setHasPhoto] = useState(false)
  




  const handleTakePhoto = () => {
    setImage(camera.current.takePhoto())
    setHasPhoto(true);
    fetch("https://camera-server-mdfaysal22.vercel.app/photos", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(image)
    })
    .then( res => res.json())
    .then(result => console.log(result))

  }

  const handleRemovePhoto = () => {
    setHasPhoto(false);
  }
  
 

  return (
    <>
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
          <Camera className="camera-child" ref={camera}></Camera>
        </div>
        <div className={'result ' + (hasPhoto ? 'hasPhoto' : '')}>
          <img className="image" src={image} alt="" />
        </div>

      </div>
      <div className="footer">
    <div>
    <Container className="row mx-auto">
    <div className="fs-1 col">
      <Button variant="outline-dark"><BsImages></BsImages></Button>
      
    </div>
    <div className="col text-center fs-1">
      <Button onClick={handleTakePhoto} variant="outline-dark"><FiCamera></FiCamera></Button>
    </div>
    <div className="col">
      {/* <Button ref={photoRef} download>download</Button> */}
    </div>
    </Container>
    </div>
  </div>
    </div>
    
    
    </>
  );
}

export default App;