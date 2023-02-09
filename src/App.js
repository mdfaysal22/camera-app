import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Camera } from "react-camera-pro";



function App() {
  const camera = useRef(null)
  const [image, setImage] = useState(null)
  return (
    <div>
       <Container>
       <Camera ref={camera} />
       </Container>
       <button onClick={() => {setImage(camera.current.takePhoto())}}>Take Photo</button>
       <img src={image} alt="Take Photos" />
    </div>
  );
}

export default App;
